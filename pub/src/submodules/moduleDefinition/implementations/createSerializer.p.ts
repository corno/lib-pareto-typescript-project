import * as pl from 'pareto-core-lib'

import * as gapi from "../api"
import * as gglossary from "../../glossary"
import * as gfp from "lib-fountain-pen"

import { CcreateSerializer } from "../api"

export const $$:CcreateSerializer = ($d) => {
    return <Annotation>($: gapi.T.ModuleDefinition<Annotation>, $i: gfp.ILine) => {
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
        function serializeTypeReference($: gglossary.T.TypeReference<string>, $i: gfp.ILine) {
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
        function serializeDefinitionReference($: gapi.T.DefinitionReference<Annotation>, $i: gfp.ILine) {
            $i.snippet(`{`)
            $i.indent(($i) => {
                if ($.context !== undefined) {
                    pl.cc($.context, ($) => {

                        $i.nestedLine(($i) => {
                            $i.snippet(`'context': `)
                            serializeContext2($, $i)
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
        function serializeContext($: gglossary.T.Context<string>, $i: gfp.ILine) {
            switch ($[0]) {
                case 'import':
                    pl.cc($[1], ($) => {
                        $i.snippet(`['import', {`)
                        $i.indent(($i) => {
                            $i.nestedLine(($i) => {
                                $i.snippet(`'FIXME': XXXXX`)
                            })
                        })
                       $i.snippet (`}]`)
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
        function serializeContext2($: gapi.T.Context<Annotation>, $i: gfp.ILine) {
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
                                            $i.snippet(`,`)
                                        })
                                    })
                                })
                                $i.snippet(`}),`)
                            })
                        })
                       $i.snippet (`}]`)
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
        $i.snippet(`{`)
        $i.indent(($i) => {
            $i.nestedLine(($i) => {
                $i.snippet(`'glossary': `)
                $d.serializeGlossary($.glossary, $i)
                $i.snippet(`,`)
            }),
                $i.nestedLine(($i) => {
                    $i.snippet(`'api': `)
                    $i.snippet(`{`)
                    $i.indent(($i) => {
                        $i.nestedLine(($i) => {
                            $i.snippet(`'imports': d({`)
                            $i.indent(($i) => {
                                $d.dictionaryForEach($.api.imports, ($) => {
                                    $i.nestedLine(($i) => {
                                        $i.snippet(`"${$.key}": "${$.value}",`)
                                    })
                                })
                            })
                            $i.snippet(`}),`)
                        }),
                            $i.nestedLine(($i) => {
                                $i.snippet(`'algorithms': d({`)
                                $i.indent(($i) => {
                                    $d.dictionaryForEach($.api.algorithms, ($) => {
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
                    $i.snippet(`,`)
                })
        })
        $i.snippet(`}`)
    }
}
