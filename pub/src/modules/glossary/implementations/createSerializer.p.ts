import * as pl from 'pareto-core-lib'

import * as api from "../api"

import * as mglossary from "../../glossary"
import * as mfp from "lib-fountain-pen"

export const $$: api.CcreateSerializer = ($d) => {
    function serializeTypeReference($: mglossary.TTypeReference, $i: mfp.ILine) {
        $i.snippet(`{`)
        $i.indent(($i) => {
            $i.nestedLine(($i) => {
                $i.snippet(`'context': `)
                serializeContext($.context, $i)
                $i.snippet(`,`)
            })
            $i.nestedLine(($i) => {
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
                        $d.dictionaryForEach($, ($) => {
                            $i.nestedLine(($i) => {
                                $i.snippet(`"${$.key}": {`)
                                $i.indent(($i) => {
                                    if ($.value.optional !== undefined) {
                                        $i.nestedLine(($i) => {
                                            $i.snippet(`'optional': ${$.value.optional ? `true` : `false`},`)
                                        })
                                    }
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
            case 'template':
                pl.cc($[1], ($) => {
                    $i.snippet(`['template', {`)
                    $i.indent(($i) => {
                        if ($.context !== undefined) {
                            pl.cc($.context, ($) => {
                                $i.nestedLine(($i) => {
                                    $i.snippet(`'context': `)
                                    serializeContext($, $i)
                                    $i.snippet(`,`)
                                })
                            })
                        }
                        $i.nestedLine(($i) => {
                            $i.snippet(`'arguments': d({`)
                            $i.indent(($i) => {
                                $d.dictionaryForEach($.arguments, ($) => {
                                    $i.nestedLine(($i) => {
                                        $i.snippet(`"${$.key}": `)
                                        serializeType($.value, $i)
                                        $i.snippet(`,`)
                                    })
                                })
                            })
                            $i.snippet(`}),`)
                        })
                        $i.nestedLine(($i) => {
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
                            $i.nestedLine(($i) => {
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
                            serializeTypeReference($, $i)
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
                    if ($.parameters !== undefined) {
                        $d.dictionaryForEach($.parameters, ($) => {
                            $i.nestedLine(($i) => {
                                $i.snippet(`"${$.key}": null,`)
                            })
                        })
                    }
                })
                $i.snippet(`}),`)
            })
            $i.nestedLine(($i) => {
                $i.snippet(`'templates': d({`)
                $i.indent(($i) => {
                    if ($.templates !== undefined) {
                        $d.dictionaryForEach($.templates, ($) => {
                            $i.nestedLine(($i) => {
                                $i.snippet(`"${$.key}": {`)
                                $i.indent(($i) => {

                                    $i.nestedLine(($i) => {
                                        $i.snippet(`'parameters': d({`)
                                        $i.indent(($i) => {
                                            $d.dictionaryForEach($.value.parameters, ($) => {
                                                $i.nestedLine(($i) => {
                                                    $i.snippet(`"${$.key}": null,`)
                                                })
                                            })
                                        })
                                        $i.snippet(`}),`)
                                    })
                                    $i.nestedLine(($i) => {
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
            $i.nestedLine(($i) => {
                $i.snippet(`'types': d({`)
                $i.indent(($i) => {
                    $d.dictionaryForEach($.types, ($) => {
                        $i.nestedLine(($i) => {
                            $i.snippet(`"${$.key}": `)
                            serializeType($.value, $i)
                            $i.snippet(`,`)
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

