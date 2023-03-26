import * as pl from 'pareto-core-lib'
import * as pt from 'pareto-core-types'
import * as pd from 'pareto-core-dev'

import * as g_this from "../glossary"
import * as g_glossary from "../../glossary"
import * as g_fp from "lib-fountain-pen"
import * as g_foreach from "res-pareto-foreach"
import * as g_ts from "res-typescript"

export namespace VOptional { }
export type VOptional<AType> =
    | ['not set', {}]
    | ['set', AType]

export type MOptional<AType> = VOptional<AType>

import { A } from "../api.generated"

export const $$: A.serializeGlossary = <GAnnotation>($d: {
    readonly 'createApostrophedString': g_ts.SYNC.A.F.CreateApostrophedString
    readonly 'createBacktickedString': g_ts.SYNC.A.F.CreateBacktickedString
    readonly 'createIdentifier': g_ts.SYNC.A.F.CreateIdentifier
    readonly 'createQuotedString': g_ts.SYNC.A.F.CreateQuotedString
    readonly 'enrichedForEachContextArgument': g_foreach.SYNC.A.P.EnrichedDictionaryForEach<g_glossary.T.TypeReference.arguments.D<GAnnotation>>
    readonly 'enrichedForEachAsychronousInterface': g_foreach.SYNC.A.P.EnrichedDictionaryForEach<g_glossary.T.Glossary.asynchronous.interfaces.D<GAnnotation>>
    readonly 'enrichedForEachAsychronousAlgorithm': g_foreach.SYNC.A.P.EnrichedDictionaryForEach<g_glossary.T.Glossary.asynchronous.algorithms.D<GAnnotation>>
    readonly 'enrichedForEachAsychronousDownstream': g_foreach.SYNC.A.P.EnrichedDictionaryForEach<g_glossary.T.Glossary.asynchronous.algorithms.D._lconstructor.downstreams.D<GAnnotation>>
    readonly 'enrichedForEachSychronousInterface': g_foreach.SYNC.A.P.EnrichedDictionaryForEach<g_glossary.T.Glossary.synchronous.interfaces.D<GAnnotation>>
    readonly 'enrichedForEachSychronousAlgorithm': g_foreach.SYNC.A.P.EnrichedDictionaryForEach<g_glossary.T.Glossary.synchronous.algorithms.D<GAnnotation>>
    readonly 'forEachType': g_foreach.SYNC.A.P.DictionaryForEach<g_glossary.T.Glossary.types.D<GAnnotation>>
    readonly 'enrichedForEachTypeParameter': g_foreach.SYNC.A.P.EnrichedDictionaryForEach<g_glossary.T.Glossary.types.D.parameters.D<GAnnotation>>
    readonly 'enrichedForEachMember': g_foreach.SYNC.A.P.EnrichedDictionaryForEach<g_glossary.T.Type.group.D<GAnnotation>>
    readonly 'forEachMember': g_foreach.SYNC.A.P.DictionaryForEach<g_glossary.T.Type.group.D<GAnnotation>>
    readonly 'forEachOption': g_foreach.SYNC.A.P.DictionaryForEach<g_glossary.T.Type.taggedUnion.D<GAnnotation>>
    readonly 'enrichedForEachAsyncInterfaceOption': g_foreach.SYNC.A.P.EnrichedDictionaryForEach<g_glossary.T.AsynchronousInterface.choice.options.D<GAnnotation>>
    readonly 'enrichedForEachSyncInterfaceMember': g_foreach.SYNC.A.P.EnrichedDictionaryForEach<g_glossary.T.SynchronousInterface.group.members.D<GAnnotation>>
    readonly 'enrichedForEachParameter': g_foreach.SYNC.A.P.EnrichedDictionaryForEach<g_glossary.T.Glossary.parameters.D<GAnnotation>>
    readonly 'forEachParameter': g_foreach.SYNC.A.P.DictionaryForEach<g_glossary.T.Glossary.parameters.D<GAnnotation>>
    readonly 'forEachImport2': g_foreach.SYNC.A.P.DictionaryForEach<string>
    readonly 'forEachImportArgument': g_foreach.SYNC.A.P.DictionaryForEach<g_glossary.T.Glossary.imports.D.arguments.D<GAnnotation>>
}) => {

    function doOptional<T>(
        $: pt.OptionalValue<T>,
        $i: g_fp.SYNC.I.Line,
        $c: {
            onSet: ($: T, $i: g_fp.SYNC.I.Line) => void,
            onNotset: ($: null, $i: g_fp.SYNC.I.Line) => void,
        },
    ) {
        if ($[0] === true) {
            $c.onSet($[1], $i)
        } else {
            $c.onNotset(null, $i)
        }
    }
    return ($: g_this.T.SerializeGlossaryData<GAnnotation>, $i: g_fp.SYNC.I.Directory) => {
        const imports = $.imports
        return pl.cc($.glossary, ($) => {
            const globalParameters = $.parameters
            const importDefinitions = $.imports

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
                        pl.cc($[1], ($) => {
                            $c.onSet($, $i)
                        })
                        break
                    default: pl.au($[0])
                }
            }
            function serializeContext($: g_glossary.T.Context<GAnnotation>, $i: g_fp.SYNC.I.Line) {
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
            function serializeTypeReference($: g_glossary.T.TypeReference<GAnnotation>, $i: g_fp.SYNC.I.Line) {
                serializeContext($.context, $i)
                $i.snippet(`T.${$d.createIdentifier(`${$.type/*.name*/}`)}`)
                $d.enrichedForEachContextArgument($.arguments, {
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
                                            $d.forEachImportArgument($.arguments, ($) => {
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
                                    $d.forEachParameter(globalParameters, ($) => {
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
                $: g_glossary.T.Context<GAnnotation>,
                $i: g_fp.SYNC.I.Line,
            ) {
                switch ($[0]) {
                    case 'import':
                        pl.cc($[1], ($) => {
                            importDefinitions.__getEntry(
                                $.glossary.key,
                                ($) => {
                                    $d.enrichedForEachContextArgument($.arguments, {
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
                            $d.enrichedForEachParameter(globalParameters, {
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
                $i: g_fp.SYNC.I.Line
            ) {
                $d.enrichedForEachParameter(globalParameters, {
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
                $d.forEachImport2(imports, ($) => {
                    $i.nestedLine(($i) => {
                        $i.snippet(`import * as g_${$.key} from "${$.value}"`)
                    })
                })
                ns(
                    `T`,
                    $i,
                    ($i) => {
                        $d.forEachType($.types, ($) => {
                            const typeParameters = $.value.parameters
                            function serializeTypeAliasAndPossibleNamespace(
                                $: {
                                    type: g_glossary.T.Type<GAnnotation>,
                                    name: string,
                                },
                                $i: g_fp.SYNC.I.Block,
                            ) {
                                const name = $.name
                                function serializeGlobalAndTypeParameters(
                                    $: null,
                                    $i: g_fp.SYNC.I.Line,
                                ) {

                                    $d.enrichedForEachTypeParameter(typeParameters, {
                                        onEmpty: () => {
                                            serializeGlobalParametersOnly($i)
                                        },
                                        onNotEmpty: ($c) => {
                                            $i.snippet(`<`)

                                            $d.forEachParameter(globalParameters, ($) => {
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
                                            type: g_glossary.T.Type<GAnnotation>,
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
                                                        $d.forEachMember($, ($) => {
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
                                                        $d.forEachOption($, ($) => {
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
                                        $: g_glossary.T.Type<GAnnotation>,
                                        $i: g_fp.SYNC.I.Line,
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
                                                    $d.enrichedForEachMember($, {
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
                                                        $d.forEachOption($, ($) => {
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

                function serializeSynchronousInterface($: g_glossary.T.SynchronousInterface<GAnnotation>, $i: g_fp.SYNC.I.Line) {
                    switch ($[0]) {
                        case 'group':
                            pl.cc($[1], ($) => {
                                $d.enrichedForEachSyncInterfaceMember($.members, {
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
                                                    serializeSynchronousInterface($.value, $i)
                                                })
                                            })
                                        })
                                        $i.snippet(`}`)
                                    }
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
                function serializeSynchronousInterfaceReference($: g_glossary.T.SynchronousInterfaceReference<GAnnotation>, $i: g_fp.SYNC.I.Line) {
                    serializeContext($.context, $i)
                    $i.snippet(`SYNC.I.${$d.createIdentifier(`${$.interface}`)}`)
                    serializeContextGlossaryArgumentsOnly($.context, $i)

                }
                function serializeAsynchronousInterface($: g_glossary.T.AsynchronousInterface<GAnnotation>, $i: g_fp.SYNC.I.Line) {
                    switch ($[0]) {
                        case 'choice':
                            pl.cc($[1], ($) => {
                                $d.enrichedForEachAsyncInterfaceOption($.options, {
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
                                                    serializeAsynchronousInterface($.value, $i)
                                                })
                                            })
                                        })
                                        $i.snippet(`}`)
                                    }
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
                function serializeAsynchronousInterfaceReference($: g_glossary.T.AsynchronousInterfaceReference<GAnnotation>, $i: g_fp.SYNC.I.Line) {
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
                $d.forEachImport2(imports, ($) => {
                    $i.nestedLine(($i) => {
                        $i.snippet(`import * as g_${$.key} from "${$.value}"`)
                    })
                })

                pl.cc($.asynchronous, ($) => {
                    ns(`ASYNC`, $i, ($i) => {
                        $d.enrichedForEachAsychronousInterface($.interfaces, {
                            'onEmpty': () => { },
                            'onNotEmpty': ($c) => {
                                ns(`I`, $i, ($i) => {
                                    $c(($) => {
                                        $i.line(``)
                                        $i.nestedLine(($i) => {
                                            $i.snippet(`export type ${$d.createIdentifier($.key)}`)
                                            serializeGlobalParametersOnly($i)
                                            $i.snippet(` = `)
                                            serializeAsynchronousInterface($.value, $i)
                                        })
                                    })
                                })
                            }
                        })
                        $d.enrichedForEachAsychronousAlgorithm($.algorithms, {
                            'onEmpty': () => { },
                            'onNotEmpty': ($c) => {
                                ns(`A`, $i, ($i) => {
                                    $c(($) => {
                                        $i.line(``)
                                        ns(
                                            pl.cc($.value, ($) => {
                                                switch ($[0]) {
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
                                                            case 'constructor':
                                                                pl.cc($[1], ($) => {
                                                                    $i.snippet(`(`)
                                                                    $d.enrichedForEachAsychronousDownstream($.downstreams, {
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
                                                                break
                                                            case 'function':
                                                                pl.cc($[1], ($) => {
                                                                    $i.snippet(`(`)
                                                                    pl.cc($.in, ($) => {
                                                                        $i.snippet(`$: `)
                                                                        serializeTypeReference($, $i)
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
                            }
                        })
                    })

                })
                ns(`SYNC`, $i, ($i) => {

                    pl.cc($.synchronous, ($) => {

                        $d.enrichedForEachSychronousInterface($.interfaces, {
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
                        $d.enrichedForEachSychronousAlgorithm($.algorithms, {
                            'onEmpty': () => { },
                            'onNotEmpty': ($c) => {
                                ns(`A`, $i, ($i) => {
                                    $c(($) => {
                                        $i.line(``)
                                        ns(
                                            pl.cc($.value, ($) => {
                                                switch ($[0]) {
                                                    case 'procedure':
                                                        return pl.cc($[1], ($) => {
                                                            return `P`
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
                                                            case 'procedure':
                                                                pl.cc($[1], ($) => {
                                                                    $i.snippet(`(`)
                                                                    pl.cc($.in, ($) => {
                                                                        switch ($[0]) {
                                                                            case 'interface':
                                                                                pl.cc($[1], ($) => {
                                                                                    $i.snippet(`$c: ($i: `)
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
                                                            case 'function':
                                                                pl.cc($[1], ($) => {
                                                                    $i.snippet(`(`)
                                                                    pl.cc($.in, ($) => {
                                                                        switch ($[0]) {
                                                                            case 'interface':
                                                                                pl.cc($[1], ($) => {
                                                                                    $i.snippet(`$c: ($i: `)
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

