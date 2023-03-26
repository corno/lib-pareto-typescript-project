import * as pt from 'pareto-core-types'

import * as g_algorithm from "../algorithm"
import * as g_foreach from "res-pareto-foreach"
import * as g_glossary from "../glossary"
import * as g_project from "../project"
import * as g_this from "./glossary"
import * as g_ts from "res-typescript"

export namespace A {
    
    export type serializeGlossary = <GAnnotation>($d: {
        readonly 'createApostrophedString': g_ts.SYNC.A.F.CreateApostrophedString
        readonly 'createBacktickedString': g_ts.SYNC.A.F.CreateBacktickedString
        readonly 'createIdentifier': g_ts.SYNC.A.F.CreateIdentifier
        readonly 'createQuotedString': g_ts.SYNC.A.F.CreateQuotedString
        readonly 'enrichedForEachAsychronousAlgorithm': g_foreach.SYNC.A.P.EnrichedDictionaryForEach<g_glossary.T.Glossary.asynchronous.algorithms.D<GAnnotation>>
        readonly 'enrichedForEachAsychronousDownstream': g_foreach.SYNC.A.P.EnrichedDictionaryForEach<g_glossary.T.Glossary.asynchronous.algorithms.D._lconstructor.downstreams.D<GAnnotation>>
        readonly 'enrichedForEachAsychronousInterface': g_foreach.SYNC.A.P.EnrichedDictionaryForEach<g_glossary.T.Glossary.asynchronous.interfaces.D<GAnnotation>>
        readonly 'enrichedForEachAsyncInterfaceOption': g_foreach.SYNC.A.P.EnrichedDictionaryForEach<g_glossary.T.AsynchronousInterface.choice.options.D<GAnnotation>>
        readonly 'enrichedForEachContextArgument': g_foreach.SYNC.A.P.EnrichedDictionaryForEach<g_glossary.T.TypeReference.arguments.D<GAnnotation>>
        readonly 'enrichedForEachMember': g_foreach.SYNC.A.P.EnrichedDictionaryForEach<g_glossary.T.Type.group.D<GAnnotation>>
        readonly 'enrichedForEachParameter': g_foreach.SYNC.A.P.EnrichedDictionaryForEach<g_glossary.T.Glossary.parameters.D<GAnnotation>>
        readonly 'enrichedForEachSychronousAlgorithm': g_foreach.SYNC.A.P.EnrichedDictionaryForEach<g_glossary.T.Glossary.synchronous.algorithms.D<GAnnotation>>
        readonly 'enrichedForEachSychronousInterface': g_foreach.SYNC.A.P.EnrichedDictionaryForEach<g_glossary.T.Glossary.synchronous.interfaces.D<GAnnotation>>
        readonly 'enrichedForEachSyncInterfaceMember': g_foreach.SYNC.A.P.EnrichedDictionaryForEach<g_glossary.T.SynchronousInterface.group.members.D<GAnnotation>>
        readonly 'enrichedForEachTypeParameter': g_foreach.SYNC.A.P.EnrichedDictionaryForEach<g_glossary.T.Glossary.types.D.parameters.D<GAnnotation>>
        readonly 'forEachContextArgument': g_foreach.SYNC.A.P.DictionaryForEach<g_glossary.T.TypeReference.arguments.D<GAnnotation>>
        readonly 'forEachImport': g_foreach.SYNC.A.P.DictionaryForEach<g_glossary.T.Glossary.imports.D<GAnnotation>>
        readonly 'forEachImport2': g_foreach.SYNC.A.P.DictionaryForEach<string>
        readonly 'forEachImportArgument': g_foreach.SYNC.A.P.DictionaryForEach<g_glossary.T.Glossary.imports.D.arguments.D<GAnnotation>>
        readonly 'forEachMember': g_foreach.SYNC.A.P.DictionaryForEach<g_glossary.T.Type.group.D<GAnnotation>>
        readonly 'forEachOption': g_foreach.SYNC.A.P.DictionaryForEach<g_glossary.T.Type.taggedUnion.D<GAnnotation>>
        readonly 'forEachParameter': g_foreach.SYNC.A.P.DictionaryForEach<g_glossary.T.Glossary.parameters.D<GAnnotation>>
        readonly 'forEachType': g_foreach.SYNC.A.P.DictionaryForEach<g_glossary.T.Glossary.types.D<GAnnotation>>
        readonly 'forEachTypeParameter': g_foreach.SYNC.A.P.DictionaryForEach<g_glossary.T.Glossary.types.D.parameters.D<GAnnotation>>
    }, ) => g_this.SYNC.A.P.SerializeGlossary<GAnnotation>
    
    export type serializeImplementation = <GAnnotation>($d: {
        readonly 'createIdentifier': g_ts.SYNC.A.F.CreateIdentifier
        readonly 'forEachImplementation': g_foreach.SYNC.A.P.DictionaryForEach<g_algorithm.T.Implementation.implementations.D<GAnnotation>>
        readonly 'forEachInnerFunction': g_foreach.SYNC.A.P.DictionaryForEach<g_algorithm.T.ProcedureBlock.innerFunctions.D<GAnnotation>>
    }, ) => g_this.SYNC.A.P.SerializeImplementation<GAnnotation>
    
    export type serializeProject = <GAnnotation>($d: {
        readonly 'createIdentifier': g_ts.SYNC.A.F.CreateIdentifier
        readonly 'enrichedForEachAlgorithm': g_foreach.SYNC.A.P.EnrichedDictionaryForEach<g_project.T.ModuleDefinition.api.root.algorithms.D<GAnnotation>>
        readonly 'enrichedForEachAlgorithmDependency': g_foreach.SYNC.A.P.EnrichedDictionaryForEach<g_project.T.ModuleDefinition.api.root.algorithms.D._ltype.dependent.dependencies.D<GAnnotation>>
        readonly 'enrichedForEachAlgorithmParameter': g_foreach.SYNC.A.P.EnrichedDictionaryForEach<g_project.T.ModuleDefinition.api.root.algorithms.D.parameters.D<GAnnotation>>
        readonly 'enrichedForEachContextArgument': g_foreach.SYNC.A.P.EnrichedDictionaryForEach<g_project.T.Context.arguments.D<GAnnotation>>
        readonly 'enrichedForEachDevDependency': g_foreach.SYNC.A.P.EnrichedDictionaryForEach<g_project.T.Project._ltype.resource.temp.devDependencies.D<GAnnotation>>
        readonly 'enrichedForEachExecutable': g_foreach.SYNC.A.P.EnrichedDictionaryForEach<g_project.T.Project._ltype.library.executables.D<GAnnotation>>
        readonly 'enrichedForEachSideEffect': g_foreach.SYNC.A.P.EnrichedDictionaryForEach<g_project.T.ModuleDefinition.api.root.algorithms.D._ltype.dependent.side__effects.D<GAnnotation>>
        readonly 'forEachAlgorithm': g_foreach.SYNC.A.P.DictionaryForEach<g_project.T.ModuleDefinition.api.root.algorithms.D<GAnnotation>>
        readonly 'forEachDependency': g_foreach.SYNC.A.P.DictionaryForEach<g_project.T.Project.dependencies.D<GAnnotation>>
        readonly 'forEachImport2': g_foreach.SYNC.A.P.DictionaryForEach<string>
        readonly 'forEachNativeDependency': g_foreach.SYNC.A.P.DictionaryForEach<g_project.T.Project._ltype.resource.temp.nativeDependencies.D<GAnnotation>>
        readonly 'forEachSubModule': g_foreach.SYNC.A.P.DictionaryForEach<g_project.T.Project._ltype.library.submodules.D<GAnnotation>>
        readonly 'serializeGlossary': g_this.SYNC.A.P.SerializeGlossary<GAnnotation>
        readonly 'serializeImplementation': g_this.SYNC.A.P.SerializeImplementation<GAnnotation>
    }, ) => g_this.SYNC.A.P.ProjectToDirectory<GAnnotation>
    
    export type serializeStates = <GAnnotation>($d: {
        readonly 'createApostrophedString': g_ts.SYNC.A.F.CreateApostrophedString
        readonly 'createIdentifier': g_ts.SYNC.A.F.CreateIdentifier
        readonly 'enrichedForEachMember': g_foreach.SYNC.A.P.EnrichedDictionaryForEach<g_algorithm.T.Type.group.D<GAnnotation>>
        readonly 'forEachOption': g_foreach.SYNC.A.P.DictionaryForEach<g_algorithm.T.Type.taggedUnion.D<GAnnotation>>
        readonly 'forEachState': g_foreach.SYNC.A.P.DictionaryForEach<g_algorithm.T.States.D<GAnnotation>>
    }, ) => g_this.SYNC.A.P.SerializeStates<GAnnotation>
    
    export type serializeTemplate = <GAnnotation>($d: {
        readonly 'createIdentifier': g_ts.SYNC.A.F.CreateIdentifier
        readonly 'forEachAlgorithm': g_foreach.SYNC.A.P.DictionaryForEach<g_project.T.ModuleDefinition.api.root.algorithms.D<GAnnotation>>
        readonly 'forEachSubModule': g_foreach.SYNC.A.P.DictionaryForEach<g_project.T.Project._ltype.library.submodules.D<GAnnotation>>
    }, ) => g_this.SYNC.A.P.ProjectToDirectory<GAnnotation>
    
    export type validateFiles = <GAnnotation>() => g_this.SYNC.A.P.ValidateFiles<GAnnotation>
}

export type API = {
    readonly 'serializeGlossary': A.serializeGlossary
    readonly 'serializeImplementation': A.serializeImplementation
    readonly 'serializeProject': A.serializeProject
    readonly 'serializeStates': A.serializeStates
    readonly 'serializeTemplate': A.serializeTemplate
    readonly 'validateFiles': A.validateFiles
}