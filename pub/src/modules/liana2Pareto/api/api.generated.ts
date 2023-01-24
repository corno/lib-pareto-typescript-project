import * as pt from 'pareto-core-types'

import * as glo from "./types.generated"

import * as mcommon from "glo-pareto-common"
import * as mproject from "../../project"
import * as mtemp from "../../temp"

export type CcreateLiana2ParetoMapper = ($d: {
    readonly 'addKeysToDictionary': mtemp.FAddKeysToDictionary
}) => glo.FMapLiana2Pareto

export type CcreateProjectGenerator = ($d: {
    readonly 'addKeysToDictionary': mtemp.FAddKeysToDictionary
    readonly 'logError': mcommon.FLog
    readonly 'mapLiana2Pareto': glo.FMapLiana2Pareto
    readonly 'serializeProject': mproject.FSerializeWithContext
}) => glo.FGenerateProject

export type CgenerateProject = glo.FGenerateProject

export type API = {
    createLiana2ParetoMapper: CcreateLiana2ParetoMapper
    createProjectGenerator: CcreateProjectGenerator
    generateProject: CgenerateProject
}