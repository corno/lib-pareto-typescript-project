import * as pl from 'pareto-core-lib'

import * as api from "../api"

import * as mglossary from "../../glossary"
import * as mfp from "lib-fountain-pen"

export const $$: api.CcreateGlossarySerializer = ($d) => {

    return ($, $i) => {
        function serializeContext($: mglossary.TContext, $i: mfp.ILine) {
            switch ($[0]) {
                case 'import':
                    pl.cc($[1], ($) => {
                        $i.snippet(`m${$}.`)
                    })
                    break
                case 'local':
                    pl.cc($[1], ($) => {

                    })
                    break
                default: pl.au($[0])
            }
        }
        $i.file(`index.ts`, ($i) => {
            $i.line(`export * from "./types.generated"`)
            $i.line(`export * from "./public.generated"`)
        })
        $i.file(`types.generated.ts`, ($i) => {
            function ns($: string, $i: mfp.IBlock, $content: ($i: mfp.IBlock) => void) {
                $i.line(``)
                $i.nestedLine(($i) => {
                    $i.snippet(`export namespace ${$d.createIdentifier($)} {`)
                    $i.indent(($i) => {
                        $content($i)
                    })
                    $i.snippet(`}`)

                })
            }
            function getTypeName($: {
                $: mglossary.TType,
                name: string
            }): string {
                const name = $.name
                return pl.cc($.$, $ => {
                    const namespacedType = `${$d.createIdentifier(name)}.$`
                    switch ($[0]) {
                        case 'null':
                            return pl.cc($[1], ($) => {
                                return `null`
                            })
                        case 'boolean':
                            return pl.cc($[1], ($) => {
                                return `boolean`
                            })
                        case 'reference':
                            return pl.cc($[1], ($) => {
                                function getContext($: mglossary.TContext): string {
                                    switch ($[0]) {
                                        case 'import':
                                            return pl.cc($[1], ($) => {
                                                return `m${$}.`
                                            })
                                        case 'local':
                                            return pl.cc($[1], ($) => {
                                                return ``
                                            })
                                        default: return pl.au($[0])
                                    }
                                }
                                return `${getContext($.context)}${$d.createIdentifier(`G${$.type}`)}.$`
                            })
                        case 'number':
                            return pl.cc($[1], ($) => {
                                return `number`
                            })
                        case 'string':
                            return pl.cc($[1], ($) => {
                                return `string`
                            })
                        case 'computed':
                            return pl.cc($[1], ($) => {
                                return `() => ${getTypeName({
                                    $: $,
                                    name: name,
                                })}`
                            })
                        case 'array':
                            return pl.cc($[1], ($) => {
                                return namespacedType
                            })
                        case 'dictionary':
                            return pl.cc($[1], ($) => {
                                return namespacedType
                            })
                        case 'group':
                            return pl.cc($[1], ($) => {
                                return namespacedType
                            })
                        case 'nested':
                            return pl.cc($[1], ($) => {
                                return namespacedType
                            })
                        case 'optional':
                            return pl.cc($[1], ($) => {
                                return `null | ${getTypeName({
                                    $: $,
                                    name: name
                                })}`
                            })
                        case 'parameter':
                            return pl.cc($[1], ($) => {
                                return $d.createIdentifier(`A${$}`)
                            })
                        case 'taggedUnion':
                            return pl.cc($[1], ($) => {
                                return namespacedType
                            })
                        case 'template':
                            return pl.cc($[1], ($) => {
                                return namespacedType
                            })
                        default: return pl.au($[0])
                    }

                })
            }
            function serializeType2(
                $: {
                    $: mglossary.TType,
                    name: string,
                },
                $i: mfp.IBlock
            ) {
                const name = $.name
                function createInstanceNamespace($namespaces: ($i: mfp.IBlock) => void, $c: ($i: mfp.ILine) => void) {
                    ns(
                        $d.createIdentifier(name),
                        $i,
                        ($i) => {
                            $namespaces($i)
                            $i.nestedLine(($i) => {
                                $i.snippet(`export type $ = `)
                                $c($i)
                            })
                        }
                    )
                }
                pl.cc($.$, ($) => {
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
                            })
                            break
                        case 'array':
                            pl.cc($[1], ($) => {
                                createInstanceNamespace(
                                    ($i) => {
                                        serializeType2({
                                            $: $,
                                            name: `A`
                                        }, $i)
                                    },
                                    ($i) => {
                                        $i.snippet(`pt.Array<${getTypeName({
                                            $: $,
                                            name: `A`,
                                        })}>`)
                                    }
                                )
                            })
                            break
                        case 'dictionary':
                            pl.cc($[1], ($) => {
                                createInstanceNamespace(
                                    ($i) => {
                                        serializeType2({
                                            $: $,
                                            name: `D`
                                        }, $i)
                                    },
                                    ($i) => {
                                        $i.snippet(`pt.Dictionary<${getTypeName({
                                            $: $,
                                            name: `D`,
                                        })}>`)
                                    }
                                )
                            })
                            break
                        case 'group':
                            pl.cc($[1], ($) => {
                                createInstanceNamespace(
                                    ($i) => {
                                        $d.dictionaryForEach($, ($) => {
                                            serializeType2({
                                                $: $.value.type,
                                                name: `P${$.key}`
                                            }, $i)

                                        })
                                    },
                                    ($i) => {
                                        $i.snippet(`{`)
                                        $i.indent(($i) => {
                                            $d.dictionaryForEach($, ($) => {
                                                $i.nestedLine(($i) => {
                                                    $i.snippet(`readonly ${$d.createApostrophedString($.key)}${$.value.optional === undefined || $.value.optional === false ? `` : `?`}: ${getTypeName({
                                                        $: $.value.type,
                                                        name: name,
                                                    })}`)
                                                })
                                            })
                                        })
                                        $i.snippet(`}`)
                                    }
                                )
                            })
                            break
                        case 'nested':
                            pl.cc($[1], ($) => {
                                createInstanceNamespace(
                                    ($i) => {
                                        serializeType2({
                                            $: $,
                                            name: `N`
                                        }, $i)
                                    },
                                    ($i) => {
                                        $i.snippet(`pt.Nested<${getTypeName({
                                            $: $,
                                            name: `N`,
                                        })}>`)
                                    }
                                )
                            })
                            break
                        case 'optional':
                            pl.cc($[1], ($) => {
                            })
                            break
                        case 'parameter':
                            pl.cc($[1], ($) => {
                            })
                            break
                        case 'taggedUnion':
                            pl.cc($[1], ($) => {
                                createInstanceNamespace(
                                    ($i) => {
                                        $d.dictionaryForEach($, ($) => {
                                            serializeType2({
                                                $: $.value,
                                                name: `O${$.key}`
                                            }, $i)


                                        })
                                    },
                                    ($i) => {

                                        $i.indent(($i) => {
                                            $d.dictionaryForEach($, ($) => {
                                                $i.nestedLine(($i) => {
                                                    $i.snippet(`| [${$d.createApostrophedString($.key)}, ${getTypeName({
                                                        $: $.value,
                                                        name: `O${$.key}`,
                                                    })}]`)
                                                })
                                            })
                                        })
                                    }
                                )

                            })
                            break
                        case 'template':
                            pl.cc($[1], ($) => {
                                createInstanceNamespace(
                                    ($i) => {

                                    },
                                    ($i) => {

                                        if ($.context !== undefined) {
                                            serializeContext($.context, $i)
                                        }
                                        $i.snippet($d.createIdentifier(`M${$.template}`))
                                        $d.enrichedDictionaryForEach($.arguments, {
                                            onNotEmpty: ($c) => {
                                                $i.snippet(`<`)
                                                $c(($) => {
                                                    $i.snippet($.isFirst ? `` : `, `)
                                                    pl.cc($.value, ($) => {
                                                        $i.snippet(getTypeName({
                                                            $: $,
                                                            name: name,
                                                        }))
                                                    })
                                                })

                                                $i.snippet(`>`)
                                            },
                                            onEmpty: () => {
                                                //nothing to do
                                            }
                                        })
                                    }
                                )
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
            $d.dictionaryForEach($.imports, ($) => {
                $i.nestedLine(($i) => {
                    $i.snippet(`import * as m${$.key} from "${$.value}"`)
                })
            })
            if ($.templates !== undefined) {
                $d.dictionaryForEach($.templates, ($) => {
                    $i.line(``)
                    $i.nestedLine(($i) => {
                        $i.snippet(`export type ${$d.createIdentifier(`M${$.key}`)}`)
                        $d.enrichedDictionaryForEach($.value.parameters, {
                            onEmpty: () => {
                                //nothing
                            },
                            onNotEmpty: ($c) => {
                                $i.snippet(`<`)
                                $c(($) => {
                                    $i.snippet(`${$.isFirst ? `` : `, `}A${$.key}`)
                                })
                                $i.snippet(`>`)

                            }
                        })
                        $i.snippet(` = `)
                        //serializeType($.value.type, $i)
                    })
                })
            }
            $d.dictionaryForEach($.types, ($) => {
                ns(
                    $d.createIdentifier(`G${$.key}`),
                    $i,
                    ($i) => {
                        serializeType2({
                            $: $.value,
                            name: `G`
                        }, $i)
                        $i.nestedLine(($i) => {
                            $i.snippet(`export type $ = ${getTypeName({
                                $: $.value,
                                name: `G`
                            })}`)
                        })
                    }
                )
            })

        })
        $i.file(`public.generated.ts`, ($i) => {

            const parameters: mglossary.T_$Parameters = $.parameters !== undefined ? $.parameters : pl.createEmptyDictionary()
            function serializeParameters($: mglossary.T_$Parameters, $i: mfp.ILine) {
                $d.enrichedDictionaryForEach($, {
                    onEmpty: () => {

                    },
                    onNotEmpty: ($c) => {

                        $i.snippet(`<`)
                        $c(($) => {
                            $i.snippet($.isFirst ? `` : `, `)
                            $i.snippet($d.createIdentifier(`PG${$.key}`))
                        })

                        $i.snippet(`>`)
                    }
                })
            }
            function serializeTypeReference($: mglossary.TTypeReference, $i: mfp.ILine) {
                serializeContext($.context, $i)
                $i.snippet($d.createIdentifier(`T${$.type}`))
            }
            function ns($: string, $i: mfp.IBlock, $content: ($i: mfp.IBlock) => void) {
                $i.line(``)
                $i.nestedLine(($i) => {
                    $i.snippet(`export namespace ${$d.createIdentifier($)} {`)
                    $i.indent(($i) => {
                        $content($i)
                    })
                    $i.snippet(`}`)

                })
            }
            function serializeInterfaceReference($: mglossary.TInterfaceReference, $i: mfp.ILine) {
                if ($.context !== undefined) {
                    serializeContext($.context, $i)
                }
                $i.snippet($d.createIdentifier(`I${$.interface}`))

            }
            function serializeInterface($: mglossary.TInterface, $i: mfp.ILine) {
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
                                    $i.snippet(`$: `)
                                    serializeTypeReference($, $i)
                                    $i.snippet(`, `)
                                }
                            })
                            pl.cc($.interface, ($) => {
                                if ($ === null) {

                                } else {
                                    if ($.managed) {
                                        $i.snippet(`$c: ($i: `)
                                        serializeInterface($.interface, $i)
                                        $i.snippet(`) => void`)
                                    }
                                }
                            })
                            $i.snippet(`) => `)
                            pl.cc($.interface, ($) => {
                                if ($ === null) {
                                    $i.snippet(`void`)
                                } else {
                                    if ($.managed) {
                                        $i.snippet(`void`)
                                    } else {
                                        serializeInterface($.interface, $i)
                                    }
                                }
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
                $i.snippet(`import * as t from './types.generated'`)
            })
            $i.line(``)
            $d.dictionaryForEach($.imports, ($) => {
                $i.nestedLine(($i) => {
                    $i.snippet(`import * as m${$.key} from "${$.value}"`)
                })
            })
            $d.dictionaryForEach($.types, ($) => {
                $i.line(``)
                $i.nestedLine(($i) => {
                    $i.snippet(`export type ${$d.createIdentifier(`T${$.key}`)} = t.G${$.key}.$`)
                })
            })
            $d.dictionaryForEach($.interfaces, ($) => {
                $i.line(``)
                $i.nestedLine(($i) => {
                    $i.snippet(`export type ${$d.createIdentifier(`I${$.key}`)} = `)
                    serializeInterface($.value, $i)
                })
            })
            $d.dictionaryForEach($.functions, ($) => {
                $i.line(``)
                $i.nestedLine(($i) => {
                    $i.snippet(`export type ${$d.createIdentifier(`F${$.key}`)} = `)
                    serializeParameters(parameters, $i)
                    pl.cc($.value, ($) => {

                        $i.snippet(`($: `)
                        serializeTypeReference($.data, $i)
                        $i.snippet(`,`)
                        if ($['managed input interface'] !== null) {

                            $i.snippet(` $c: ($i: `)
                            serializeInterfaceReference($['managed input interface'], $i)
                            $i.snippet(`) => void,`)
                        }
                        if ($['output interface'] !== null) {

                            $i.snippet(` $i: `)
                            serializeInterfaceReference($['output interface'], $i)
                            $i.snippet(`,`)
                        }
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

