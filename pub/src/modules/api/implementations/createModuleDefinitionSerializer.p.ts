import * as pl from "pareto-core-lib"

import * as api from "../api"

import * as mglossary from "../../glossary"

import * as mfp from "lib-fountain-pen"


export const icreateModuleDefinitionSerializer: api.CcreateModuleDefinitionSerializer = ($, $d) => {
    return ($, $i) => {
        const compare = (a: string, b: string) => $d.compare({ a: a, b: b })

        function glossary($: mglossary.TGlossary, $i: mfp.IWriter) {
            $i.createFile("types.generated.ts", ($i) => {
                $d.serializeGlossary($, $i)
            })
        }
        function serializeAlgorithmDefinition($: api.TAlgorithmDefinition, $i: mfp.ILine) {

            switch ($[0]) {
                case "constructor":
                    pl.cc($[1], ($) => {
                        $d.serializeConstructor($, $i)
                    })
                    break
                case "algorithm":
                    pl.cc($[1], ($) => {
                        $d.serializeAlgorithmReference($, $i)

                    })
                    break
                default: pl.au($[0])
            }
        }
        glossary($.glossary, $i)
        $i.createFile("api.generated.ts", ($i) => {
            $i.literal(`import * as pt from "pareto-core-types"`)
            $i.literal(``)
            $i.literal(`import * as glo from "./types.generated"`)
            $i.literal(``)
            $.api.imports.forEach(compare, ($, key) => {
                $i.line(($i) => {
                    $i.snippet(`import * as m${key} from "${$}"`)
                })
            })
            $.api.algorithms.forEach(compare, ($, key) => {
                $i.literal(``)
                $i.line(($i) => {
                    $i.snippet(`export type C${key} = `)
                    serializeAlgorithmDefinition($, $i)
                })
            })
            $i.literal(``)
            $i.line(($i) => {
                $i.snippet(`export type API = {`)
                $i.indent(($i) => {
                    $.api.algorithms.forEach(compare, ($, key) => {
                        $i.literal(`${key}: C${key}`)
                    })
                })
                $i.snippet(`}`)
            })
        })
        $i.createFile("index.ts", ($i) => {
            $i.literal(`export * from "./types.generated"`)
            $i.literal(`export * from "./api.generated"`)
        })
    }
}
