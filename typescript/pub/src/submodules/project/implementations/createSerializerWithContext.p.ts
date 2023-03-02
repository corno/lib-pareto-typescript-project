

import { CcreateSerializerWithContext } from "../definition/api.generated"

export const $$:CcreateSerializerWithContext = ($d) => {

    return ($, $i) => {
        $i.file("module.generated.ts", ($i) => {
            $i.line(`import * as pd from 'pareto-core-data'`)
            $i.line(``)
            $.definition.api.imports
            $.definition.glossary.imports
            //$i.line(`import * as gmoduleDefinition from "./import_moduleDefinition"`)
            $i.line(`import * as gproject from "lib-pareto-typescript-project/dist/submodules/project"`)
            $i.line(`import * as gglossary from "lib-pareto-typescript-project/dist/submodules/glossary"`)
            

            $i.line(``)
            $i.line(`const d = pd.d`)
            $i.line(`const a = pd.a`)
            $i.nestedLine(($i) => {
            })
            $i.nestedLine(($i) => {
                $i.snippet(`export const $: gproject.T.Module<pd.SourceLocation> = `)
                $d.serialize($, $i)
            })
        })
    }
}

