import * as pl from 'pareto-core-lib'
import * as pd from 'pareto-core-dev'

import * as g_fp from "lib-fountain-pen"

import { validateFiles } from "../api.generated"


export const $$: validateFiles = ($, $i) => {

    //$i.allowed("tmp") //already defined in 'generateTemplate'
    $i.allowedGenerated(".git")
    $i.directory("scripts", ($i) => {
        $i.allowedGenerated("node_modules")
        $i.allowedGenerated("scripts")
        $i.allowedGenerated("initialize.sh")
        $i.allowedGenerated("package.json")
        $i.allowedGenerated("package-lock.json")
    })
    $i.directory("prebuild", ($i) => {

        $i.allowedGenerated("dist")
        $i.allowedGenerated("node_modules")
        $i.allowedGenerated("tsconfig.json")
        $i.allowedGenerated("package.json")
        $i.allowedGenerated("package-lock.json")
        $i.directory("src", ($i) => {
            $i.allowedGenerated("modules")
            $i.allowedGenerated("globals.generated.ts")
            $i.directory("bin", ($i) => {
                $i.allowedGenerated("generateCode.generated.ts")
            })
            $i.allowedManual("data")
        })
    })
    $i.directory("pareto", ($i) => {
        $i.allowedGenerated("dist")
        $i.allowedGenerated("node_modules")
        $i.allowedGenerated("tsconfig.json")
        $i.allowedGenerated("package.json")
        $i.allowedGenerated("package-lock.json")
        $i.directory("src", ($i) => {
            $i.allowedGenerated("globals.generated.ts")
            $i.directory("bin", ($i) => {
                $i.allowedGenerated("generateCode.generated.ts")
            })
            $i.allowedManual("data")
        })
    })
    //$i.allowed("typescript")
    $i.allowedGenerated(".gitignore")
    $i.allowedManual("README.md")
}