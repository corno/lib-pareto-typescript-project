import * as pt from 'pareto-core-types'

import * as gglo from "./glossary"

import * as gcommon from "glo-pareto-common"

export type CcreateEnricher = ($d: {}) => glo.FEnrich

export type CcreateSerializer = ($d: {}) => glo.FSerialize

export type API = {
    createEnricher: CcreateEnricher
    createSerializer: CcreateSerializer
}