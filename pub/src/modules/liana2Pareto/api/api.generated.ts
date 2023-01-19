import * as pt from 'pareto-core-types'

import * as glo from "./types.generated"

import * as mcommon from "glo-pareto-common"
import * as mproject from "../../project"
import * as mtemp from "../../temp"

export type CcreateLiana2ParetoMapper = ($d: {
    readonly 'sf_addKeysToDictionary': mtemp.FAddKeysToDictionary
}) => glo.FMapLiana2Pareto

export type CcreateProjectGenerator = ($d: {
    readonly 'sf_addKeysToDictionary': mtemp.FAddKeysToDictionary
    readonly 'pr_logError': pt.Procedure<mcommon.TString>
    readonly 'sf_mapLiana2Pareto': glo.FMapLiana2Pareto
    readonly 'cb_serializeProject': mproject.XSerializeWithContext
}) => pt.Procedure<glo.TConfiguration>

export type CgenerateProject = pt.Procedure<glo.TConfiguration>

export type API = {
    createLiana2ParetoMapper: CcreateLiana2ParetoMapper
    createProjectGenerator: CcreateProjectGenerator
    generateProject: CgenerateProject
}