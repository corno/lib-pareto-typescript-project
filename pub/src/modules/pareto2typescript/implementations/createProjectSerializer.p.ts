import * as pl from 'pareto-core-lib'

import * as api from "../api"

import * as mfp from "lib-fountain-pen"
export const $$: api.CcreateProjectSerializer = (
    $d,
) => {
    return ($, $i) => {
        const isResource = $.type[0] === 'resource'
        function tsConfig(
            $: {
                isResource: boolean
            },
            $i: mfp.IWriter
        ) {
            $i.file("tsconfig.json", ($i) => {
                $i.line(`{`)
                $i.line(`  "compilerOptions": {`)
                if (!$.isResource) { $i.line(`    "noLib": true,`) }
                $i.line(`    "target": "ES2015",`)
                $i.line(`    "module": "commonjs",`)
                $i.line(`    "declaration": true,`)
                $i.line(`    "outDir": "./dist",`)
                $i.line(`    "rootDir": "./src",`)
                $i.line(`    "strict": true,`)
                $i.line(`    "esModuleInterop": true,`)
                $i.line(`    "forceConsistentCasingInFileNames": true`)
                $i.line(`  },`)
                $i.line(`  "include": [`)
                $i.line(`    "./src"`)
                $i.line(`  ]`)
                $i.line(`}`)
            })
        }
        function globals($i: mfp.IWriter) {
            $i.file("globals.generated.ts", ($i) => {
                $i.line(`interface Array<T> {`)
                $i.line(`    [n: number]: T`)
                $i.line(`}`)
                $i.line(`interface Boolean { }`)
                $i.line(`interface CallableFunction { }`)
                $i.line(`interface Function { }`)
                $i.line(`interface IArguments { }`)
                $i.line(`interface NewableFunction { }`)
                $i.line(`interface Number { }`)
                $i.line(`interface Object { }`)
                $i.line(`interface RegExp { }`)
                $i.line(`interface String { }`)
                $i.line(``)
            })
        }
        //$i.allowed("tmp") //already defined in 'generateTemplate'
        $i.allowed(".git")
        $i.allowed("build")
        $i.allowed("pareto")
        $i.directory("pub", ($i) => {
            $i.allowed("dist")
            $i.allowed("node_modules")
            $i.allowed("package-lock.json")
            $i.file("package.json", ($i) => {
                $i.line(`{`)
                $i.line(`  "name": "${$.name}",`)
                $i.line(`  "author": "${$.author}",`)
                $i.line(`  "license": "${$.license}",`)
                $i.line(`  "description": "${$.description}",`)
                $i.line(``)
                $i.line(`  "dependencies": {`)
                $d.dictionaryForEach($.pubdependencies, ($) => {
                    $i.line(`    "${$.key}": "^0.0.0",`)
                })
                switch ($.type[0]) {
                    case 'glossary':
                        pl.cc($.type[1], ($) => {
                            $i.line(`    "pareto-core-types": "^0.0.0"`)
                        })
                        break
                    case 'library':
                        pl.cc($.type[1], ($) => {
                            $i.line(`    "pareto-core-lib": "^0.0.0",`)
                            $i.line(`    "pareto-core-raw": "^0.0.0",`)
                            $i.line(`    "pareto-core-state": "^0.0.0"`)
                        })
                        break
                    case 'resource':
                        pl.cc($.type[1], ($) => {
                            $i.line(`    "pareto-core-internals": "^0.0.0"`)
                        })
                        break
                    default: pl.au($.type[0])
                }
                $i.line(`  },`)
                //devDependencies
                if ($.type[0] === 'resource') {

                    $d.enrichedDictionaryForEach($.type[1].devDependencies, {
                        onEmpty: () => {

                        },
                        onNotEmpty: ($c) => {
                                $i.line(`  "devDependencies": {`)
                                $c(($) => {
                                    $i.line(`    "${$.key}": "^0.0.0"${$.isLast ? ``: `,`}`)
                                })
                                $i.line(`  },`)
                        }
                    })
                }
                $i.line(`  "files": [`)
                $i.line(`    "dist"`)
                $i.line(`  ],`)
                $i.line(`  "repository": {`)
                $i.line(`    "type": "git",`)
                $i.line(`    "url": "http://github.com/corno/${$.name}.git"`)
                $i.line(`  },`)
                $i.line(`  "main": "dist/index.js",`)
                $i.line(`  "types": "dist/index.d.ts",`)
                $i.line(`  "version": "0.0.0"`)
                $i.line(`}`)
                $i.line(``)
            })
            $i.directory("src", ($i) => {
                if ($.type === undefined || $.type[0] !== 'resource') {
                    globals($i)
                }
                $i.directory("modules", ($i) => {
                    $d.dictionaryForEach($.modules, ($) => {
                        $i.directory(`${$.key}`, ($i) => {
                            $i.directory("api", ($i) => {
                                $d.serializeModuleDefinition($.value.definition, $i)
                            })

                            $i.directory("implementations", ($i) => {
                                if ($.value.implementation !== undefined) {
                                    pl.cc($.value.implementation, ($) => {
                                        $d.serializeImplementation($, $i)
                                    })
                                } else {
                                    $d.dictionaryForEach($.value.definition.api.algorithms, ($) => {
                                        $i.allowed(`${$.key}.${isResource ? `native` : `p`}.ts`)
                                    })
                                }
                            })
                            $i.file("implementation.generated.ts", ($i) => {
                                const suffix = isResource
                                    ? `native`
                                    : $.value.implementation !== undefined
                                        ? `generated`
                                        : `p`
                                $i.line(`import { API } from "./api"`)
                                $d.dictionaryForEach($.value.definition.api.algorithms, ($) => {
                                    $i.line(`import { $$ as ${$d.createIdentifier(`i${$.key}`)} } from "./implementations/${$.key}.${suffix}"`)
                                })
                                $i.line(``)
                                $i.nestedLine(($i) => {
                                    $i.snippet(`export const $a: API = {`)
                                    $i.indent(($i) => {
                                        $d.dictionaryForEach($.value.definition.api.algorithms, ($) => {
                                            $i.line(`${$d.createApostrophedString(`${$.key}`)}: ${$d.createIdentifier(`i${$.key}`)},`)
                                        })
                                    })
                                    $i.snippet(`}`)
                                })
                            })
                            $i.file("index.ts", ($i) => {
                                $i.line(`export * from "./api"`)
                                $i.line(`export * from "./implementation.generated"`)
                            })
                        })
                    })
                })
                // $i.directory("implementation", ($i) => {
                //     // $i.directory("private_definitions", ($i) => {
                //     //     moduleDefintion($["private definitions"], $i)
                //     // })
                //     // function implementations($: mproject.Implementation, $i: IWriter) {
                //     //     $i.file("index.ts", ($i) => {
                //     //         $.forEach(compare, ($, key) => {
                //     //             $i.line(`import { i${key} } from "./${$.type[0] === "binding" ? "binding" : "pure"}/${key}.p"`)
                //     //         })
                //     //         $i.line(``)
                //     //         $i.nestedLine(($i) => {
                //     //             $i.snippet(`export const $a = {`)
                //     //             $i.indent(($i) => {
                //     //                 $.forEach(compare, ($, key) => {
                //     //                     $i.line(`'${key}': i${key},`)
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
                //     //     $i.line(`import * as glo from "./internal_glossary"`)
                //     //     $i.line(`import * as api from "../api"`)
                //     //     $i.line(``)
                //     //     $d.dictionaryForEach($.implementation.implementations, ($, key) => {
                //     //         $i.nestedLine(($i) => {
                //     //             $i.snippet(`export type ${$d.createIdentifier(`I${$.key}`)} = `)
                //     //             serializeAlgorithmDefinition($.definition, $i)
                //     //         })
                //     //     })
                //     // })
                //     $i.file("index.ts", ($i) => {
                //         $i.line(`export * from "./private_definitions"`)
                //         $i.line(`export { $a as $x } from "./private"`)
                //         $i.line(`export * from "./public"`)
                //         $i.line(``)
                //     })
                // })
                $i.file("index.ts", ($i) => {
                    $i.line(`export { $a } from "./modules/${$.main}"`)
                    $i.line(`export * from "./modules/${$.main}/api"`)
                })
            })
            tsConfig({ isResource: $.type !== undefined && $.type[0] === 'resource' }, $i)
        })
        if ($.type === undefined || $.type[0] !== 'glossary') {
            $i.directory("test", ($i) => {
                $i.allowed("data")
                $i.allowed("dist")
                $i.allowed("node_modules")
                $i.allowed("package-lock.json")
                $i.file("package.json", ($i) => {
                    $i.line(`{`)
                    $i.line(`  "dependencies": {`)
                    if ($.testdependencies !== undefined) {
                        $d.dictionaryForEach($.testdependencies, ($) => {
                            $i.line(`    "${$.key}": "^0.0.0",`)
                        })
                    }
                    $i.line(`    "lib-pareto-test": "^0.0.0",`)
                    $i.line(`    "pareto-core-exe": "^0.0.0",`)
                    $i.line(`    "pareto-core-lib": "^0.0.0",`)
                    $i.line(`    "pareto-core-raw": "^0.0.0",`)
                    $i.line(`    "pareto-core-state": "^0.0.0",`)
                    $i.line(`    "res-pareto-main": "^0.0.0"`)
                    $i.line(`  }`)
                    $i.line(`}`)
                    $i.line(``)
                })
                $i.directory("src", ($i) => {
                    globals($i)
                    $i.directory("bin", ($i) => {
                        $i.file("test.generated.ts", ($i) => {
                            $i.line(`import * as exe from 'pareto-core-exe'`)
                            $i.line(`import * as mmain from "../modules/main"`)
                            $i.line(``)
                            $i.line(`exe.runProgram(mmain.$a.main)`)
                        })
                    })
                    $i.allowed("data")
                    $i.directory("modules", ($i) => {
                        $i.directory("main", ($i) => {
                            $i.directory("api", ($i) => {
                                $i.file("api.generated.ts", ($i) => {
                                    $i.line(`import * as pt from 'pareto-core-types'`)
                                    $i.line(``)
                                    $i.line(`import * as glo from "./types.generated"`)
                                    $i.line(``)
                                    $i.line(`import * as mmain from "res-pareto-main"`)
                                    $i.line(`import * as mtest from "lib-pareto-test"`)
                                    $i.line(``)
                                    $i.line(`export type CgetTestSet = mtest.FGetTestSet`)
                                    $i.line(``)
                                    $i.line(`export type Cmain = pt.Procedure<mmain.TMainData>`)
                                    $i.line(``)
                                    $i.line(`export type API = {`)
                                    $i.line(`    getTestSet: CgetTestSet`)
                                    $i.line(`    main: Cmain`)
                                    $i.line(`}`)
                                })
                                $i.file("types.generated.ts", ($i) => {
                                    $i.line(`import * as pt from 'pareto-core-types'`)
                                })
                                $i.file("index.ts", ($i) => {
                                    $i.line(`export * from "./types.generated"`)
                                    $i.line(`export * from "./api.generated"`)
                                })
                            })
                            $i.directory("implementations", ($i) => {
                                $i.allowed("getTestSet.p.ts")
                                $i.file("main.generated.ts", ($i) => {
                                    $i.line(`import * as pl from 'pareto-core-lib'`)
                                    $i.line(`import * as api from "../api"`)
                                    $i.line(``)
                                    $i.line(`import { $a } from "../index"`)
                                    $i.line(`import * as mmain from "res-pareto-main"`)
                                    $i.line(`import * as mtest from "lib-pareto-test"`)
                                    $i.line(``)
                                    $i.line(`export const $$: api.Cmain = ($) => {`)
                                    $i.line(``)
                                    $i.line(`    mtest.$a.createTestProgram({`)
                                    $i.line(`        getTestSet: $a.getTestSet,`)
                                    $i.line(`        log: mmain.$a.log,`)
                                    $i.line(`        logError: mmain.$a.logError,`)
                                    $i.line(`        onTestErrors: mmain.$a.setExitCodeToFailed`)
                                    $i.line(`    })($)`)
                                    $i.line(`}`)
                                })
                            })
                            $i.file("export.generated.ts", ($i) => {
                                $i.line(`import { API } from "./api"`)
                                $i.line(`import { $$ as imain } from "./implementations/main.generated"`)
                                $i.line(`import { $$ as igetTestSet } from "./implementations/getTestSet.p"`)
                                $i.line(``)
                                $i.line(`export const $a: API = {`)
                                $i.line(`    "main": imain,`)
                                $i.line(`    "getTestSet": igetTestSet,`)
                                $i.line(`}`)
                            })
                            $i.file("index.ts", ($i) => {
                                $i.line(`export * from "./api"`)
                                $i.line(`export * from "./export.generated"`)
                            })
                        })
                    })


                    // $i.file("testXXXXX.generated.ts", ($i) => {
                    //     $i.line(`import * as pt from 'pareto-core-types'`)
                    //     $i.line(`import * as pr from 'pareto-core-raw'`)
                    //     $i.line(`import * as pl from 'pareto-core-lib'`)
                    //     $i.line(`import * as tst from "lib-pareto-test"`)
                    //     $i.line(``)
                    //     $d.dictionaryForEach($.modules, ($, key) => {
                    //         const moduleName = key
                    //         $d.dictionaryForEach($.definition.api.algorithms, ($, key) => {
                    //             $i.nestedLine(($i) => {
                    //                 $i.snippet(`import { test as ${moduleName}_${key} } from "../modules/${moduleName}/${key}.generated"`)
                    //             })
                    //         })
                    //     })
                    //     $i.line(``)
                    //     $i.nestedLine(($i) => {
                    //         $i.snippet(`const x = pr.wrapRawDictionary<pt.Dictionary<() => pt.AsyncValue<tst.TTestElement>>>({`)
                    //         $i.indent(($i) => {
                    //             $d.dictionaryForEach($.modules, ($, key) => {
                    //                 const moduleName = key
                    //                 $i.nestedLine(($i) => {
                    //                     $i.snippet(`'${key}': pr.wrapRawDictionary({`)
                    //                     $i.indent(($i) => {
                    //                         $d.dictionaryForEach($.definition.api.algorithms, ($, key) => {
                    //                             $i.nestedLine(($i) => {
                    //                                 $i.snippet(`'${key}': ${moduleName}_${key},`)
                    //                             })
                    //                         })
                    //                     })
                    //                     $i.snippet(`}),`)
                    //                 })
                    //             })
                    //         })
                    //         $i.snippet(`}).asyncMap(($, key) => $.asyncMap(($, key) => $()))`)
                    //     })
                    // })
                    // $i.directory("modules", ($i) => {
                    //     $d.dictionaryForEach($.modules, ($, key) => {
                    //         const moduleName = key
                    //         $i.directory(key, ($i) => {
                    //             const def = $.definition
                    //             $d.dictionaryForEach($.definition.api.algorithms, ($, key) => {
                    //                 // $i.file(`${key}_tmp.p.ts`, ($i) => {
                    //                 //     $i.line(`import * as pt from 'pareto-core-types'`)
                    //                 //     $i.line(`import * as pl from 'pareto-core-lib'`)
                    //                 //     $i.line(``)
                    //                 //     $i.line(`import * as tst from "lib-pareto-test"`)
                    //                 //     $i.line(``)
                    //                 //     def.api.imports.forEach(compare, ($, key) => {
                    //                 //         $i.line(`import * as m${key} from "${$}"`)
                    //                 //     })
                    //                 //     $i.nestedLine(($i) => {
                    //                 //         $i.snippet(`export type XX = `)
                    //                 //         $i.indent(($i) => {
                    //                 //             switch ($[0]) {
                    //                 //                 case 'algorithm':
                    //                 //                     pl.cc($[1], ($) => {
                    //                 //                     })
                    //                 //                     break
                    //                 //                 case 'constructor':
                    //                 //                     pl.cc($[1], ($) => {
                    //                 //                         $d.dictionaryForEach($.dependencies, ($, key) => {
                    //                 //                             $i.nestedLine(($i) => {
                    //                 //                                 $i.snippet(`| [ '${key}', `)
                    //                 //                                 switch ($.type[0]) {
                    //                 //                                     case 'function':
                    //                 //                                         pl.cc($.type[1], ($) => {
                    //                 //                                             if ($.context !== undefined) {
                    //                 //                                                 switch ($.context[0]) {
                    //                 //                                                     case 'import':
                    //                 //                                                         pl.cc($.context[1], ($) => {
                    //                 //                                                         })
                    //                 //                                                         break
                    //                 //                                                     case 'local':
                    //                 //                                                         pl.cc($.context[1], ($) => {
                    //                 //                                                         })
                    //                 //                                                         break
                    //                 //                                                     default: pl.au($.context[0])
                    //                 //                                                 }
                    //                 //                                             } else {
                    //                 //                                             }
                    //                 //                                             $i.snippet(`string/*FIXME*/`)
                    //                 //                                         })
                    //                 //                                         break
                    //                 //                                     case 'procedure':
                    //                 //                                         pl.cc($.type[1], ($) => {
                    //                 //                                             $d.serializeLeafType($, $i)
                    //                 //                                         })
                    //                 //                                         break
                    //                 //                                     default: pl.au($.type[0])
                    //                 //                                 }
                    //                 //                                 $i.snippet(` ]`)
                    //                 //                             })
                    //                 //                         })
                    //                 //                     })
                    //                 //                     break
                    //                 //                 default: pl.au($[0])
                    //                 //             }
                    //                 //         })
                    //                 //         $i.snippet(`}`)
                    //                 //     })
                    //                 //     $i.line(``)
                    //                 // })
                    //                 $i.file(`${key}.generated.ts`, ($i) => {
                    //                     $i.line(`import * as pt from 'pareto-core-types'`)
                    //                     $i.line(`import * as pl from 'pareto-core-lib'`)
                    //                     $i.line(``)
                    //                     $i.line(`import * as tst from "lib-pareto-test"`)
                    //                     $i.line(``)
                    //                     $i.nestedLine(($i) => {
                    //                         $i.snippet(`export function test(): pt.AsyncValue<tst.TTestElement> {`)
                    //                         $i.indent(($i) => {
                    //                             $i.line(`pl.implementMe(\`${moduleName}:${key}\`)`)
                    //                         })
                    //                         $i.snippet(`}`)
                    //                     })
                    //                 })
                    //             })
                    //         })
                    //     })
                    // })
                })
                tsConfig({ isResource: false }, $i)
            })
        }
        $i.file(".gitignore", ($i) => {
            $i.line(`/build/node_modules/`)
            $i.line(`/build/scripts/`)
            $i.line(`/dev/dist/`)
            $i.line(`/dev/node_modules/`)
            $i.line(`/pareto/dist/`)
            $i.line(`/pareto/node_modules/`)
            $i.line(`/pub/dist/`)
            $i.line(`/pub/node_modules/`)
            $i.line(`/test/dist/`)
            $i.line(`/test/node_modules/`)
            $i.line(`/tmp`)
        })
        $i.allowed("README.md")
    }
}