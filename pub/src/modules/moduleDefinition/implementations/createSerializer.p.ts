import * as pl from "pareto-core-lib"

import * as api from "../api"

import * as mmoduleDefinition from "../../moduleDefinition"
import * as mglossary from "../../glossary"
import * as mfp from "lib-fountain-pen"


export const icreateSerializer: api.CcreateSerializer = ($d) => {
    return ($, $i) => {
        const compare = (a: string, b: string) => $d.sf_compare({ a: a, b: b })
        function serializeOptionalTypeReference($: mglossary.TOptionalTypeReference, $i: mfp.ILine) {
            if ($ === null) {
                $i.snippet(`OOOFSFSFSDF`)
            } else {
                
            }
        }
        function serializeTypeReference($: mglossary.TTypeReference, $i: mfp.ILine) {
            $i.snippet(`aaaaa`)
        }
        // function serializeLeafTypeOrNull($: mglossary.TLeafTypeOrNull, $i: mfp.ILine) {
        //     switch ($[0]) {
        //         case "null":
        //             pl.cc($[1], ($) => {
        //                 $i.snippet(`['null', null]`)
        //             })
        //             break
        //         case "type":
        //             pl.cc($[1], ($) => {

        //                 $i.snippet(`['type', `)
        //                 serializeLeafType($, $i)
        //                 $i.snippet(`]`)
        //             })
        //             break
        //         default: pl.au($[0])
        //     }
        // }

        // function serializeLeafType($: mglossary.TLeafType, $i: mfp.ILine) {
        //     switch ($[0]) {
        //         case 'boolean':
        //             pl.cc($[1], ($) => {
        //                 $i.snippet(`['boolean', null]`)
        //             })
        //             break
        //         case 'reference':
        //             pl.cc($[1], ($) => {
        //                 $i.snippet(`['reference', {`)
        //                 $i.indent(($i) => {
        //                     $i.line(($i) => {
        //                         $i.snippet(`'context': `)
        //                         serializeContext($.context, $i)
        //                         $i.snippet(`,`)
        //                     })
        //                     $i.line(($i) => {
        //                         $i.snippet(`'namespaces': a([`)
        //                         $d.cb_enrichedArrayForEach($.namespaces, {
        //                             onEmpty: () => {

        //                             },
        //                             onNotEmpty: ($c) => {
        //                                 $c(($) => {
        //                                     $i.snippet(`${$.isFirst ? `` : `, `}"${$.value}"`)
        //                                 })
        //                             }
        //                         })
        //                         $i.snippet(`]),`)
        //                     })
        //                     $i.line(($i) => {
        //                         $i.snippet(`'type': "${$.type}",`)
        //                     })
        //                 })
        //                 $i.snippet(`}]`)
        //             })
        //             break
        //         case 'number':
        //             pl.cc($[1], ($) => {
        //                 $i.snippet(`['number', null]`)
        //             })
        //             break
        //         case 'string':
        //             pl.cc($[1], ($) => {
        //                 $i.snippet(`['string', null]`)
        //             })
        //             break
        //         default: pl.au($[0])
        //     }
        // }
        function serializeDefinitionReference($: api.TDefinitionReference, $i: mfp.ILine) {

            switch ($[0]) {
                case "callback":
                    pl.cc($[1], ($) => {
                        $i.snippet(`['callback', {`)
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
                                $i.snippet(`'callback': "${$.callback}",`)
                            })
                        })
                        $i.snippet(`}]`)

                    })
                    break
                case "function":
                    pl.cc($[1], ($) => {
                        $i.snippet(`['function', {`)
                        $i.indent(($i) => {
                            if ($.async !== undefined) {
                                pl.cc($.async, ($) => {

                                    $i.line(($i) => {
                                        $i.snippet(`'async': ${$ ? `true`: `false`},`)
                                    })
                                })
                            }
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
                                $i.snippet(`'function': "${$.function}",`)
                            })
                        })
                        $i.snippet(`}]`)

                    })
                    break
                case "interface":
                    pl.cc($[1], ($) => {
                        $i.snippet(`['interface', `)
                        $i.snippet(`FIXME]`)

                    })
                    break
                case "pipe":
                    pl.cc($[1], ($) => {
                        $i.snippet(`['pipe', `)
                        $i.snippet(`FIXME]`)

                    })
                    break
                case "procedure":
                    pl.cc($[1], ($) => {
                        $i.snippet(`['procedure', `)
                        $i.snippet(`FIXME]`)

                    })
                    break
                default: pl.au($[0])
            }
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
        $i.file(`api.generated.ts`, ($i) => {
            $i.literal(`import * as pr from "pareto-core-raw"`)
            $i.literal(``)
            $i.literal(`import * as mmoduleDefinition from "../../../pub/dist/modules/moduleDefinition"`)
            $i.literal(``)
            $i.literal(`const d = pr.wrapRawDictionary`)
            $i.literal(`const a = pr.wrapRawArray`)
            $i.line(($i) => {
            })
            $i.line(($i) => {
                $i.snippet(`export const $: mmoduleDefinition.TModuleDefinition = `)
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
                                        $.api.imports.forEach(compare, ($, key) => {
                                            $i.line(($i) => {
                                                $i.snippet(`"${key}": "${$}"`)
                                            })
                                        })
                                    })
                                    $i.snippet(`}),`)
                                }),
                                    $i.line(($i) => {
                                        $i.snippet(`'algorithms': d({`)
                                        $i.indent(($i) => {
                                            $.api.algorithms.forEach(compare, ($, key) => {
                                                $i.line(($i) => {
                                                    $i.snippet(`"${key}": {`)
                                                    $i.indent(($i) => {
                                                        $i.line(($i) => {
                                                            $i.snippet(`'definition': `)
                                                            serializeDefinitionReference($.definition, $i)
                                                            $i.snippet(`,`)
                                                        })
                                                        $i.line(($i) => {
                                                            $i.snippet(`'type': `)
                                                            switch ($.type[0]) {
                                                                case "constructor":
                                                                    pl.cc($.type[1], ($) => {

                                                                        $i.snippet(`['constructor', {`)
                                                                        $i.indent(($i) => {

                                                                            $i.line(($i) => {
                                                                                $i.snippet(`'configuration data': `)
                                                                                serializeOptionalTypeReference($["configuration data"], $i)
                                                                                $i.snippet(`,`)
                                                                            })
                                                                            $i.line(($i) => {
                                                                                $i.snippet(`'dependencies': d({`)
                                                                                $i.indent(($i) => {
                                                                                    $.dependencies.forEach(compare, ($, key) => {
                                                                                        $i.line(($i) => {
                                                                                            $i.snippet(`"${key}": `)
                                                                                            serializeDefinitionReference($, $i)
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
                                                                case "reference":
                                                                    pl.cc($.type[1], ($) => {

                                                                        $i.snippet(`['reference', null]`)
                                                                    })
                                                                    break
                                                                default: pl.au($.type[0])
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

            })
        })
    }
}
