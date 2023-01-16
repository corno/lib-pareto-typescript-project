import * as pt from "pareto-core-types"

import * as glo from "./types.generated"

import * as mserialize from "../../serialize"

export type CcreateLiana2ParetoMapper = ($d: {}) => glo.FMapLiana2Pareto

export type CcreateProjectGenerator = ($d: {
    readonly "sf_mapLiana2Pareto": glo.FMapLiana2Pareto
    readonly "cb_serializeModuleDefinition": mserialize.XSerializeModuleDefinition
}) => pt.Procedure<glo.TConfiguration>

export type CgenerateProject = pt.Procedure<glo.TConfiguration>

export type API = {
    createLiana2ParetoMapper: CcreateLiana2ParetoMapper
    createProjectGenerator: CcreateProjectGenerator
    generateProject: CgenerateProject
}