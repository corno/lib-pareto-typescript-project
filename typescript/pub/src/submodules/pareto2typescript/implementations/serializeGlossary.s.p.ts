import * as pl from 'pareto-core-lib'
import * as pt from 'pareto-core-types'
import * as pd from 'pareto-core-dev'

import * as g_this from "../glossary"
import * as g_glossary from "../../glossary"
import * as g_fp from "lib-fountain-pen"

export namespace VOptional { }
export type VOptional<AType> =
    | ['not set', {}]
    | ['set', AType]

export type MOptional<AType> = VOptional<AType>

import { A } from "../api.generated"

export const $$: A.serializeGlossary = ($d) => {

    return <Annotation>($: g_this.T.SerializeGlossaryData<Annotation>, $i: g_fp.SYNC.I.Directory) => {
        const imports = $.imports
        return pl.cc($.glossary, ($) => {
            const globalParameters = $['glossary parameters']
            const importDefinitions = $.imports
            function doDictionaryType<T>(
                $: pt.Dictionary<T>,
                $i: g_fp.SYNC.I.Line,
                callback: ($: T, $i: g_fp.SYNC.I.Line) => void,
            ) {
                function doDictionaryTypeWithKey<T>(
                    $: pt.Dictionary<T>,
                    $i: g_fp.SYNC.I.Line,
                    callback: ($: {
                        'key': string,
                        'value': T,
                    }, $i: g_fp.SYNC.I.Line) => void,
                ) {
                    $d.enrichedDictionaryForEach($, {
                        'onEmpty': () => {
                            //typescript treats an empty object very lax therefor I make it a null

                            $i.snippet(`null`)
                        },
                        'onNotEmpty': ($c) => {
                            $i.snippet(`{`)
                            $i.indent(($i) => {
                                $c(($) => {

                                    $i.nestedLine(($i) => {
                                        $i.snippet(`readonly '${$.key}': `)
                                        callback($, $i)
                                    })
                                })
                            })
                            $i.snippet(`}`)
                        }
                    })
                }
                doDictionaryTypeWithKey($, $i, ($, $i) => callback($.value, $i))
            }
            function doOptional<T>(
                $: pt.OptionalValue<T>,
                $i: g_fp.SYNC.I.Line,
                $c: {
                    onSet: ($: T, $i: g_fp.SYNC.I.Line) => void,
                    onNotset: ($: {}, $i: g_fp.SYNC.I.Line) => void,
                },
            ) {
                switch ($[0]) {
                    case false:
                        $c.onNotset($, $i)
                        break
                    case true:
                        pl.ss($, ($) => {
                            $c.onSet($, $i)
                        })
                        break
                    default: pl.au($[0])
                }
            }
            function serializeGlobalParametersOnly(
                $i: g_fp.SYNC.I.Line
            ) {
                $d.enrichedDictionaryForEach(globalParameters, {
                    onEmpty: () => {
                    },
                    onNotEmpty: ($c) => {
                        $i.snippet(`<`)

                        $c(($) => {
                            $i.snippet(`G${$.key}${$.isLast ? `` : `, `}`)
                        })
                        $i.snippet(`>`)

                    }
                })

            }
            function serializeGlobalAndTypeParameters2(
                $: g_glossary.T.Parameters<Annotation>,
                $i: g_fp.SYNC.I.Line,
            ) {

                $d.enrichedDictionaryForEach($, {
                    onEmpty: () => {
                        serializeGlobalParametersOnly($i)
                    },
                    onNotEmpty: ($c) => {
                        $i.snippet(`<`)

                        $d.dictionaryForEach(globalParameters, ($) => {
                            $i.snippet(`G${$.key}, `)
                        })
                        $c(($) => {
                            $i.snippet(`T${$.key}${$.isLast ? `` : `, `}`)
                        })
                        $i.snippet(`>`)

                    }
                })
            }

            function ns(
                $: string,
                $i: g_fp.SYNC.I.Block,
                $c: ($i: g_fp.SYNC.I.Block) => void
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
            function serializeParameters($: g_glossary.T.Parameters<Annotation>, $i: g_fp.SYNC.I.Line) {

                $d.enrichedDictionaryForEach($, {
                    onEmpty: () => {
                    },
                    onNotEmpty: ($c) => {
                        $i.snippet(`<`)
                        $c(($) => {
                            $i.snippet(`T${$.key}${$.isLast ? `` : `, `}`)
                        })
                        $i.snippet(`>`)

                    }
                })
            }
            function serializeDataSpecifier($: g_glossary.T.DataSpecifier<Annotation>, $i: g_fp.SYNC.I.Line) {
                switch ($[0]) {
                    case 'glossary parameterXX':
                        pl.ss($, ($) => {
                            $i.snippet(`G${$}`)
                        })
                        break
                    case 'type parameterXX':
                        pl.ss($, ($) => {
                            $i.snippet(`T${$}`)
                        })
                        break
                    case 'type':
                        pl.ss($, ($) => {
                            pl.cc($.context, ($) => {
                                switch ($[0]) {
                                    case 'import':
                                        pl.ss($, ($) => {
                                            $i.snippet(`g_${$.glossary.glossary.key}.`)
                                        })
                                        break
                                    case 'local':
                                        pl.ss($, ($) => {

                                        })
                                        break
                                    default: pl.au($[0])
                                }
                            })
                            $i.snippet(`T`)
                            $i.snippet(`.${$d.createIdentifier(`${$.typeXX/*.name*/}`)}`)
                            $.tailXX.__forEach(($) => {
                                $i.snippet(`.${$d.createIdentifier(`${$}`)}`)
                            })
                            const args = $['type arguments']
                            pl.cc($.context, ($) => {
                                switch ($[0]) {
                                    case 'import':
                                        pl.ss($, ($) => {
                                            serializeArgumentsForImport($.glossary, args, $i)
                                        })
                                        break
                                    case 'local':
                                        pl.ss($, ($) => {
                                            serializeArgumentsForLocal(args, $i)
                                        })
                                        break
                                    default: pl.au($[0])
                                }
                            })
                        })
                        break
                    default: pl.au($[0])
                }
            }
            function serializeArgumentsForImport(
                glosRef: g_glossary.T.Glossary__Reference<Annotation>,
                typeArguments: g_glossary.T.Arguments<Annotation>,
                $i: g_fp.SYNC.I.Line,
            ) {
                
                importDefinitions.__getEntry(
                    glosRef.glossary.key,
                    ($) => {
                        $d.enrichedDictionaryForEach(typeArguments, {
                            'onEmpty': () => {
                                $d.enrichedDictionaryForEach(glosRef['glossary arguments'], {
                                    'onEmpty': () => {
        
                                    },
                                    'onNotEmpty': ($c) => {
                                        $i.snippet(`<`)
                                        $c(($) => {
                                            serializeDataSpecifier($.value, $i)
        
                                            $i.snippet(`${$.isLast ? `` : `, `}`)
                                        })
                                        $i.snippet(`>`)
                                    }
                                })
                            },
                            'onNotEmpty': ($c) => {
        
                                $i.snippet(`<`)
        
                                $d.dictionaryForEach(glosRef['glossary arguments'], ($) => {
                                    serializeDataSpecifier($.value, $i)
                                    $i.snippet(`, `)
                                })
                                $c(($) => {
                                    serializeDataSpecifier($.value, $i)
                                    $i.snippet(`${$.isLast ? `` : `, `}`)
                                })
                                $i.snippet(`>`)
                            }
                        })
                    },
                    () => {
                        pd.logDebugMessage(`missing import: ${glosRef.glossary.key}`)
                    }
                )
            }
            function serializeArgumentsForLocal(
                args: pt.Dictionary<g_glossary.T.DataSpecifier<Annotation>>,
                $i: g_fp.SYNC.I.Line,
            ) {
                $d.enrichedDictionaryForEach(args, {
                    'onEmpty': () => {
                        $d.enrichedDictionaryForEach(globalParameters, {
                            'onEmpty': () => {

                            },
                            'onNotEmpty': ($c) => {
                                $i.snippet(`<`)
                                $c(($) => {
                                    $i.snippet(`G${$.key}${$.isLast ? `` : `, `}`)
                                })
                                $i.snippet(`>`)
                            }
                        })
                    },
                    'onNotEmpty': ($c) => {
                        $i.snippet(`<`)
                        $d.dictionaryForEach(globalParameters, ($) => {
                            $i.snippet(`G${$.key}, `)
                        })
                        $c(($) => {
                            serializeDataSpecifier($.value, $i)
                            $i.snippet(`${$.isLast ? `` : `, `}`)
                        })
                        $i.snippet(`>`)
                    }
                })
            }
            $i.file(`index.ts`, ($i) => {
                $i.line(`export * from "./datatypes.generated"`)
                $i.line(`export * from "./algorithmtypes.generated"`)
            })
            $i.file(`datatypes.generated.ts`, ($i) => {
                function serializeNamespace($: g_glossary.T.Namespace<Annotation>, $i: g_fp.SYNC.I.Block) {
                    ns(
                        `N`,
                        $i,
                        ($i) => {
                            $d.dictionaryForEach($.namespaces, ($) => {
                                ns($d.createIdentifier($.key), $i, ($i) => {
                                    serializeNamespace($.value, $i)
                                })
                            })
                        }
                    )
                    ns(
                        `T`,
                        $i,
                        ($i) => {
                            $d.dictionaryForEach($.types, ($) => {
                                const typeParameters = $.value.parameters
                                function serializeGlobalAndTypeParameters(
                                    $: null,
                                    $i: g_fp.SYNC.I.Line,
                                ) {
                                    serializeGlobalAndTypeParameters2(typeParameters, $i)
                                }
                                function serializeTypeAliasAndPossibleNamespace(
                                    $: {
                                        type: g_glossary.T.Type<Annotation>,
                                        name: string,
                                    },
                                    $i: g_fp.SYNC.I.Block,
                                ) {
                                    const name = $.name

                                    //create namespaces for the complex types
                                    pl.cc($.type, ($) => {
                                        function createTheCurrentNamespace(
                                            $c: ($i: g_fp.SYNC.I.Block) => void,
                                            $i: g_fp.SYNC.I.Block,
                                        ) {
                                            ns(
                                                name,
                                                $i,
                                                $c
                                            )
                                        }
                                        function createCurrentAndSerializeType(
                                            $: {
                                                type: g_glossary.T.Type<Annotation>,
                                                nextName: string,
                                            },
                                            $i: g_fp.SYNC.I.Block,
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
                                                },
                                                $i,
                                            )
                                        }
                                        switch ($[0]) {
                                            case 'null':
                                                pl.ss($, ($) => {
                                                })
                                                break
                                            case 'boolean':
                                                pl.ss($, ($) => {
                                                })
                                                break
                                            case 'reference':
                                                pl.ss($, ($) => {
                                                })
                                                break
                                            case 'number':
                                                pl.ss($, ($) => {
                                                })
                                                break
                                            case 'string':
                                                pl.ss($, ($) => {
                                                })
                                                break
                                            case 'computed':
                                                pl.ss($, ($) => {
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
                                                pl.ss($, ($) => {
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
                                                pl.ss($, ($) => {
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
                                                pl.ss($, ($) => {
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
                                                pl.ss($, ($) => {
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
                                                        },
                                                        $i,
                                                    )
                                                })
                                                break
                                            case 'taggedUnion':
                                                pl.ss($, ($) => {
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
                                                        },
                                                        $i,
                                                    )
                                                })
                                                break
                                            default: pl.au($[0])
                                        }

                                    })
                                    $i.line(``)
                                    $i.nestedLine(($i) => {
                                        function serializeType(
                                            $: g_glossary.T.Type<Annotation>,
                                            $i: g_fp.SYNC.I.Line,
                                        ): void {
                                            switch ($[0]) {
                                                case 'null':
                                                    pl.ss($, ($) => {
                                                        $i.snippet(`null`)
                                                    })
                                                    break
                                                case 'boolean':
                                                    pl.ss($, ($) => {
                                                        $i.snippet(`boolean`)
                                                    })
                                                    break
                                                case 'reference':
                                                    pl.ss($, ($) => {
                                                        serializeDataSpecifier($, $i)
                                                    })
                                                    break
                                                case 'number':
                                                    pl.ss($, ($) => {
                                                        $i.snippet(`number`)
                                                    })
                                                    break
                                                case 'string':
                                                    pl.ss($, ($) => {
                                                        $i.snippet(`string`)
                                                    })
                                                    break
                                                case 'computed':
                                                    pl.ss($, ($) => {
                                                        $i.snippet(`() => `)
                                                        serializeType(
                                                            $,
                                                            $i,
                                                        )
                                                    })
                                                    break
                                                case 'optional':
                                                    pl.ss($, ($) => {
                                                        $i.snippet(`[ false ] | [ true, `)
                                                        serializeType(
                                                            $,
                                                            $i,
                                                        )
                                                        $i.snippet(`]`)
                                                    })
                                                    break
                                                case 'array':
                                                    pl.ss($, ($) => {
                                                        $i.snippet(`pt.Array<`)
                                                        serializeType(
                                                            $,
                                                            $i,
                                                        )
                                                        $i.snippet(`>`)
                                                    })
                                                    break
                                                case 'dictionary':
                                                    pl.ss($, ($) => {
                                                        $i.snippet(`pt.Dictionary<`)
                                                        serializeType(
                                                            $,
                                                            $i,
                                                        )
                                                        $i.snippet(`>`)
                                                    })
                                                    break
                                                case 'group':
                                                    pl.ss($, ($) => {
                                                        doDictionaryType($, $i, ($, $i) => {
                                                            serializeType(
                                                                $.type,
                                                                $i,
                                                            )

                                                        })
                                                    })
                                                    break
                                                case 'taggedUnion':
                                                    pl.ss($, ($) => {

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
                }
                $i.nestedLine(($i) => {
                    $i.snippet(`import * as pt from 'pareto-core-types'`)
                })
                $i.line(``)
                $d.dictionaryForEach(imports, ($) => {
                    $i.nestedLine(($i) => {
                        $i.snippet(`import * as g_${$.key} from "${$.value}"`)
                    })
                })
                serializeNamespace($.root, $i)

            })
            $i.file(`algorithmtypes.generated.ts`, ($i) => {

                function serializeSynchronousInterface(
                    $: {
                        'inf': g_glossary.T.Synchronous__Interface<Annotation>,
                    },
                    $i: g_fp.SYNC.I.Line
                ) {
                    pl.cc($.inf, ($) => {

                        switch ($[0]) {
                            case 'group':
                                pl.ss($, ($) => {
                                    doDictionaryType($.members, $i, ($, $i) => {
                                        serializeSynchronousInterface(
                                            {
                                                'inf': $,
                                            },
                                            $i,
                                        )
                                    })
                                })
                                break
                            case 'method':
                                pl.ss($, ($) => {
                                    $i.snippet(`(`)
                                    pl.cc($.data, ($) => {
                                        if ($ === null) {
                                            //
                                        } else {
                                            doOptional($, $i, {
                                                onNotset: ($, $i) => { },
                                                onSet: ($, $i) => {
                                                    $i.snippet(`$: `)
                                                    serializeDataSpecifier($, $i)
                                                    $i.snippet(`, `)
                                                }
                                            })
                                        }
                                    })
                                    pl.cc($.interface, ($) => {
                                        doOptional($, $i, {
                                            onNotset: () => { },
                                            onSet: ($, $i) => {
                                                $i.snippet(`$c: ($b: `)
                                                serializeSynchronousInterface(
                                                    {
                                                        'inf': $,
                                                    },
                                                    $i,
                                                )
                                                $i.snippet(`) => void`)
                                            }
                                        })
                                    })
                                    $i.snippet(`) => void`)
                                })
                                break
                            case 'reference':
                                pl.ss($, ($) => {
                                    serializeSynchronousInterfaceReference($, $i)
                                })
                                break
                            default: pl.au($[0])
                        }
                    })

                }
                function serializeSynchronousInterfaceReference($: g_glossary.T.SynchronousInterfaceReference<Annotation>, $i: g_fp.SYNC.I.Line) {
                    pl.cc($.context, ($) => {
                        switch ($[0]) {
                            case 'import':
                                pl.ss($, ($) => {
                                    $i.snippet(`g_${$.glossary.glossary.key}.`)
                                    $i.snippet(`SYNC.I.${$d.createIdentifier(`${$['interfaceXX']}`)}`)
                                })
                                break
                            case 'local':
                                pl.ss($, ($) => {
                                    $i.snippet(`SYNC.I.${$d.createIdentifier(`${$['interfaceXX']}`)}`)
                                })
                                break
                            default: pl.au($[0])
                        }
                    })
                    const args = $['type arguments']
                    pl.cc($.context, ($) => {

                        switch ($[0]) {
                            case 'import':
                                pl.ss($, ($) => {
                                    serializeArgumentsForImport($.glossary, args, $i)
                                })
                                break
                            case 'local':
                                pl.ss($, ($) => {
                                    serializeArgumentsForLocal(args, $i)
                                })
                                break
                            default: pl.au($[0])
                        }
                    })

                }
                function serializeAsynchronousInterface(
                    $: {
                        'inf': g_glossary.T.AsynchronousInterface<Annotation>,
                    },
                    $i: g_fp.SYNC.I.Line
                ) {
                    pl.cc($.inf, ($) => {

                        switch ($[0]) {
                            case 'choice':
                                pl.ss($, ($) => {
                                    doDictionaryType($.options, $i, ($, $i) => {
                                        serializeAsynchronousInterface(
                                            {
                                                'inf': $,
                                            },
                                            $i
                                        )
                                    })
                                })
                                break
                            case 'streamconsumer':
                                pl.ss($, ($) => {

                                    $i.snippet(`{`)
                                    $i.indent(($i) => {
                                        $i.nestedLine(($i) => {
                                            $i.snippet(`'data': `)
                                            serializeAsynchronousInterface(
                                                {
                                                    'inf': $.data,
                                                },
                                                $i
                                            )
                                        })
                                        $i.nestedLine(($i) => {
                                            $i.snippet(`'end': `)
                                            serializeAsynchronousInterface(
                                                {
                                                    'inf': $.end,
                                                },
                                                $i
                                            )
                                        })
                                    })
                                    $i.snippet(`}`)
                                })
                                break
                            case 'method':
                                pl.ss($, ($) => {
                                    $i.snippet(`(`)
                                    pl.cc($.data, ($) => {
                                        if ($ === null) {
                                            //
                                        } else {
                                            doOptional($, $i, {
                                                onNotset: ($, $i) => { },
                                                onSet: ($, $i) => {
                                                    $i.snippet(`$: `)
                                                    serializeDataSpecifier($, $i)
                                                    $i.snippet(`, `)
                                                }
                                            })
                                        }
                                    })
                                    $i.snippet(`) => `)
                                    pl.cc($.interface, ($) => {
                                        doOptional($, $i, {
                                            onNotset: () => {
                                                $i.snippet(`void`)
                                            },
                                            onSet: ($, $i) => {
                                                serializeAsynchronousInterface(
                                                    {
                                                        'inf': $,
                                                    },
                                                    $i
                                                )
                                            }
                                        })
                                    })
                                })
                                break
                            case 'reference':
                                pl.ss($, ($) => {
                                    serializeAsynchronousInterfaceReference($, $i)
                                })
                                break
                            default: pl.au($[0])
                        }
                    })

                }
                function serializeAsynchronousInterfaceReference($: g_glossary.T.AsynchronousInterfaceReference<Annotation>, $i: g_fp.SYNC.I.Line) {
                    pl.cc($.context, ($) => {
                        switch ($[0]) {
                            case 'import':
                                pl.ss($, ($) => {
                                    $i.snippet(`g_${$.glossary.glossary.key}.`)
                                })
                                break
                            case 'local':
                                pl.ss($, ($) => {

                                })
                                break
                            default: pl.au($[0])
                        }
                    })
                    $i.snippet(`ASYNC.I.${$d.createIdentifier(`${$.interfaceXX}`)}`)
                    const args = $['type arguments']
                    pl.cc($.context, ($) => {

                        switch ($[0]) {
                            case 'import':
                                pl.ss($, ($) => {
                                    serializeArgumentsForImport($.glossary, args, $i)
                                })
                                break
                            case 'local':
                                pl.ss($, ($) => {
                                    serializeArgumentsForLocal(args, $i)
                                })
                                break
                            default: pl.au($[0])
                        }
                    })

                }
                $i.nestedLine(($i) => {
                    $i.snippet(`import * as pt from 'pareto-core-types'`)
                })
                $i.line(``)
                $i.nestedLine(($i) => {
                    $i.snippet(`import { T } from "./datatypes.generated"`)
                })
                $i.line(``)
                $d.dictionaryForEach(imports, ($) => {
                    $i.nestedLine(($i) => {
                        $i.snippet(`import * as g_${$.key} from "${$.value}"`)
                    })
                })

                pl.cc($.asynchronous, ($) => {
                    ns(`ASYNC`, $i, ($i) => {
                        ns(`I`, $i, ($i) => {
                            $d.dictionaryForEach($.interfaces, ($) => {
                                $i.line(``)
                                $i.nestedLine(($i) => {
                                    $i.snippet(`export type ${$d.createIdentifier($.key)}`)
                                    serializeGlobalAndTypeParameters2($.value.parameters, $i)
                                    $i.snippet(` = `)
                                    serializeAsynchronousInterface(
                                        {
                                            'inf': $.value.interface,
                                        },
                                        $i,
                                    )
                                })
                            })
                        })
                        ns(`A`, $i, ($i) => {
                            $d.dictionaryForEach($.algorithms, ($) => {
                                $i.line(``)
                                ns(
                                    pl.cc($.value.type, ($) => {
                                        switch ($[0]) {
                                            case 'constructor': return pl.ss($, ($) => `C`)
                                            case 'function': return pl.ss($, ($) => `F`)
                                            case 'resource': return pl.ss($, ($) => `R`)
                                            default: return pl.au($[0])
                                        }
                                    }),
                                    $i,
                                    ($i) => {
                                        $i.nestedLine(($i) => {
                                            const params = $.value.parameters
                                            $i.snippet(`export type ${$d.createIdentifier($.key)}`)
                                            serializeGlobalParametersOnly($i)
                                            $i.snippet(` = `)
                                            pl.cc($.value.type, ($) => {
                                                switch ($[0]) {
                                                    case 'constructor':
                                                        pl.ss($, ($) => {
                                                            $i.snippet(`{`)
                                                            $i.indent(($i) => {
                                                                $i.nestedLine(($i) => {
                                                                    $i.snippet(`'construct': `)
                                                                    serializeParameters(params, $i)

                                                                    $i.snippet(`(`)
                                                                    $d.enrichedDictionaryForEach($.downstreams, {
                                                                        'onEmpty': () => {
                                                                        },
                                                                        'onNotEmpty': ($c) => {
                                                                            $i.snippet(`$is: `)
                                                                            $i.snippet(`{`)
                                                                            $i.indent(($i) => {
                                                                                $c(($) => {
                                                                                    $i.nestedLine(($i) => {
                                                                                        $i.snippet(`readonly '${$.key}': `)
                                                                                        serializeAsynchronousInterfaceReference($.value, $i)
                                                                                    })
                                                                                })
                                                                            })
                                                                            $i.snippet(`}`)
                                                                        }
                                                                    })
                                                                    $i.snippet(`) => `)
                                                                    serializeAsynchronousInterfaceReference($.interface, $i)
                                                                })
                                                            })
                                                            $i.snippet(`}`)

                                                        })
                                                        break
                                                    case 'function':
                                                        pl.ss($, ($) => {
                                                            serializeParameters(params, $i)
                                                            $i.snippet(`(`)
                                                            pl.cc($.in, ($) => {
                                                                $i.snippet(`$: `)
                                                                serializeDataSpecifier($, $i)
                                                            })
                                                            $i.snippet(`) => `)
                                                            $i.snippet(`pt.AsyncValue<`)
                                                            serializeDataSpecifier($.out, $i)
                                                            $i.snippet(`>`)

                                                        })
                                                        break
                                                    case 'resource':
                                                        pl.ss($, ($) => {
                                                            $i.snippet(`{`)
                                                            $i.indent(($i) => {
                                                                $i.nestedLine(($i) => {
                                                                    $i.snippet(`'consume': `)
                                                                    serializeParameters(params, $i)
                                                                    $i.snippet(`(`)
                                                                    $i.indent(($i) => {
                                                                        $i.nestedLine(($i) => {
                                                                            $i.snippet(`$: `)
                                                                            serializeDataSpecifier($.request, $i)
                                                                            $i.snippet(`,`)
                                                                        })
                                                                    })
                                                                    $i.indent(($i) => {
                                                                        $i.nestedLine(($i) => {
                                                                            $i.snippet(`$i: `)

                                                                            serializeAsynchronousInterfaceReference($.consumer, $i)
                                                                        })
                                                                    })

                                                                    $i.snippet(`) => void`)
                                                                })
                                                            })
                                                            $i.snippet(`}`)

                                                        })
                                                        break
                                                    default: pl.au($[0])
                                                }
                                            })
                                        })

                                    }
                                )
                            })
                        })
                    })
                })
                ns(`SYNC`, $i, ($i) => {
                    pl.cc($.synchronous, ($) => {
                        $d.enrichedDictionaryForEach($.interfaces, {
                            'onEmpty': () => { },
                            'onNotEmpty': ($c) => {
                                ns(`I`, $i, ($i) => {
                                    $c(($) => {
                                        $i.line(``)
                                        $i.nestedLine(($i) => {
                                            $i.snippet(`export type ${$d.createIdentifier($.key)}`)
                                            serializeGlobalAndTypeParameters2($.value.parameters, $i)
                                            $i.snippet(` = `)
                                            serializeSynchronousInterface(
                                                {
                                                    'inf': $.value.interface,
                                                },
                                                $i,
                                            )
                                        })
                                    })
                                })
                            }
                        })
                        $d.enrichedDictionaryForEach($.algorithms, {
                            'onEmpty': () => { },
                            'onNotEmpty': ($c) => {
                                ns(`A`, $i, ($i) => {
                                    $c(($) => {
                                        $i.line(``)
                                        ns(
                                            pl.cc($.value.type, ($) => {
                                                switch ($[0]) {
                                                    case 'procedure': return pl.ss($, ($) => `P`)
                                                    case 'function': return pl.ss($, ($) => `F`)
                                                    default: return pl.au($[0])
                                                }
                                            }),
                                            $i,
                                            ($i) => {
                                                $i.nestedLine(($i) => {
                                                    $i.snippet(`export type ${$d.createIdentifier($.key)}`)
                                                    serializeGlobalParametersOnly($i)
                                                    $i.snippet(` = `)
                                                    serializeParameters($.value.parameters, $i)
                                                    pl.cc($.value.type, ($) => {
                                                        switch ($[0]) {
                                                            case 'procedure':
                                                                pl.ss($, ($) => {
                                                                    $i.snippet(`(`)
                                                                    pl.cc($.in, ($) => {
                                                                        switch ($[0]) {
                                                                            case 'interface':
                                                                                pl.ss($, ($) => {
                                                                                    $i.snippet(`$c: ($i: `)
                                                                                    serializeSynchronousInterfaceReference($, $i)
                                                                                    $i.snippet(`) => void`)
                                                                                })
                                                                                break
                                                                            case 'data':
                                                                                pl.ss($, ($) => {
                                                                                    $i.snippet(`$: `)
                                                                                    serializeDataSpecifier($, $i)
                                                                                })
                                                                                break
                                                                            default: pl.au($[0])
                                                                        }
                                                                    })
                                                                    $i.snippet(`, $i: `)
                                                                    serializeSynchronousInterfaceReference($.out, $i)
                                                                    $i.snippet(`) => void`)
                                                                })
                                                                break
                                                            case 'function':
                                                                pl.ss($, ($) => {
                                                                    $i.snippet(`(`)
                                                                    pl.cc($.in, ($) => {
                                                                        switch ($[0]) {
                                                                            case 'interface':
                                                                                pl.ss($, ($) => {
                                                                                    $i.snippet(`$c: ($i: `)
                                                                                    serializeSynchronousInterfaceReference($, $i)
                                                                                    $i.snippet(`) => void`)
                                                                                })
                                                                                break
                                                                            case 'data':
                                                                                pl.ss($, ($) => {
                                                                                    $i.snippet(`$: `)
                                                                                    serializeDataSpecifier($, $i)
                                                                                })
                                                                                break
                                                                            default: pl.au($[0])
                                                                        }
                                                                    })
                                                                    $d.enrichedDictionaryForEach($.callbacks, {
                                                                        'onEmpty': () => { },
                                                                        'onNotEmpty': ($c) => {
                                                                            $i.snippet(`, $c: {`)
                                                                            $i.indent(($i) => {
                                                                                $c(($) => {

                                                                                    $i.nestedLine(($i) => {
                                                                                        $i.snippet(`'${$.key}': ($: `)
                                                                                        serializeDataSpecifier($.value.in, $i)
                                                                                        $d.enrichedDictionaryForEach($.value.lookups, {
                                                                                            'onEmpty': () => { },
                                                                                            'onNotEmpty': ($c) => {
                                                                                                $i.snippet(`, $l: {`)
                                                                                                $i.indent(($i) => {
                                                                                                    $c(($) => {
                                                                                                        $i.nestedLine(($i) => {
                                                                                                            $i.snippet(`'${$.key}': pt.Lookup<`)
                                                                                                            serializeDataSpecifier($.value, $i)
                                                                                                            $i.snippet(`>`)
                                                                                                        })
                                                                                                    })
                                                                                                })
                                                                                                $i.snippet(`}`)
                                                                                            }
                                                                                        })
                                                                                        $i.snippet(`) => `)
                                                                                        serializeDataSpecifier($.value.out, $i)
                                                                                        $i.snippet(`,`)
                                                                                    })
                                                                                })
                                                                            })
                                                                            $i.snippet(`}`)
                                                                        }
                                                                    })
                                                                    $i.snippet(`) => `)
                                                                    serializeDataSpecifier($.out, $i)
                                                                })
                                                                break
                                                            default: pl.au($[0])
                                                        }
                                                    })
                                                })
                                            }
                                        )
                                    })
                                })
                            }
                        })


                    })
                })
            })

        })
    }
}

