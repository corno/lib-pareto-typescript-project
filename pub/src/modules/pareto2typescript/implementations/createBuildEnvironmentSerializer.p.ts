import * as pl from 'pareto-core-lib'

import * as api from "../api"

import * as mfp from "lib-fountain-pen"
export const $$: api.CcreateBuildEnvironmentSerializer = (
    $d,
) => {
    return ($, $i) => {
        $i.file("package.json", ($i) => {
            $i.line(`{`)
            $i.line(`  "dependencies": {`)
            $i.line(`    "pareto-buildenvironment": "^0.0.0"`)
            $i.line(`  }`)
            $i.line(`}`)
            $i.line(``)
        })
    }
}