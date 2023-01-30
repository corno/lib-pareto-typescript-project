import * as pt from 'pareto-core-types'

import * as glo from "./glossary"

import * as mcommon from "glo-pareto-common"
import * as mproject from "../../project"
import * as mtemp from "../../temp"

export type CcreateLiana2ParetoMapper = ($d: {
    readonly 'decorateDictionaryEntriesWithKey': mtemp.FDecorateDictionaryEntriesWithKey
}) => glo.FMapLiana2Pareto

export type CcreateLiana2StatesMapper = ($d: {
    readonly 'decorateDictionaryEntriesWithKey': mtemp.FDecorateDictionaryEntriesWithKey
}) => glo.FMapLiana2States

export type CcreateProjectGenerator = ($d: {
    readonly 'decorateDictionaryEntriesWithKey': mtemp.FDecorateDictionaryEntriesWithKey
    readonly 'dictionaryForEach': mtemp.FDictionaryForEach
    readonly 'logError': mcommon.FLog
    readonly 'mapLiana2Pareto': glo.FMapLiana2Pareto
    readonly 'serializeProject': mproject.FSerializeWithContext
}) => glo.FGenerateProject

export type CgenerateProject = glo.FGenerateProject

export type API = {
    createLiana2ParetoMapper: CcreateLiana2ParetoMapper
    createLiana2StatesMapper: CcreateLiana2StatesMapper
    createProjectGenerator: CcreateProjectGenerator
    generateProject: CgenerateProject
}