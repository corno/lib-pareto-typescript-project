import * as pl from 'pareto-core-lib'

import * as gglossary from "../../glossary"
import * as gfp from "lib-fountain-pen"

export namespace VOptional { }
export type VOptional<AType> =
    | ['not set', {}]
    | ['set', AType]

export type MOptional<AType> = VOptional<AType>

import { CcreateGlossarySerializer } from "../api"

export const $$:CcreateGlossarySerializer = ($d) => {

    return ($, $i) => {
        const globalParameters = $.parameters

        function ns(
            $: string,
            $i: gfp.IBlock,
            $c: ($i: gfp.IBlock) => void
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
            $i: gfp.ILine,
            $c: {
                onSet: ($: T, $i: gfp.ILine) => void,
                onNotset: ($: {}, $i: gfp.ILine) => void,
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
        function serializeContext($: gglossary.T.Context<string>, $i: gfp.ILine) {
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
        function serializeTypeReference($: gglossary.T.TypeReference<string>, $i: gfp.ILine) {
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
                                $d.dictionaryForEach(globalParameters, ($) => {
                                    $i.snippet(`GP${$.key}, `)
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
            $: gglossary.T.Context<string>,
            $i: gfp.ILine,
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
            $i: gfp.ILine
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
            $i.nestedLine(($i) => {
                $i.snippet(`import * as pt from 'pareto-core-types'`)
            })
            $i.line(``)
            $d.dictionaryForEach($.imports, ($) => {
                $i.nestedLine(($i) => {
                    $i.snippet(`import * as g${$.key} from "${$.value}"`)
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
                                type: gglossary.T.Type<string>,
                                name: string,
                            },
                            $i: gfp.IBlock,
                        ) {
                            const name = $.name
                            function serializeGlobalAndTypeParameters(
                                $: null,
                                $i: gfp.ILine,
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
                                    $c: ($i: gfp.IBlock) => void
                                ) {
                                    ns(
                                        name,
                                        $i,
                                        $c
                                    )
                                }
                                function createCurrentAndSerializeType(
                                    $: {
                                        type: gglossary.T.Type<string>,
                                        nextName: string,
                                    },
                                    $i: gfp.IBlock,
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
                                    $: gglossary.T.Type<string>,
                                    $i: gfp.ILine,
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

            function serializeInterfaceReference($: gglossary.T.InterfaceReference<string>, $i: gfp.ILine) {
                serializeContext($.context, $i)
                $i.snippet($d.createIdentifier(`I${$.interface}`))
                serializeContextArgumentsOnly($.context, $i)

            }
            function serializeInterface($: gglossary.T.Interface<string>, $i: gfp.ILine) {
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
                    $i.snippet(`import * as g${$.key} from "${$.value}"`)
                })
            })
            $d.dictionaryForEach($.interfaces, ($) => {
                $i.line(``)
                $i.nestedLine(($i) => {
                    $i.snippet(`export type ${$d.createIdentifier(`I${$.key}`)}`)
                    serializeGlobalParametersOnly($i)
                    $i.snippet(` = `)
                    serializeInterface($.value, $i)
                })
            })
            $d.dictionaryForEach($.functions, ($) => {
                $i.line(``)
                $i.nestedLine(($i) => {
                    $i.snippet(`export type ${$d.createIdentifier(`F${$.key}`)}`)
                    $i.snippet(` = `)
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

