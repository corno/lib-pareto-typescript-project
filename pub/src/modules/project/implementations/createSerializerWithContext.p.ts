import * as pl from 'pareto-core-lib'

import * as api from "../api"

import * as mglossary from "../../glossary"
import * as mfp from "lib-fountain-pen"

export const $$: api.CcreateSerializerWithContext = ($d) => {

    return ($, $i) => {
        $i.file("module.generated.ts", ($i) => {
            $i.literal(`import * as pr from 'pareto-core-raw'`)
            $i.literal(``)
            $i.literal(`import * as mmoduleDefinition from "../../../pub/dist/modules/moduleDefinition"`)
            $i.literal(`import * as mproject from "../../../pub/dist/modules/project"`)
            $i.literal(`import * as mglossary from "../../../pub/dist/modules/glossary"`)
            $i.literal(``)
            $i.literal(`const d = pr.wrapRawDictionary`)
            $i.literal(`const a = pr.wrapRawArray`)
            $i.line(($i) => {
            })
            $i.line(($i) => {
                $i.snippet(`export const $: mproject.TModule = `)
                $d.cb_serialize($, $i)
            })
        })
    }
}

