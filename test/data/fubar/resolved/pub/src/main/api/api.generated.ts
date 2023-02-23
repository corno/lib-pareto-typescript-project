import * as pt from 'pareto-core-types'

import * as mglo from "./glossary"

import * as mcommon from "glo-pareto-common"

export type CcreateEnricher = ($d: {}) => glo.FEnrich

export type CcreateSerializer = ($d: {}) => glo.FSerialize

export type API = {
    createEnricher: CcreateEnricher
    createSerializer: CcreateSerializer
}