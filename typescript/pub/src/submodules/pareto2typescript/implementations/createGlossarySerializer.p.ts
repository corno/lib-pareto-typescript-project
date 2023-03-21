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

import { createGlossarySerializer } from "../api.generated"

export const $$: createGlossarySerializer = ($d) => {

    function doDictionaryTypeWithKey<T>(
        $: pt.Dictionary<T>,
        $i: g_fp.B.Line,
        callback: ($: {
            'key': string,
            'value': T,
        }, $i: g_fp.B.Line) => void,
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



        //     ($) => {

        // })
    }
    function doDictionaryType<T>(
        $: pt.Dictionary<T>,
        $i: g_fp.B.Line,
        callback: ($: T, $i: g_fp.B.Line) => void,
    ) {
        doDictionaryTypeWithKey($, $i, ($, $i) => callback($.value, $i))
    }
    function doOptional<T>(
        $: pt.OptionalValue<T>,
        $i: g_fp.B.Line,
        $c: {
            onSet: ($: T, $i: g_fp.B.Line) => void,
            onNotset: ($: null, $i: g_fp.B.Line) => void,
        },
    ) {
        if ($[0] === true) {
            $c.onSet($[1], $i)
        } else {
            $c.onNotset(null, $i)
        }
    }
    return <Annotation>($: g_this.T.SerializeGlossaryData<Annotation>, $i: g_fp.B.Directory) => {
        const imports = $.imports
        return pl.cc($.glossary, ($) => {
            const globalParameters = $.parameters
            const importDefinitions = $.imports

            function ns(
                $: string,
                $i: g_fp.B.Block,
                $c: ($i: g_fp.B.Block) => void
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
                $: pt.OptionalValue<T>,
                $i: g_fp.B.Line,
                $c: {
                    onSet: ($: T, $i: g_fp.B.Line) => void,
                    onNotset: ($: {}, $i: g_fp.B.Line) => void,
                },
            ) {
                switch ($[0]) {
                    case false:
                        $c.onNotset($, $i)
                        break
                    case true:
                        pl.cc($[1], ($) => {
                            $c.onSet($, $i)
                        })
                        break
                    default: pl.au($[0])
                }
            }
            function serializeContext($: g_glossary.T.Context<Annotation>, $i: g_fp.B.Line) {
                switch ($[0]) {
                    case 'import':
                        pl.cc($[1], ($) => {
                            $i.snippet(`g_${$.glossary.key}.`)
                        })
                        break
                    case 'local':
                        pl.cc($[1], ($) => {

                        })
                        break
                    default: pl.au($[0])
                }
            }
            function serializeTypeReference($: g_glossary.T.TypeReference<Annotation>, $i: g_fp.B.Line) {
                serializeContext($.context, $i)
                $i.snippet(`T.${$d.createIdentifier(`${$.type/*.name*/}`)}`)
                $d.enrichedDictionaryForEach($.arguments, {
                    'onEmpty': () => {
                        serializeContextGlossaryArgumentsOnly($.context, $i)
                    },
                    'onNotEmpty': ($c) => {
                        $i.snippet(`<`)
                        switch ($.context[0]) {
                            case 'import':
                                pl.cc($.context[1], ($) => {
                                    importDefinitions.__getEntry(
                                        $.glossary.key,
                                        ($) => {
                                            $d.dictionaryForEach($.arguments, ($) => {
                                                serializeTypeReference($.value, $i)
                                                $i.snippet(`, `)
                                            })
                                        },
                                        () => {
                                            pd.logDebugMessage(`missing import: ${$.glossary.key}`)
                                        }
                                    )
                                })
                                break
                            case 'local':
                                pl.cc($.context[1], ($) => {
                                    $d.dictionaryForEach(globalParameters, ($) => {
                                        $i.snippet(`G${$.key}, `)
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
            function serializeContextGlossaryArgumentsOnly(
                $: g_glossary.T.Context<Annotation>,
                $i: g_fp.B.Line,
            ) {
                switch ($[0]) {
                    case 'import':
                        pl.cc($[1], ($) => {
                            importDefinitions.__getEntry(
                                $.glossary.key,
                                ($) => {
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
                                },
                                () => {
                                    pd.logDebugMessage(`missing import: ${$.glossary.key}`)
                                }
                            )
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
                                        $i.snippet(`G${$.key}${$.isLast ? `` : `, `}`)
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
                $i: g_fp.B.Line
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
            $i.file(`index.ts`, ($i) => {
                $i.line(`export * from "./datatypes.generated"`)
                $i.line(`export * from "./algorithmtypes.generated"`)
            })
            $i.file(`datatypes.generated.ts`, ($i) => {
                $i.nestedLine(($i) => {
                    $i.snippet(`import * as pt from 'pareto-core-types'`)
                })
                $i.line(``)
                $d.dictionaryForEach(imports, ($) => {
                    $i.nestedLine(($i) => {
                        $i.snippet(`import * as g_${$.key} from "${$.value}"`)
                    })
                })
                ns(
                    `T`,
                    $i,
                    ($i) => {
                        $d.dictionaryForEach($.types, ($) => {
                            const typeParameters = $.value.parameters
                            function serializeTypeAliasAndPossibleNamespace(
                                $: {
                                    type: g_glossary.T.Type<Annotation>,
                                    name: string,
                                },
                                $i: g_fp.B.Block,
                            ) {
                                const name = $.name
                                function serializeGlobalAndTypeParameters(
                                    $: null,
                                    $i: g_fp.B.Line,
                                ) {

                                    $d.enrichedDictionaryForEach(typeParameters, {
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

                                //create namespaces for the complex types
                                pl.cc($.type, ($) => {
                                    function createTheCurrentNamespace(
                                        $c: ($i: g_fp.B.Block) => void,
                                        $i: g_fp.B.Block,
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
                                        $i: g_fp.B.Block,
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
                                                    },
                                                    $i,
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
                                        $i: g_fp.B.Line,
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
                                                    doDictionaryType($, $i, ($, $i) => {
                                                        serializeType(
                                                            $.type,
                                                            $i,
                                                        )

                                                    })
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
                                                    $i.snippet($d.createIdentifier(`T${$}`))
                                                })
                                                break
                                            case 'glossary parameter':
                                                pl.cc($[1], ($) => {
                                                    $i.snippet($d.createIdentifier(`G${$}`))
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
            $i.file(`algorithmtypes.generated.ts`, ($i) => {

                function serializeSynchronousInterface($: g_glossary.T.SynchronousInterface<Annotation>, $i: g_fp.B.Line) {
                    switch ($[0]) {
                        case 'group':
                            pl.cc($[1], ($) => {
                                doDictionaryType($.members, $i, ($, $i) => {
                                    serializeSynchronousInterface($, $i)
                                })
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
                                            $i.snippet(`$c: ($b: `)
                                            serializeSynchronousInterface($, $i)
                                            $i.snippet(`) => void`)
                                        }
                                    })
                                })
                                $i.snippet(`) => void`)
                            })
                            break
                        case 'reference':
                            pl.cc($[1], ($) => {
                                serializeSynchronousInterfaceReference($, $i)
                            })
                            break
                        default: pl.au($[0])
                    }

                }
                function serializeSynchronousInterfaceReference($: g_glossary.T.SynchronousInterfaceReference<Annotation>, $i: g_fp.B.Line) {
                    serializeContext($.context, $i)
                    $i.snippet(`SYNC.I.${$d.createIdentifier(`${$.interface}`)}`)
                    serializeContextGlossaryArgumentsOnly($.context, $i)

                }
                function serializeAsynchronousInterface($: g_glossary.T.AsynchronousInterface<Annotation>, $i: g_fp.B.Line) {
                    switch ($[0]) {
                        case 'choice':
                            pl.cc($[1], ($) => {
                                doDictionaryType($.options, $i, ($, $i) => {
                                    serializeAsynchronousInterface($, $i)
                                })
                            })
                            break
                        case 'streamconsumer':
                            pl.cc($[1], ($) => {

                                $i.snippet(`{`)
                                $i.indent(($i) => {
                                    $i.nestedLine(($i) => {
                                        $i.snippet(`'data': `)
                                        serializeAsynchronousInterface($.data, $i)
                                    })
                                    $i.nestedLine(($i) => {
                                        $i.snippet(`'end': `)
                                        serializeAsynchronousInterface($.end, $i)
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
                                $i.snippet(`) => `)
                                pl.cc($.interface, ($) => {
                                    doOptional($, $i, {
                                        onNotset: () => {
                                            $i.snippet(`void`)
                                        },
                                        onSet: ($, $i) => {
                                            serializeAsynchronousInterface($, $i)
                                        }
                                    })
                                })
                            })
                            break
                        case 'reference':
                            pl.cc($[1], ($) => {
                                serializeAsynchronousInterfaceReference($, $i)
                            })
                            break
                        default: pl.au($[0])
                    }

                }
                function serializeAsynchronousInterfaceReference($: g_glossary.T.AsynchronousInterfaceReference<Annotation>, $i: g_fp.B.Line) {
                    serializeContext($.context, $i)
                    $i.snippet(`ASYNC.I.${$d.createIdentifier(`${$.interface}`)}`)
                    serializeContextGlossaryArgumentsOnly($.context, $i)

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
                                    serializeGlobalParametersOnly($i)
                                    $i.snippet(` = `)
                                    serializeAsynchronousInterface($.value, $i)
                                })
                            })
                        })
                        ns(`A`, $i, ($i) => {
                            $d.dictionaryForEach($.algorithms, ($) => {
                                $i.line(``)
                                ns(
                                    pl.cc($.value, ($) => {
                                        switch ($[0]) {
                                            case 'builder':
                                                return pl.cc($[1], ($) => {
                                                    return `B`
                                                })
                                            case 'constructor':
                                                return pl.cc($[1], ($) => {
                                                    return `C`
                                                })
                                            case 'function':
                                                return pl.cc($[1], ($) => {
                                                    return `F`
                                                })
                                            default: return pl.au($[0])
                                        }
                                    }),
                                    $i,
                                    ($i) => {
                                        $i.nestedLine(($i) => {
                                            $i.snippet(`export type ${$d.createIdentifier($.key)}`)
                                            serializeGlobalParametersOnly($i)
                                            $i.snippet(` = `)
                                            pl.cc($.value, ($) => {
                                                switch ($[0]) {
                                                    case 'builder':
                                                        pl.cc($[1], ($) => {
                                                            $i.snippet(`($: `)
                                                            serializeTypeReference($.in, $i)
                                                            $i.snippet(`, $is: `)
                                                            doDictionaryType($.out, $i, ($, $i) => {
                                                                serializeAsynchronousInterfaceReference($, $i)
                                                            })
                                                            $i.snippet(`) => void`)

                                                        })
                                                        break
                                                    case 'constructor':
                                                        pl.cc($[1], ($) => {
                                                            $i.snippet(`(`)
                                                            $i.snippet(`$is: `)
                                                            doDictionaryType($.downstreams, $i, ($, $i) => {
                                                                serializeAsynchronousInterfaceReference($, $i)
                                                            })
                                                            $i.snippet(`) => `)
                                                            serializeAsynchronousInterfaceReference($.interface, $i)

                                                        })
                                                        break
                                                    case 'function':
                                                        pl.cc($[1], ($) => {
                                                            $i.snippet(`(`)
                                                            pl.cc($.in, ($) => {
                                                                switch ($[0]) {
                                                                    case 'data':
                                                                        pl.cc($[1], ($) => {
                                                                            $i.snippet(`$: `)
                                                                            serializeTypeReference($, $i)
                                                                        })
                                                                        break
                                                                    default: pl.au($[0])
                                                                }
                                                            })
                                                            $i.snippet(`) => `)
                                                            $i.snippet(`pt.AsyncValue<`)
                                                            serializeTypeReference($.out, $i)
                                                            $i.snippet(`>`)

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
                                            serializeGlobalParametersOnly($i)
                                            $i.snippet(` = `)
                                            serializeSynchronousInterface($.value, $i)
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
                                            pl.cc($.value, ($) => {
                                                switch ($[0]) {
                                                    case 'builder':
                                                        return pl.cc($[1], ($) => {
                                                            return `B`
                                                        })
                                                    case 'constructor':
                                                        return pl.cc($[1], ($) => {
                                                            return `C`
                                                        })
                                                    case 'function':
                                                        return pl.cc($[1], ($) => {
                                                            return `F`
                                                        })
                                                    default: return pl.au($[0])
                                                }
                                            }),
                                            $i,
                                            ($i) => {
                                                $i.nestedLine(($i) => {
                                                    $i.snippet(`export type ${$d.createIdentifier($.key)}`)
                                                    serializeGlobalParametersOnly($i)
                                                    $i.snippet(` = `)
                                                    pl.cc($.value, ($) => {
                                                        switch ($[0]) {
                                                            case 'builder':
                                                                pl.cc($[1], ($) => {
                                                                    $i.snippet(`(`)
                                                                    pl.cc($.in, ($) => {
                                                                        switch ($[0]) {
                                                                            case 'interface':
                                                                                pl.cc($[1], ($) => {
                                                                                    $i.snippet(`$c: ($b: `)
                                                                                    serializeSynchronousInterfaceReference($, $i)
                                                                                    $i.snippet(`) => void`)
                                                                                })
                                                                                break
                                                                            case 'data':
                                                                                pl.cc($[1], ($) => {
                                                                                    $i.snippet(`$: `)
                                                                                    serializeTypeReference($, $i)
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
                                                            case 'constructor':
                                                                pl.cc($[1], ($) => {
                                                                    $i.snippet(`(`)
                                                                    $i.snippet(`$i: `)
                                                                    serializeSynchronousInterfaceReference($.downstream, $i)
                                                                    $i.snippet(`, `)
                                                                    pl.cc($.interface, ($) => {
                                                                        $i.snippet(`$c: ($b: `)
                                                                        serializeSynchronousInterfaceReference($, $i)
                                                                        $i.snippet(`) => void`)
                                                                    })
                                                                    $i.snippet(`) => void`)

                                                                })
                                                                break
                                                            case 'function':
                                                                pl.cc($[1], ($) => {
                                                                    $i.snippet(`(`)
                                                                    pl.cc($.in, ($) => {
                                                                        switch ($[0]) {
                                                                            case 'interface':
                                                                                pl.cc($[1], ($) => {
                                                                                    $i.snippet(`$c: ($b: `)
                                                                                    serializeSynchronousInterfaceReference($, $i)
                                                                                    $i.snippet(`) => void`)
                                                                                })
                                                                                break
                                                                            case 'data':
                                                                                pl.cc($[1], ($) => {
                                                                                    $i.snippet(`$: `)
                                                                                    serializeTypeReference($, $i)
                                                                                })
                                                                                break
                                                                            default: pl.au($[0])
                                                                        }
                                                                    })
                                                                    $i.snippet(`) => `)
                                                                    serializeTypeReference($.out, $i)
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

