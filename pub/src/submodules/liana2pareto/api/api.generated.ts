import * as pt from 'pareto-core-types'

import * as gglo from "./glossary"

import * as gcommon from "glo-pareto-common"
import * as gforeach from "res-pareto-foreach"
import * as gproject from "../../project"

export type CcreateLiana2ParetoMapper = ($d: {
    readonly 'decorateDictionaryEntriesWithKey': gforeach.FDecorateDictionaryEntriesWithKey
}) => gglo.FMapLiana2Pareto

export type CcreateLiana2StatesMapper = ($d: {
    readonly 'decorateDictionaryEntriesWithKey': gforeach.FDecorateDictionaryEntriesWithKey
}) => gglo.FMapLiana2States

export type CcreateModuleGenerator = ($d: {
    readonly 'decorateDictionaryEntriesWithKey': gforeach.FDecorateDictionaryEntriesWithKey
    readonly 'dictionaryForEach': gforeach.FDictionaryForEach
    readonly 'logError': gcommon.FLog
    readonly 'mapLiana2Pareto': gglo.FMapLiana2Pareto
    readonly 'serializeProject': gproject.FSerializeWithContext
}) => gglo.FGenerateModule

export type CgenerateModule = gglo.FGenerateModule

export type CmapLiana2Pareto = gglo.FMapLiana2Pareto

export type API = {
    createLiana2ParetoMapper: CcreateLiana2ParetoMapper
    createLiana2StatesMapper: CcreateLiana2StatesMapper
    createModuleGenerator: CcreateModuleGenerator
    generateModule: CgenerateModule
    mapLiana2Pareto: CmapLiana2Pareto
}