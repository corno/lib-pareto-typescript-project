import * as pl from 'pareto-core-lib'

import * as api from "../api"

import * as mmoduleDefinition from "../../moduleDefinition"
import * as mglossary from "../../glossary"
import * as mfp from "lib-fountain-pen"


export const $$: api.CcreateSerializer = ($d) => {
    return ($, $i) => {
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
        function serializeDefinitionReference($: api.TDefinitionReference, $i: mfp.ILine) {
            $i.snippet(`{`)
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
                    $i.snippet(`'function': "${$.function}"`)
                    $i.snippet(`,`)
                })
            })
        }
        function serializeContext($: mglossary.TContext, $i: mfp.ILine) {
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
        $i.snippet(`{`)
        $i.indent(($i) => {
            $i.line(($i) => {
                $i.snippet(`'glossary': `)
                $d.cb_serializeGlossary($.glossary, $i)
                $i.snippet(`,`)
            }),
                $i.line(($i) => {
                    $i.snippet(`'api': `)
                    $i.snippet(`{`)
                    $i.indent(($i) => {
                        $i.line(($i) => {
                            $i.snippet(`'imports': d({`)
                            $i.indent(($i) => {
                                $d.cb_dictionaryForEach($.api.imports, ($) => {
                                    $i.line(($i) => {
                                        $i.snippet(`'${$.key}': "${$.value}"`)
                                    })
                                })
                            })
                            $i.snippet(`}),`)
                        }),
                            $i.line(($i) => {
                                $i.snippet(`'algorithms': d({`)
                                $i.indent(($i) => {
                                    $d.cb_dictionaryForEach($.api.algorithms, ($) => {
                                        $i.line(($i) => {
                                            $i.snippet(`'${$.key}': {`)
                                            $i.indent(($i) => {
                                                $i.line(($i) => {
                                                    $i.snippet(`'definition': `)
                                                    serializeDefinitionReference($.value.definition, $i)
                                                    $i.snippet(`,`)
                                                })
                                                $i.line(($i) => {
                                                    $i.snippet(`'type': `)
                                                    switch ($.value.type[0]) {
                                                        case 'constructor':
                                                            pl.cc($.value.type[1], ($) => {

                                                                $i.snippet(`['constructor', {`)
                                                                $i.indent(($i) => {

                                                                    $i.line(($i) => {
                                                                        $i.snippet(`'configuration data': `)
                                                                        if ($['configuration data'] === null) {
                                                                            $i.snippet(`null`)
                                                                        } else {
                                                                            serializeTypeReference($['configuration data'], $i)
                                                                        }
                                                                        $i.snippet(`,`)
                                                                    })
                                                                    $i.line(($i) => {
                                                                        $i.snippet(`'dependencies': d({`)
                                                                        $i.indent(($i) => {
                                                                            $d.cb_dictionaryForEach($.dependencies, ($) => {
                                                                                $i.line(($i) => {
                                                                                    $i.snippet(`'${$.key}': `)
                                                                                    serializeDefinitionReference($.value, $i)
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
                                                        case 'reference':
                                                            pl.cc($.value.type[1], ($) => {

                                                                $i.snippet(`['reference', null]`)
                                                            })
                                                            break
                                                        default: pl.au($.value.type[0])
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
                    $i.snippet(`,`)
                })
        })
        $i.snippet(`}`)
    }
}
