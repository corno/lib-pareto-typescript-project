import * as pl from 'pareto-core-lib'

import * as api from "../api"

import * as mglossary from "../../glossary"
import * as mfp from "lib-fountain-pen"

export const $$: api.CcreateSerializer = ($d) => {
    const compare = (a: string, b: string) => $d.sf_compare({ a: a, b: b })

    // function serializeLeafTypeOrNull($: mglossary.TLeafTypeOrNull, $i: mfp.ILine) {
    //     switch ($[0]) {
    //         case 'null':
    //             pl.cc($[1], ($) => {
    //                 $i.snippet(`['null', null]`)
    //             })
    //             break
    //         case 'type':
    //             pl.cc($[1], ($) => {

    //                 $i.snippet(`['type', `)
    //                 serializeLeafType($, $i)
    //                 $i.snippet(`]`)
    //             })
    //             break
    //         default: pl.au($[0])
    //     }
    // }

    function serializeOptionalTypeReference($: api.TOptionalTypeReference, $i: mfp.ILine) {
        if ($ === null) {
            $i.snippet(`null`)
        } else {
            serializeTypeReference($, $i)
        }
    }

    // }
    function serializeTypeReference($: mglossary.TTypeReference, $i: mfp.ILine) {
        $i.snippet(`{`)
        $i.indent(($i) => {
            $i.line(($i) => {
                $i.snippet(`'context': `)
                serializeContext($.context, $i)
                $i.snippet(`,`)
            })
            $i.line(($i) => {
                $i.snippet(`'namespaces': a([`)
                $d.cb_enrichedArrayForEach($.namespaces, {
                    onEmpty: () => {

                    },
                    onNotEmpty: ($c) => {
                        $c(($) => {
                            $i.snippet(`${$.isFirst ? `` : `, `}"${$.value}"`)
                        })
                    }
                })
                $i.snippet(`]),`)
            })
            $i.line(($i) => {
                $i.snippet(`'type': "${$.type}",`)
            })
        })
        $i.snippet(`}`)
    }

    function serializeType($: mglossary.TType, $i: mfp.ILine) {
        $i.snippet(`<mglossary.TType>`)

        switch ($[0]) {
            case 'null':
                pl.cc($[1], ($) => {
                    $i.snippet(`['null', null]`)
                })
                break
            case 'boolean':
                pl.cc($[1], ($) => {
                    $i.snippet(`['boolean', null]`)
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
                    $i.snippet(`['number', null]`)
                })
                break
            case 'string':
                pl.cc($[1], ($) => {
                    $i.snippet(`['string', null]`)
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
                        $.forEach(compare, ($, key) => {
                            $i.line(($i) => {
                                $i.snippet(`"${key}": {`)
                                $i.indent(($i) => {
                                    if ($.optional !== undefined) {
                                        $i.line(($i) => {
                                            $i.snippet(`'optional': ${$.optional ? `true` : `false`},`)
                                        })
                                    }
                                    $i.line(($i) => {
                                        $i.snippet(`'type': `)
                                        serializeType($.type, $i)
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
            case 'optional':
                pl.cc($[1], ($) => {
                    $i.snippet(`['optional', `)
                    serializeType($, $i)
                    $i.snippet(`]`)
                })
                break
            case 'parameter':
                pl.cc($[1], ($) => {
                    $i.snippet(`['parameter', `)
                    $i.snippet(`"${$}"`)
                    $i.snippet(`]`)
                })
                break
            case 'taggedUnion':
                pl.cc($[1], ($) => {
                    $i.snippet(`['taggedUnion', d({`)
                    $i.indent(($i) => {
                        $.forEach(compare, ($, key) => {
                            $i.line(($i) => {
                                $i.snippet(`"${key}": `)
                                serializeType($, $i)
                                $i.snippet(`,`)
                            })
                        })
                    })
                    $i.snippet(`})]`)
                })
                break
            case 'template':
                pl.cc($[1], ($) => {
                    $i.snippet(`['template', {`)
                    $i.indent(($i) => {
                        if ($.context !== undefined) {
                            pl.cc($.context, ($) => {
                                $i.line(($i) => {
                                    $i.snippet(`'context': `)
                                    serializeContext($, $i)
                                    $i.snippet(`,`)
                                })
                            })
                        }
                        $i.line(($i) => {
                            $i.snippet(`'arguments': d({`)
                            $i.indent(($i) => {
                                $.arguments.forEach(compare, ($, key) => {
                                    $i.line(($i) => {
                                        $i.snippet(`"${key}": `)
                                        serializeType($, $i)
                                        $i.snippet(`,`)
                                    })
                                })
                            })
                            $i.snippet(`}),`)
                        })
                        $i.line(($i) => {
                            $i.snippet(`'template': "${$.template}",`)
                        })
                    })
                    $i.snippet(`}]`)
                })
                break
            default: pl.au($[0])
        }
    }
    function serializeContext($: mglossary.TContext, $i: mfp.ILine) {
        $i.snippet(`<mglossary.TContext>`)
        switch ($[0]) {
            case 'import':
                pl.cc($[1], ($) => {
                    $i.snippet(`['import', "${$}"]`)
                })
                break
            case 'local':
                pl.cc($[1], ($) => {
                    $i.snippet(`['local', null]`)
                })
                break
            default: pl.au($[0])
        }
    }
    function serializeInterfaceReference($: mglossary.TInterfaceReference, $i: mfp.ILine) {
        if ($.context !== undefined) {
            serializeContext($.context, $i)
        }
        $i.snippet(`I${$.interface}`)

    }
    function serializeInterface($: mglossary.TInterface, $i: mfp.ILine) {
        switch ($[0]) {
            case 'group':
                pl.cc($[1], ($) => {

                    $i.snippet(`d({`)
                    $i.indent(($i) => {
                        $.members.forEach(compare, ($, key) => {
                            $i.line(($i) => {
                                $i.snippet(`"${key}": `)
                                serializeInterface($, $i)
                            })
                        })
                    })
                    $i.snippet(`})`)
                })
                break
            case 'method':
                pl.cc($[1], ($) => {

                    $i.snippet(`(`)
                    pl.cc($.data, ($) => {
                        serializeOptionalTypeReference($, $i)
                    })
                    pl.cc($.interface, ($) => {
                        switch ($[0]) {
                            case 'null':
                                pl.cc($[1], ($) => {
                                })
                                break
                            case 'set':
                                pl.cc($[1], ($) => {
                                    $i.snippet(`$c: ($i: `)
                                    serializeInterfaceReference($, $i)
                                    $i.snippet(`) => void`)
                                })
                                break
                            default: pl.au($[0])
                        }
                    })
                    $i.snippet(`) => void`)
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
    function serializeNamespace($: mglossary.TNamespace, $i: mfp.ILine) {
        $i.snippet(`{`)
        $i.indent(($i) => {

            $i.line(($i) => {
                $i.snippet(`'namespaces': d({`)
                $i.indent(($i) => {
                    if ($.namespaces !== undefined) {
                        $.namespaces.forEach(compare, ($, key) => {
                            $i.line(($i) => {
                                $i.snippet(`"${key}": `)
                                serializeNamespace($, $i)
                                $i.snippet(`,`)
                            })
                        })
                    }
                })
                $i.snippet(`}),`)
            })
            $i.line(($i) => {
                $i.snippet(`'templates': d({`)
                $i.indent(($i) => {
                    if ($.templates !== undefined) {
                        $.templates.forEach(compare, ($, key) => {
                            $i.line(($i) => {
                                $i.snippet(`"${key}": {`)
                                $i.indent(($i) => {

                                    $i.line(($i) => {
                                        $i.snippet(`'parameters': d({`)
                                        $i.indent(($i) => {
                                            $.parameters.forEach(compare, ($, key) => {
                                                $i.line(($i) => {
                                                    $i.snippet(`"${key}": null,`)
                                                })
                                            })
                                        })
                                        $i.snippet(`}),`)
                                    })
                                    $i.line(($i) => {
                                        $i.snippet(`'type': `)
                                        serializeType($.type, $i)
                                        $i.snippet(`,`)
                                    })
                                })
                                $i.snippet(`},`)
                            })
                        })
                    }
                })
                $i.snippet(`}),`)
            })
            $i.line(($i) => {
                $i.snippet(`'types': d({`)
                $i.indent(($i) => {
                    $.types.forEach(compare, ($, key) => {
                        $i.line(($i) => {
                            $i.snippet(`"${key}": `)
                            serializeType($, $i)
                            $i.snippet(`,`)
                        })
                    })
                })
                $i.snippet(`}),`)
            })
            $i.line(($i) => {
                $i.snippet(`'interfaces': d({`)
                $i.indent(($i) => {
                    $.interfaces.forEach(compare, ($, key) => {
                        $i.line(($i) => {
                            $i.snippet(`"${key}": `)
                            serializeInterface($, $i)
                            $i.snippet(`,`)
                        })
                    })
                })
                $i.snippet(`}),`)
            })
        })
        $i.snippet(`}`)
    }
    return ($, $i) => {
        $i.snippet(`{`)
        $i.indent(($i) => {
            $i.line(($i) => {
                $i.snippet(`'imports': d({`)
                $i.indent(($i) => {
                    $.imports.forEach(compare, ($, key) => {
                        $i.line(($i) => {
                            $i.snippet(`"${key}": "${$}",`)
                        })
                    })
                })
                $i.snippet(`}),`)
            })
            $i.line(($i) => {
                $i.snippet(`'parameters': d({`)
                $i.indent(($i) => {
                    if ($.parameters !== undefined) {
                        $.parameters.forEach(compare, ($, key) => {
                            $i.line(($i) => {
                                $i.snippet(`"${key}": null,`)
                            })
                        })
                    }
                })
                $i.snippet(`}),`)
            })
            $i.line(($i) => {
                $i.snippet(`'namespace': `)
                serializeNamespace($.namespace, $i)
                $i.snippet(`,`)
            })
            $i.line(($i) => {
                $i.snippet(`'functions': d({`)
                $i.indent(($i) => {
                    $.functions.forEach(compare, ($, key) => {
                        $i.line(($i) => {

                            $i.snippet(`"${key}": {`)
                            $i.indent(($i) => {
                                $i.line(($i) => {
                                    $i.snippet(`'async': XXX,`)
                                    $i.snippet(`'data': XXX,`)
                                    $i.snippet(`'return value': XXX,`)
                                })
                            })
                            $i.snippet(`},`)
                        })
                    })
                })
                $i.snippet(`}),`)
            })
            $i.line(($i) => {
                $i.snippet(`'callbacks': d({`)
                $i.indent(($i) => {
                    $.callbacks.forEach(compare, ($, key) => {
                        $i.line(($i) => {
                            $i.snippet(`"${key}": {`)
                            $i.indent(($i) => {
                                $i.line(($i) => {
                                    $i.snippet(`'data': `)
                                    serializeOptionalTypeReference($.data, $i)
                                    $i.snippet(`,`)
                                })
                                if ($.context !== undefined) {
                                    const cntxt = $.context
                                    $i.line(($i) => {
                                        $i.snippet(`'context': `)
                                        serializeContext(cntxt, $i)
                                        $i.snippet(`,`)
                                    })
                                }
                                $i.line(($i) => {
                                    $i.snippet(`'interface': "${$.interface}",`)
                                })
                            })

                            $i.snippet(`},`)
                        })
                    })
                })
                $i.snippet(`}),`)
            })
            $i.line(($i) => {
                $i.snippet(`'pipes': d({`)
                $i.indent(($i) => {
                    $.pipes.forEach(compare, ($, key) => {
                        $i.line(($i) => {
                            $i.snippet(`"${key}": "FIXME",`)
                        })
                    })
                })
                $i.snippet(`}),`)
            })
        })
        $i.snippet(`}`)
    }
}

