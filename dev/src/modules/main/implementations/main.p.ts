import * as pl from 'pareto-core-lib'
import * as pr from 'pareto-core-raw'

import * as api from "../api"

import * as mpareto from "lib-pareto-typescript-project"
import * as mliana2Pareto from "lib-pareto-typescript-project/dist/modules/liana2Pareto"

import { $ as glossary } from "../../../data/glossary.p"

export const $$: api.Cmain = ($) => {

    pl.logDebugMessage("HIER")


    mliana2Pareto.$a.generateProject({
        'mainData': {
            'arguments': pr.wrapRawArray([`../../pareto/src/data/glossary`]),
        },
        'model': {
            'model': glossary,

            'stringmapping': pr.wrapRawDictionary({
                "identifier": ['string', null]
            }),
        },
    })
}