import * as pl from 'pareto-core-lib'

import * as api from "../api"

import * as mfp from "lib-fountain-pen"
export const $$: api.CcreateParetoEnvironmentSerializer = (
    $d,
) => {
    return ($, $i) => {
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
        $i.allowed("dist")
        $i.allowed("node_modules")
        $i.allowed("package-lock.json")
        $i.file("package.json", ($i) => {
            $i.line(`{`)
            $i.line(`  "dependencies": {`)
            $i.line(`    "lib-pareto-typescript-project": "^0.0.0",`)
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
                $i.file("generateCode.generated.ts", ($i) => {
                    $i.line(`import * as pe from 'pareto-core-exe'`)
                    $i.line(``)
                    $i.line(`import * as mmain from "../modules/main"`)
                    $i.line(``)
                    $i.line(`pe.runProgram(mmain.$a.main)`)
                })
            })
            $i.directory("data", ($i) => {
                $i.allowed("modules")
                $i.allowed("api.p.ts")
                $i.allowed("project.p.ts")
            })
            $i.directory("modules", ($i) => {
                $i.directory("main", ($i) => {
                    $i.directory("api", ($i) => {
                        $i.file("api.generated.ts", ($i) => {
                            $i.line(`import * as pt from 'pareto-core-types'`)
                            $i.line(``)
                            $i.line(`import * as glo from "./types.generated"`)
                            $i.line(``)
                            $i.line(`import * as mmain from "res-pareto-main"`)
                            $i.line(``)
                            $i.line(`export type Cmain = pt.Procedure<mmain.TMainData>`)
                            $i.line(``)
                            $i.line(`export type API = {`)
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
                        $i.file("main.generated.ts", ($i) => {
                            $i.line(`import * as pl from 'pareto-core-lib'`)
                            $i.line(`import * as api from "../api"`)
                            $i.line(``)
                            $i.line(`import { $ as project } from "../../../data/project.data"`)
                            $i.line(`import * as mpareto from "lib-pareto-typescript-project"`)
                            $i.line(``)
                            $i.line(`export const $$: api.Cmain = ($) => {`)
                            $i.line(``)
                            $i.line(`    mpareto.$a.generateProject({`)
                            $i.line(`        project: project,`)
                            $i.line(`        mainData: $,`)
                            $i.line(`    })`)
                            $i.line(`}`)
                        })
                    })
                    $i.file("export.generated.ts", ($i) => {
                        $i.line(`import { API } from "./api"`)
                        $i.line(`import { $$ as imain } from "./implementations/main.generated"`)
                        $i.line(``)
                        $i.line(`export const $a: API = {`)
                        $i.line(`    "main": imain,`)
                        $i.line(`}`)
                    })
                    $i.file("index.ts", ($i) => {
                        $i.line(`export * from "./api"`)
                        $i.line(`export * from "./export.generated"`)
                    })
                })
            })
        })
        tsConfig({ isResource: false }, $i)
    }
}