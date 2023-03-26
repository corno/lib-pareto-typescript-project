import * as pd from 'pareto-core-data'

import { constructor, algorithm, procedure, dependent } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"

const d = pd.d

export const $: g_project.T.ModuleDefinition.api.root<pd.SourceLocation> = {
    'algorithms': d({
        "serialize": algorithm(procedure("this", {}, "Serialize"), { "Annotation": "Annotation" }, dependent(null, {
            "forEachContextArgument": procedure("foreach", { "T": "g_glossary.T.TypeReference.arguments.D<GAnnotation>" }, "DictionaryForEach"),
            "forEachAsychronousInterface": procedure("foreach", { "T": "g_glossary.T.Glossary.asynchronous.interfaces.D<GAnnotation>" }, "DictionaryForEach"),
            "forEachAsychronousAlgorithm": procedure("foreach", { "T": "g_glossary.T.Glossary.asynchronous.algorithms.D<GAnnotation>" }, "DictionaryForEach"),
            "forEachAsychronousDownstream": procedure("foreach", { "T": "g_glossary.T.Glossary.asynchronous.algorithms.D._lconstructor.downstreams.D<GAnnotation>" }, "DictionaryForEach"),
            "forEachSychronousInterface": procedure("foreach", { "T": "g_glossary.T.Glossary.synchronous.interfaces.D<GAnnotation>" }, "DictionaryForEach"),
            "forEachSychronousAlgorithm": procedure("foreach", { "T": "g_glossary.T.Glossary.synchronous.algorithms.D<GAnnotation>" }, "DictionaryForEach"),
            "forEachType": procedure("foreach", { "T": "g_glossary.T.Glossary.types.D<GAnnotation>" }, "DictionaryForEach"),
            "forEachTypeParameter": procedure("foreach", { "T": "g_glossary.T.Glossary.types.D.parameters.D<GAnnotation>" }, "DictionaryForEach"),
            "forEachMember": procedure("foreach", { "T": "g_glossary.T.Type.group.D<GAnnotation>" }, "DictionaryForEach"),
            "forEachOption": procedure("foreach", { "T": "g_glossary.T.Type.taggedUnion.D<GAnnotation>" }, "DictionaryForEach"),
            "forEachAsyncInterfaceOption": procedure("foreach", { "T": "g_glossary.T.AsynchronousInterface.choice.options.D<GAnnotation>" }, "DictionaryForEach"),
            "forEachSyncInterfaceMember": procedure("foreach", { "T": "g_glossary.T.SynchronousInterface.group.members.D<GAnnotation>" }, "DictionaryForEach"),
            "forEachParameter": procedure("foreach", { "T": "g_glossary.T.Glossary.parameters.D<GAnnotation>" }, "DictionaryForEach"),
            "forEachImport": procedure("foreach", { "T": "g_glossary.T.Glossary.imports.D<GAnnotation>" }, "DictionaryForEach"),
            "forEachImportArgument": procedure("foreach", { "T": "g_glossary.T.Glossary.imports.D.arguments.D<GAnnotation>" }, "DictionaryForEach"),
        }, {}))
    }),
}