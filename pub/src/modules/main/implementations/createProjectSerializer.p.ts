import * as api from "../api"

import * as mproject from "../api"
import * as mfp from "lib-fountain-pen"
export const icreateProjectSerializer: api.CcreateProjectSerializer = (
    $d,
) => {
    return ($, $i) => {
        const compare = (a: string, b: string) => $d.sf_compare({ a: a, b: b })
        function tsConfig(
            $: {
                isResource: boolean
            },
            $i: mfp.IWriter
        ) {
            $i.file("tsconfig.json", ($i) => {
                $i.literal(`{`)
                $i.literal(`  "compilerOptions": {`)
                if (!$.isResource) { $i.literal(`    "noLib": true,`) }
                $i.literal(`    "target": "ES2015",`)
                $i.literal(`    "module": "commonjs",`)
                $i.literal(`    "declaration": true,`)
                $i.literal(`    "outDir": "./dist",`)
                $i.literal(`    "rootDir": "./src",`)
                $i.literal(`    "strict": true,`)
                $i.literal(`    "esModuleInterop": true,`)
                $i.literal(`    "forceConsistentCasingInFileNames": true`)
                $i.literal(`  },`)
                $i.literal(`  "include": [`)
                $i.literal(`    "./src"`)
                $i.literal(`  ]`)
                $i.literal(`}`)
            })
        }
        function globals($i: mfp.IWriter) {
            $i.file("_globals.ts", ($i) => {
                $i.literal(`interface Array<T> {`)
                $i.literal(`    [n: number]: T`)
                $i.literal(`}`)
                $i.literal(`interface Boolean { }`)
                $i.literal(`interface CallableFunction { }`)
                $i.literal(`interface Function { }`)
                $i.literal(`interface IArguments { }`)
                $i.literal(`interface NewableFunction { }`)
                $i.literal(`interface Number { }`)
                $i.literal(`interface Object { }`)
                $i.literal(`interface RegExp { }`)
                $i.literal(`interface String { }`)
                $i.literal(``)
            })
        }
        //$i.allowed(`tmp`) //already defined in 'generateTemplate'
        $i.allowed(`.git`)
        $i.allowed(`pareto`)
        $i.directory("dev", ($i) => {
            $i.allowed(`dist`)
            $i.allowed(`node_modules`)
            $i.allowed(`package-lock.json`)
            $i.allowed(`package.json`)
            $i.directory("src", ($i) => {
                globals($i)
                $i.directory("bin", ($i) => {
                    $i.file("generateCode.generated.ts", ($i) => {
                        $i.literal(`import * as exe from "pareto-core-exe"`)
                        $i.literal(`import * as mmain from "../modules/main"`)
                        $i.literal(``)
                        $i.literal(`exe.runProgram(mmain.$a.main)`)
                    })
                })
                $i.allowed(`data`)
                $i.allowed(`modules`)
                $i.allowed(`index.ts`)
                // $i.directory(`src`, ($i) => {
                //     // $i.directory(`modules`, ($i) => {

                //     //     // $i.directory(`api`, ($i) => {

                //     //     //     $i.directory(`api`, ($i) => {
                //     //     //         $i.allowed(`shorthands.p.ts`)
                //     //     //     })
                //     //     // })
                //     //     // $i.directory(`glossary`, ($i) => {

                //     //     //     $i.directory(`api`, ($i) => {
                //     //     //         $i.allowed(`sorthands.p.ts`)
                //     //     //     })
                //     //     // })
                //     // })

                // })
            })
            tsConfig({ isResource: false }, $i)
        })
        $i.directory("pub", ($i) => {
            $i.allowed(`dist`)
            $i.allowed(`node_modules`)
            $i.allowed(`package-lock.json`)
            $i.allowed(`package.json`)
            $i.directory("src", ($i) => {
                if ($.type === undefined || $.type[0] !== "resource") {
                    globals($i)
                }
                $i.directory("modules", ($i) => {
                    $.modules.forEach(compare, ($, key) => {
                        $i.directory(`${key}`, ($i) => {
                            $i.directory(`implementations`, ($i) => {
                                $.definition.api.algorithms.forEach(compare, ($, key) => {
                                    $i.allowed(`${key}.p.ts`)
                                })
                            })
                            $i.directory(`api`, ($i) => {
                                $d.cb_serializeModuleDefinition($.definition, $i)
                            })
                            // $.definition.api.algorithms.forEach(compare, ($, key) => {
                            //     $i.directory(`${key}`, ($i) => {
                            //     })
                            // })
                            $i.file("index.ts", ($i) => {
                                $i.literal(`import { API } from "./api"`)
                                $.definition.api.algorithms.forEach(compare, ($, key) => {
                                    $i.literal(`import { i${key} } from "./implementations/${key}.p"`)
                                })
                                $i.literal(``)
                                $i.literal(`export * from "./api"`)
                                $i.literal(``)
                                $i.line(($i) => {
                                    $i.snippet(`export const $a: API = {`)
                                    $i.indent(($i) => {
                                        $.definition.api.algorithms.forEach(compare, ($, key) => {
                                            $i.literal(`"${key}": i${key},`)
                                        })
                                    })
                                    $i.snippet(`}`)
                                })
                            })
                        })
                    })
                })
                // $i.directory("implementation", ($i) => {
                //     // $i.directory("private_definitions", ($i) => {
                //     //     moduleDefintion($["private definitions"], $i)
                //     // })
                //     // function implementations($: NProject.Implementation, $i: IWriter) {
                //     //     $i.file("index.ts", ($i) => {
                //     //         $.forEach(compare, ($, key) => {
                //     //             $i.literal(`import { i${key} } from "./${$.type[0] === "binding" ? "binding" : "pure"}/${key}.p"`)
                //     //         })
                //     //         $i.literal(``)
                //     //         $i.line(($i) => {
                //     //             $i.snippet(`export const $a = {`)
                //     //             $i.indent(($i) => {
                //     //                 $.forEach(compare, ($, key) => {
                //     //                     $i.literal(`"${key}": i${key},`)
                //     //                 })
                //     //             })
                //     //             $i.snippet(`}`)
                //     //         })
                //     //     })
                //     // }
                //     // $i.directory("private", ($i) => {
                //     //     implementations($["private implementations"], $i)
                //     // })
                //     // $i.directory("public", ($i) => {
                //     //     implementations($["public implementations"], $i)
                //     // })
                //     // $i.file("implementationDeclarations.ts", ($i) => {
                //     //     $i.literal(`import * as glo from "./internal_glossary"`)
                //     //     $i.literal(`import * as api from "../api"`)
                //     //     $i.literal(``)
                //     //     $.implementation.implementations.forEach(compare, ($, key) => {
                //     //         $i.line(($i) => {
                //     //             $i.snippet(`export type I${key} = `)
                //     //             serializeAlgorithmDefinition($.definition, $i)
                //     //         })
                //     //     })
                //     // })
                //     $i.file("index.ts", ($i) => {
                //         $i.literal(`export * from "./private_definitions"`)
                //         $i.literal(`export { $a as $x } from "./private"`)
                //         $i.literal(`export * from "./public"`)
                //         $i.literal(``)
                //     })
                // })
                $i.file("index.ts", ($i) => {
                    $i.literal(`export { $a } from "./modules/${$.main}"`)
                    $i.literal(`export * from "./modules/${$.main}/api"`)
                })
            })
            tsConfig({ isResource: $.type !== undefined && $.type[0] === "resource" }, $i)
        })
        if ($.type === undefined || $.type[0] !== "glossary") {
            $i.directory("test", ($i) => {
                $i.allowed(`data`)
                $i.allowed(`dist`)
                $i.allowed(`node_modules`)
                $i.allowed(`package-lock.json`)
                $i.allowed(`package.json`)
                $i.directory("src", ($i) => {
                    $i.allowed(`data`)
                    $i.allowed(`dependencies`)
                    $i.allowed(`implementation`)
                    $i.allowed(`interface`)
                    globals($i)
                    $i.directory("bin", ($i) => {
                        $i.file("test.generated.ts", ($i) => {
                            $i.literal(`#!/usr/bin/env node`)
                            $i.literal(``)
                            $i.literal(`import * as pe from "pareto-core-exe"`)
                            $i.literal(`import * as pl from "pareto-core-lib"`)
                            $i.literal(`import * as test from "lib-pareto-test"`)
                            $i.literal(``)
                            $i.literal(`import { dependencies } from "../dependencies/dependencies.p"`)
                            $i.literal(`import { data } from "../data/data.p"`)
                            $i.literal(`import { createGetTestset } from "../implementation"`)
                            $i.literal(``)
                            $i.literal(`pe.runProgram(`)
                            $i.literal(`    ($) => {`)
                            $i.literal(`        test.$a.createTestProgram(`)
                            $i.literal(`            {`)
                            $i.literal(`                af_getTestSet: createGetTestset(`)
                            $i.literal(`                    data,`)
                            $i.literal(`                    dependencies`)
                            $i.literal(`                ),`)
                            $i.literal(`                pr_log: ($) => {`)
                            $i.literal(`                    pl.logDebugMessage($)`)
                            $i.literal(`                },`)
                            $i.literal(`                pr_logError: ($) => {`)
                            $i.literal(`                    pl.logDebugMessage($)`)
                            $i.literal(`                },`)
                            $i.literal(`                pr_onTestErrors: ($) => {`)
                            $i.literal(`                    pl.logDebugMessage("TEST ERROR")`)
                            $i.literal(`                },`)
                            $i.literal(`            },`)
                            $i.literal(`        )(`)
                            $i.literal(`           $.arguments`)
                            $i.literal(`        )`)
                            $i.literal(`    }`)
                            $i.literal(`)`)
                        })
                        $i.file("testXXXXX.generated.ts", ($i) => {
                            $i.literal(`import * as pt from "pareto-core-types"`)
                            $i.literal(`import * as pr from "pareto-core-raw"`)
                            $i.literal(`import * as pl from "pareto-core-lib"`)
                            $i.literal(`import * as tst from "lib-pareto-test"`)
                            $i.literal(``)
                            $.modules.forEach(compare, ($, key) => {
                                const moduleName = key
                                $.definition.api.algorithms.forEach(compare, ($, key) => {
                                    $i.line(($i) => {
                                        $i.snippet(`import { test as ${moduleName}_${key} } from "../modules/${moduleName}/${key}.p"`)
                                    })
                                })
                            })
                            $i.literal(``)
                            $i.line(($i) => {
                                $i.snippet(`const x = pr.wrapRawDictionary<pt.Dictionary<() => pt.AsyncValue<tst.TTestElement>>>({`)
                                $i.indent(($i) => {
                                    $.modules.forEach(compare, ($, key) => {
                                        const moduleName = key
                                        $i.line(($i) => {
                                            $i.snippet(`"${key}": pr.wrapRawDictionary({`)
                                            $i.indent(($i) => {
                                                $.definition.api.algorithms.forEach(compare, ($, key) => {
                                                    $i.line(($i) => {
                                                        $i.snippet(`"${key}": ${moduleName}_${key},`)
                                                    })
                                                })
                                            })
                                            $i.snippet(`}),`)
                                        })
                                    })
                                })
                                $i.snippet(`}).asyncMap(($, key) => $.asyncMap(($, key) => $()))`)
                            })
                        })
                    })
                    $i.directory("modules", ($i) => {
                        $.modules.forEach(compare, ($, key) => {
                            const moduleName = key
                            $i.directory(key, ($i) => {
                                const def = $.definition
                                $.definition.api.algorithms.forEach(compare, ($, key) => {
                                    // $i.file(`${key}_tmp.p.ts`, ($i) => {
                                    //     $i.literal(`import * as pt from "pareto-core-types"`)
                                    //     $i.literal(`import * as pl from "pareto-core-lib"`)
                                    //     $i.literal(``)
                                    //     $i.literal(`import * as tst from "lib-pareto-test"`)
                                    //     $i.literal(``)
                                    //     def.api.imports.forEach(compare, ($, key) => {
                                    //         $i.literal(`import * as m${key} from "${$}"`)
                                    //     })
                                    //     $i.line(($i) => {
                                    //         $i.snippet(`export type XX = `)
                                    //         $i.indent(($i) => {
                                    //             switch ($[0]) {
                                    //                 case "algorithm":
                                    //                     pl.cc($[1], ($) => {
                                    //                     })
                                    //                     break
                                    //                 case "constructor":
                                    //                     pl.cc($[1], ($) => {
                                    //                         $.dependencies.forEach(compare, ($, key) => {
                                    //                             $i.line(($i) => {
                                    //                                 $i.snippet(`| [ "${key}", `)
                                    //                                 switch ($.type[0]) {
                                    //                                     case "function":
                                    //                                         pl.cc($.type[1], ($) => {
                                    //                                             if ($.context !== undefined) {
                                    //                                                 switch ($.context[0]) {
                                    //                                                     case "import":
                                    //                                                         pl.cc($.context[1], ($) => {
                                    //                                                         })
                                    //                                                         break
                                    //                                                     case "local":
                                    //                                                         pl.cc($.context[1], ($) => {
                                    //                                                         })
                                    //                                                         break
                                    //                                                     default: pl.au($.context[0])
                                    //                                                 }
                                    //                                             } else {
                                    //                                             }
                                    //                                             $i.snippet(`string/*FIXME*/`)
                                    //                                         })
                                    //                                         break
                                    //                                     case "procedure":
                                    //                                         pl.cc($.type[1], ($) => {
                                    //                                             $d.serializeLeafType($, $i)
                                    //                                         })
                                    //                                         break
                                    //                                     default: pl.au($.type[0])
                                    //                                 }
                                    //                                 $i.snippet(` ]`)
                                    //                             })
                                    //                         })
                                    //                     })
                                    //                     break
                                    //                 default: pl.au($[0])
                                    //             }
                                    //         })
                                    //         $i.snippet(`}`)
                                    //     })
                                    //     $i.literal(``)
                                    // })
                                    $i.file(`${key}.p.ts`, ($i) => {
                                        $i.literal(`import * as pt from "pareto-core-types"`)
                                        $i.literal(`import * as pl from "pareto-core-lib"`)
                                        $i.literal(``)
                                        $i.literal(`import * as tst from "lib-pareto-test"`)
                                        $i.literal(``)
                                        $i.line(($i) => {
                                            $i.snippet(`export function test(): pt.AsyncValue<tst.TTestElement> {`)
                                            $i.indent(($i) => {
                                                $i.literal(`pl.implementMe("${moduleName}:${key}")`)
                                            })
                                            $i.snippet(`}`)
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
                tsConfig({ isResource: false }, $i)
            })
        }
        $i.file(".gitignore", ($i) => {
            $i.literal(`/dev/dist/`)
            $i.literal(`/dev/node_modules/`)
            $i.literal(`/pub/dist/`)
            $i.literal(`/pub/node_modules/`)
            $i.literal(`/pareto/node_modules/`)
            $i.literal(`/pareto/scripts/`)
            $i.literal(`/test/dist/`)
            $i.literal(`/test/node_modules/`)
            $i.literal(`/tmp`)
        })
        $i.allowed("README.md")
    }
}