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
                $i.line(`export * from "./types.generated"`)
                $i.line(`export * from "./public.generated"`)
            })
            $i.file(`types.generated.ts`, ($i) => {
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
                                                    if ($d.dictionaryIsEmpty($)) {
                                                        //typescript treats an empty object very lax therefor I make it a null
                                                        $i.snippet(`null`)
                                                    } else {
                                                        $i.snippet(`{`)
                                                        $i.indent(($i) => {
                                                            $d.dictionaryForEach($, ($) => {
                                                                $i.nestedLine(($i) => {
                                                                    $i.snippet(`readonly ${$d.createApostrophedString($.key)}: `)
                                                                    serializeType(
                                                                        $.value.type,
                                                                        $i,
                                                                    )
                                                                })
                                                            })
                                                        })
                                                        $i.snippet(`}`)

                                                    }
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
            $i.file(`public.generated.ts`, ($i) => {

                function serializeBuilder($: g_glossary.T.Builder<Annotation>, $i: g_fp.B.Line) {
                    switch ($[0]) {
                        case 'group':
                            pl.cc($[1], ($) => {

                                $i.snippet(`{`)
                                $i.indent(($i) => {
                                    $d.dictionaryForEach($.members, ($) => {
                                        $i.nestedLine(($i) => {
                                            $i.snippet(`${$d.createApostrophedString($.key)}: `)
                                            serializeBuilder($.value, $i)
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
                                pl.cc($.builder, ($) => {
                                    doOptional($, $i, {
                                        onNotset: () => { },
                                        onSet: ($, $i) => {
                                            $i.snippet(`$c: ($b: `)
                                            serializeBuilder($, $i)
                                            $i.snippet(`) => void`)
                                        }
                                    })
                                })
                                $i.snippet(`) => void`)
                            })
                            break
                        case 'reference':
                            pl.cc($[1], ($) => {
                                serializeBuilderReference($, $i)
                            })
                            break
                        default: pl.au($[0])
                    }

                }
                function serializeBuilderReference($: g_glossary.T.BuilderReference<Annotation>, $i: g_fp.B.Line) {
                    serializeContext($.context, $i)
                    $i.snippet(`B.${$d.createIdentifier(`${$.builder}`)}`)
                    serializeContextGlossaryArgumentsOnly($.context, $i)

                }
                function serializeInterface($: g_glossary.T.Interface<Annotation>, $i: g_fp.B.Line) {
                    switch ($[0]) {
                        case 'choice':
                            pl.cc($[1], ($) => {
                                $i.snippet(`{`)
                                $i.indent(($i) => {
                                    $d.dictionaryForEach($.options, ($) => {
                                        $i.nestedLine(($i) => {
                                            $i.snippet(`${$d.createApostrophedString($.key)}: `)
                                            serializeInterface($.value, $i)
                                        })
                                    })
                                })
                                $i.snippet(`}`)
                            })
                            break
                        case 'stream':
                            pl.cc($[1], ($) => {

                                $i.snippet(`{`)
                                $i.indent(($i) => {
                                    $i.nestedLine(($i) => {
                                        $i.snippet(`'data': `)
                                        serializeInterface($.data, $i)
                                    })
                                    $i.nestedLine(($i) => {
                                        $i.snippet(`'end': `)
                                        serializeInterface($.end, $i)
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
                                            serializeInterface($, $i)
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
                function serializeInterfaceReference($: g_glossary.T.InterfaceReference<Annotation>, $i: g_fp.B.Line) {
                    serializeContext($.context, $i)
                    $i.snippet(`I.${$d.createIdentifier(`${$.interface}`)}`)
                    serializeContextGlossaryArgumentsOnly($.context, $i)

                }
                // function serializeResourceReference($: g_glossary.T.ResourceReference<Annotation>, $i: g_fp.B.Line) {
                //     serializeContext($.context, $i)
                //     $i.snippet(`R.${$d.createIdentifier(`${$.resource}`)}`)
                //     serializeContextGlossaryArgumentsOnly($.context, $i)

                // }
                $i.nestedLine(($i) => {
                    $i.snippet(`import * as pt from 'pareto-core-types'`)
                })
                $i.line(``)
                $i.nestedLine(($i) => {
                    $i.snippet(`import { T } from './types.generated'`)
                })
                $i.line(``)
                $d.dictionaryForEach(imports, ($) => {
                    $i.nestedLine(($i) => {
                        $i.snippet(`import * as g_${$.key} from "${$.value}"`)
                    })
                })
                switch ($.type[0]) {
                    case 'asynchronous':
                        pl.cc($.type[1], ($) => {
                            ns(`I`, $i, ($i) => {
                                $d.dictionaryForEach($.interfaces, ($) => {
                                    $i.line(``)
                                    $i.nestedLine(($i) => {
                                        $i.snippet(`export type ${$d.createIdentifier($.key)}`)
                                        serializeGlobalParametersOnly($i)
                                        $i.snippet(` = `)
                                        serializeInterface($.value, $i)
                                    })
                                })
                            })
                            ns(`C`, $i, ($i) => {
                                $d.dictionaryForEach($.classes, ($) => {
                                    $i.line(``)
                                    $i.nestedLine(($i) => {
                                        $i.snippet(`export type ${$d.createIdentifier($.key)}`)
                                        serializeGlobalParametersOnly($i)
                                        pl.cc($.value, ($) => {

                                            $i.snippet(` = (`)
                                            $i.snippet(`$is: {`)
                                            $i.indent(($i) => {
                                                    $d.dictionaryForEach($.downstreams, ($) => {
                                                        $i.nestedLine(($i) => {
                                                            $i.snippet(`'${$d.createIdentifier($.key)}': `)
                                                            $i.snippet(` = `)
                                                            serializeInterfaceReference($.value, $i)
                                                        })
                                                    })
                                            })
                                            $i.snippet(`}) => `)
                                            serializeInterfaceReference($.interface, $i)
                                        })

                                    })
                                })
                            })
                            ns(`F`, $i, ($i) => {
                                $d.dictionaryForEach($.functions, ($) => {
                                    $i.line(``)
                                    $i.nestedLine(($i) => {
                                        $i.snippet(`export type ${$d.createIdentifier($.key)}`)
                                        $i.snippet(` = `)
                                        serializeGlobalParametersOnly($i)
                                        pl.cc($.value, ($) => {

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
                                            // $i.snippet(`($: `)
                                            // serializeTypeReference($.data, $i)
                                            // $i.snippet(`,`)

                                            // doOptional($['output interface'], $i, {
                                            //     onNotset: () => { },
                                            //     onSet: ($, $i) => {
                                            //         $i.snippet(` $i: `)
                                            //         serializeInterfaceReference($, $i)
                                            //         $i.snippet(`,`)
                                            //     }
                                            // })
                                            pl.cc($.out, ($) => {
                                                switch ($[0]) {
                                                    case 'interface':
                                                        pl.cc($[1], ($) => {
                                                            $i.snippet(`, $i: `)
                                                            serializeInterfaceReference($, $i)
                                                        })
                                                        break
                                                    case 'data':
                                                        pl.cc($[1], ($) => {
                                                        })
                                                        break
                                                    default: pl.au($[0])
                                                }
                                            })
                                            $i.snippet(`) => `)
                                            pl.cc($.out, ($) => {
                                                switch ($[0]) {
                                                    case 'interface':
                                                        pl.cc($[1], ($) => {
                                                            $i.snippet(`void`)
                                                        })
                                                        break
                                                    case 'data':
                                                        pl.cc($[1], ($) => {
                                                            $i.snippet(`pt.AsyncValue<`)
                                                            serializeTypeReference($, $i)
                                                            $i.snippet(`>`)
                                                        })
                                                        break
                                                    default: pl.au($[0])
                                                }
                                            })
                                        })
                                    })
                                })
                            })

                        })
                        break
                    case 'synchronous':
                        pl.cc($.type[1], ($) => {

                            ns(`B`, $i, ($i) => {
                                $d.dictionaryForEach($.builders, ($) => {
                                    $i.line(``)
                                    $i.nestedLine(($i) => {
                                        $i.snippet(`export type ${$d.createIdentifier($.key)}`)
                                        serializeGlobalParametersOnly($i)
                                        $i.snippet(` = `)
                                        serializeBuilder($.value, $i)
                                    })
                                })
                            })
                            ns(`C`, $i, ($i) => {
                                $d.dictionaryForEach($.builders, ($) => {
                                    $i.line(``)
                                    $i.nestedLine(($i) => {
                                        $i.snippet(`export type ${$d.createIdentifier($.key)}`)
                                        serializeGlobalParametersOnly($i)
                                        $i.snippet(` = `)
                                        $i.snippet(`($b: B.${$d.createIdentifier($.key)}`)
                                        serializeGlobalParametersOnly($i)
                                        $i.snippet(`) => void`)
                                    })
                                })
                            })
                            ns(`F`, $i, ($i) => {
                                $d.dictionaryForEach($.functions, ($) => {
                                    $i.line(``)
                                    $i.nestedLine(($i) => {
                                        $i.snippet(`export type ${$d.createIdentifier($.key)}`)
                                        $i.snippet(` = `)
                                        serializeGlobalParametersOnly($i)
                                        pl.cc($.value, ($) => {

                                            $i.snippet(`(`)
                                            pl.cc($.in, ($) => {
                                                switch ($[0]) {
                                                    case 'builder':
                                                        pl.cc($[1], ($) => {
                                                            $i.snippet(`$c: ($b: `)
                                                            serializeBuilderReference($, $i)
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
                                            pl.cc($.out, ($) => {
                                                switch ($[0]) {
                                                    case 'builder':
                                                        pl.cc($[1], ($) => {
                                                            $i.snippet(`, $b: `)
                                                            serializeBuilderReference($, $i)
                                                        })
                                                        break
                                                    case 'data':
                                                        pl.cc($[1], ($) => {
                                                        })
                                                        break
                                                    default: pl.au($[0])
                                                }
                                            })
                                            $i.snippet(`) => `)
                                            pl.cc($.out, ($) => {
                                                switch ($[0]) {
                                                    case 'builder':
                                                        pl.cc($[1], ($) => {
                                                            $i.snippet(`void`)
                                                        })
                                                        break
                                                    case 'data':
                                                        pl.cc($[1], ($) => {
                                                            serializeTypeReference($, $i)
                                                        })
                                                        break
                                                    default: pl.au($[0])
                                                }
                                            })
                                        })
                                    })
                                })
                            })


                        })
                        break
                    default: pl.au($.type[0])
                }
            })

        })
    }
}

