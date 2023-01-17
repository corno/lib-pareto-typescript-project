import * as pt from 'pareto-core-types'

import * as glo from "./types.generated"

import * as mproject from "../../project"

export type CcreateLiana2ParetoMapper = ($d: {}) => glo.FMapLiana2Pareto

export type CcreateProjectGenerator = ($d: {
    readonly 'sf_mapLiana2Pareto': glo.FMapLiana2Pareto
    readonly 'cb_serializeProject': mproject.XSerializeWithContext
}) => pt.Procedure<glo.TConfiguration>

export type CgenerateProject = pt.Procedure<glo.TConfiguration>

export type API = {
    createLiana2ParetoMapper: CcreateLiana2ParetoMapper
    createProjectGenerator: CcreateProjectGenerator
    generateProject: CgenerateProject
}