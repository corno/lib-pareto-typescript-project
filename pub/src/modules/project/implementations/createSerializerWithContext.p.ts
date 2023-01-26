import * as pl from 'pareto-core-lib'

import * as api from "../api"

import * as mglossary from "../../glossary"
import * as mfp from "lib-fountain-pen"

export const $$: api.CcreateSerializerWithContext = ($d) => {

    return ($, $i) => {
        $i.file("module.generated.ts", ($i) => {
            $i.line(`import * as pr from 'pareto-core-raw'`)
            $i.line(``)
            $i.line(`import * as mmoduleDefinition from "../../../pub/dist/modules/moduleDefinition"`)
            $i.line(`import * as mproject from "../../../pub/dist/modules/project"`)
            $i.line(`import * as mglossary from "../../../pub/dist/modules/glossary"`)
            $i.line(``)
            $i.line(`const d = pr.wrapRawDictionary`)
            $i.line(`const a = pr.wrapRawArray`)
            $i.nestedLine(($i) => {
            })
            $i.nestedLine(($i) => {
                $i.snippet(`export const $: mproject.TModule = `)
                $d.serialize($, $i)
            })
        })
    }
}

