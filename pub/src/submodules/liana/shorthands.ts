import * as pd from 'pareto-core-data'
import * as pl from 'pareto-core-lib'

import * as mcommon from 'glo-pareto-common'

import * as mglo from "./api/glossary";

type RawDictionary<T> = { [key: string]: T }

function r_imp(name: string, annotation: pd.SourceLocation): mcommon.T.AnnotatedKey<pd.SourceLocation> {
    return {
        key: name,
        annotation: annotation
    }
}

function d_imp<T>($: RawDictionary<T>, annotation: pd.SourceLocation): mcommon.T.AnnotatedDictionary<pd.SourceLocation, T> {
    return {
        'annotation': annotation,
        'dictionary': pd.d($),
    }
}

function d_mappedimp<T, RT>($: RawDictionary<T>, annotation: pd.SourceLocation, cb: ($: T) => RT): mcommon.T.AnnotatedDictionary<pd.SourceLocation, RT> {
    return {
        'annotation': annotation,
        'dictionary': pd.d($).map(cb),
    }
}

export function d<T>($: RawDictionary<T>) {
    const li = pd.getLocationInfo(1)
    return d_imp($, li)
}

export function r(name: string): mcommon.T.AnnotatedKey<pd.SourceLocation> {
    const li = pd.getLocationInfo(1)
    return r_imp(name, li)
}

export function array(type:mglo.T.LocalType<pd.SourceLocation>):mglo.T.LocalType<pd.SourceLocation> {
    return ['array', {
        'type': type
    }]
}

function constrainedString($: ReferenceType, steps: Step[], annotation: pd.SourceLocation):mglo.T.String<pd.SourceLocation> {
    return {
        'constrained': ['yes', referenceX($, steps, annotation)],
    }
}

export function constrainedDictionary($: ReferenceType, steps: Step[], type:mglo.T.LocalType<pd.SourceLocation>):mglo.T.LocalType<pd.SourceLocation> {
    const li = pd.getLocationInfo(1)
    return ['dictionary', {
        // 'annotation': li,
        'key': constrainedString($, steps, li),
        'type': type
    }]
}

export function dictionary(type:mglo.T.LocalType<pd.SourceLocation>):mglo.T.LocalType<pd.SourceLocation> {
    const li = pd.getLocationInfo(1)

    return ['dictionary', {
        // 'annotation': li,
        'key': {
            'constrained': ['no', {
                'type': r_imp("identifier", li)
            }]
        },
        'type': type
    }]
}

export function globalType(parameters: RawDictionary<string>, type:mglo.T.LocalType<pd.SourceLocation>):mglo.T.GlobalType<pd.SourceLocation> {
    const li = pd.getLocationInfo(1)
    return {
        'type': type,
        'parameters': d_mappedimp(parameters, li, ($) => {
            return r_imp($, li)
        })
    }
}

export function group(properties: RawDictionary<[string[],mglo.T.LocalType<pd.SourceLocation>]>):mglo.T.LocalType<pd.SourceLocation> {
    const li = pd.getLocationInfo(1)
    return ['group', {
        'properties': d_mappedimp(properties, li, ($) => {
            const temp: RawDictionary<null> = {}
            pd.a($[0]).__forEach(($) => {
                temp[$] = null
            })
            return {
                'sibling dependencies': d_imp(temp, li),
                'type': $[1],
            }
        })
    }]
}

export function taggedUnion(options: RawDictionary<mglo.T.LocalType<pd.SourceLocation>>):mglo.T.LocalType<pd.SourceLocation> {
    const li = pd.getLocationInfo(1)
    let firstKey: null | string = null
    pd.d(options).__mapWithKey(($, key) => {
        if (firstKey === null) {
            firstKey = key
        }
    })
    if (firstKey === null) {
        firstKey = "--NO OPTIONS--"
    }
    return pl.cc(firstKey, ($) => {

        return ['taggedUnion', {
            'options': d_mappedimp(options, li, ($) => {
                return $
            }),
            'default': {
                'key': $,
                'annotation': li
            }
        }]
    })
}

export function string(type: string):mglo.T.LocalType<pd.SourceLocation> {
    const li = pd.getLocationInfo(1)
    return ['string', {
        'constrained': ['no', {
            'type': r_imp(type, li),
        }],
    }]
}

export function boolean():mglo.T.LocalType<pd.SourceLocation> {
    return ['boolean', {}]
}

export type ReferenceType =
    | ['sibling', string]
    | ['parent', null]
    | ['parameter', string]
    | ['self', null]

export type Step =
    | ['group', string]
    | ['tagged union', string]
    | ['reference', null]
    | ['array', null]

function referenceX($: ReferenceType, steps: Step[], annotation: pd.SourceLocation):mglo.T.Reference<pd.SourceLocation> {
    return {
        'type': pl.cc($, ($) => {
            switch ($[0]) {
                case 'parameter':
                    return pl.cc($[1], ($) => {
                        return ['parameter', r_imp($, annotation)]
                    })
                case 'parent':
                    return pl.cc($[1], ($) => {
                        return ['other', {}]
                    })
                case 'self':
                    return pl.cc($[1], ($) => {
                        return ['other', {}]
                    })
                case 'sibling':
                    return pl.cc($[1], ($) => {
                        return ['sibling', r_imp($, annotation)]
                    })
                default: return pl.au($[0])
            }
        }),
        'steps': pd.a(steps).map(($) => {
            switch ($[0]) {
                case 'array':
                    return pl.cc($[1], ($) => {
                        return ['array', {}]
                    })
                case 'group':
                    return pl.cc($[1], ($) => {
                        return ['group', r_imp($, annotation)]
                    })
                case 'reference':
                    return pl.cc($[1], ($) => {
                        return ['reference', {}]
                    })
                case 'tagged union':
                    return pl.cc($[1], ($) => {
                        return ['tagged union', r_imp($, annotation)]
                    })
                default: return pl.au($[0])
            }
        }),
    }

}

export function reference(
    type: ReferenceType,
    steps: Step[],
):mglo.T.LocalType<pd.SourceLocation> {
    const li = pd.getLocationInfo(1)
    return ['string', {
        'constrained': ['yes', referenceX(type, steps, li)],
    }]
}

export function component(type: string, args: RawDictionary<null>):mglo.T.LocalType<pd.SourceLocation> {
    const li = pd.getLocationInfo(1)
    return ['component', {
        'type': {
            'key': type,
            'annotation': li
        },
        'arguments': d_imp(args, li)
    }]
}