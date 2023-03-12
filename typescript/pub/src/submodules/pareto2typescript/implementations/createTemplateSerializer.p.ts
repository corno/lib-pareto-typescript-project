import * as pl from 'pareto-core-lib'

import * as gproject from "../../project"
import * as gfp from "lib-fountain-pen"

import { createTemplateSerializer } from "../api.generated"

export const $$: createTemplateSerializer = (
    $d
) => {
    return <Annotation>($: gproject.T.Project<Annotation>, $i: gfp.B.Directory) => {
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
                                    
                                    $: gproject.T.Module.api.root<Annotation>,
                                    $i: gfp.B.Directory,
                                ) {
                                    $i.directory("implementations", ($i) => {
                                        $d.dictionaryForEach($.algorithms, ($) => {
                                            $i.file(`${$.key}.p.ts`, ($i) => {
                                                $i.line(`import * as pl from 'pareto-core-lib'`)
                                                $i.line(``)
                                                $i.line(``)
                                                $i.line(``)
                                                $i.nestedLine(($i) => {
                                                    $i.snippet(`export const $$: gapi.${$d.createIdentifier(`C${$.key}`)}`)
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
                                    function doModule($: gproject.T.Module<Annotation>, $i: gfp.B.Directory) {
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
                                        doImplementation($.api.root, $i)
                                    }
                                    $i.directory("main", ($i) => {
                                        doModule($.main, $i)
                                    })
                                    $i.directory("bindings", ($i) => {

                                    })
                                    $i.directory("modules", ($i) => {
                                        $d.dictionaryForEach($.submodules, ($) => {
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
                                        $: gproject.T.Module.api.root<Annotation>,
                                        $i: gfp.B.Directory,
                                        ) {
                                        $d.dictionaryForEach($.algorithms, ($) => {
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
                                        $d.dictionaryForEach($.api.root.algorithms, ($) => {
                                            $i.file(`${$.key}.p.ts`, ($i) => {
                                                $i.line(`import * as pl from 'pareto-core-lib'`)
                                                $i.line(``)
                                                $i.line(``)
                                                $i.line(``)
                                                $i.nestedLine(($i) => {
                                                    $i.snippet(`export const $$: gapi.${$d.createIdentifier(`C${$.key}`)}`)
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

                                        $d.dictionaryForEach($.api.root.algorithms, ($) => {
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