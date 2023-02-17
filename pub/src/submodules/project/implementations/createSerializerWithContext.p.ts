import * as pl from 'pareto-core-lib'

import * as api from "../api"

import * as mglossary from "../../glossary"

export const $$: api.CcreateSerializerWithContext = ($d) => {

    return ($, $i) => {
        $i.file("module.generated.ts", ($i) => {
            $i.line(`import * as pr from 'pareto-core-data'`)
            $i.line(``)
            $.definition.api.imports
            $.definition.glossary.imports
            $i.line(`import * as mmoduleDefinition from "./import_moduleDefinition"`)
            $i.line(`import * as mproject from "./import_project"`)
            $i.line(`import * as mglossary from "./import_glossary"`)
            $i.line(``)
            $i.line(`const d = pd.wrapRawDictionary`)
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

