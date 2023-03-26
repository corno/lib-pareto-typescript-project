import * as pl from 'pareto-core-lib'

import * as g_project from "../../project"
import * as g_fp from "lib-fountain-pen"
import * as g_foreach from "res-pareto-foreach"
import * as g_ts from "res-typescript"

import { A } from "../api.generated"

export const $$: A.serializeTemplate = <GAnnotation>($d: {
    readonly 'createIdentifier': g_ts.SYNC.A.F.CreateIdentifier
    readonly 'forEachAlgorithm': g_foreach.SYNC.A.P.DictionaryForEach<g_project.T.ModuleDefinition.api.root.algorithms.D<GAnnotation>>
    readonly 'forEachSubModule': g_foreach.SYNC.A.P.DictionaryForEach<g_project.T.Project._ltype.library.submodules.D<GAnnotation>>

}) => {
    return ($: g_project.T.Project<GAnnotation>, $i: g_fp.SYNC.I.Directory) => {
        $i.directory("tmp", ($i) => {
            $i.directory("templates", ($i) => {
                switch ($.type[0]) {
                    case 'glossary':
                        pl.cc($.type[1], ($) => {

                        })
                        break
                    case 'library':
                        pl.cc($.type[1], ($) => {
                            $i.directory("pub", ($i) => {
                                function doImplementation(

                                    $: g_project.T.ModuleDefinition.api.root<GAnnotation>,
                                    $i: g_fp.SYNC.I.Directory,
                                ) {
                                    $i.directory("implementations", ($i) => {
                                        $d.forEachAlgorithm($.algorithms, ($) => {
                                            $i.file(`${$.key}.p.ts`, ($i) => {
                                                $i.line(`import * as pl from 'pareto-core-lib'`)
                                                $i.line(``)
                                                $i.line(``)
                                                $i.line(``)
                                                $i.nestedLine(($i) => {
                                                    $i.snippet(`export const $$: g_this.${$d.createIdentifier(`C${$.key}`)}`)
                                                    $i.snippet(` = ($c, $d) => {`)
                                                    $i.indent(($i) => {
                                                        $i.nestedLine(($i) => {
                                                            $i.snippet(`return ($) => {`)
                                                            $i.indent(($i) => {
                                                                $i.nestedLine(($i) => {
                                                                    $i.snippet(`pd.implementMe("IMPLEMENT ${$.key}")`)
                                                                })
                                                            })
                                                            $i.snippet(`}`)
                                                        })
                                                    })
                                                    $i.snippet(`}`)
                                                })
                                            })
                                        })
                                    })
                                }
                                $i.directory("src", ($i) => {
                                    function doModule($: g_project.T.Module<GAnnotation>, $i: g_fp.SYNC.I.Directory) {
                                        // pl.optional(
                                        //     $.bindings,
                                        //     ($) => {
                                        //         $i.directory(`bindings`, ($i) => {

                                        //             doImplementation($.api.root, $i)
                                        //         })
                                        //     },
                                        //     () => {
                                        //     }
                                        // )
                                        doImplementation($.definition.api.root, $i)
                                    }
                                    $i.directory("main", ($i) => {
                                        doModule($.main, $i)
                                    })
                                    $i.directory("bindings", ($i) => {

                                    })
                                    $i.directory("modules", ($i) => {
                                        $d.forEachSubModule($.submodules, ($) => {
                                            $i.directory($.key, ($i) => {
                                                doModule($.value, $i)
                                            })
                                        })
                                    })
                                })
                            })
                            $i.directory("test", ($i) => {
                                $i.directory("src", ($i) => {
                                    function doAPI(
                                        $: g_project.T.ModuleDefinition.api.root<GAnnotation>,
                                        $i: g_fp.SYNC.I.Directory,
                                    ) {
                                        $d.forEachAlgorithm($.algorithms, ($) => {
                                            $i.file(`${$.key}.p.ts`, ($i) => {
                                                $i.line(`import * as pl from 'pareto-core-lib'`)
                                                $i.line(``)
                                                $i.line(``)
                                                $i.line(``)
                                                $i.nestedLine(($i) => {
                                                    $i.snippet(`export function test() {`)
                                                    $i.snippet(`}`)
                                                })
                                            })
                                        })
                                    }
                                    // $i.directory("main", ($i) => {
                                    //     doAPI($.main.bindings.api.root, $i)
                                    //     doAPI($.main.bindings.api.root, $i)

                                    // })
                                    // $i.directory("submodules", ($i) => {

                                    //     $d.dictionaryForEach($.submodules, ($) => {
                                    //         const moduleName = $.key

                                    //         $i.directory($.key, ($i) => {
                                    //         })
                                    //     })
                                    // })
                                })
                            })

                        })
                        break
                    case 'resource':
                        pl.cc($.type[1], ($) => {
                            $i.directory("pub", ($i) => {
                                $i.directory("src", ($i) => {

                                    $i.directory("implementations", ($i) => {
                                        $d.forEachAlgorithm($.definition.api.root.algorithms, ($) => {
                                            $i.file(`${$.key}.p.ts`, ($i) => {
                                                $i.line(`import * as pl from 'pareto-core-lib'`)
                                                $i.line(``)
                                                $i.line(``)
                                                $i.line(``)
                                                $i.nestedLine(($i) => {
                                                    $i.snippet(`export const $$: g_this.${$d.createIdentifier(`${$.key}`)}`)
                                                    $i.snippet(` = ($c, $d) => {`)
                                                    $i.indent(($i) => {
                                                        $i.nestedLine(($i) => {
                                                            $i.snippet(`return ($) => {`)
                                                            $i.indent(($i) => {
                                                                $i.nestedLine(($i) => {
                                                                    $i.snippet(`pd.implementMe("IMPLEMENT ${$.key}")`)
                                                                })
                                                            })
                                                            $i.snippet(`}`)
                                                        })
                                                    })
                                                    $i.snippet(`}`)
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                            $i.directory("test", ($i) => {
                                $i.directory("src", ($i) => {
                                    $i.directory("modules", ($i) => {

                                        $d.forEachAlgorithm($.definition.api.root.algorithms, ($) => {
                                            $i.file(`${$.key}.p.ts`, ($i) => {
                                                $i.line(`import * as pl from 'pareto-core-lib'`)
                                                $i.line(``)
                                                $i.nestedLine(($i) => {
                                                    $i.snippet(`export function test() {`)
                                                    $i.snippet(`}`)
                                                })
                                            })
                                        })
                                    })
                                })
                            })

                        })
                        break
                    default: pl.au($.type[0])
                }

            })
        })
    }
}