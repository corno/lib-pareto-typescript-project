import * as pt from 'pareto-core-types'
import * as pl from 'pareto-core-lib'
import * as pd from 'pareto-core-data'
import * as ps from 'pareto-core-state'

import * as api from "../api"

import * as malgorithm from "../../algorithm"
import * as mproject from "../../project"
import * as mglossary from "../../glossary"
import * as mmoduleDefinition from "../../moduleDefinition"
import * as mliana from "../../liana"
import { data, func, interfaceReference } from '../../glossary/shorthands'

function getEntry<T, RT>(
    dictionary: pt.Dictionary<T>,
    key: string,
    exists: ($: T) => RT,
    notExists: () => RT
): RT {
    let entry: T | undefined = undefined
    dictionary.map(($, thisKey) => {
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

export const $$: api.CcreateLiana2ParetoMapper = ($d) => {
    return ($) => {
        const model = $.model
        const stringMapping = $.stringmapping
        // function ref(type: string): mglossary.T.Type {
        //     return ['reference', {
        //         'context': ['local', {}],
        //         'type': {
        //             'annotation': "SSDF",
        //             'name': type
        //         },
        //     }]
        // }
        function typeReference(type: string): mglossary.T.TypeReference<string> {
            return {
                'context': ['local', {}],
                'type': type,
                // 'type': {
                //     'annotation': "SSDF",
                //     'name': type
                // },
                'arguments': pd.wrapRawDictionary({}),
            }
        }

        // function generateBlock($: mliana.T.LocalType): malgorithm.TFunctionBlock {
        //     return {
        //         'returnExpression': generateExpression($)
        //     }
        // }
        // function generateExpression($: mliana.T.LocalType): malgorithm.TExpression {
        //     switch ($[0]) {
        //         case 'array':
        //             return pl.cc($[1], ($) => {
        //                 return ['mapArray', {
        //                     'block': generateBlock($.type),
        //                 }]
        //             })
        //         case 'boolean':
        //             return pl.cc($[1], ($) => {
        //                 return ['implementMe', "liana2Pareto"]
        //             })
        //         case 'component':
        //             return pl.cc($[1], ($) => {
        //                 return ['call', {
        //                     'function': $.type.name
        //                 }]
        //             })
        //         case 'dictionary':
        //             return pl.cc($[1], ($) => {
        //                 return ['mapDictionary', {
        //                     'block': generateBlock($.type),
        //                 }]
        //             })
        //         case 'group':
        //             return pl.cc($[1], ($) => {
        //                 return ['groupInitializer', {
        //                     'properties': $.properties.dictionary.map(($) => {
        //                         return generateExpression($.type)
        //                     })
        //                 }]
        //             })
        //         case 'string':
        //             return pl.cc($[1], ($) => {
        //                 return ['implementMe', "liana2Pareto"]
        //             })
        //         case 'taggedUnion':
        //             return pl.cc($[1], ($) => {
        //                 return ['switch', {
        //                     'cases': $.options.dictionary.map(($) => {
        //                         return generateBlock($.type)
        //                     })
        //                 }]
        //             })
        //         default: return pl.au($[0])
        //     }
        // }
        function createTypes($: {
            optional: boolean,
            model: mliana.T.Model
        }): mglossary.T.Glossary.types<string> {
            const optional = $.optional
            return model.globalTypes.dictionary.map(($) => {
                function mapType($: mliana.T.LocalType): mglossary.T.Type<string> {
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
                                return ['reference', {
                                    'context': ['local', {}],
                                    'type': $.type.name,
                                    'arguments': pd.wrapRawDictionary({}),
                                    // 'type': {
                                    //     'annotation': "XXX",
                                    //     'name': $.type.name,
                                    // },
                                }]
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
                                        'optional': optional,
                                    }
                                })]
                            })
                        case 'string':
                            return pl.cc($[1], ($) => {
                                switch ($.constrained[0]) {
                                    case 'no':
                                        return pl.cc($.constrained[1], ($) => {
                                            return getEntry(
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
                                        return pl.cc($.constrained[1], ($): mglossary.T.Type<string> => {
                                            return ['reference', {
                                                'context': ['import', {
                                                    'glossary': "common",
                                                    'arguments': pd.wrapRawDictionary({}),
                                                }],
                                                'type': "Reference",
                                                'arguments': pd.wrapRawDictionary({
                                                    //"ReferencedType": <mglossary.GTypeReference>['null', {}], //FIXME
                                                }),
                                            }]
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
                return {
                    'parameters': pd.wrapRawDictionary({}),
                    'type': mapType($.type),
                }
            })
        }
        return {
            'modules': pd.wrapRawDictionary({
                "resolved": {
                    'definition': <mmoduleDefinition.T.ModuleDefinition>{
                        'glossary': <mglossary.T.Glossary<string>>{
                            'imports': pd.wrapRawDictionary({
                                "fp": "lib-fountain-pen",
                            }),
                            'parameters': pd.wrapRawDictionary({
                                "Annotation": {},
                            }),
                            // 'templates': pd.wrapRawDictionary<mglossary.GGlossary.Ptemplates.D>({
                            //     "Reference": {
                            //         'parameters': pd.wrapRawDictionary({
                            //             "ReferencedType": {},
                            //         }),
                            //         'type': <mglossary.GType>['group', pd.wrapRawDictionary({})],
                            //     }
                            // }),
                            'types': createTypes({
                                'model': $.model,
                                'optional': false,
                            }),
                            'interfaces': pd.wrapRawDictionary({}),
                            'functions': pd.wrapRawDictionary({
                                "Enrich": func(typeReference("Root"), null, null, data(typeReference("Root"), false)),
                                "Serialize": func(typeReference("Root"), null, interfaceReference("fp", "Line"), null),
                            }),
                        },
                        'api': {
                            'imports': pd.wrapRawDictionary({
                                "common": "glo-pareto-common",
                            }),
                            'algorithms': pd.wrapRawDictionary<mmoduleDefinition.T.ModuleDefinition.api.algorithms.D>({
                                "createSerializer": {
                                    'definition': {
                                        'function': "Serialize"
                                    },
                                    'type': ['constructor', {
                                        'configuration data': [false],
                                        'dependencies': pd.wrapRawDictionary({
                                        })
                                    }]
                                },
                                "createEnricher": {
                                    'definition': {
                                        'function': "Enrich"
                                    },
                                    'type': ['constructor', {
                                        'configuration data': [false],
                                        'dependencies': pd.wrapRawDictionary({
                                        })
                                    }]
                                },
                            })
                        },
                    },
                    'implementation': <malgorithm.T.Implementation>{
                        'implementations': pd.wrapRawDictionary({
                            // "createSerializer": {
                            //     'constructor': true,
                            //     'type': ['function', {
                            //         'block': <malgorithm.TFunctionBlock>{
                            //             'innerFunctions': $.globalTypes.map(($, key) => {
                            //                 return {
                            //                     'definition': {
                            //                         'data': namespacedTypeReference(["unresolved"], key),
                            //                         'return value': namespacedTypeReference(["resolved"], key),
                            //                     },
                            //                     'block': generateBlock($.type)
                            //                 }
                            //             }),
                            //             'returnExpression': ['switch', {
                            //                 'cases': d({}),
                            //             }]
                            //         }
                            //     }]
                            // },
                            // "createEnricher": {
                            //     'constructor': true,
                            //     'type': ['function', {
                            //         'block': <malgorithm.TFunctionBlock>{
                            //             'innerFunctions': $d.decorateDictionaryEntriesWithKey($.model.globalTypes.dictionary).map(($) => {
                            //                 return {
                            //                     'definition': {
                            //                         'data': typeReference($.key),
                            //                         'return value': {
                            //                             'context': ['import', "resolved"],
                            //                             'type': $.key,
                            //                         },
                            //                     },
                            //                     'block': generateBlock($.value.type)
                            //                 }
                            //             }),
                            //             'returnExpression': ['switch', {
                            //                 'cases': pd.wrapRawDictionary({}),
                            //             }]
                            //         }
                            //     }]
                            // }
                        }),
                    },
                },
                "unresolved": {
                    'definition': <mmoduleDefinition.T.ModuleDefinition>{
                        'glossary': <mglossary.T.Glossary<string>>{
                            'imports': pd.wrapRawDictionary({
                                // "fp": {
                                //     'name': "lib-fountain-pen",
                                //     'annotation': "FFF",
                                // },
                                "fp": "lib-fountain-pen",
                            }),
                            'parameters': pd.wrapRawDictionary({
                                "Annotation": {},
                            }),
                            'templates': pd.wrapRawDictionary({
                                "Reference": {
                                    'parameters': pd.wrapRawDictionary({
                                        "ReferencedType": {},
                                    }),
                                    'type': <mglossary.T.Type<string>>['group', pd.wrapRawDictionary({
                                        "annotation": {
                                            'type': ['string', {}],
                                        },
                                        "name": {
                                            'type': ['string', {}],
                                        },
                                    })],
                                }
                            }),
                            'types': createTypes({
                                'model': $.model,
                                'optional': false,
                            }),
                            'interfaces': pd.wrapRawDictionary({}),
                            'functions': pd.wrapRawDictionary({
                                "Serialize": {
                                    'return type': ['nothing', {}],
                                    'data': typeReference($.model.root.name), //unresolved
                                    'managed input interface': ['not set', {}],
                                    'output interface': ['set', {
                                        'context': ['import', {
                                            'glossary': "fp",
                                            'arguments': pd.wrapRawDictionary({}),
                                        }],
                                        'interface': "Line"
                                        // 'context': ['import', {
                                        //     'name': "fp",
                                        //     'annotation': "FFF",
                                        // }],
                                        // 'interface': {
                                        //     'name': "Line",
                                        //     'annotation': "FFF",
                                        // }
                                    }],
                                },
                            }),
                        },
                        'api': {
                            'imports': pd.wrapRawDictionary({
                                "foreach": "res-pareto-foreach",
                            }),
                            'algorithms': pd.wrapRawDictionary({
                                "createSerializer": {
                                    'definition': {
                                        'context': ['local', {}],
                                        'function': "Serialize"
                                    },
                                    'type': ['constructor', {
                                        'configuration data': [false],
                                        'dependencies': pd.wrapRawDictionary({
                                            "arrayForEach": {
                                                'context': ['import', {
                                                    'glossary': "foreach",
                                                    'arguments': pd.wrapRawDictionary({}),
                                                }],
                                                'function': "ArrayForEach",
                                            },
                                            "dictionaryForEach": {
                                                'context': ['import', {
                                                    'glossary': "foreach",
                                                    'arguments': pd.wrapRawDictionary({}),
                                                }],
                                                'function': "DictionaryForEach",
                                            },
                                            "enrichedArrayForEach": {
                                                'context': ['import', {
                                                    'glossary': "foreach",
                                                    'arguments': pd.wrapRawDictionary({}),
                                                }],
                                                'function': "EnrichedArrayForEach",
                                            },
                                            "enrichedDictionaryForEach": {
                                                'context': ['import', {
                                                    'glossary': "foreach",
                                                    'arguments': pd.wrapRawDictionary({}),
                                                }],
                                                'function': "EnrichedDictionaryForEach",
                                            },
                                        })
                                    }]
                                },
                            })
                        },
                    },
                    'implementation': <malgorithm.T.Implementation>{
                        'implementations': pd.wrapRawDictionary<malgorithm.T.Implementation.implementations.D>({
                            // "createSerializer": {
                            //     'type': ['procedure', {
                            //         'block': {
                            //             'innerFunctions': $.model.globalTypes.dictionary.map(($) => {
                            //                 function doType($: mliana.T.LocalType): malgorithm.GProcedureBlock.Pstatements {
                            //                     const builder = ps.createArrayBuilder<malgorithm.GProcedureBlock.Pstatements.A>()
                            //                     function snippet($: string) {

                            //                         builder.push(<malgorithm.GProcedureBlock.Pstatements.A>['interfaceCall', {
                            //                             'child path': pr.wrapRawArray(["snippet"]),
                            //                             //'property': pr.wrapRawArray([]),
                            //                             'data': ['set',  ['string literal', $]],
                            //                             'callback': ['not set', {}],
                            //                         }])
                            //                     }
                            //                     function indent($i: () => malgorithm.GProcedureBlock) {
                            //                         // builder.push(<malgorithm.GProcedureBlock.Pstatements.A>['interfaceCall', {
                            //                         //     'child path': pr.wrapRawArray(["snippet"]),
                            //                         //     //'property': pr.wrapRawArray([]),
                            //                         //     'data': ['set',  ['string literal', $]],
                            //                         //     'callback': ['not set', {}],
                            //                         // }])

                            //                     }
                            //                     switch ($[0]) {
                            //                         case 'array':
                            //                             pl.cc($[1], ($) => {
                            //                                 snippet("ARRAY")
                            //                             })
                            //                             break
                            //                         case 'boolean':
                            //                             pl.cc($[1], ($) => {
                            //                                 snippet("BOOLEAN")

                            //                             })
                            //                             break
                            //                         case 'component':
                            //                             pl.cc($[1], ($) => {
                            //                                 snippet("COMPONENT")

                            //                             })
                            //                             break
                            //                         case 'dictionary':
                            //                             pl.cc($[1], ($) => {
                            //                                 snippet("DICTIONARY")

                            //                             })
                            //                             break
                            //                         case 'group':
                            //                             pl.cc($[1], ($) => {
                            //                                 // snippet("{")
                            //                                 // indent(($) => {

                            //                                 // })
                            //                                 // snippet("}")
                            //                                 // $.

                            //                             })
                            //                             break
                            //                         case 'string':
                            //                             pl.cc($[1], ($) => {
                            //                                 snippet("STRING")

                            //                             })
                            //                             break
                            //                         case 'taggedUnion':
                            //                             pl.cc($[1], ($) => {
                            //                                 snippet("TAGGEDUNION")

                            //                             })
                            //                             break
                            //                         default: pl.au($[0])
                            //                     }
                            //                     return builder.getArray()
                            //                 }

                            //                 return <malgorithm.GProcedureBlock.PinnerFunctions.D>{
                            //                     'type': ['procedure', {
                            //                         'block': {
                            //                             'innerFunctions': pd.wrapRawDictionary({}),
                            //                             'statements': doType($.type),
                            //                         },
                            //                     }]
                            //                 }
                            //             }),
                            //             'statements': pr.wrapRawArray([

                            //             ])
                            //         }
                            //     }],
                            //     'constructor': true,
                            // }
                        })
                    },
                },
                "sparse": {
                    'definition': <mmoduleDefinition.T.ModuleDefinition>{
                        'glossary': <mglossary.T.Glossary<string>>{
                            'imports': pd.wrapRawDictionary({
                                "fp": "lib-fountain-pen",
                            }),
                            'parameters': pd.wrapRawDictionary({
                                "Annotation": {},
                            }),
                            'templates': pd.wrapRawDictionary({}),
                            'types': createTypes({
                                'model': $.model,
                                'optional': true,
                            }),
                            'interfaces': pd.wrapRawDictionary({}),
                            'functions': pd.wrapRawDictionary({
                            }),
                        },
                        'api': {
                            'imports': pd.wrapRawDictionary({
                                "common": "glo-pareto-common",
                            }),
                            'algorithms': pd.wrapRawDictionary({
                            })
                        },
                    },
                    'implementation': <malgorithm.T.Implementation>{
                        'implementations': pd.wrapRawDictionary({
                        }),
                    },
                },
            })
        }
    }
}