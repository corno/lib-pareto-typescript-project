import * as pl from 'pareto-core-lib'
import * as pd from 'pareto-core-dev'

import * as gfp from "lib-fountain-pen"
import * as gproject from "../../project"

import { CcreateFilesValidator } from "../definition/api.generated"


export const $$: CcreateFilesValidator = (
    $d,
) => {
    return <Annotation>($: gproject.T.Project<Annotation>, $i: gfp.IDirectory) => {

        //$i.allowed("tmp") //already defined in 'generateTemplate'
        $i.allowed(".git")
        $i.directory("scripts", ($i) => {
            $i.allowed("node_modules")
            $i.allowed("scripts")
            $i.allowed("initialize.sh")
            $i.allowed("package.json")
            $i.allowed("package-lock.json")
        })
        $i.allowed("prebuild")
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
        //$i.allowed("typescript")
        $i.allowed(".gitignore")
        $i.allowed("README.md")
    }
}