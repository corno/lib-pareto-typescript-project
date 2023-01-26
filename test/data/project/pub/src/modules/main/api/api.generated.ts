import * as pt from 'pareto-core-types'

import * as glo from "./glossary"

import * as mcommon from "glo-pareto-common"

export type CcreateEnricher = ($d: {}) => glo.Fundefined

export type CcreateSerializer = ($d: {}) => glo.Fundefined

export type API = {
    createEnricher: CcreateEnricher
    createSerializer: CcreateSerializer
}