import * as pt from 'pareto-core-types'
import * as pl from 'pareto-core-lib'
import * as ps from 'pareto-core-state'
import * as pm from 'pareto-core-map'

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

export const $$: api.CcreateLiana2ParetoMapper = ($d) => {
    return <Annotation>($: api.T.MappedModel<Annotation>) => {
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
                'arguments': pm.wrapRawDictionary({}),
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
            model: mliana.T.Model<Annotation>
        }): mglossary.T.Glossary.types<string> {
            const optional = $.optional
            return model.globalTypes.dictionary.map(($) => {
                function mapType($: mliana.T.LocalType<Annotation>): mglossary.T.Type<string> {
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
                                                    'arguments': pm.wrapRawDictionary({}),
                                                }],
                                                'type': "Reference",
                                                'arguments': pm.wrapRawDictionary({
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
                    'parameters': pm.wrapRawDictionary({}),
                    'type': mapType($.type),
                }
            })
        }
        return {
            'modules': pm.wrapRawDictionary({
                "resolved": {
                    'definition': <mmoduleDefinition.T.ModuleDefinition<Annotation>>{
                        'glossary': <mglossary.T.Glossary<Annotation>>{
                            'imports': pm.wrapRawDictionary({
                                "fp": "lib-fountain-pen",
                            }),
                            'parameters': pm.wrapRawDictionary({
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
                            'interfaces': pm.wrapRawDictionary({}),
                            'functions': pm.wrapRawDictionary({
                                "Enrich": func(typeReference("Root"), null, null, data(typeReference("Root"), false)),
                                "Serialize": func(typeReference("Root"), null, interfaceReference("fp", "Line"), null),
                            }),
                        },
                        'api': {
                            'imports': pm.wrapRawDictionary({
                                "common": "glo-pareto-common",
                            }),
                            'algorithms': pm.wrapRawDictionary<mmoduleDefinition.T.ModuleDefinition.api.algorithms.D<Annotation>>({
                                "createSerializer": {
                                    'definition': {
                                        'function': "Serialize"
                                    },
                                    'type': ['constructor', {
                                        'configuration data': [false],
                                        'dependencies': pm.wrapRawDictionary({
                                        })
                                    }]
                                },
                                "createEnricher": {
                                    'definition': {
                                        'function': "Enrich"
                                    },
                                    'type': ['constructor', {
                                        'configuration data': [false],
                                        'dependencies': pm.wrapRawDictionary({
                                        })
                                    }]
                                },
                            })
                        },
                    },
                    'implementation': <malgorithm.T.Implementation<Annotation>>{
                        'implementations': pm.wrapRawDictionary({
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
                    'definition': <mmoduleDefinition.T.ModuleDefinition<Annotation>>{
                        'glossary': <mglossary.T.Glossary<Annotation>>{
                            'imports': pm.wrapRawDictionary({
                                // "fp": {
                                //     'name': "lib-fountain-pen",
                                //     'annotation': "FFF",
                                // },
                                "fp": "lib-fountain-pen",
                            }),
                            'parameters': pm.wrapRawDictionary({
                                "Annotation": {},
                            }),
                            'templates': pm.wrapRawDictionary({
                                "Reference": {
                                    'parameters': pm.wrapRawDictionary({
                                        "ReferencedType": {},
                                    }),
                                    'type': <mglossary.T.Type<string>>['group', pm.wrapRawDictionary({
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
                            'interfaces': pm.wrapRawDictionary({}),
                            'functions': pm.wrapRawDictionary({
                                "Serialize": {
                                    'return type': ['nothing', {}],
                                    'data': typeReference($.model.root.name), //unresolved
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
                                "createSerializer": {
                                    'definition': {
                                        'context': ['local', {}],
                                        'function': "Serialize"
                                    },
                                    'type': ['constructor', {
                                        'configuration data': [false],
                                        'dependencies': pm.wrapRawDictionary({
                                            "arrayForEach": {
                                                'context': ['import', {
                                                    'glossary': "foreach",
                                                    'arguments': pm.wrapRawDictionary({}),
                                                }],
                                                'function': "ArrayForEach",
                                            },
                                            "dictionaryForEach": {
                                                'context': ['import', {
                                                    'glossary': "foreach",
                                                    'arguments': pm.wrapRawDictionary({}),
                                                }],
                                                'function': "DictionaryForEach",
                                            },
                                            "enrichedArrayForEach": {
                                                'context': ['import', {
                                                    'glossary': "foreach",
                                                    'arguments': pm.wrapRawDictionary({}),
                                                }],
                                                'function': "EnrichedArrayForEach",
                                            },
                                            "enrichedDictionaryForEach": {
                                                'context': ['import', {
                                                    'glossary': "foreach",
                                                    'arguments': pm.wrapRawDictionary({}),
                                                }],
                                                'function': "EnrichedDictionaryForEach",
                                            },
                                        })
                                    }]
                                },
                            })
                        },
                    },
                    'implementation': <malgorithm.T.Implementation<Annotation>>{
                        'implementations': pm.wrapRawDictionary<malgorithm.T.Implementation.implementations.D<Annotation>>({
                            // "createSerializer": {
                            //     'type': ['procedure', {
                            //         'block': {
                            //             'innerFunctions': $.model.globalTypes.dictionary.map(($) => {
                            //                 function doType($: mliana.T.LocalType): malgorithm.GProcedureBlock.Pstatements {
                            //                     const builder = ps.createArrayBuilderFIXME<malgorithm.GProcedureBlock.Pstatements.A>()
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
                    'definition': <mmoduleDefinition.T.ModuleDefinition<Annotation>>{
                        'glossary': <mglossary.T.Glossary<Annotation>>{
                            'imports': pm.wrapRawDictionary({
                                "fp": "lib-fountain-pen",
                            }),
                            'parameters': pm.wrapRawDictionary({
                                "Annotation": {},
                            }),
                            'templates': pm.wrapRawDictionary({}),
                            'types': createTypes({
                                'model': $.model,
                                'optional': true,
                            }),
                            'interfaces': pm.wrapRawDictionary({}),
                            'functions': pm.wrapRawDictionary({
                            }),
                        },
                        'api': {
                            'imports': pm.wrapRawDictionary({
                                "common": "glo-pareto-common",
                            }),
                            'algorithms': pm.wrapRawDictionary({
                            })
                        },
                    },
                    'implementation': <malgorithm.T.Implementation<Annotation>>{
                        'implementations': pm.wrapRawDictionary({
                        }),
                    },
                },
            })
        }
    }
}