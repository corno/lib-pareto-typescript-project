import * as pl from 'pareto-core-lib'
import * as pd from 'pareto-core-dev'

import * as gfp from "lib-fountain-pen"
import * as gproject from "../../project"

import { CcreateProjectSerializer } from "../api"

export const $$: CcreateProjectSerializer = (
    $d,
) => {
    return <Annotation>($: gproject.T.Project<Annotation>, $i: gfp.IWriter) => {
        const isResource = $.type[0] === 'resource'
        function tsConfig(
            $: {
                isResource: boolean,
                inlineSourceMap: boolean,
            },
            $i: gfp.IWriter
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
                if ($.inlineSourceMap) { $i.line(`    "inlineSourceMap": true,`) }
                $i.line(`    "forceConsistentCasingInFileNames": true`)
                $i.line(`  },`)
                $i.line(`  "include": [`)
                $i.line(`    "./src"`)
                $i.line(`  ]`)
                $i.line(`}`)
            })
        }
        function globals($i: gfp.IWriter) {
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
        $i.allowed("dev")
        $i.directory("build", ($i) => {
            $i.allowed("node_modules")
            $i.allowed("scripts")
            $i.allowed("initialize.sh")
            $i.allowed("package.json")
            $i.allowed("package-lock.json")
        })
        $i.directory("pareto", ($i) => {
            $i.allowed("dist")
            $i.allowed("node_modules")
            $i.allowed("tsconfig.json")
            $i.allowed("package.json")
            $i.allowed("package-lock.json")
            $i.directory("src", ($i) => {
                $i.allowed("globals.generated.ts")
                $i.directory("bin", ($i) => {
                    $i.allowed("generateCode.generated.ts")
                })
                $i.allowed("data")
            })
        })
        $i.directory("pub", ($i) => {
            $i.allowed("dist")
            $i.allowed("node_modules")
            $i.allowed("package-lock.json")
            $i.file("package.json", ($i) => {
                $i.line(`{`)
                $i.line(`  "author": "${$.author}",`)
                $i.line(`  "license": "${$.license}",`)
                $i.line(`  "description": "${$.description}",`)
                $i.line(``)
                $i.line(`  "dependencies": {`)
                $d.dictionaryForEach($.dependencies, ($) => {
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
                            $d.enrichedDictionaryForEach($.executables, {
                                onEmpty: () => {
                                },
                                onNotEmpty: ($c) => {
                                    $i.line(`    "pareto-core-exe": "^0.0.0",`)
                                }
                            })
                            $i.line(`    "pareto-core-async": "^0.0.0",`)
                            $i.line(`    "pareto-core-dev": "^0.0.0",`)
                            $i.line(`    "pareto-core-data": "^0.0.0",`)
                            $i.line(`    "pareto-core-map": "^0.0.0",`)
                            $i.line(`    "pareto-core-lib": "^0.0.0",`)
                            $i.line(`    "pareto-core-state": "^0.0.0"`)
                        })
                        break
                    case 'resource':
                        pl.cc($.type[1], ($) => {
                            $d.dictionaryForEach($.nativeDependencies, ($) => {
                                $i.line(`    "${$.key}": "^0.0.0",`)
                            })
                            $i.line(`    "pareto-core-internals": "^0.0.0"`)
                        })
                        break
                    default: pl.au($.type[0])
                }
                $i.line(`  },`)
                switch ($.type[0]) {
                    case 'glossary':
                        pl.cc($.type[1], ($) => {

                        })
                        break
                    case 'library':
                        pl.cc($.type[1], ($) => {
                            $d.enrichedDictionaryForEach($.executables, {
                                onEmpty: () => {

                                },
                                onNotEmpty: ($c) => {
                                    $i.line(`  "bin": {`)
                                    $c(($) => {
                                        $i.line(`    "${$.key}": "dist/bin/${$.key}.js"${$.isLast ? `` : `,`}`)
                                    })
                                    $i.line(`  },`)
                                }
                            })

                        })
                        break
                    case 'resource':
                        pl.cc($.type[1], ($) => {
                            $d.enrichedDictionaryForEach($.devDependencies, {
                                onEmpty: () => {

                                },
                                onNotEmpty: ($c) => {
                                    $i.line(`  "devDependencies": {`)
                                    $c(($) => {
                                        $i.line(`    "${$.key}": "^0.0.0"${$.isLast ? `` : `,`}`)
                                    })
                                    $i.line(`  },`)
                                }
                            })

                        })
                        break
                    default: pl.au($.type[0])
                }
                $i.line(`  "files": [`)
                $i.line(`    "dist"`)
                $i.line(`  ],`)
                $i.line(`  "repository": {`)
                $i.line(`    "type": "git"`)
                $i.line(`  },`)
                $i.line(`  "main": "dist/index.js",`)
                $i.line(`  "types": "dist/index.d.ts"`)
                $i.line(`}`)
                $i.line(``)
            })
            $i.directory("src", ($i) => {
                switch ($.type[0]) {
                    case 'glossary':
                        pl.cc($.type[1], ($) => {
                            globals($i)
                            $d.serializeGlossary($.glossary, $i)
                        })
                        break
                    case 'library':
                        pl.cc($.type[1], ($) => {
                            function doModule($: gproject.T.Module<Annotation>, $i: gfp.IWriter) {
                                const definition = $.definition
                                $i.allowed("shorthands.ts")
                                $i.directory("api", ($i) => {
                                    $d.serializeModuleDefinition($.definition, $i)
                                })

                                switch ($.implementation[0]) {
                                    case 'generated':
                                        pl.cc($.implementation[1], ($) => {
                                            pd.implementMe("IMPLEMENTATIONS")
                                            //$d.serializeImplementation($, $i)
                                        })
                                        break
                                    case 'manual':
                                        pl.cc($.implementation[1], ($) => {
                                            $i.directory("implementations", ($i) => {
                                                $d.dictionaryForEach(definition.api.algorithms, ($) => {
                                                    $i.allowed(`${$.key}.${isResource ? `native` : `p`}.ts`)
                                                })
                                            })
                                        })
                                        break
                                    default: pl.au($.implementation[0])
                                }
                                $i.file("implementation.generated.ts", ($i) => {
                                    const suffix = isResource
                                        ? `native`
                                        : $.implementation !== undefined
                                            ? `generated`
                                            : `p`
                                    $i.line(`import { API } from "./api"`)
                                    $d.dictionaryForEach($.definition.api.algorithms, ($) => {
                                        $i.line(`import { $$ as ${$d.createIdentifier(`i${$.key}`)} } from "./implementations/${$.key}.${suffix}"`)
                                    })
                                    $i.line(``)
                                    $i.nestedLine(($i) => {
                                        $i.snippet(`export const $a: API = {`)
                                        $i.indent(($i) => {
                                            $d.dictionaryForEach($.definition.api.algorithms, ($) => {
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
                            }
                            globals($i)
                            $d.enrichedDictionaryForEach($.executables, {
                                'onEmpty': () => {

                                },
                                'onNotEmpty': ($c) => {
                                    $i.directory("bin", ($i) => {
                                        $c(($) => {
                                            $i.file(`${$.key}.generated.ts`, ($i) => {
                                                $i.line(`#!/usr/bin/env node`)
                                                $i.line(``)
                                                $i.line(`import * as pe from 'pareto-core-exe'`)
                                                $i.line(``)
                                                $i.line(`import * as gmain from "../main"`)
                                                $i.line(``)
                                                $i.line(`pe.runProgram(gmain.$a.${$d.createIdentifier($.key)})`)
                                            })
                                        })
                                    })
                                }
                            })
                            $i.directory("main", ($i) => {
                                doModule($.main, $i)
                            })
                            $i.directory("submodules", ($i) => {
                                $d.dictionaryForEach($.submodules, ($) => {
                                    $i.directory(`${$.key}`, ($i) => {
                                        doModule($.value, $i)
                                    })
                                })
                            })
                            $i.file("index.ts", ($i) => {
                                $i.line(`export { $a } from "./main"`)
                                $i.line(`export * from "./main"`)
                            })
                        })
                        break
                    case 'resource':
                        pl.cc($.type[1], ($) => {
                            $i.directory("api", ($i) => {
                                $d.serializeModuleDefinition($.definition, $i)
                            })

                            $i.directory("implementations", ($i) => {
                                $d.dictionaryForEach($.definition.api.algorithms, ($) => {
                                    $i.allowed(`${$.key}.${isResource ? `native` : `p`}.ts`)
                                })
                            })
                            $i.file("implementation.generated.ts", ($i) => {

                                $i.line(`import { API } from "./api"`)
                                $d.dictionaryForEach($.definition.api.algorithms, ($) => {
                                    $i.line(`import { $$ as ${$d.createIdentifier(`i${$.key}`)} } from "./implementations/${$.key}.native"`)
                                })
                                $i.line(``)
                                $i.nestedLine(($i) => {
                                    $i.snippet(`export const $a: API = {`)
                                    $i.indent(($i) => {
                                        $d.dictionaryForEach($.definition.api.algorithms, ($) => {
                                            $i.line(`${$d.createApostrophedString(`${$.key}`)}: ${$d.createIdentifier(`i${$.key}`)},`)
                                        })
                                    })
                                    $i.snippet(`}`)
                                })
                            })
                            $i.allowed("native")
                            $i.file("index.ts", ($i) => {
                                $i.line(`export * from "./api"`)
                                $i.line(`export { $a } from "./implementation.generated"`)
                            })
                        })
                        break
                    default: pl.au($.type[0])
                }
            })
            tsConfig(
                {
                    'isResource': $.type !== undefined && $.type[0] === 'resource',
                    'inlineSourceMap': false,
                },
                $i
            )
        })
        function doTest($: gproject.T.Test<Annotation>, $i: gfp.IWriter) {

            $i.directory("test", ($i) => {
                $i.allowed("data")
                $i.allowed("dist")
                $i.allowed("node_modules")
                $i.allowed("package-lock.json")
                $i.file("package.json", ($i) => {
                    $i.line(`{`)
                    $i.line(`  "dependencies": {`)
                    $d.dictionaryForEach($.dependencies, ($) => {
                        $i.line(`    "${$.key}": "^0.0.0",`)
                    })
                    $i.line(`    "lib-pareto-test": "^0.0.0",`)
                    $i.line(`    "pareto-core-exe": "^0.0.0",`)
                    $i.line(`    "pareto-core-map": "^0.0.0",`)
                    $i.line(`    "pareto-core-async": "^0.0.0",`)
                    $i.line(`    "pareto-core-dev": "^0.0.0",`)
                    $i.line(`    "pareto-core-lib": "^0.0.0",`)
                    $i.line(`    "pareto-core-data": "^0.0.0",`)
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
                            $i.line(`import * as pe from 'pareto-core-exe'`)
                            $i.line(``)
                            $i.line(`import * as gmain from "../modules/main"`)
                            $i.line(``)
                            $i.line(`pe.runProgram(gmain.$a.main)`)
                        })
                    })
                    $i.allowed("data")
                    $i.directory("modules", ($i) => {
                        $i.directory("main", ($i) => {
                            $i.directory("api", ($i) => {
                                $i.file("api.generated.ts", ($i) => {
                                    $i.line(`import * as pt from 'pareto-core-types'`)
                                    $i.line(``)
                                    $i.line(`import * as gmain from "res-pareto-main"`)
                                    $i.line(`import * as gtest from "lib-pareto-test"`)
                                    $i.line(``)
                                    $i.line(`export type CgetTestSet = gtest.FGetTestSet`)
                                    $i.line(`export type Cmain = ($: gmain.T.MainData) => void`)
                                    $i.line(``)
                                    $i.line(`export type API = {`)
                                    $i.line(`    'getTestSet': CgetTestSet`)
                                    $i.line(`    'main': Cmain`)
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
                                    $i.line(``)
                                    $i.line(``)
                                    $i.line(`import * as gmain from "res-pareto-main"`)
                                    $i.line(`import * as gtest from "lib-pareto-test"`)
                                    $i.line(``)
                                    $i.line(`import { $a } from "../index"`)
                                    $i.line(``)
                                    $i.line(`import { Cmain } from "../api"`)
                                    $i.line(``)
                                    $i.line(`export const $$:Cmain = ($) => {`)
                                    $i.line(`    gtest.$a.createTestProgram({`)
                                    $i.line(`        'getTestSet': $a.getTestSet,`)
                                    $i.line(`        'log': gmain.$a.log,`)
                                    $i.line(`        'logError': gmain.$a.logError,`)
                                    $i.line(`        'onTestErrors': gmain.$a.setExitCodeToFailed`)
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
                    $i.directory("glossary", ($i) => {
                        $d.serializeGlossary($.glossary, $i)
                    })

                    // $i.file("testXXXXX.generated.ts", ($i) => {
                    //     $i.line(`import * as pt from 'pareto-core-types'`)
                    //     $i.line(`import * as pd from 'pareto-core-data'`)
                    //     $i.line(`import * as pl from 'pareto-core-lib'`)
                    //     $i.line(``)
                    //     $i.line(`import * as gtst from "lib-pareto-test"`)
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
                    //         $i.snippet(`const x = pd.wrapRawDictionary<pt.Dictionary<() => pt.AsyncValue<tst.TTestElement>>>({`)
                    //         $i.indent(($i) => {
                    //             $d.dictionaryForEach($.modules, ($, key) => {
                    //                 const moduleName = key
                    //                 $i.nestedLine(($i) => {
                    //                     $i.snippet(`'${key}': pd.wrapRawDictionary({`)
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
                    //                 //         $i.line(`import * as g${key} from "${$}"`)
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
                    //                             $i.line(`pd.implementMe(\`${moduleName}:${key}\`)`)
                    //                         })
                    //                         $i.snippet(`}`)
                    //                     })
                    //                 })
                    //             })
                    //         })
                    //     })
                    // })
                })
                tsConfig({
                    isResource: false,
                    inlineSourceMap: true,
                }, $i)
            })
        }
        switch ($.type[0]) {
            case 'glossary':
                pl.cc($.type[1], ($) => {

                })
                break
            case 'library':
                pl.cc($.type[1], ($) => {
                    doTest($.test, $i)
                })
                break
            case 'resource':
                pl.cc($.type[1], ($) => {
                    doTest($.test, $i)

                })
                break
            default: pl.au($.type[0])
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
            $i.line(`/pub/package.json`)
            $i.line(`/test/dist/`)
            $i.line(`/test/node_modules/`)
            $i.line(`/test/package.json`)
            $i.line(`/tmp`)
        })
        $i.allowed("README.md")
    }
}