import * as pt from 'pareto-core-types'

import * as glo from "./glossary"

import * as mcommon from "glo-pareto-common"
import * as mforeach from "res-pareto-foreach"
import * as mproject from "../../project"

export type CcreateLiana2ParetoMapper = ($d: {
    readonly 'decorateDictionaryEntriesWithKey': mforeach.FDecorateDictionaryEntriesWithKey
}) => glo.FMapLiana2Pareto

export type CcreateLiana2StatesMapper = ($d: {
    readonly 'decorateDictionaryEntriesWithKey': mforeach.FDecorateDictionaryEntriesWithKey
}) => glo.FMapLiana2States

export type CcreateProjectGenerator = ($d: {
    readonly 'decorateDictionaryEntriesWithKey': mforeach.FDecorateDictionaryEntriesWithKey
    readonly 'dictionaryForEach': mforeach.FDictionaryForEach
    readonly 'logError': mcommon.FLog
    readonly 'mapLiana2Pareto': glo.FMapLiana2Pareto
    readonly 'serializeProject': mproject.FSerializeWithContext
}) => glo.FGenerateProject

export type CgenerateProject = glo.FGenerateProject

export type CmapLiana2Pareto = glo.FMapLiana2Pareto

export type API = {
    createLiana2ParetoMapper: CcreateLiana2ParetoMapper
    createLiana2StatesMapper: CcreateLiana2StatesMapper
    createProjectGenerator: CcreateProjectGenerator
    generateProject: CgenerateProject
    mapLiana2Pareto: CmapLiana2Pareto
}