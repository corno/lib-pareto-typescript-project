import * as pt from 'pareto-core-types'

import * as glo from "./glossary"

import * as mcommon from "glo-pareto-common"
import * as mforeach from "res-pareto-foreach"
import * as mproject from "../../project"

export type CcreateLiana2paretoMapper = ($d: {
    readonly 'decorateDictionaryEntriesWithKey': mforeach.FDecorateDictionaryEntriesWithKey
}) => glo.FMapLiana2pareto

export type CcreateLiana2StatesMapper = ($d: {
    readonly 'decorateDictionaryEntriesWithKey': mforeach.FDecorateDictionaryEntriesWithKey
}) => glo.FMapLiana2States

export type CcreateProjectGenerator = ($d: {
    readonly 'decorateDictionaryEntriesWithKey': mforeach.FDecorateDictionaryEntriesWithKey
    readonly 'dictionaryForEach': mforeach.FDictionaryForEach
    readonly 'logError': mcommon.FLog
    readonly 'mapLiana2pareto': glo.FMapLiana2pareto
    readonly 'serializeProject': mproject.FSerializeWithContext
}) => glo.FGenerateProject

export type CgenerateProject = glo.FGenerateProject

export type CmapLiana2pareto = glo.FMapLiana2pareto

export type API = {
    createLiana2paretoMapper: CcreateLiana2paretoMapper
    createLiana2StatesMapper: CcreateLiana2StatesMapper
    createProjectGenerator: CcreateProjectGenerator
    generateProject: CgenerateProject
    mapLiana2pareto: CmapLiana2pareto
}