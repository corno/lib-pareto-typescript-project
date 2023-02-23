import * as pd from 'pareto-core-dev'

import * as gpareto from "lib-pareto-typescript-project"
//import * as gliana2pareto from "lib-pareto-typescript-project/dist/submodules/liana2pareto"

import { $ as glossary } from "../../../data/glossary.data"

import { Cmain } from "../api"

export const $$:Cmain = ($) => {
    pd.logDebugMessage("REENABLE LIANA GENERATION")
    // mliana2pareto.$a.generateProject({
    //     'mainData': {
    //         'arguments': pr.wrapRawArray([`../../pareto/src/data/glossary`]),
    //     },
    //     'model': {
    //         'model': glossary,

    //         'stringmapping': pd.wrapRawDictionary({
    //             "identifier": ['string', null]
    //         }),
    //     },
    // })
}