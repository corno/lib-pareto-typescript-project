import * as pl from 'pareto-core-lib'
import * as pt from 'pareto-core-types'

import * as gglossary from "../../glossary"
import * as gfp from "lib-fountain-pen"

export namespace VOptional { }
export type VOptional<AType> =
    | ['not set', {}]
    | ['set', AType]

import { CcreateSerializer } from "../definition/api.generated"

export const $$:CcreateSerializer = ($d) => {
    // function doReference<T>(
    //     $: gglossary.MReference<T>,
    //     $i: gfp.ILine,
    //     //$c: ($: T, $i: gfp.ILine) => void
    // ) {
    //     $i.snippet(`{`)
    //     $i.indent(($i) => {
    //         $i.nestedLine(($i) => {
    //             $i.snippet(`'annotation': "${$.annotation}",`)
    //         })
    //         $i.nestedLine(($i) => {
    //             $i.snippet(`'name': "${$.name}",`)
    //         })
    //     })
    //     $i.snippet(`}`)
    // }

    function doOptional<T>(
        $: pt.OptionalValue<T>,
        $i: gfp.ILine,
        $c: ($: T, $i: gfp.ILine) => void,
    ) {
        switch ($[0]) {
            case false:
                    $i.snippet(`[false]`)
                break
            case true:
                pl.cc($[1], ($) => {
                    $i.snippet(`[true, `)
                    $c($, $i)
                    $i.snippet(`]`)
                })
                break
            default: pl.au($[0])
        }
    }
    function serializeTypeReference($: gglossary.T.TypeReference<string>, $i: gfp.ILine) {
        $i.snippet(`{`)
        $i.indent(($i) => {
            $i.nestedLine(($i) => {
                $i.snippet(`'context': `)
                serializeContext($.context, $i)
                $i.snippet(`,`)
            })
            $i.nestedLine(($i) => {
                $i.snippet(`'type': `)
                $i.snippet(`"` + $.type + `"`)
                //doReference($.type, $i)
                $i.snippet(`,`)
            })
            $i.nestedLine(($i) => {
                $i.snippet(`'arguments': d({`)
                $i.indent(($i) => {
                    $d.dictionaryForEach($.arguments, ($) => {
                        $i.nestedLine(($i) => {
                            $i.snippet(`"${$.key}": `)
                            serializeTypeReference($.value, $i)
                            $i.snippet(`,`)
                        })
                    })
                })
                $i.snippet(`}),`)
            })
        })
        $i.snippet(`}`)
    }

    function serializeType($: gglossary.T.Type<string>, $i: gfp.ILine) {
        $i.snippet(`<gglossary.T.Type<pd.SourceLocation>>`)

        switch ($[0]) {
            case 'computed':
                pl.cc($[1], ($) => {
                    $i.snippet(`['computed', `)
                    serializeType($, $i)
                    $i.snippet(`]`)
                })
                break
            case 'optional':
                pl.cc($[1], ($) => {
                    $i.snippet(`['optional', `)
                    serializeType($, $i)
                    $i.snippet(`]`)
                })
                break
            case 'null':
                pl.cc($[1], ($) => {
                    $i.snippet(`['null', {}]`)
                })
                break
            case 'boolean':
                pl.cc($[1], ($) => {
                    $i.snippet(`['boolean', {}]`)
                })
                break
            case 'reference':
                pl.cc($[1], ($) => {
                    $i.snippet(`['reference', `)
                    serializeTypeReference($, $i)
                    $i.snippet(`]`)
                })
                break
            case 'number':
                pl.cc($[1], ($) => {
                    $i.snippet(`['number', {}]`)
                })
                break
            case 'string':
                pl.cc($[1], ($) => {
                    $i.snippet(`['string', {}]`)
                })
                break
            case 'array':
                pl.cc($[1], ($) => {
                    $i.snippet(`['array', `)
                    serializeType($, $i)
                    $i.snippet(`]`)
                })
                break
            case 'dictionary':
                pl.cc($[1], ($) => {
                    $i.snippet(`['dictionary', `)
                    serializeType($, $i)
                    $i.snippet(`]`)
                })
                break
            case 'group':
                pl.cc($[1], ($) => {
                    $i.snippet(`['group', d({`)
                    $i.indent(($i) => {
                        $d.dictionaryForEach($, ($) => {
                            $i.nestedLine(($i) => {
                                $i.snippet(`"${$.key}": {`)
                                $i.indent(($i) => {
                                    $i.nestedLine(($i) => {
                                        $i.snippet(`'type': `)
                                        serializeType($.value.type, $i)
                                        $i.snippet(`,`)
                                    })
                                })
                                $i.snippet(`},`)
                            })
                        })
                    })
                    $i.snippet(`})]`)
                })
                break
            case 'nested':
                pl.cc($[1], ($) => {
                    $i.snippet(`['nested', `)
                    serializeType($, $i)
                    $i.snippet(`]`)
                })
                break
            case 'nested':
                pl.cc($[1], ($) => {
                    $i.snippet(`['nested', `)
                    serializeType($, $i)
                    $i.snippet(`]`)
                })
                break
            case 'type parameter':
                pl.cc($[1], ($) => {
                    $i.snippet(`['type parameter', `)
                    $i.snippet(`"${$}"`)
                    $i.snippet(`]`)
                })
                break
            case 'glossary parameter':
                pl.cc($[1], ($) => {
                    $i.snippet(`['glossary parameter', `)
                    $i.snippet(`"${$}"`)
                    $i.snippet(`]`)
                })
                break
            case 'taggedUnion':
                pl.cc($[1], ($) => {
                    $i.snippet(`['taggedUnion', d({`)
                    $i.indent(($i) => {
                        $d.dictionaryForEach($, ($) => {
                            $i.nestedLine(($i) => {
                                $i.snippet(`"${$.key}": `)
                                serializeType($.value, $i)
                                $i.snippet(`,`)
                            })
                        })
                    })
                    $i.snippet(`})]`)
                })
                break
            default: pl.au($[0])
        }
    }
    function serializeContext($: gglossary.T.Context<string>, $i: gfp.ILine) {
        $i.snippet(`<gglossary.T.Context<pd.SourceLocation>>`)
        switch ($[0]) {
            case 'import':
                pl.cc($[1], ($) => {
                    $i.snippet(`['import', {`)
                    $i.indent(($i) => {
                        $i.nestedLine(($i) => {
                            $i.snippet(`'glossary': "${$.glossary}",`)
                        })
                        $i.nestedLine(($i) => {
                            $i.snippet(`'arguments': d({`)
                            $i.indent(($i) => {
                                $d.dictionaryForEach($.arguments, ($) => {
                                    $i.nestedLine(($i) => {
                                        $i.snippet(`"${$.key}": `)
                                        serializeTypeReference($.value, $i)
                                    })
                                })
                            })
                            $i.snippet(`}),`)
                        })
                    })
                    $i.snippet(`}]`)
                })
                break
            case 'local':
                pl.cc($[1], ($) => {
                    $i.snippet(`['local', {}]`)
                })
                break
            default: pl.au($[0])
        }
    }
    function serializeInterfaceReference($: gglossary.T.InterfaceReference<string>, $i: gfp.ILine) {
        $i.snippet(`{`)
        $i.indent(($i) => {
            $i.nestedLine(($i) => {
                $i.snippet(`'context': `)
                serializeContext($.context, $i)
                $i.snippet(`,`)
            })
            $i.nestedLine(($i) => {
                $i.snippet(`'interface': "${$.interface}",`)
            })
        })
        $i.snippet(`}`)

    }
    function serializeInterface($: gglossary.T.Interface<string>, $i: gfp.ILine) {
        switch ($[0]) {
            case 'group':
                pl.cc($[1], ($) => {

                    $i.snippet(`['group', {`)
                    $i.indent(($i) => {
                        $i.nestedLine(($i) => {
                            $i.snippet(`'members': d({`)
                            $i.indent(($i) => {
                                $d.dictionaryForEach($.members, ($) => {
                                    $i.nestedLine(($i) => {
                                        $i.snippet(`"${$.key}": `)
                                        serializeInterface($.value, $i)
                                        $i.snippet(`,`)
                                    })
                                })
                            })
                            $i.snippet(`}),`)
                        })
                    })
                    $i.snippet(`}]`)
                })
                break
            case 'method':
                pl.cc($[1], ($) => {
                    $i.snippet(`['method', {`)
                    $i.indent(($i) => {
                        pl.cc($.data, ($) => {
                            $i.nestedLine(($i) => {
                                $i.snippet(`'data': `)
                                doOptional($, $i, ($, $i) => {
                                    serializeTypeReference($, $i)
                                })
                                $i.snippet(`,`)
                            })
                        })
                        pl.cc($.interface, ($) => {
                            $i.nestedLine(($i) => {
                                $i.snippet(`'interface': `)
                                doOptional($, $i, ($, $i) => {
                                    $i.snippet(`{`)
                                    $i.indent(($i) => {
                                        $i.nestedLine(($i) => {
                                            $i.snippet(`'managed': ${$.managed}`)
                                        })
                                        $i.nestedLine(($i) => {
                                            $i.snippet(`'interface': `)
                                            if ($.interface === null) {
                                                $i.snippet(`null`)
                                            } else {
                                                serializeInterface($.interface, $i)
                                            }
                                        })

                                    })
                                    $i.snippet(`}`)

                                })
                                $i.snippet(`,`)
                            })
                        })
                    })
                    $i.snippet(`}]`)

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
    return ($, $i) => {
        $i.snippet(`{`)
        $i.indent(($i) => {
            $i.nestedLine(($i) => {
                $i.snippet(`'imports': d({`)
                $i.indent(($i) => {
                    $d.dictionaryForEach($.imports, ($) => {
                        $i.nestedLine(($i) => {
                            $i.snippet(`"${$.key}": "${$.value}",`)
                        })
                    })
                })
                $i.snippet(`}),`)
            })
            $i.nestedLine(($i) => {
                $i.snippet(`'parameters': d({`)
                $i.indent(($i) => {
                    $d.dictionaryForEach($.parameters, ($) => {
                        $i.nestedLine(($i) => {
                            $i.snippet(`"${$.key}": {},`)
                        })
                    })
                })
                $i.snippet(`}),`)
            })
            $i.nestedLine(($i) => {
                $i.snippet(`'types': d({`)
                $i.indent(($i) => {
                    $d.dictionaryForEach($.types, ($) => {

                        $i.nestedLine(($i) => {
                            $i.snippet(`"${$.key}": {`)
                            $i.indent(($i) => {
                                $i.nestedLine(($i) => {
                                    $i.snippet(`'parameters': d({`)
                                    $i.indent(($i) => {
                                        $d.dictionaryForEach($.value.parameters, ($) => {
                                            $i.nestedLine(($i) => {
                                                $i.snippet(`"${$.key}": {},`)
                                            })
                                        })
                                    })
                                    $i.snippet(`}),`)
                                })
                                $i.nestedLine(($i) => {
                                    $i.snippet(`'type': `)
                                    serializeType($.value.type, $i)

                                })
                            })
                            $i.snippet(`},`)
                        })
                    })
                })
                $i.snippet(`}),`)
            })
            $i.nestedLine(($i) => {
                $i.snippet(`'interfaces': d({`)
                $i.indent(($i) => {
                    $d.dictionaryForEach($.interfaces, ($) => {
                        $i.nestedLine(($i) => {
                            $i.snippet(`"${$.key}": `)
                            serializeInterface($.value, $i)
                            $i.snippet(`,`)
                        })
                    })
                })
                $i.snippet(`}),`)
            })
            $i.nestedLine(($i) => {
                $i.snippet(`'functions': d({`)
                $i.indent(($i) => {
                    $d.dictionaryForEach($.functions, ($) => {
                        $i.nestedLine(($i) => {

                            $i.snippet(`"${$.key}": {`)
                            $i.indent(($i) => {
                                $i.nestedLine(($i) => {
                                    $i.snippet(`'data': `)
                                    serializeTypeReference($.value.data, $i)
                                    $i.snippet(`,`)
                                })
                                $i.nestedLine(($i) => {
                                    $i.snippet(`'managed input interface': `)
                                    doOptional($.value['managed input interface'], $i, ($, $i) => {
                                        serializeInterfaceReference($, $i)
                                    })
                                    $i.snippet(`,`)
                                })
                                $i.nestedLine(($i) => {
                                    $i.snippet(`'output interface': `)
                                    doOptional($.value['output interface'], $i, ($, $i) => {
                                        serializeInterfaceReference($, $i)
                                    })
                                    $i.snippet(`,`)
                                })
                                $i.nestedLine(($i) => {
                                    $i.snippet(`'return type': `)
                                    switch ($.value['return type'][0]) {
                                        case 'data':
                                            pl.cc($.value['return type'][1], ($) => {
                                                $i.snippet(`['data', {`)
                                                $i.indent(($i) => {

                                                    $i.nestedLine(($i) => {
                                                        $i.snippet(`'type': `)
                                                        serializeTypeReference($.type, $i)
                                                        $i.snippet(`,`)
                                                    })
                                                    $i.nestedLine(($i) => {
                                                        $i.snippet(`'asynchronous': ${$.asynchronous}`)
                                                        $i.snippet(`,`)
                                                    })
                                                })
                                                $i.snippet(`}]`)
                                            })
                                            break
                                        case 'interface':
                                            pl.cc($.value['return type'][1], ($) => {
                                                $i.snippet(`['interface', `)
                                                serializeInterfaceReference($, $i)
                                                $i.snippet(`]`)

                                            })
                                            break
                                        case 'nothing':
                                            pl.cc($.value['return type'][1], ($) => {
                                                $i.snippet(`['nothing', {}]`)

                                            })
                                            break
                                        default: pl.au($.value['return type'][0])
                                    }
                                    $i.snippet(`,`)
                                })
                            })
                            $i.snippet(`},`)
                        })
                    })
                })
                $i.snippet(`}),`)
            })
        })
        $i.snippet(`}`)
    }
}
