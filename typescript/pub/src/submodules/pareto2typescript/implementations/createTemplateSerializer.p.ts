import * as pl from 'pareto-core-lib'

import * as gproject from "../../project"
import * as gapi from "../../api"
import * as gfp from "lib-fountain-pen"

import { createTemplateSerializer } from "../definition/api.generated"

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
                                    $: gapi.T.API<Annotation>,
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
                                        $i.directory(`bindings`, ($i) => {

                                            doImplementation($.bindings.api.root, $i)
                                        })
                                        $i.directory(`pure`, ($i) => {
                                            doImplementation($['pure algorithms'].api.root, $i)
                                        })
                                    }
                                    $i.directory("main", ($i) => {
                                        doModule($.main, $i)
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
                                    function doAPI($: gapi.T.API<Annotation>, $i: gfp.B.Directory) {
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