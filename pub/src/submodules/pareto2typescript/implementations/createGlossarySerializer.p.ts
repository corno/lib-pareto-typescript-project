import * as pl from 'pareto-core-lib'

import * as api from "../api"

import * as mglossary from "../../glossary"
import * as mfp from "lib-fountain-pen"

export namespace VOptional { }
export type VOptional<AType> =
    | ['not set', {}]
    | ['set', AType]

export type MOptional<AType> = VOptional<AType>

export const $$: api.CcreateGlossarySerializer = ($d) => {

    return ($, $i) => {
        const globalParameters = $.parameters

        function ns(
            $: string,
            $i: mfp.IBlock,
            $c: ($i: mfp.IBlock) => void
        ) {
            $i.line(``)
            $i.nestedLine(($i) => {
                $i.snippet(`export namespace ${$d.createIdentifier($)} {`)
                $i.indent(($i) => {
                    $c($i)
                })
                $i.snippet(`}`)
            })
        }
        function doOptional<T>(
            $: MOptional<T>,
            $i: mfp.ILine,
            $c: {
                onSet: ($: T, $i: mfp.ILine) => void,
                onNotset: ($: {}, $i: mfp.ILine) => void,
            },
        ) {
            switch ($[0]) {
                case 'not set':
                    pl.cc($[1], ($) => {
                        $c.onNotset($, $i)
                    })
                    break
                case 'set':
                    pl.cc($[1], ($) => {
                        $c.onSet($, $i)
                    })
                    break
                default: pl.au($[0])
            }
        }
        function serializeContext($: mglossary.T.Context<string>, $i: mfp.ILine) {
            switch ($[0]) {
                case 'import':
                    pl.cc($[1], ($) => {
                        $i.snippet(`m${$.glossary/*.name*/}.`)
                    })
                    break
                case 'local':
                    pl.cc($[1], ($) => {

                    })
                    break
                default: pl.au($[0])
            }
        }
        function serializeTypeReference($: mglossary.T.TypeReference<string>, $i: mfp.ILine) {
            serializeContext($.context, $i)
            $i.snippet(`T.${$d.createIdentifier(`${$.type/*.name*/}`)}`)
            $d.enrichedDictionaryForEach($.arguments, {
                'onEmpty': () => {
                    serializeContextArgumentsOnly($.context, $i)
                },
                'onNotEmpty': ($c) => {
                    $i.snippet(`<`)
                    switch ($.context[0]) {
                        case 'import':
                            pl.cc($.context[1], ($) => {
                                $d.dictionaryForEach($.arguments, ($) => {
                                    serializeTypeReference($.value, $i)
                                    $i.snippet(`, `)
                                })
                            })
                            break
                        case 'local':
                            pl.cc($.context[1], ($) => {
                                $d.enrichedDictionaryForEach(globalParameters, {
                                    'onEmpty': () => {

                                    },
                                    'onNotEmpty': ($c) => {
                                        $i.snippet(`<`)
                                        $c(($) => {
                                            $i.snippet(`GP${$.key}${$.isLast ? `` : `, `}`)
                                        })
                                        $i.snippet(`>`)
                                    }
                                })

                            })
                            break
                        default: pl.au($.context[0])
                    }
                    $c(($) => {
                        serializeTypeReference($.value, $i)
                        $i.snippet(`${$.isLast ? `` : `, `}`)
                    })
                    $i.snippet(`>`)
                }
            })
        }
        function serializeContextArgumentsOnly(
            $: mglossary.T.Context<string>,
            $i: mfp.ILine,
        ) {
            switch ($[0]) {
                case 'import':
                    pl.cc($[1], ($) => {
                        $d.enrichedDictionaryForEach($.arguments, {
                            'onEmpty': () => {

                            },
                            'onNotEmpty': ($c) => {
                                $i.snippet(`<`)
                                $c(($) => {
                                    serializeTypeReference($.value, $i)

                                    $i.snippet(`${$.isLast ? `` : `, `}`)
                                })
                                $i.snippet(`>`)
                            }
                        })
                    })
                    break
                case 'local':
                    pl.cc($[1], ($) => {
                        $d.enrichedDictionaryForEach(globalParameters, {
                            'onEmpty': () => {

                            },
                            'onNotEmpty': ($c) => {
                                $i.snippet(`<`)
                                $c(($) => {
                                    $i.snippet(`GP${$.key}${$.isLast ? `` : `, `}`)
                                })
                                $i.snippet(`>`)
                            }
                        })
                    })
                    break
                default: pl.au($[0])
            }
        }
        function serializeGlobalParametersOnly(
            $i: mfp.ILine
        ) {
            $d.enrichedDictionaryForEach(globalParameters, {
                onEmpty: () => {
                },
                onNotEmpty: ($c) => {
                    $i.snippet(`<`)

                    $c(($) => {
                        $i.snippet(`GP${$.key}${$.isLast ? `` : `, `}`)
                    })
                    $i.snippet(`>`)

                }
            })

        }
        $i.file(`index.ts`, ($i) => {
            $i.line(`export * from "./types.generated"`)
            $i.line(`export * from "./public.generated"`)
        })
        $i.file(`types.generated.ts`, ($i) => {
            // function serializeComplexType(
            //     $: {
            //         type: mglossary.T.Type<string>,
            //         typeParameters: mglossary.GGlossary.Ptypes.D.Pparameters<string>,
            //         name: string,
            //     },
            //     $i: mfp.IBlock
            // ) {
            //     const typeParameters = $.typeParameters
            //     const name = $.name
            //     function createInstanceNamespaceAndType(
            //         $namespace: ($i: mfp.IBlock) => void,
            //         $type: ($i: mfp.ILine) => void
            //     ) {
            //         $i.line(``)
            //         $i.nestedLine(($i) => {
            //             $i.snippet(`export namespace ${$d.createIdentifier($.name)} {`)
            //             $i.indent(($i) => {
            //                 $namespace($i)
            //             })
            //             $i.snippet(`}`)

            //         })
            //         $i.nestedLine(($i) => {
            //             $i.snippet(`export type ${$d.createIdentifier($.name)}`)
            //             serializeGlobalAndTypeParameters(
            //                 {
            //                     typeParameters: $.typeParameters,
            //                 },
            //                 $i,
            //             )
            //             $i.snippet(` = `)
            //             $type($i)
            //         })
            //     }
            //     function serializeReferenceToType(
            //         $: {
            //             type: mglossary.T.Type<string>,
            //             typeParameters: mglossary.GGlossary.Ptypes.D.Pparameters<string>,
            //             name: string,
            //         },
            //         $i: mfp.ILine,
            //     ): void {
            //         // serializeType(
            //         //     {
            //         //         $: $.type,
            //         //         typeParameters: typeParameters,
            //         //     },
            //         //     ($i) => {
            //         //         $i.snippet(`${$d.createIdentifier(name)}.${$d.createIdentifier($.name)}`)
            //         //         serializeGlobalAndTypeParameters(
            //         //             {
            //         //                 typeParameters: $.typeParameters,
            //         //             },
            //         //             $i,
            //         //         )
            //         //     },
            //         //     $i,
            //         // )
            //     }
            //     pl.cc($.type, ($) => {
            //         switch ($[0]) {
            //             case 'null':
            //                 pl.cc($[1], ($) => {
            //                 })
            //                 break
            //             case 'boolean':
            //                 pl.cc($[1], ($) => {
            //                 })
            //                 break
            //             case 'reference':
            //                 pl.cc($[1], ($) => {
            //                 })
            //                 break
            //             case 'number':
            //                 pl.cc($[1], ($) => {
            //                 })
            //                 break
            //             case 'string':
            //                 pl.cc($[1], ($) => {
            //                 })
            //                 break
            //             case 'computed':
            //                 pl.cc($[1], ($) => {
            //                     createInstanceNamespaceAndType(
            //                         ($i) => {
            //                             serializeComplexType(
            //                                 {
            //                                     type: $,
            //                                     typeParameters: typeParameters,
            //                                     name: `C`
            //                                 },
            //                                 $i
            //                             )
            //                         },
            //                         ($i) => {
            //                             $i.snippet(`() => `)
            //                             serializeReferenceToType(
            //                                 {
            //                                     type: $,
            //                                     typeParameters: typeParameters,
            //                                     name: `C`,
            //                                 },
            //                                 $i,
            //                             )
            //                         }
            //                     )
            //                 })
            //                 break
            //             case 'optional':
            //                 pl.cc($[1], ($) => {
            //                     createInstanceNamespaceAndType(
            //                         ($i) => {
            //                             serializeComplexType(
            //                                 {
            //                                     type: $,
            //                                     typeParameters: typeParameters,
            //                                     name: `W`
            //                                 },
            //                                 $i
            //                             )
            //                         },
            //                         ($i) => {

            //                         }
            //                     )
            //                 })
            //                 break
            //             case 'array':
            //                 pl.cc($[1], ($) => {
            //                     createInstanceNamespaceAndType(
            //                         ($i) => {
            //                             serializeComplexType(
            //                                 {
            //                                     type: $,
            //                                     typeParameters: typeParameters,
            //                                     name: `A`
            //                                 },
            //                                 $i
            //                             )
            //                         },
            //                         ($i) => {
            //                             $i.snippet(`pt.Array<`)
            //                             serializeReferenceToType(
            //                                 {
            //                                     type: $,
            //                                     typeParameters: typeParameters,
            //                                     name: `A`,
            //                                 },
            //                                 $i,
            //                             )
            //                             $i.snippet(`>`)
            //                         }
            //                     )
            //                 })
            //                 break
            //             case 'dictionary':
            //                 pl.cc($[1], ($) => {
            //                     createInstanceNamespaceAndType(
            //                         ($i) => {
            //                             serializeComplexType(
            //                                 {
            //                                     type: $,
            //                                     typeParameters: typeParameters,
            //                                     name: `D`
            //                                 },
            //                                 $i
            //                             )
            //                         },
            //                         ($i) => {
            //                             $i.snippet(`pt.Dictionary<`)
            //                             serializeReferenceToType(
            //                                 {
            //                                     type: $,
            //                                     typeParameters: typeParameters,
            //                                     name: `D`,
            //                                 },
            //                                 $i,
            //                             )
            //                             $i.snippet(`>`)
            //                         }
            //                     )
            //                 })
            //                 break
            //             case 'group':
            //                 pl.cc($[1], ($) => {
            //                     createInstanceNamespaceAndType(
            //                         ($i) => {
            //                             $d.dictionaryForEach($, ($) => {
            //                                 serializeComplexType(
            //                                     {
            //                                         type: $.value.type,
            //                                         typeParameters: typeParameters,
            //                                         name: `P${$.key}`
            //                                     },
            //                                     $i
            //                                 )

            //                             })
            //                         },
            //                         ($i) => {
            //                             $i.snippet(`{`)
            //                             $i.indent(($i) => {
            //                                 $d.dictionaryForEach($, ($) => {
            //                                     $i.nestedLine(($i) => {
            //                                         $i.snippet(`readonly ${$d.createApostrophedString($.key)}${$.value.optional === undefined || $.value.optional === false ? `` : `?`}: `)

            //                                         serializeReferenceToType(
            //                                             {
            //                                                 type: $.value.type,
            //                                                 typeParameters: typeParameters,
            //                                                 'name': `P${$.key}`,
            //                                             },
            //                                             $i,
            //                                         )
            //                                     })
            //                                 })
            //                             })
            //                             $i.snippet(`}`)
            //                         }
            //                     )
            //                 })
            //                 break
            //             case 'nested':
            //                 pl.cc($[1], ($) => {
            //                     createInstanceNamespaceAndType(
            //                         ($i) => {
            //                             serializeComplexType(
            //                                 {
            //                                     type: $,
            //                                     typeParameters: typeParameters,
            //                                     name: `N`
            //                                 },
            //                                 $i
            //                             )
            //                         },
            //                         ($i) => {
            //                             $i.snippet(`pt.Nested<`)
            //                             serializeReferenceToType(
            //                                 {
            //                                     type: $,
            //                                     typeParameters: typeParameters,
            //                                     name: `N`,
            //                                 },
            //                                 $i
            //                             )
            //                             $i.snippet(`>`)
            //                         }
            //                     )
            //                 })
            //                 break
            //             case 'type parameter':
            //                 pl.cc($[1], ($) => {
            //                 })
            //                 break
            //             case 'glossary parameter':
            //                 pl.cc($[1], ($) => {
            //                 })
            //                 break
            //             case 'taggedUnion':
            //                 pl.cc($[1], ($) => {
            //                     createInstanceNamespaceAndType(
            //                         ($i) => {
            //                             $d.dictionaryForEach($, ($) => {
            //                                 serializeComplexType(
            //                                     {
            //                                         type: $.value,
            //                                         typeParameters: typeParameters,
            //                                         name: `O${$.key}`
            //                                     },
            //                                     $i
            //                                 )


            //                             })
            //                         },
            //                         ($i) => {

            //                             $i.indent(($i) => {
            //                                 $d.dictionaryForEach($, ($) => {
            //                                     $i.nestedLine(($i) => {
            //                                         $i.snippet(`| [${$d.createApostrophedString($.key)}, `)
            //                                         serializeReferenceToType(
            //                                             {
            //                                                 type: $.value,
            //                                                 typeParameters: typeParameters,
            //                                                 name: `O${$.key}`,
            //                                             },
            //                                             $i,
            //                                         )
            //                                         $i.snippet(`]`)
            //                                     })
            //                                 })
            //                             })
            //                         }
            //                     )

            //                 })
            //                 break
            //             // case 'template':
            //             //     pl.cc($[1], ($) => {
            //             //         createInstanceNamespace(
            //             //             ($i) => {

            //             //                 $d.dictionaryForEach($.arguments, ($) => {

            //             //                     serializeComplexType(
            //             //                         {
            //             //                             type: $.value,
            //             //                             typeParameters: typeParameters,//FIX is this the right one?
            //             //                             name: `TP${$.key}`
            //             //                         },
            //             //                         $i
            //             //                     )
            //             //                 })
            //             //             },
            //             //             ($i) => {

            //             //                 if ($.context !== undefined) {
            //             //                     serializeContext($.context, $i)
            //             //                 }
            //             //                 $i.snippet($d.createIdentifier(`M${$.template}`))
            //             //                 $d.enrichedDictionaryForEach($.arguments, {
            //             //                     onNotEmpty: ($c) => {
            //             //                         $i.snippet(`<`)
            //             //                         // $d.dictionaryForEach(globalParameters, ($) => {
            //             //                         //     $i.snippet(`GP${$.key}, `)
            //             //                         // })
            //             //                         $c(($) => {
            //             //                             serializeReferenceToType(
            //             //                                 {
            //             //                                     type: $.value,
            //             //                                     typeParameters: null, //FIX what is the right one?
            //             //                                     name: `TP${$.key}`,
            //             //                                 },
            //             //                                 $i
            //             //                             )
            //             //                             $i.snippet($.isLast ? `` : `, `)
            //             //                         })

            //             //                         $i.snippet(`>`)
            //             //                     },
            //             //                     onEmpty: () => {
            //             //                         serializeGlobalParametersOnly($i)
            //             //                         //nothing to do
            //             //                         //weird
            //             //                     }
            //             //                 })
            //             //             }
            //             //         )
            //             //     })
            //             //     break
            //             default: pl.au($[0])
            //         }

            //     })
            // }
            $i.nestedLine(($i) => {
                $i.snippet(`import * as pt from 'pareto-core-types'`)
            })
            $i.line(``)
            $d.dictionaryForEach($.imports, ($) => {
                $i.nestedLine(($i) => {
                    $i.snippet(`import * as m${$.key} from "${$.value}"`)
                })
            })
            // $d.dictionaryForEach($.templates, ($) => {

            //     serializeComplexType(
            //         {
            //             type: $.value.type,
            //             typeParameters: $.value.parameters,
            //             name: `V${$.key}`,
            //         },
            //         $i,
            //     )
            //     $i.line(``)
            //     $i.nestedLine(($i) => {
            //         $i.snippet(`export type ${$d.createIdentifier(`M${$.key}`)}`)
            //         serializeParameters(
            //             {
            //                 typeParameters: $.value.parameters,
            //             },
            //             $i,
            //         )
            //         $i.snippet(` = `)
            //         serializeType(
            //             {
            //                 $: $.value.type,
            //                 typeParameters: $.value.parameters,
            //             },
            //             ($i) => {
            //                 $i.snippet($d.createIdentifier(`V${$.key}`))
            //                 serializeParameters(
            //                     {
            //                         typeParameters: $.value.parameters,
            //                     },
            //                     $i,
            //                 )
            //             },
            //             $i
            //         )
            //     })
            // })
            ns(
                `T`,
                $i,
                ($i) => {
                    $d.dictionaryForEach($.types, ($) => {
                        const typeParameters = $.value.parameters
                        function serializeTypeAliasAndPossibleNamespace(
                            $: {
                                type: mglossary.T.Type<string>,
                                name: string,
                            },
                            $i: mfp.IBlock,
                        ) {
                            const name = $.name
                            function serializeGlobalAndTypeParameters(
                                $: null,
                                $i: mfp.ILine,
                            ) {

                                $d.enrichedDictionaryForEach(typeParameters, {
                                    onEmpty: () => {
                                        serializeGlobalParametersOnly($i)
                                    },
                                    onNotEmpty: ($c) => {
                                        $i.snippet(`<`)

                                        $d.dictionaryForEach(globalParameters, ($) => {
                                            $i.snippet(`GP${$.key}, `)
                                        })
                                        $c(($) => {
                                            $i.snippet(`A${$.key}${$.isLast ? `` : `, `}`)
                                        })
                                        $i.snippet(`>`)

                                    }
                                })
                            }

                            //create namespaces for the complex types
                            pl.cc($.type, ($) => {
                                function createTheCurrentNamespace(
                                    $c: ($i: mfp.IBlock) => void
                                ) {
                                    ns(
                                        name,
                                        $i,
                                        $c
                                    )
                                }
                                function createCurrentAndSerializeType(
                                    $: {
                                        type: mglossary.T.Type<string>,
                                        nextName: string,
                                    },
                                    $i: mfp.IBlock,
                                ) {
                                    createTheCurrentNamespace(
                                        ($i) => {
                                            serializeTypeAliasAndPossibleNamespace(
                                                {
                                                    type: $.type,
                                                    name: $.nextName,
                                                },
                                                $i,
                                            )
                                        }
                                    )
                                }
                                switch ($[0]) {
                                    case 'null':
                                        pl.cc($[1], ($) => {
                                        })
                                        break
                                    case 'boolean':
                                        pl.cc($[1], ($) => {
                                        })
                                        break
                                    case 'reference':
                                        pl.cc($[1], ($) => {
                                        })
                                        break
                                    case 'number':
                                        pl.cc($[1], ($) => {
                                        })
                                        break
                                    case 'string':
                                        pl.cc($[1], ($) => {
                                        })
                                        break
                                    case 'computed':
                                        pl.cc($[1], ($) => {
                                            createCurrentAndSerializeType(
                                                {
                                                    'type': $,
                                                    'nextName': "C",
                                                },
                                                $i
                                            )
                                        })
                                        break
                                    case 'optional':
                                        pl.cc($[1], ($) => {
                                            createCurrentAndSerializeType(
                                                {
                                                    'type': $,
                                                    'nextName': "O",
                                                },
                                                $i
                                            )
                                        })
                                        break
                                    case 'array':
                                        pl.cc($[1], ($) => {
                                            createCurrentAndSerializeType(
                                                {
                                                    'type': $,
                                                    'nextName': "A",
                                                },
                                                $i
                                            )
                                        })
                                        break
                                    case 'dictionary':
                                        pl.cc($[1], ($) => {
                                            createCurrentAndSerializeType(
                                                {
                                                    'type': $,
                                                    'nextName': "D",
                                                },
                                                $i
                                            )
                                        })
                                        break
                                    case 'group':
                                        pl.cc($[1], ($) => {
                                            createTheCurrentNamespace(
                                                ($i) => {
                                                    $d.dictionaryForEach($, ($) => {
                                                        serializeTypeAliasAndPossibleNamespace(
                                                            {
                                                                'type': $.value.type,
                                                                'name': $.key,
                                                            },
                                                            $i
                                                        )
                                                    })
                                                }
                                            )
                                        })
                                        break
                                    case 'nested':
                                        pl.cc($[1], ($) => {
                                            createCurrentAndSerializeType(
                                                {
                                                    'type': $,
                                                    'nextName': "N",
                                                },
                                                $i
                                            )
                                        })
                                        break
                                    case 'type parameter':
                                        pl.cc($[1], ($) => {
                                        })
                                        break
                                    case 'glossary parameter':
                                        pl.cc($[1], ($) => {
                                        })
                                        break
                                    case 'taggedUnion':
                                        pl.cc($[1], ($) => {
                                            createTheCurrentNamespace(
                                                ($i) => {
                                                    $d.dictionaryForEach($, ($) => {
                                                        serializeTypeAliasAndPossibleNamespace(
                                                            {
                                                                'type': $.value,
                                                                'name': $.key,
                                                            },
                                                            $i
                                                        )
                                                    })
                                                }
                                            )
                                        })
                                        break
                                    default: pl.au($[0])
                                }

                            })
                            $i.line(``)
                            $i.nestedLine(($i) => {
                                function serializeType(
                                    $: mglossary.T.Type<string>,
                                    $i: mfp.ILine,
                                ): void {
                                    switch ($[0]) {
                                        case 'null':
                                            pl.cc($[1], ($) => {
                                                $i.snippet(`null`)
                                            })
                                            break
                                        case 'boolean':
                                            pl.cc($[1], ($) => {
                                                $i.snippet(`boolean`)
                                            })
                                            break
                                        case 'reference':
                                            pl.cc($[1], ($) => {
                                                serializeTypeReference($, $i)
                                            })
                                            break
                                        case 'number':
                                            pl.cc($[1], ($) => {
                                                $i.snippet(`number`)
                                            })
                                            break
                                        case 'string':
                                            pl.cc($[1], ($) => {
                                                $i.snippet(`string`)
                                            })
                                            break
                                        case 'computed':
                                            pl.cc($[1], ($) => {
                                                $i.snippet(`() => `)
                                                serializeType(
                                                    $,
                                                    $i,
                                                )
                                            })
                                            break
                                        case 'optional':
                                            pl.cc($[1], ($) => {
                                                $i.snippet(`[ false ] | [ true, `)
                                                serializeType(
                                                    $,
                                                    $i,
                                                )
                                                $i.snippet(`]`)
                                            })
                                            break
                                        case 'array':
                                            pl.cc($[1], ($) => {
                                                $i.snippet(`pt.Array<`)
                                                serializeType(
                                                    $,
                                                    $i,
                                                )
                                                $i.snippet(`>`)
                                            })
                                            break
                                        case 'dictionary':
                                            pl.cc($[1], ($) => {
                                                $i.snippet(`pt.Dictionary<`)
                                                serializeType(
                                                    $,
                                                    $i,
                                                )
                                                $i.snippet(`>`)
                                            })
                                            break
                                        case 'group':
                                            pl.cc($[1], ($) => {
                                                $i.snippet(`{`)
                                                $i.indent(($i) => {
                                                    $d.dictionaryForEach($, ($) => {
                                                        $i.nestedLine(($i) => {
                                                            $i.snippet(`readonly ${$d.createApostrophedString($.key)}${$.value.optional === undefined || $.value.optional === false ? `` : `?`}: `)
                                                            serializeType(
                                                                $.value.type,
                                                                $i,
                                                            )
                                                        })
                                                    })
                                                })
                                                $i.snippet(`}`)
                                            })
                                            break
                                        case 'nested':
                                            pl.cc($[1], ($) => {
                                                $i.snippet(`pt.Nested<`)
                                                serializeType(
                                                    $,
                                                    $i,
                                                )
                                                $i.snippet(`>`)
                                            })
                                            break
                                        case 'type parameter':
                                            pl.cc($[1], ($) => {
                                                $i.snippet($d.createIdentifier(`A${$}`))
                                            })
                                            break
                                        case 'glossary parameter':
                                            pl.cc($[1], ($) => {
                                                $i.snippet($d.createIdentifier(`GP${$}`))
                                            })
                                            break
                                        case 'taggedUnion':
                                            pl.cc($[1], ($) => {

                                                $i.indent(($i) => {
                                                    $d.dictionaryForEach($, ($) => {
                                                        $i.nestedLine(($i) => {
                                                            $i.snippet(`| [${$d.createApostrophedString($.key)}, `)
                                                            serializeType(
                                                                $.value,
                                                                $i,
                                                            )
                                                            $i.snippet(`]`)
                                                        })
                                                    })
                                                })
                                            })
                                            break
                                        default: pl.au($[0])
                                    }

                                }
                                $i.snippet(`export type ${$d.createIdentifier($.name)}`)
                                serializeGlobalAndTypeParameters(
                                    null,
                                    $i,
                                )
                                $i.snippet(` = `)
                                serializeType(
                                    $.type,
                                    $i
                                )
                            })
                        }
                        serializeTypeAliasAndPossibleNamespace(
                            {
                                type: $.value.type,
                                name: $.key
                            },
                            $i,
                        )
                    })

                }
            )

        })
        $i.file(`public.generated.ts`, ($i) => {

            function serializeInterfaceReference($: mglossary.T.InterfaceReference<string>, $i: mfp.ILine) {
                serializeContext($.context, $i)
                $i.snippet($d.createIdentifier(`I${$.interface}`))
                serializeContextArgumentsOnly($.context, $i)

            }
            function serializeInterface($: mglossary.T.Interface<string>, $i: mfp.ILine) {
                switch ($[0]) {
                    case 'group':
                        pl.cc($[1], ($) => {

                            $i.snippet(`{`)
                            $i.indent(($i) => {
                                $d.dictionaryForEach($.members, ($) => {
                                    $i.nestedLine(($i) => {
                                        $i.snippet(`${$d.createApostrophedString($.key)}: `)
                                        serializeInterface($.value, $i)
                                    })
                                })
                            })
                            $i.snippet(`}`)
                        })
                        break
                    case 'method':
                        pl.cc($[1], ($) => {

                            $i.snippet(`(`)
                            pl.cc($.data, ($) => {
                                if ($ === null) {
                                    //
                                } else {
                                    doOptional($, $i, {
                                        onNotset: ($, $i) => { },
                                        onSet: ($, $i) => {
                                            $i.snippet(`$: `)
                                            serializeTypeReference($, $i)
                                            $i.snippet(`, `)
                                        }
                                    })
                                }
                            })
                            pl.cc($.interface, ($) => {
                                doOptional($, $i, {
                                    onNotset: () => { },
                                    onSet: ($, $i) => {
                                        if ($.managed) {
                                            $i.snippet(`$c: ($i: `)
                                            serializeInterface($.interface, $i)
                                            $i.snippet(`) => void`)
                                        }
                                    }
                                })
                            })
                            $i.snippet(`) => `)
                            pl.cc($.interface, ($) => {
                                doOptional($, $i, {
                                    onNotset: () => {
                                        $i.snippet(`void`)
                                    },
                                    onSet: ($, $i) => {
                                        if ($.managed) {
                                            $i.snippet(`void`)
                                        } else {
                                            serializeInterface($.interface, $i)
                                        }
                                    }
                                })
                            })
                        })
                        break
                    case 'reference':
                        pl.cc($[1], ($) => {
                            serializeInterfaceReference($, $i)
                        })
                        break
                    default: pl.au($[0])
                }

            }
            $i.nestedLine(($i) => {
                $i.snippet(`import * as pt from 'pareto-core-types'`)
            })
            $i.line(``)
            $i.nestedLine(($i) => {
                $i.snippet(`import { T   } from './types.generated'`)
            })
            $i.line(``)
            $d.dictionaryForEach($.imports, ($) => {
                $i.nestedLine(($i) => {
                    $i.snippet(`import * as m${$.key} from "${$.value}"`)
                })
            })
            $d.dictionaryForEach($.interfaces, ($) => {
                $i.line(``)
                $i.nestedLine(($i) => {
                    $i.snippet(`export type ${$d.createIdentifier(`I${$.key}`)} = `)
                    serializeInterface($.value, $i)
                    serializeGlobalParametersOnly($i)
                })
            })
            $d.dictionaryForEach($.functions, ($) => {
                $i.line(``)
                $i.nestedLine(($i) => {
                    $i.snippet(`export type ${$d.createIdentifier(`F${$.key}`)} = `)
                    serializeGlobalParametersOnly($i)
                    pl.cc($.value, ($) => {

                        $i.snippet(`($: `)
                        serializeTypeReference($.data, $i)
                        $i.snippet(`,`)
                        if ($['managed input interface'] !== null) {
                            doOptional($['managed input interface'], $i, {
                                onNotset: () => { },
                                onSet: ($, $i) => {
                                    $i.snippet(` $c: ($i: `)
                                    serializeInterfaceReference($, $i)
                                    $i.snippet(`) => void,`)
                                },
                            })

                        }
                        doOptional($['output interface'], $i, {
                            onNotset: () => { },
                            onSet: ($, $i) => {
                                $i.snippet(` $i: `)
                                serializeInterfaceReference($, $i)
                                $i.snippet(`,`)
                            }
                        })
                        $i.snippet(`) => `)
                        pl.cc($['return type'], ($) => {
                            switch ($[0]) {
                                case 'data':
                                    pl.cc($[1], ($) => {

                                        if ($.asynchronous) {
                                            $i.snippet(`pt.AsyncValue<`)
                                            serializeTypeReference($.type, $i)
                                            $i.snippet(`>`)
                                        } else {
                                            serializeTypeReference($.type, $i)
                                        }
                                    })
                                    break
                                case 'interface':
                                    pl.cc($[1], ($) => {
                                        serializeInterfaceReference($, $i)
                                    })
                                    break
                                case 'nothing':
                                    pl.cc($[1], ($) => {
                                        $i.snippet(`void`)
                                    })
                                    break
                                default: pl.au($[0])
                            }
                        })
                    })
                })
            })
        })
    }
}

