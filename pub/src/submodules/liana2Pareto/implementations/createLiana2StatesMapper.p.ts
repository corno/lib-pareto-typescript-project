import * as pt from 'pareto-core-types'
import * as pl from 'pareto-core-lib'

import * as mapi from "../api"
import * as malgorithm from "../../algorithm"
import * as mliana from "../../liana"

function getEntry<T, RT>(
    dictionary: pt.Dictionary<T>,
    key: string,
    exists: ($: T) => RT,
    notExists: () => RT
): RT {
    let entry: T | undefined = undefined
    dictionary.__mapWithKey(($, thisKey) => {
        if (thisKey === key) {
            entry = $
        }
    })
    if (entry !== undefined) {
        return exists(entry)
    } else {
        return notExists()
    }
}

export const $$: mapi.CcreateLiana2StatesMapper = ($d) => {
    return <Annotation>($: mapi.T.MappedModel<Annotation>) => {
        const stringMapping = $.stringmapping
        return $.model.globalTypes.dictionary.map(($) => {
            function mapType($: mliana.T.LocalType<Annotation>): malgorithm.T.Type<Annotation> {
                switch ($[0]) {
                    case 'array':
                        return pl.cc($[1], ($) => {
                            return ['array', mapType($.type)]
                        })
                    case 'optional':
                        return pl.cc($[1], ($) => {
                            return ['optional', mapType($.type)]
                        })
                    case 'boolean':
                        return pl.cc($[1], ($) => {
                            return ['boolean', {}]
                        })
                    case 'component':
                        return pl.cc($[1], ($) => {
                            return ['reference', $.type.key]
                        })
                    case 'dictionary':
                        return pl.cc($[1], ($) => {
                            return ['dictionary', mapType($.type)]
                        })
                    case 'group':
                        return pl.cc($[1], ($) => {
                            return ['group', $.properties.dictionary.map(($) => {
                                return {
                                    'type': mapType($.type),
                                }
                            })]
                        })
                    case 'string':
                        return pl.cc($[1], ($) => {
                            switch ($.constrained[0]) {
                                case 'no':
                                    return pl.cc($.constrained[1], ($) => {
                                        return getEntry(
                                            stringMapping, $.type.key,
                                            ($) => {
                                                switch ($[0]) {
                                                    case 'number':
                                                        return pl.cc($[1], ($) => {
                                                            return ['number', {}]
                                                        })
                                                    case 'string':
                                                        return pl.cc($[1], ($) => {
                                                            return ['string', {}]
                                                        })
                                                    default: return pl.au($[0])
                                                }
                                            },
                                            () => {
                                                pl.panic(`MISSING STRING MAPPING: ${$.type}`)
                                            }
                                        )
                                    })
                                case 'yes':
                                    return pl.cc($.constrained[1], ($) => {
                                        return ['string', {}]

                                        // return ['template', {
                                        //     'template': "Reference",
                                        //     'context': ['local', null],
                                        //     'arguments': d({
                                        //         "RererencedType": ref("FIXMEFIXMEFIXME")
                                        //     }),
                                        // }]
                                    })
                                default: return pl.au($.constrained[0])
                            }
                        })
                    case 'taggedUnion':
                        return pl.cc($[1], ($) => {
                            return ['taggedUnion', $.options.dictionary.map(($) => {
                                return mapType($)
                            })]
                        })
                    default: return pl.au($[0])
                }

            }
            return mapType($.type)
        })
    }
}