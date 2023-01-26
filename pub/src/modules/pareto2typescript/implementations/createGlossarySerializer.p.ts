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
            function doType(
                $: {
                    $: mglossary.TType,
                    name: string,
                },
                $parameters: ($i: mfp.ILine) => void,
                $i: mfp.ILine,
            ): void {
                const name = $.name
                pl.cc($.$, $ => {
                    function doNamespacedType($i: mfp.ILine) {
                        $i.snippet(`${$d.createIdentifier(name)}.$`)
                        $parameters($i)
                    }

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
                                const type = $.type
                                switch ($.context[0]) {
                                    case 'import':
                                        pl.cc($.context[1], ($) => {
                                            $i.snippet(`m${$}.${$d.createIdentifier(`T${type}`)}`)
                                        })
                                        break
                                    case 'local':
                                        pl.cc($.context[1], ($) => {
                                            $i.snippet(`${$d.createIdentifier(`G${type}`)}.$`)
                                        })
                                        break
                                    default: pl.au($.context[0])
                                }
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
                                doNamespacedType($i)
                            })
                            break
                        case 'array':
                            pl.cc($[1], ($) => {
                                doNamespacedType($i)
                            })
                            break
                        case 'dictionary':
                            pl.cc($[1], ($) => {
                                doNamespacedType($i)
                            })
                            break
                        case 'group':
                            pl.cc($[1], ($) => {
                                doNamespacedType($i)
                            })
                            break
                        case 'nested':
                            pl.cc($[1], ($) => {
                                doNamespacedType($i)
                            })
                            break
                        case 'optional':
                            pl.cc($[1], ($) => {
                                doNamespacedType($i)
                            })
                            break
                        case 'parameter':
                            pl.cc($[1], ($) => {
                                $i.snippet($d.createIdentifier(`A${$}`))
                            })
                            break
                        case 'taggedUnion':
                            pl.cc($[1], ($) => {
                                doNamespacedType($i)
                            })
                            break
                        case 'template':
                            pl.cc($[1], ($) => {
                                doNamespacedType($i)
                            })
                            break
                        default: pl.au($[0])
                    }

                })
            }
            function serializeType2(
                $: {
                    $: mglossary.TType,
                    name: string,
                },
                $parameters: ($i: mfp.ILine) => void,
                $i: mfp.IBlock
            ) {
                const name = $.name
                function createInstanceNamespace(
                    $namespaces: ($i: mfp.IBlock) => void,
                    $c: ($i: mfp.ILine) => void
                ) {
                    ns(
                        name,
                        $i,
                        ($i) => {
                            $namespaces($i)
                            $i.nestedLine(($i) => {
                                $i.snippet(`export type $`)
                                $parameters($i)
                                $i.snippet(` = `)
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
                                createInstanceNamespace(
                                    ($i) => {
                                        serializeType2(
                                            {
                                                $: $,
                                                name: `C`
                                            },
                                            $parameters,
                                            $i
                                        )
                                    },
                                    ($i) => {
                                        $i.snippet(`() => `)
                                        doType(
                                            {
                                                $: $,
                                                name: `C`,
                                            },
                                            $parameters,
                                            $i
                                        )
                                    }
                                )
                            })
                            break
                        case 'array':
                            pl.cc($[1], ($) => {
                                createInstanceNamespace(
                                    ($i) => {
                                        serializeType2(
                                            {
                                                $: $,
                                                name: `A`
                                            },
                                            $parameters,
                                            $i
                                        )
                                    },
                                    ($i) => {
                                        $i.snippet(`pt.Array<`)
                                        doType(
                                            {
                                                $: $,
                                                name: `A`,
                                            },
                                            $parameters,
                                            $i
                                        )
                                        $i.snippet(`>`)
                                    }
                                )
                            })
                            break
                        case 'dictionary':
                            pl.cc($[1], ($) => {
                                createInstanceNamespace(
                                    ($i) => {
                                        serializeType2(
                                            {
                                                $: $,
                                                name: `D`
                                            },
                                            $parameters,
                                            $i
                                        )
                                    },
                                    ($i) => {
                                        $i.snippet(`pt.Dictionary<`)
                                        doType(
                                            {
                                                $: $,
                                                name: `D`,
                                            },
                                            $parameters,
                                            $i
                                        )
                                        $i.snippet(`>`)
                                    }
                                )
                            })
                            break
                        case 'group':
                            pl.cc($[1], ($) => {
                                createInstanceNamespace(
                                    ($i) => {
                                        $d.dictionaryForEach($, ($) => {
                                            serializeType2(
                                                {
                                                    $: $.value.type,
                                                    name: `P${$.key}`
                                                },
                                                $parameters,
                                                $i
                                            )

                                        })
                                    },
                                    ($i) => {
                                        $i.snippet(`{`)
                                        $i.indent(($i) => {
                                            $d.dictionaryForEach($, ($) => {
                                                $i.nestedLine(($i) => {
                                                    $i.snippet(`readonly ${$d.createApostrophedString($.key)}${$.value.optional === undefined || $.value.optional === false ? `` : `?`}: `)

                                                    doType(
                                                        {
                                                            $: $.value.type,
                                                            'name': `P${$.key}`,
                                                        },
                                                        $parameters,
                                                        $i,
                                                    )
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
                                        serializeType2(
                                            {
                                                $: $,
                                                name: `N`
                                            },
                                            $parameters,
                                            $i
                                        )
                                    },
                                    ($i) => {
                                        $i.snippet(`pt.Nested<`)
                                        doType(
                                            {
                                                $: $,
                                                name: `N`,
                                            },
                                            $parameters,
                                            $i
                                        )
                                        $i.snippet(`>`)
                                    }
                                )
                            })
                            break
                        case 'optional':
                            pl.cc($[1], ($) => {
                                createInstanceNamespace(
                                    ($i) => {
                                        serializeType2(
                                            {
                                                $: $,
                                                name: `O`
                                            },
                                            $parameters,
                                            $i
                                        )
                                    },
                                    ($i) => {
                                        $i.snippet(`null | `)
                                        doType(
                                            {
                                                $: $,
                                                name: `O`,
                                            },
                                            $parameters,
                                            $i
                                        )
                                    }
                                )
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
                                            serializeType2(
                                                {
                                                    $: $.value,
                                                    name: `O${$.key}`
                                                },
                                                $parameters,
                                                $i
                                            )


                                        })
                                    },
                                    ($i) => {

                                        $i.indent(($i) => {
                                            $d.dictionaryForEach($, ($) => {
                                                $i.nestedLine(($i) => {
                                                    $i.snippet(`| [${$d.createApostrophedString($.key)}, `)
                                                    doType(
                                                        {
                                                            $: $.value,
                                                            name: `O${$.key}`,
                                                        },
                                                        $parameters,
                                                        $i)
                                                    $i.snippet(`]`)
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

                                        $d.dictionaryForEach($.arguments, ($) => {

                                            serializeType2(
                                                {
                                                    $: $.value,
                                                    name: `TP${$.key}`
                                                },
                                                $parameters,
                                                $i
                                            )
                                        })
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
                                                    doType(
                                                        {
                                                            $: $.value,
                                                            name: `TP${$.key}`,
                                                        },
                                                        $parameters,
                                                        $i
                                                    )
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

                    serializeType2(
                        {
                            $: $.value.type,
                            name: `V${$.key}`,
                        },
                        ($i) => {
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
                        },
                        $i,
                    )
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
                        doType(
                            {
                                $: $.value.type,
                                name: `V${$.key}`,
                            },
                            ($i) => {
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
                            },
                            $i
                        )
                    })
                })
            }
            $d.dictionaryForEach($.types, ($) => {
                ns(
                    `G${$.key}`,
                    $i,
                    ($i) => {
                        serializeType2(
                            {
                                $: $.value,
                                name: `G`
                            },
                            () => { },
                            $i
                        )
                        $i.nestedLine(($i) => {
                            $i.snippet(`export type $ = `)

                            doType(
                                {
                                    $: $.value,
                                    name: `G`
                                },
                                () => {},
                                $i
                            )
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
                    $i.snippet(`export type ${$d.createIdentifier(`T${$.key}`)} = t.G${$d.createIdentifier($.key)}.$`)
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

