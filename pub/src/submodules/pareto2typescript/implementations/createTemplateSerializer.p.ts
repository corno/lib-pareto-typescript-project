import * as pl from 'pareto-core-lib'

import * as mapi from "../api"
import * as mproject from "../../project"
import * as mfp from "lib-fountain-pen"


export const $$: mapi.CcreateTemplateSerializer = (
    $d
) => {
    return <Annotation>($: mproject.T.Project<Annotation>, $i: mfp.IWriter) => {
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
                                function doModule($: mproject.T.Module<Annotation>, $i: mfp.IWriter) {
                                    $i.directory("implementations", ($i) => {
                                        $d.dictionaryForEach($.definition.api.algorithms, ($) => {
                                            $i.file(`${$.key}.p.ts`, ($i) => {
                                                $i.line(`import * as pl from 'pareto-core-lib'`)
                                                $i.line(``)
                                                $i.line(`import * as mapi from "../api"`)
                                                $i.line(``)
                                                $i.nestedLine(($i) => {
                                                    $i.snippet(`export const $$: mapi.${$d.createIdentifier(`C${$.key}`)}`)
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
                                    $i.directory("main", ($i) => {
                                        doModule($.main, $i)
                                    })
                                    $i.directory("modules", ($i) => {
                                        $d.dictionaryForEach($.submodules, ($) => {
                                            const moduleName = $.key
                                            $i.directory(moduleName, ($i) => {
                                                doModule($.value, $i)
                                            })
                                        })
                                    })
                                })
                            })
                            $i.directory("test", ($i) => {
                                $i.directory("src", ($i) => {
                                    function doModule($: mproject.T.Module<Annotation>, $i: mfp.IWriter) {
                                        $d.dictionaryForEach($.definition.api.algorithms, ($) => {
                                            $i.file(`${$.key}.p.ts`, ($i) => {
                                                $i.line(`import * as pl from 'pareto-core-lib'`)
                                                $i.line(``)
                                                $i.line(`import * as mapi from "../api"`)
                                                $i.line(``)
                                                $i.nestedLine(($i) => {
                                                    $i.snippet(`export function test() {`)
                                                    $i.snippet(`}`)
                                                })
                                            })
                                        })
                                    }
                                    $i.directory("main", ($i) => {
                                        doModule($.main, $i)

                                    })
                                    $i.directory("submodules", ($i) => {
            
                                        $d.dictionaryForEach($.submodules, ($) => {
                                            const moduleName = $.key
            
                                            $i.directory($.key, ($i) => {
                                            })
                                        })
                                    })
                                })
                            })

                        })
                        break
                    case 'resource':
                        pl.cc($.type[1], ($) => {
                            $i.directory("pub", ($i) => {
                                $i.directory("src", ($i) => {
        
                                    $i.directory("implementations", ($i) => {
                                        $d.dictionaryForEach($.definition.api.algorithms, ($) => {
                                            $i.file(`${$.key}.p.ts`, ($i) => {
                                                $i.line(`import * as pl from 'pareto-core-lib'`)
                                                $i.line(``)
                                                $i.line(`import * as mapi from "../api"`)
                                                $i.line(``)
                                                $i.nestedLine(($i) => {
                                                    $i.snippet(`export const $$: mapi.${$d.createIdentifier(`C${$.key}`)}`)
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
            
                                        $d.dictionaryForEach($.definition.api.algorithms, ($) => {
                                            $i.file(`${$.key}.p.ts`, ($i) => {
                                                $i.line(`import * as pl from 'pareto-core-lib'`)
                                                $i.line(``)
                                                $i.line(`import * as mapi from "../api"`)
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