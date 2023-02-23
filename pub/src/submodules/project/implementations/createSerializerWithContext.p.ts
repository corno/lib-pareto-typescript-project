


import { CcreateSerializerWithContext } from "../api"

export const $$:CcreateSerializerWithContext = ($d) => {

    return ($, $i) => {
        $i.file("module.generated.ts", ($i) => {
            $i.line(`import * as pr from 'pareto-core-data'`)
            $i.line(``)
            $.definition.api.imports
            $.definition.glossary.imports
            $i.line(`import * as gmoduleDefinition from "./import_moduleDefinition"`)
            $i.line(`import * as gproject from "./import_project"`)
            $i.line(`import * as gglossary from "./import_glossary"`)
            $i.line(``)
            $i.line(`const d = pd.wrapRawDictionary`)
            $i.line(`const a = pr.wrapRawArray`)
            $i.nestedLine(($i) => {
            })
            $i.nestedLine(($i) => {
                $i.snippet(`export const $: gproject.TModule = `)
                $d.serialize($, $i)
            })
        })
    }
}

