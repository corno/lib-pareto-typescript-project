import * as pl from 'pareto-core-lib'
import * as pr from 'pareto-core-raw'

import * as api from "../api"

import {
} from "../../glossary/api/shorthands.p"

import * as malgorithm from "../../algorithm"
import * as mglossary from "../../glossary"
import * as mmoduleDefinition from "../../moduleDefinition"
import * as mliana from "../../liana"


const d = pr.wrapRawDictionary
const a = pr.wrapRawArray


export const $$: api.CcreateLiana2StatesMapper = ($d) => {
    return ($) => {
        const stringMapping = $.stringmapping
        return $.model.globalTypes.dictionary.map(($) => {
            function mapType($: mliana.TLocalType): malgorithm.TType {
                switch ($[0]) {
                    case 'array':
                        return pl.cc($[1], ($) => {
                            return ['array', mapType($.type)]
                        })
                    case 'boolean':
                        return pl.cc($[1], ($) => {
                            return ['boolean', {}]
                        })
                    case 'component':
                        return pl.cc($[1], ($) => {
                            return ['reference', $.type.name]
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
                                        return pr.getEntry(
                                            stringMapping, $.type.name,
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
                                return mapType($.type)
                            })]
                        })
                    default: return pl.au($[0])
                }

            }
            return mapType($.type)
        })
    }
}