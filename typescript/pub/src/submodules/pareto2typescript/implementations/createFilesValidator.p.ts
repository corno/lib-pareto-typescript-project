import * as pl from 'pareto-core-lib'
import * as pd from 'pareto-core-dev'

import * as gfp from "lib-fountain-pen"
import * as gproject from "../../project"

import { createFilesValidator } from "../definition/api.generated"


export const $$: createFilesValidator = (
    $d,
) => {
    return <Annotation>($: gproject.T.Project<Annotation>, $i: gfp.B.Directory) => {

        //$i.allowed("tmp") //already defined in 'generateTemplate'
        $i.allowedGenerated(".git")
        $i.directory("scripts", ($i) => {
            $i.allowedGenerated("node_modules")
            $i.allowedGenerated("scripts")
            $i.allowedGenerated("initialize.sh")
            $i.allowedGenerated("package.json")
            $i.allowedGenerated("package-lock.json")
        })
        $i.allowedGenerated("prebuild")
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
}