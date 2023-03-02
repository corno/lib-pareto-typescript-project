import * as pl from 'pareto-core-lib'

import * as gapi from "../definition/glossary"
import * as gglossary from "../../glossary"
import * as gfp from "lib-fountain-pen"

import { CcreateSerializer } from "../definition/api.generated"

export const $$: CcreateSerializer = ($d) => {
    return <Annotation>($: gapi.T.API<Annotation>, $i: gfp.ILine) => {
        function doOptional<T>(
            $: [false] | [true, T],
            $i: gfp.ILine,
            $c: ($: T, $i: gfp.ILine) => void,
        ) {
            if ($[0] === true) {
                $i.snippet(`[true, `)
                $c($[1], $i)
                $i.snippet(`]`)
            } else {
                $i.snippet(`[false]`)
            }
        }
        function serializeTypeReference($: gapi.T.TypeReference<string>, $i: gfp.ILine) {
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
        function serializeDefinitionReference($: gapi.T.FunctionReference<Annotation>, $i: gfp.ILine) {
            $i.snippet(`{`)
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
                    $i.snippet(`'function': "${$.function}"`)
                    $i.snippet(`,`)
                })
            })
            $i.snippet(`}`)
        }
        function serializeContext($: gapi.T.Context<Annotation>, $i: gfp.ILine) {
            $i.snippet(`{`)
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
                                $i.snippet(`,`)
                            })
                        })
                    })
                    $i.snippet(`}),`)
                })
            })
            $i.snippet(`}`)
        }
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
                $i.snippet(`'algorithms': d({`)
                $i.indent(($i) => {
                    $d.dictionaryForEach($.algorithms, ($) => {
                        $i.nestedLine(($i) => {
                            $i.snippet(`"${$.key}": {`)
                            $i.indent(($i) => {
                                $i.nestedLine(($i) => {
                                    $i.snippet(`'definition': `)
                                    serializeDefinitionReference($.value.definition, $i)
                                    $i.snippet(`,`)
                                })
                                $i.nestedLine(($i) => {
                                    $i.snippet(`'type': `)
                                    switch ($.value.type[0]) {
                                        case 'constructor':
                                            pl.cc($.value.type[1], ($) => {

                                                $i.snippet(`['constructor', {`)
                                                $i.indent(($i) => {

                                                    $i.nestedLine(($i) => {
                                                        $i.snippet(`'configuration data': `)
                                                        doOptional($['configuration data'], $i, ($, $i) => {
                                                            serializeTypeReference($, $i)
                                                        })
                                                        if ($['configuration data'] === null) {
                                                        } else {
                                                        }
                                                        $i.snippet(`,`)
                                                    })
                                                    $i.nestedLine(($i) => {
                                                        $i.snippet(`'dependencies': d({`)
                                                        $i.indent(($i) => {
                                                            $d.dictionaryForEach($.dependencies, ($) => {
                                                                $i.nestedLine(($i) => {
                                                                    $i.snippet(`"${$.key}": `)
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

                                                $i.snippet(`['foo]`)
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
    }
}
