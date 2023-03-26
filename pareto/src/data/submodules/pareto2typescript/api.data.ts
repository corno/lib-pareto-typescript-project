import * as pd from 'pareto-core-data'

import { algorithm, dependent, procedure, sfunction } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"

const d = pd.d

export const $: g_project.T.ModuleDefinition.api.root<pd.SourceLocation> = {
    'algorithms': d({
        "serializeGlossary": algorithm(procedure("this", {}, "SerializeGlossary"), { "Annotation": "Annotation" }, dependent(null, {
            "createIdentifier": sfunction("ts", {}, "CreateIdentifier"),
            "createApostrophedString": sfunction("ts", {}, "CreateApostrophedString"),
            "createQuotedString": sfunction("ts", {}, "CreateQuotedString"),
            "createBacktickedString": sfunction("ts", {}, "CreateBacktickedString"),

            "enrichedForEachContextArgument": procedure("foreach", { "T": "g_glossary.T.TypeReference.arguments.D<GAnnotation>" }, "EnrichedDictionaryForEach"),
            "forEachContextArgument": procedure("foreach", { "T": "g_glossary.T.TypeReference.arguments.D<GAnnotation>" }, "DictionaryForEach"),
            "enrichedForEachAsychronousInterface": procedure("foreach", { "T": "g_glossary.T.Glossary.asynchronous.interfaces.D<GAnnotation>" }, "EnrichedDictionaryForEach"),
            "enrichedForEachAsychronousAlgorithm": procedure("foreach", { "T": "g_glossary.T.Glossary.asynchronous.algorithms.D<GAnnotation>" }, "EnrichedDictionaryForEach"),
            "enrichedForEachAsychronousDownstream": procedure("foreach", { "T": "g_glossary.T.Glossary.asynchronous.algorithms.D._lconstructor.downstreams.D<GAnnotation>" }, "EnrichedDictionaryForEach"),
            "enrichedForEachSychronousInterface": procedure("foreach", { "T": "g_glossary.T.Glossary.synchronous.interfaces.D<GAnnotation>" }, "EnrichedDictionaryForEach"),
            "enrichedForEachSychronousAlgorithm": procedure("foreach", { "T": "g_glossary.T.Glossary.synchronous.algorithms.D<GAnnotation>" }, "EnrichedDictionaryForEach"),
            "forEachType": procedure("foreach", { "T": "g_glossary.T.Glossary.types.D<GAnnotation>" }, "DictionaryForEach"),
            "enrichedForEachTypeParameter": procedure("foreach", { "T": "g_glossary.T.Glossary.types.D.parameters.D<GAnnotation>" }, "EnrichedDictionaryForEach"),
            "forEachTypeParameter": procedure("foreach", { "T": "g_glossary.T.Glossary.types.D.parameters.D<GAnnotation>" }, "DictionaryForEach"),
            "enrichedForEachMember": procedure("foreach", { "T": "g_glossary.T.Type.group.D<GAnnotation>" }, "EnrichedDictionaryForEach"),
            "forEachMember": procedure("foreach", { "T": "g_glossary.T.Type.group.D<GAnnotation>" }, "DictionaryForEach"),
            "forEachOption": procedure("foreach", { "T": "g_glossary.T.Type.taggedUnion.D<GAnnotation>" }, "DictionaryForEach"),
            "enrichedForEachAsyncInterfaceOption": procedure("foreach", { "T": "g_glossary.T.AsynchronousInterface.choice.options.D<GAnnotation>" }, "EnrichedDictionaryForEach"),
            "enrichedForEachSyncInterfaceMember": procedure("foreach", { "T": "g_glossary.T.SynchronousInterface.group.members.D<GAnnotation>" }, "EnrichedDictionaryForEach"),
            "enrichedForEachParameter": procedure("foreach", { "T": "g_glossary.T.Glossary.parameters.D<GAnnotation>" }, "EnrichedDictionaryForEach"),
            "forEachParameter": procedure("foreach", { "T": "g_glossary.T.Glossary.parameters.D<GAnnotation>" }, "DictionaryForEach"),
            "forEachImport": procedure("foreach", { "T": "g_glossary.T.Glossary.imports.D<GAnnotation>" }, "DictionaryForEach"),
            "forEachImport2": procedure("foreach", { "T": "string" }, "DictionaryForEach"),
            "forEachImportArgument": procedure("foreach", { "T": "g_glossary.T.Glossary.imports.D.arguments.D<GAnnotation>" }, "DictionaryForEach"),

        }, {})),
        "serializeImplementation": algorithm(procedure("this", {}, "SerializeImplementation"), { "Annotation": "Annotation" }, dependent(null, {
            
            "forEachImplementation": procedure("foreach", { "T": "g_algorithm.T.Implementation.implementations.D<GAnnotation>" }, "DictionaryForEach"),
            "forEachInnerFunction": procedure("foreach", { "T": "g_algorithm.T.ProcedureBlock.innerFunctions.D<GAnnotation>" }, "DictionaryForEach"),
        
            "createIdentifier": sfunction("ts", {}, "CreateIdentifier"),
        }, {})),
        "validateFiles": algorithm(procedure("this", {}, "ValidateFiles"), { "Annotation": "Annotation" }),
        "serializeProject": algorithm(procedure("this", {}, "ProjectToDirectory"), { "Annotation": "Annotation" }, dependent(null, {
            "serializeGlossary": procedure("this", { "T": "GAnnotation" }, "SerializeGlossary"),
            "serializeImplementation": procedure("this", { "T": "GAnnotation" }, "SerializeImplementation"),
            "createIdentifier": sfunction("ts", {}, "CreateIdentifier"),

            "enrichedForEachAlgorithm": procedure("foreach", { "T": "g_project.T.ModuleDefinition.api.root.algorithms.D<GAnnotation>" }, "EnrichedDictionaryForEach"),
            "enrichedForEachAlgorithmDependency": procedure("foreach", { "T": "g_project.T.ModuleDefinition.api.root.algorithms.D._ltype.dependent.dependencies.D<GAnnotation>" }, "EnrichedDictionaryForEach"),
            "enrichedForEachAlgorithmParameter": procedure("foreach", { "T": "g_project.T.ModuleDefinition.api.root.algorithms.D.parameters.D<GAnnotation>" }, "EnrichedDictionaryForEach"),
            "enrichedForEachContextArgument": procedure("foreach", { "T": "g_project.T.Context.arguments.D<GAnnotation>" }, "EnrichedDictionaryForEach"),
            "enrichedForEachDevDependency": procedure("foreach", { "T": "g_project.T.Project._ltype.resource.temp.devDependencies.D<GAnnotation>" }, "EnrichedDictionaryForEach"),
            "enrichedForEachExecutable": procedure("foreach", { "T": "g_project.T.Project._ltype.library.executables.D<GAnnotation>" }, "EnrichedDictionaryForEach"),
            "enrichedForEachSideEffect": procedure("foreach", { "T": "g_project.T.ModuleDefinition.api.root.algorithms.D._ltype.dependent.side__effects.D<GAnnotation>" }, "EnrichedDictionaryForEach"),

            "forEachAlgorithm": procedure("foreach", { "T": "g_project.T.ModuleDefinition.api.root.algorithms.D<GAnnotation>" }, "DictionaryForEach"),
            "forEachDependency": procedure("foreach", { "T": "g_project.T.Project.dependencies.D<GAnnotation>" }, "DictionaryForEach"),
            "forEachImport2": procedure("foreach", { "T": "string" }, "DictionaryForEach"),
            "forEachNativeDependency": procedure("foreach", { "T": "g_project.T.Project._ltype.resource.temp.nativeDependencies.D<GAnnotation>" }, "DictionaryForEach"),
            "forEachSubModule": procedure("foreach", { "T": "g_project.T.Project._ltype.library.submodules.D<GAnnotation>" }, "DictionaryForEach"),
          
        }, {})),
        "serializeStates": algorithm(procedure("this", {}, "SerializeStates"), { "Annotation": "Annotation" }, dependent(null, {
            "createApostrophedString": sfunction("ts", {}, "CreateApostrophedString"),
            "createIdentifier": sfunction("ts", {}, "CreateIdentifier"),

            "enrichedForEachMember": procedure("foreach", { "T": "g_algorithm.T.Type.group.D<GAnnotation>" }, "EnrichedDictionaryForEach"),
            "forEachOption": procedure("foreach", { "T": "g_algorithm.T.Type.taggedUnion.D<GAnnotation>" }, "DictionaryForEach"),
            "forEachState": procedure("foreach", { "T": "g_algorithm.T.States.D<GAnnotation>" }, "DictionaryForEach"),
        }, {})),
        "serializeTemplate": algorithm(procedure("this", {}, "ProjectToDirectory"), { "Annotation": "Annotation" }, dependent(null, {
            "createIdentifier": sfunction("ts", {}, "CreateIdentifier"),
            "forEachAlgorithm": procedure("foreach", { "T": "g_project.T.ModuleDefinition.api.root.algorithms.D<GAnnotation>" }, "DictionaryForEach"),
            "forEachSubModule": procedure("foreach", { "T": "g_project.T.Project._ltype.library.submodules.D<GAnnotation>" }, "DictionaryForEach"),

        }, {})),
    })
}