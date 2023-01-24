import * as pl from 'pareto-core-lib'

import * as api from "../api"

import * as mglossary from "../../glossary"
import * as mfp from "lib-fountain-pen"

export const $$: api.CcreateSerializer = ($d) => {
    function serializeNamespacedTypeReference($: mglossary.TNamespacedTypeReference, $i: mfp.ILine) {
        $i.snippet(`{`)
        $i.indent(($i) => {
            $i.line(($i) => {
                $i.snippet(`'context': `)
                serializeContext($.context, $i)
                $i.snippet(`,`)
            })
            $i.line(($i) => {
                $i.snippet(`'namespaces': a([`)
                $d.enrichedArrayForEach($.namespaces, {
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
    function serializeTypeReference($: mglossary.TTypeReference, $i: mfp.ILine) {
        $i.snippet(`{`)
        $i.indent(($i) => {
            $i.line(($i) => {
                $i.snippet(`'context': `)
                serializeContext($.context, $i)
                $i.snippet(`,`)
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
            case 'computed':
                pl.cc($[1], ($) => {
                    $i.snippet(`['computed', `)
                    serializeType($, $i)
                    $i.snippet(`]`)
                })
                break
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
                    serializeNamespacedTypeReference($, $i)
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
                        $d.dictionaryForEach($, ($) => {
                            $i.line(($i) => {
                                $i.snippet(`"${$.key}": {`)
                                $i.indent(($i) => {
                                    if ($.value.optional !== undefined) {
                                        $i.line(($i) => {
                                            $i.snippet(`'optional': ${$.value.optional ? `true` : `false`},`)
                                        })
                                    }
                                    $i.line(($i) => {
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
                        $d.dictionaryForEach($, ($) => {
                            $i.line(($i) => {
                                $i.snippet(`"${$.key}": `)
                                serializeType($.value, $i)
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
                                $d.dictionaryForEach($.arguments, ($) => {
                                    $i.line(($i) => {
                                        $i.snippet(`"${$.key}": `)
                                        serializeType($.value, $i)
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
                        $d.dictionaryForEach($.members, ($) => {
                            $i.line(($i) => {
                                $i.snippet(`"${$.key}": `)
                                serializeInterface($.value, $i)
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
                        if ($ === null) {
                            $i.snippet(`null`)
                        } else {
                            serializeNamespacedTypeReference($, $i)
                        }
                    })
                    pl.cc($.interface, ($) => {
                        if ($ === null) {

                        } else {
                            $i.snippet(`$c: ($i: `)
                            serializeInterface($, $i)
                            $i.snippet(`) => void`)
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
                        $d.dictionaryForEach($.namespaces, ($) => {
                            $i.line(($i) => {
                                $i.snippet(`"${$.key}": `)
                                serializeNamespace($.value, $i)
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
                        $d.dictionaryForEach($.templates, ($) => {
                            $i.line(($i) => {
                                $i.snippet(`"${$.key}": {`)
                                $i.indent(($i) => {

                                    $i.line(($i) => {
                                        $i.snippet(`'parameters': d({`)
                                        $i.indent(($i) => {
                                            $d.dictionaryForEach($.value.parameters, ($) => {
                                                $i.line(($i) => {
                                                    $i.snippet(`"${$.key}": null,`)
                                                })
                                            })
                                        })
                                        $i.snippet(`}),`)
                                    })
                                    $i.line(($i) => {
                                        $i.snippet(`'type': `)
                                        serializeType($.value.type, $i)
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
                    $d.dictionaryForEach($.types, ($) => {
                        $i.line(($i) => {
                            $i.snippet(`"${$.key}": `)
                            serializeType($.value, $i)
                            $i.snippet(`,`)
                        })
                    })
                })
                $i.snippet(`}),`)
            })
            $i.line(($i) => {
                $i.snippet(`'interfaces': d({`)
                $i.indent(($i) => {
                    $d.dictionaryForEach($.interfaces, ($) => {
                        $i.line(($i) => {
                            $i.snippet(`"${$.key}": `)
                            serializeInterface($.value, $i)
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
                    $d.dictionaryForEach($.imports, ($) => {
                        $i.line(($i) => {
                            $i.snippet(`"${$.key}": "${$.value}",`)
                        })
                    })
                })
                $i.snippet(`}),`)
            })
            $i.line(($i) => {
                $i.snippet(`'parameters': d({`)
                $i.indent(($i) => {
                    if ($.parameters !== undefined) {
                        $d.dictionaryForEach($.parameters, ($) => {
                            $i.line(($i) => {
                                $i.snippet(`"${$.key}": null,`)
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
                    $d.dictionaryForEach($.functions, ($) => {
                        $i.line(($i) => {

                            $i.snippet(`"${$.key}": {`)
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
        })
        $i.snippet(`}`)
    }
}

