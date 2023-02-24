import * as pl from 'pareto-core-lib'
import * as pm from 'pareto-core-map'

import * as gapi from "../api"
import * as galgorithm from "../../algorithm"
import * as gglossary from "../../glossary"
import * as gmoduleDefinition from "../../moduleDefinition"
import * as gliana from "../../liana"

import { CcreateLiana2ParetoMapper } from "../api"

export const $$: CcreateLiana2ParetoMapper = ($d) => {
    return <Annotation>($: gapi.T.MapLiana2ParetoData<Annotation>) => {
        const model = $.mappedModel.model
        const stringMapping = $.mappedModel.stringmapping
        // function ref(type: string): gglossary.T.Type {
        //     return ['reference', {
        //         'context': ['local', {}],
        //         'type': {
        //             'annotation': "SSDF",
        //             'name': type
        //         },
        //     }]
        // }
        function typeReference(type: string): gglossary.T.TypeReference<Annotation> {
            return {
                'context': ['local', {}],
                'type': type,
                // 'type': {
                //     'annotation': "SSDF",
                //     'name': type
                // },
                'arguments': pm.wrapRawDictionary({}),
            }
        }

        // function generateBlock($: gliana.T.LocalType): galgorithm.TFunctionBlock {
        //     return {
        //         'returnExpression': generateExpression($)
        //     }
        // }
        // function generateExpression($: gliana.T.LocalType): galgorithm.TExpression {
        //     switch ($[0]) {
        //         case 'array':
        //             return pl.cc($[1], ($) => {
        //                 return ['mapArray', {
        //                     'block': generateBlock($.type),
        //                 }]
        //             })
        //         case 'boolean':
        //             return pl.cc($[1], ($) => {
        //                 return ['implementMe', "liana2pareto"]
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
        //                 return ['implementMe', "liana2pareto"]
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
            configuration: gapi.T.GenerationConfiguration.datamodel.O<Annotation>,
            model: gliana.T.Model<Annotation>
        }): gglossary.T.Glossary.types<Annotation> {
            const configuration = $.configuration
            return model.globalTypes.dictionary.map(($) => {
                function mapType($: gliana.T.LocalType<Annotation>): gglossary.T.Type<Annotation> {
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
                                return ['reference', {
                                    'context': ['local', {}],
                                    'type': $.type.key,
                                    'arguments': pm.wrapRawDictionary({}),
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
                                        'optional': configuration['properties optional'],
                                    }
                                })]
                            })
                        case 'string':
                            return pl.cc($[1], ($) => {
                                switch ($.constrained[0]) {
                                    case 'no':
                                        return pl.cc($.constrained[1], ($) => {
                                            return stringMapping.__getEntry(
                                                $.type.key,
                                                ($) => {
                                                    switch ($[0]) {
                                                        case 'boolean':
                                                            return pl.cc($[1], ($) => {
                                                                return ['boolean', {}]
                                                            })
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
                                        return pl.cc($.constrained[1], ($): gglossary.T.Type<Annotation> => {
                                            return ['reference', {
                                                'context': ['import', {
                                                    'glossary': "common",
                                                    'arguments': pm.wrapRawDictionary({}),
                                                }],
                                                'type': "Reference",
                                                'arguments': pm.wrapRawDictionary({
                                                    //"ReferencedType": <gglossary.GTypeReference>['null', {}], //FIXME
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
                    'parameters': pm.wrapRawDictionary({}),
                    'type': mapType($.type),
                }
            })
        }
        return {
            'definition': <gmoduleDefinition.T.ModuleDefinition<Annotation>>{
                'glossary': <gglossary.T.Glossary<Annotation>>{
                    'imports': pm.wrapRawDictionary({
                        // "fp": {
                        //     'name': "lib-fountain-pen",
                        //     'annotation': "FFF",
                        // },
                        //"fp": "lib-fountain-pen",
                    }),
                    'parameters': pm.wrapRawDictionary({
                        "Annotation": {},
                    }),
                    'templates': pm.wrapRawDictionary({
                        "Reference": {
                            'parameters': pm.wrapRawDictionary({
                                "ReferencedType": {},
                            }),
                            'type': <gglossary.T.Type<Annotation>>['group', pm.wrapRawDictionary({
                                "annotation": {
                                    'type': ['string', {}],
                                },
                                "name": {
                                    'type': ['string', {}],
                                },
                            })],
                        }
                    }),
                    'types': $.configuration.datamodel[0] === true
                        ? createTypes({
                            'model': $.mappedModel.model,
                            'configuration': $.configuration.datamodel[1],
                        })
                        : pm.wrapRawDictionary({}),
                    'interfaces': pm.wrapRawDictionary({}),
                    'functions': pm.wrapRawDictionary({
                        "Serialize": {
                            'return type': ['nothing', {}],
                            'data': typeReference($.mappedModel.model.root.key), //unresolved
                            'managed input interface': ['not set', {}],
                            'output interface': ['set', {
                                'context': ['import', {
                                    'glossary': "fp",
                                    'arguments': pm.wrapRawDictionary({}),
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
                    'imports': pm.wrapRawDictionary({
                        "foreach": "res-pareto-foreach",
                    }),
                    'algorithms': pm.wrapRawDictionary({
                        // "createSerializer": {
                        //     'definition': {
                        //         'context': ['local', {}],
                        //         'function': "Serialize"
                        //     },
                        //     'type': ['constructor', {
                        //         'configuration data': [false],
                        //         'dependencies': pm.wrapRawDictionary({
                        //             "arrayForEach": {
                        //                 'context': ['import', {
                        //                     'glossary': "foreach",
                        //                     'arguments': pm.wrapRawDictionary({}),
                        //                 }],
                        //                 'function': "ArrayForEach",
                        //             },
                        //             "dictionaryForEach": {
                        //                 'context': ['import', {
                        //                     'glossary': "foreach",
                        //                     'arguments': pm.wrapRawDictionary({}),
                        //                 }],
                        //                 'function': "DictionaryForEach",
                        //             },
                        //             "enrichedArrayForEach": {
                        //                 'context': ['import', {
                        //                     'glossary': "foreach",
                        //                     'arguments': pm.wrapRawDictionary({}),
                        //                 }],
                        //                 'function': "EnrichedArrayForEach",
                        //             },
                        //             "enrichedDictionaryForEach": {
                        //                 'context': ['import', {
                        //                     'glossary': "foreach",
                        //                     'arguments': pm.wrapRawDictionary({}),
                        //                 }],
                        //                 'function': "EnrichedDictionaryForEach",
                        //             },
                        //         })
                        //     }]
                        // },
                    })
                },
            },
            'implementation': <galgorithm.T.Implementation<Annotation>>{
                'implementations': pm.wrapRawDictionary<galgorithm.T.Implementation.implementations.D<Annotation>>({
                    // "createSerializer": {
                    //     'type': ['procedure', {
                    //         'block': {
                    //             'innerFunctions': $.model.globalTypes.dictionary.map(($) => {
                    //                 function doType($: gliana.T.LocalType): galgorithm.GProcedureBlock.Pstatements {
                    //                     const builder = ps.createArrayBuilderFIXME<galgorithm.GProcedureBlock.Pstatements.A>()
                    //                     function snippet($: string) {

                    //                         builder.push(<galgorithm.GProcedureBlock.Pstatements.A>['interfaceCall', {
                    //                             'child path': pr.wrapRawArray(["snippet"]),
                    //                             //'property': pr.wrapRawArray([]),
                    //                             'data': ['set',  ['string literal', $]],
                    //                             'callback': ['not set', {}],
                    //                         }])
                    //                     }
                    //                     function indent($i: () => galgorithm.GProcedureBlock) {
                    //                         // builder.push(<galgorithm.GProcedureBlock.Pstatements.A>['interfaceCall', {
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

                    //                 return <galgorithm.GProcedureBlock.PinnerFunctions.D>{
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
        }
    }
}