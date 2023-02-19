import * as pl from 'pareto-core-lib'
import * as pd from 'pareto-core-dev'

import * as api from "../api"

import * as mpareto from "lib-pareto-typescript-project"
import * as mliana2Pareto from "lib-pareto-typescript-project/dist/submodules/liana2Pareto"

import { $ as glossary } from "../../../data/glossary.data"

export const $$: api.Cmain = ($) => {
    pd.logDebugMessage("REENABLE LIANA GENERATION")
    // mliana2Pareto.$a.generateProject({
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