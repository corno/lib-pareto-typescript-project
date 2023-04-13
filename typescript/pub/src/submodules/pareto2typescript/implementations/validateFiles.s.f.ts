import * as pm from 'pareto-core-map'

import { A } from "../api.generated"

import { $a as fp2 } from "lib-fountain-pen/dist/submodules/serialize"

export const $$: A.validateFiles = () => {
    return ($) => pm.wrapRawDictionary({
        //fp2.allowed("tmp") //already defined in 'generateTemplate'
        ".git": ['allowedGenerated', null],
        "scripts": ['directory', pm.wrapRawDictionary({
            "node_modules": ['allowedGenerated', null],
            "scripts": ['allowedGenerated', null],
            "initialize.sh": ['allowedGenerated', null],
            "package.json": ['allowedGenerated', null],
            "package-lock.json": ['allowedGenerated', null],
        })],
        "prebuild": ['directory', pm.wrapRawDictionary({
            "dist": ['allowedGenerated', null],
            "node_modules": ['allowedGenerated', null],
            "tsconfig.json": ['allowedGenerated', null],
            "package.json": ['allowedGenerated', null],
            "package-lock.json": ['allowedGenerated', null],
            "src": ['directory', pm.wrapRawDictionary({
                "modules": ['allowedGenerated', null],
                "globals.generated.ts": ['allowedGenerated', null],
                "bin": ['directory', pm.wrapRawDictionary({
                    "generateCode.generated.ts": ['allowedGenerated', null],
                })],
                "data": ['allowedManual', null]
            })]
        })],
        "pareto": ['directory', pm.wrapRawDictionary({
            "dist": ['allowedGenerated', null],
            "node_modules": ['allowedGenerated', null],
            "tsconfig.json": ['allowedGenerated', null],
            "package.json": ['allowedGenerated', null],
            "package-lock.json": ['allowedGenerated', null],
            "src": ['directory', pm.wrapRawDictionary({
                "globals.generated.ts": ['allowedGenerated', null],
                "bin": ['directory', pm.wrapRawDictionary({
                    "generateCode.generated.ts": ['allowedGenerated', null],
                })],
                "data": ['allowedManual', null]
            })],
        })],
        //fp2.allowed("typescript")

        ".gitignore": ['allowedGenerated', null],
        "README.md": ['allowedManual', null]
    })
}