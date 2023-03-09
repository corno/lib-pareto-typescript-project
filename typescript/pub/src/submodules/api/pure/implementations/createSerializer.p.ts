import * as pl from 'pareto-core-lib'

import * as gthis from "../../glossary"
import * as gfp from "lib-fountain-pen"

import { createSerializer } from "../api.generated"

export const $$: createSerializer = ($d) => {
    return <Annotation>($: gthis.T.API<Annotation>, $i: gfp.B.Block) => {
        function doOptional<T>(
            $: [false] | [true, T],
            $i: gfp.B.Line,
            $c: ($: T, $i: gfp.B.Line) => void,
        ) {
            if ($[0] === true) {
                $i.snippet(`[true, `)
                $c($[1], $i)
                $i.snippet(`]`)
            } else {
                $i.snippet(`[false]`)
            }
        }
        function serializeTypeReference($: gthis.T.TypeReference<string>, $i: gfp.B.Line) {
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
        function serializeDefinitionReference($: gthis.T.FunctionReference<Annotation>, $i: gfp.B.Line) {
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
        function serializeContext($: gthis.T.Context<Annotation>, $i: gfp.B.Line) {
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

        $i.line(`import * as pd from 'pareto-core-data'`)
        $i.line(``)
        $i.line(`import * as gapi from "lib-pareto-typescript-project/dist/submodules/api"`)
        $i.line(``)
        $i.line(`const d = pd.d`)
        $i.line(`const a = pd.a`)
        $i.line(``)
        $i.nestedLine(($i) => {
            $i.snippet(`export const $: gapi.T.API<pd.SourceLocation> = `)
            $i.snippet(`{`)
            $i.indent(($i) => {
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
        })
    }
}
