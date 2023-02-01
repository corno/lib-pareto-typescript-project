import * as pl from 'pareto-core-lib'
import * as pr from 'pareto-core-raw'
import * as ps from 'pareto-core-state'

import * as api from "../api"

import * as malgorithm from "../../algorithm"
import * as mproject from "../../project"
import * as mglossary from "../../glossary"
import * as mmoduleDefinition from "../../moduleDefinition"
import * as mliana from "../../liana"
import { data, func, interfaceReference } from '../../glossary/shorthands.p'

export const $$: api.CcreateLiana2ParetoMapper = ($d) => {
    return ($) => {
        const model = $.model
        const stringMapping = $.stringmapping
        // function ref(type: string): mglossary.TType {
        //     return ['reference', {
        //         'context': ['local', {}],
        //         'type': {
        //             'annotation': "SSDF",
        //             'name': type
        //         },
        //     }]
        // }
        function typeReference(type: string): mglossary.TTypeReference {
            return {
                'context': ['local', {}],
                'type': type,
                // 'type': {
                //     'annotation': "SSDF",
                //     'name': type
                // },
            }
        }

        // function generateBlock($: mliana.TLocalType): malgorithm.TFunctionBlock {
        //     return {
        //         'returnExpression': generateExpression($)
        //     }
        // }
        // function generateExpression($: mliana.TLocalType): malgorithm.TExpression {
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
            model: mliana.TModel
        }): mglossary.GGlossary.Ptypes {
            const optional = $.optional
            return model.globalTypes.dictionary.map(($) => {
                function mapType($: mliana.TLocalType): mglossary.TType {
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
                                            return ['template', {
                                                'template': "Reference",
                                                'context': ['local', {}],
                                                'arguments': pr.wrapRawDictionary({
                                                    "RererencedType": <mglossary.GType>['null', {}], //FIXME
                                                }),
                                            }]
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
        return {
            'modules': pr.wrapRawDictionary({
                "resolved": {
                    'definition': <mmoduleDefinition.TModuleDefinition>{
                        'glossary': <mglossary.TGlossary>{
                            'imports': pr.wrapRawDictionary({
                                "fp": "lib-fountain-pen",
                            }),
                            'parameters': pr.wrapRawDictionary({
                                "Annotation": {},
                            }),
                            'templates': pr.wrapRawDictionary<mglossary.GGlossary.Ptemplates.D>({
                                "Reference": {
                                    'parameters': pr.wrapRawDictionary({
                                        "ReferencedType": {},
                                    }),
                                    'type': <mglossary.GType>['group', pr.wrapRawDictionary({})],
                                }
                            }),
                            'types': createTypes({
                                'model': $.model,
                                'optional': false,
                            }),
                            'interfaces': pr.wrapRawDictionary({}),
                            'functions': pr.wrapRawDictionary({
                                "Enrich": func(typeReference("Root"), null, null, data(typeReference("Root"), false)),
                                "Serialize": func(typeReference("Root"), null, interfaceReference("fp", "Line"), null),
                            }),
                        },
                        'api': {
                            'imports': pr.wrapRawDictionary({
                                "common": "glo-pareto-common",
                            }),
                            'algorithms': pr.wrapRawDictionary<mmoduleDefinition.GModuleDefinition.Papi.Palgorithms.D>({
                                "createSerializer": {
                                    'definition': {
                                        'function': "Serialize"
                                    },
                                    'type': ['constructor', {
                                        'configuration data': ['not set', {}],
                                        'dependencies': pr.wrapRawDictionary({
                                        })
                                    }]
                                },
                                "createEnricher": {
                                    'definition': {
                                        'function': "Enrich"
                                    },
                                    'type': ['constructor', {
                                        'configuration data': ['not set', {}],
                                        'dependencies': pr.wrapRawDictionary({
                                        })
                                    }]
                                },
                            })
                        },
                    },
                    'implementation': <malgorithm.TImplementation>{
                        'implementations': pr.wrapRawDictionary({
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
                            //                 'cases': pr.wrapRawDictionary({}),
                            //             }]
                            //         }
                            //     }]
                            // }
                        }),
                    },
                },
                "unresolved": {
                    'definition': <mmoduleDefinition.TModuleDefinition>{
                        'glossary': <mglossary.TGlossary>{
                            'imports': pr.wrapRawDictionary({
                                // "fp": {
                                //     'name': "lib-fountain-pen",
                                //     'annotation': "FFF",
                                // },
                                "fp": "lib-fountain-pen",
                            }),
                            'parameters': pr.wrapRawDictionary({
                                "Annotation": {},
                            }),
                            'templates': pr.wrapRawDictionary({
                                "Reference": {
                                    'parameters': pr.wrapRawDictionary({
                                        "ReferencedType": {},
                                    }),
                                    'type': <mglossary.GType>['group', pr.wrapRawDictionary({
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
                            'interfaces': pr.wrapRawDictionary({}),
                            'functions': pr.wrapRawDictionary({
                                "Serialize": {
                                    'return type': ['nothing', {}],
                                    'data': typeReference($.model.root.name), //unresolved
                                    'managed input interface': ['not set', {}],
                                    'output interface': ['set', {
                                        'context': ['import', "fp"],
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
                            'imports': pr.wrapRawDictionary({
                                "temp": "../../temp",
                            }),
                            'algorithms': pr.wrapRawDictionary({
                                "createSerializer": {
                                    'definition': {
                                        'context': ['local', {}],
                                        'function': "Serialize"
                                    },
                                    'type': ['constructor', {
                                        'configuration data': ['not set', {}],
                                        'dependencies': pr.wrapRawDictionary({
                                            "arrayForEach": {
                                                'context': ['import', "temp"],
                                                'function': "ArrayForEach",
                                            },
                                            "dictionaryForEach": {
                                                'context': ['import', "temp"],
                                                'function': "DictionaryForEach",
                                            },
                                            "enrichedArrayForEach": {
                                                'context': ['import', "temp"],
                                                'function': "EnrichedArrayForEach",
                                            },
                                            "enrichedDictionaryForEach": {
                                                'context': ['import', "temp"],
                                                'function': "EnrichedDictionaryForEach",
                                            },
                                        })
                                    }]
                                },
                            })
                        },
                    },
                    'implementation': <malgorithm.TImplementation>{
                        'implementations': pr.wrapRawDictionary<malgorithm.GImplementation.Pimplementations.D>({
                            "createSerializer": {
                                'type': ['procedure', {
                                    'block': {
                                        'innerFunctions': $.model.globalTypes.dictionary.map(($) => {
                                            function doType($: mliana.TLocalType): malgorithm.GProcedureBlock.Pstatements {
                                                const builder = ps.createArrayBuilder<malgorithm.GProcedureBlock.Pstatements.A>()
                                                function snippet($: string) {
                                                    
                                                    builder.push(<malgorithm.GProcedureBlock.Pstatements.A>['interfaceCall', {
                                                        'child path': pr.wrapRawArray(["snippet"]),
                                                        //'property': pr.wrapRawArray([]),
                                                        'data': ['set',  ['string literal', $]],
                                                        'callback': ['not set', {}],
                                                    }])
                                                }
                                                function indent($i: () => malgorithm.GProcedureBlock) {
                                                    // builder.push(<malgorithm.GProcedureBlock.Pstatements.A>['interfaceCall', {
                                                    //     'child path': pr.wrapRawArray(["snippet"]),
                                                    //     //'property': pr.wrapRawArray([]),
                                                    //     'data': ['set',  ['string literal', $]],
                                                    //     'callback': ['not set', {}],
                                                    // }])
                                    
                                                }
                                                switch ($[0]) {
                                                    case 'array':
                                                        pl.cc($[1], ($) => {
                                                            snippet("ARRAY")
                                                        })
                                                        break
                                                    case 'boolean':
                                                        pl.cc($[1], ($) => {
                                                            snippet("BOOLEAN")

                                                        })
                                                        break
                                                    case 'component':
                                                        pl.cc($[1], ($) => {
                                                            snippet("COMPONENT")

                                                        })
                                                        break
                                                    case 'dictionary':
                                                        pl.cc($[1], ($) => {
                                                            snippet("DICTIONARY")

                                                        })
                                                        break
                                                    case 'group':
                                                        pl.cc($[1], ($) => {
                                                            pl.logDebugMessage("GROPUSFDSDKLF:JF")
                                                            // snippet("{")
                                                            // indent(($) => {
                                                                
                                                            // })
                                                            // snippet("}")
                                                            // $.

                                                        })
                                                        break
                                                    case 'string':
                                                        pl.cc($[1], ($) => {
                                                            snippet("STRING")

                                                        })
                                                        break
                                                    case 'taggedUnion':
                                                        pl.cc($[1], ($) => {
                                                            snippet("TAGGEDUNION")

                                                        })
                                                        break
                                                    default: pl.au($[0])
                                                }
                                                return builder.getArray()
                                            }

                                            return <malgorithm.GProcedureBlock.PinnerFunctions.D>{
                                                'type': ['procedure', {
                                                    'block': {
                                                        'innerFunctions': pr.wrapRawDictionary({}),
                                                        'statements': doType($.type),
                                                    },
                                                }]
                                            }
                                        }),
                                        'statements': pr.wrapRawArray([

                                        ])
                                    }
                                }],
                                'constructor': true,
                            }
                        })
                    },
                },
                "sparse": {
                    'definition': <mmoduleDefinition.TModuleDefinition>{
                        'glossary': <mglossary.TGlossary>{
                            'imports': pr.wrapRawDictionary({
                                "fp": "lib-fountain-pen",
                            }),
                            'parameters': pr.wrapRawDictionary({
                                "Annotation": {},
                            }),
                            'templates': pr.wrapRawDictionary({}),
                            'types': createTypes({
                                'model': $.model,
                                'optional': true,
                            }),
                            'interfaces': pr.wrapRawDictionary({}),
                            'functions': pr.wrapRawDictionary({
                            }),
                        },
                        'api': {
                            'imports': pr.wrapRawDictionary({
                                "common": "glo-pareto-common",
                            }),
                            'algorithms': pr.wrapRawDictionary({
                            })
                        },
                    },
                    'implementation': <malgorithm.TImplementation>{
                        'implementations': pr.wrapRawDictionary({
                        }),
                    },
                },
            })
        }
    }
}