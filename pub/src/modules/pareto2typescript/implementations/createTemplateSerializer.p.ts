import * as api from "../api"

import * as mproject from "../api"


export const $$: api.CcreateTemplateSerializer = (
    $d
) => {
    return ($, $i) => {
        $i.directory("tmp", ($i) => {
            $i.directory("templates", ($i) => {
                $i.directory("dev", ($i) => {

                    $i.file("package.json", ($i) => {
                        $i.line(`{`)
                        $i.line(`  "dependencies": {`)
                        // $i.line(`    "glo-pareto-common": "^0.1.0",`)
                        // $i.line(`    "lib-pareto-filesystem": "^0.7.0",`)
                        $i.line(`    "pareto-core-lib": "^0.17.0",`)
                        $i.line(`    "pareto-core-raw": "^0.7.0",`)
                        $i.line(`    "pareto-core-state": "^0.12.0",`)
                        // $i.line(`    "res-pareto-arithmetic": "^0.5.0",`)
                        // $i.line(`    "res-pareto-boolean": "^0.7.0",`)
                        // $i.line(`    "res-pareto-collation": "^0.10.0",`)
                        // $i.line(`    "res-pareto-diff": "^0.13.2"`)
                        $i.line(`}`)
                    })
                })
                $i.directory("pub", ($i) => {
                    $i.directory("src", ($i) => {
                        $i.directory("modules", ($i) => {

                            $d.dictionaryForEach($.modules, ($) => {
                                const moduleName = $.key

                                $i.directory(moduleName, ($i) => {
                                    $i.directory("implementations", ($i) => {
                                        $d.dictionaryForEach($.value.definition.api.algorithms, ($) => {
                                            $i.file(`${$.key}.p.ts`, ($i) => {
                                                $i.line(`import * as pl from 'pareto-core-lib'`)
                                                $i.line(``)
                                                $i.line(`import * as api from "../api"`)
                                                $i.line(``)
                                                $i.nestedLine(($i) => {
                                                    $i.snippet(`export const $$: api.${$d.createIdentifier(`C${$.key}`)}`)
                                                    $i.snippet(` = ($c, $d) => {`)
                                                    $i.indent(($i) => {
                                                        $i.nestedLine(($i) => {
                                                            $i.snippet(`return ($) => {`)
                                                            $i.indent(($i) => {
                                                                $i.nestedLine(($i) => {
                                                                    $i.snippet(`pl.implementMe("IMPLEMENT ${moduleName}:${$.key}")`)
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
                        })
                    })
                    $i.file("package.json", ($i) => {
                        $i.line(`{`)
                        $i.line(`  "author": "Corno",`)
                        $i.line(`  "dependencies": {`)
                        // $i.line(`    "glo-pareto-common": "^0.1.0",`)
                        // $i.line(`    "lib-pareto-filesystem": "^0.7.0",`)
                        $i.line(`    "pareto-core-lib": "^0.17.0",`)
                        $i.line(`    "pareto-core-raw": "^0.7.0",`)
                        $i.line(`    "pareto-core-state": "^0.12.0",`)
                        // $i.line(`    "res-pareto-arithmetic": "^0.5.0",`)
                        // $i.line(`    "res-pareto-boolean": "^0.7.0",`)
                        // $i.line(`    "res-pareto-collation": "^0.10.0",`)
                        // $i.line(`    "res-pareto-diff": "^0.13.2"`)
                        $i.line(`  },`)
                        $i.line(`  "description": "test functions for pareto",`)
                        $i.line(`  "files": [`)
                        $i.line(`    "dist"`)
                        $i.line(`  ],`)
                        $i.line(`  "license": "ISC",`)
                        $i.line(`  "main": "dist/index.js",`)
                        $i.line(`  "name": "lib-pareto-test",`)
                        $i.line(`  "repository": {`)
                        $i.line(`    "type": "git",`)
                        $i.line(`    "url": "http://github.com/corno/lib-pareto-test.git"`)
                        $i.line(`  },`)
                        $i.line(`  "types": "dist/index.d.ts",`)
                        $i.line(`  "version": "0.11.0",`)
                        $i.line(`  "content-fingerprint": "1309fef786ca077562927878b318fbaf88db3409"`)
                        $i.line(`}`)
                    })
                })
                $i.directory("test", ($i) => {

                    $i.file("package.json", ($i) => {
                        $i.line(`{`)
                        $i.line(`  "dependencies": {`)
                        // $i.line(`    "glo-pareto-common": "^0.1.0",`)
                        // $i.line(`    "lib-pareto-filesystem": "^0.7.0",`)
                        $i.line(`    "pareto-core-lib": "^0.17.0",`)
                        $i.line(`    "pareto-core-raw": "^0.7.0",`)
                        $i.line(`    "pareto-core-state": "^0.12.0",`)
                        // $i.line(`    "res-pareto-arithmetic": "^0.5.0",`)
                        // $i.line(`    "res-pareto-boolean": "^0.7.0",`)
                        // $i.line(`    "res-pareto-collation": "^0.10.0",`)
                        // $i.line(`    "res-pareto-diff": "^0.13.2"`)
                        $i.line(`}`)
                    })
                    $i.directory("src", ($i) => {
                        $i.directory("modules", ($i) => {

                            $d.dictionaryForEach($.modules, ($) => {
                                const moduleName = $.key

                                $i.directory($.key, ($i) => {
                                    $d.dictionaryForEach($.value.definition.api.algorithms, ($) => {
                                        $i.file(`${$.key}.p.ts`, ($i) => {
                                            $i.line(`import * as pl from 'pareto-core-lib'`)
                                            $i.line(``)
                                            $i.line(`import * as api from "../api"`)
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
                })

            })
        })
    }
}