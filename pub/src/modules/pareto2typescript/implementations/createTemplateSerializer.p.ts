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
                        $i.literal(`{`)
                        $i.literal(`  "dependencies": {`)
                        // $i.literal(`    "glo-pareto-common": "^0.1.0",`)
                        // $i.literal(`    "lib-pareto-filesystem": "^0.7.0",`)
                        $i.literal(`    "pareto-core-lib": "^0.17.0",`)
                        $i.literal(`    "pareto-core-raw": "^0.7.0",`)
                        $i.literal(`    "pareto-core-state": "^0.12.0",`)
                        // $i.literal(`    "res-pareto-arithmetic": "^0.5.0",`)
                        // $i.literal(`    "res-pareto-boolean": "^0.7.0",`)
                        // $i.literal(`    "res-pareto-collation": "^0.10.0",`)
                        // $i.literal(`    "res-pareto-diff": "^0.13.2"`)
                        $i.literal(`}`)
                    })
                })
                $i.directory("pub", ($i) => {
                    $i.directory("src", ($i) => {
                        $i.directory("modules", ($i) => {

                            $d.cb_dictionaryForEach($.modules, ($) => {
                                const moduleName = $.key

                                $i.directory(moduleName, ($i) => {
                                    $i.directory("implementations", ($i) => {
                                        $d.cb_dictionaryForEach($.value.definition.api.algorithms, ($) => {
                                            $i.file(`${$.key}.p.ts`, ($i) => {
                                                $i.literal(`import * as pl from 'pareto-core-lib'`)
                                                $i.literal(``)
                                                $i.literal(`import * as api from "../api"`)
                                                $i.literal(``)
                                                $i.line(($i) => {
                                                    $i.snippet(`export const $$: api.C${$.key}`)
                                                    $i.snippet(` = ($c, $d) => {`)
                                                    $i.indent(($i) => {
                                                        $i.line(($i) => {
                                                            $i.snippet(`return ($) => {`)
                                                            $i.indent(($i) => {
                                                                $i.line(($i) => {
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
                        $i.literal(`{`)
                        $i.literal(`  "author": "Corno",`)
                        $i.literal(`  "dependencies": {`)
                        // $i.literal(`    "glo-pareto-common": "^0.1.0",`)
                        // $i.literal(`    "lib-pareto-filesystem": "^0.7.0",`)
                        $i.literal(`    "pareto-core-lib": "^0.17.0",`)
                        $i.literal(`    "pareto-core-raw": "^0.7.0",`)
                        $i.literal(`    "pareto-core-state": "^0.12.0",`)
                        // $i.literal(`    "res-pareto-arithmetic": "^0.5.0",`)
                        // $i.literal(`    "res-pareto-boolean": "^0.7.0",`)
                        // $i.literal(`    "res-pareto-collation": "^0.10.0",`)
                        // $i.literal(`    "res-pareto-diff": "^0.13.2"`)
                        $i.literal(`  },`)
                        $i.literal(`  "description": "test functions for pareto",`)
                        $i.literal(`  "files": [`)
                        $i.literal(`    "dist"`)
                        $i.literal(`  ],`)
                        $i.literal(`  "license": "ISC",`)
                        $i.literal(`  "main": "dist/index.js",`)
                        $i.literal(`  "name": "lib-pareto-test",`)
                        $i.literal(`  "repository": {`)
                        $i.literal(`    "type": "git",`)
                        $i.literal(`    "url": "http://github.com/corno/lib-pareto-test.git"`)
                        $i.literal(`  },`)
                        $i.literal(`  "types": "dist/index.d.ts",`)
                        $i.literal(`  "version": "0.11.0",`)
                        $i.literal(`  "content-fingerprint": "1309fef786ca077562927878b318fbaf88db3409"`)
                        $i.literal(`}`)
                    })
                })
                $i.directory("test", ($i) => {

                    $i.file("package.json", ($i) => {
                        $i.literal(`{`)
                        $i.literal(`  "dependencies": {`)
                        // $i.literal(`    "glo-pareto-common": "^0.1.0",`)
                        // $i.literal(`    "lib-pareto-filesystem": "^0.7.0",`)
                        $i.literal(`    "pareto-core-lib": "^0.17.0",`)
                        $i.literal(`    "pareto-core-raw": "^0.7.0",`)
                        $i.literal(`    "pareto-core-state": "^0.12.0",`)
                        // $i.literal(`    "res-pareto-arithmetic": "^0.5.0",`)
                        // $i.literal(`    "res-pareto-boolean": "^0.7.0",`)
                        // $i.literal(`    "res-pareto-collation": "^0.10.0",`)
                        // $i.literal(`    "res-pareto-diff": "^0.13.2"`)
                        $i.literal(`}`)
                    })
                    $i.directory("src", ($i) => {
                        $i.directory("modules", ($i) => {

                            $d.cb_dictionaryForEach($.modules, ($) => {
                                const moduleName = $.key

                                $i.directory($.key, ($i) => {
                                    $d.cb_dictionaryForEach($.value.definition.api.algorithms, ($) => {
                                        $i.file(`${$.key}.p.ts`, ($i) => {
                                            $i.literal(`import * as pl from 'pareto-core-lib'`)
                                            $i.literal(``)
                                            $i.literal(`import * as api from "../api"`)
                                            $i.literal(``)
                                            $i.line(($i) => {
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