import * as pt from 'pareto-core-types'

import * as g_foreach from "res-pareto-foreach"
import * as g_glossary from "../glossary"
import * as g_this from "./glossary"

export namespace A {
    
    export type serialize = <GAnnotation>($d: {
        readonly 'forEachAsychronousAlgorithm': g_foreach.SYNC.A.P.DictionaryForEach<g_glossary.T.Glossary.asynchronous.algorithms.D<GAnnotation>>
        readonly 'forEachAsychronousDownstream': g_foreach.SYNC.A.P.DictionaryForEach<g_glossary.T.Glossary.asynchronous.algorithms.D._lconstructor.downstreams.D<GAnnotation>>
        readonly 'forEachAsychronousInterface': g_foreach.SYNC.A.P.DictionaryForEach<g_glossary.T.Glossary.asynchronous.interfaces.D<GAnnotation>>
        readonly 'forEachAsyncInterfaceOption': g_foreach.SYNC.A.P.DictionaryForEach<g_glossary.T.AsynchronousInterface.choice.options.D<GAnnotation>>
        readonly 'forEachContextArgument': g_foreach.SYNC.A.P.DictionaryForEach<g_glossary.T.TypeReference.arguments.D<GAnnotation>>
        readonly 'forEachImport': g_foreach.SYNC.A.P.DictionaryForEach<g_glossary.T.Glossary.imports.D<GAnnotation>>
        readonly 'forEachImportArgument': g_foreach.SYNC.A.P.DictionaryForEach<g_glossary.T.Glossary.imports.D.arguments.D<GAnnotation>>
        readonly 'forEachMember': g_foreach.SYNC.A.P.DictionaryForEach<g_glossary.T.Type.group.D<GAnnotation>>
        readonly 'forEachOption': g_foreach.SYNC.A.P.DictionaryForEach<g_glossary.T.Type.taggedUnion.D<GAnnotation>>
        readonly 'forEachParameter': g_foreach.SYNC.A.P.DictionaryForEach<g_glossary.T.Glossary.parameters.D<GAnnotation>>
        readonly 'forEachSychronousAlgorithm': g_foreach.SYNC.A.P.DictionaryForEach<g_glossary.T.Glossary.synchronous.algorithms.D<GAnnotation>>
        readonly 'forEachSychronousInterface': g_foreach.SYNC.A.P.DictionaryForEach<g_glossary.T.Glossary.synchronous.interfaces.D<GAnnotation>>
        readonly 'forEachSyncInterfaceMember': g_foreach.SYNC.A.P.DictionaryForEach<g_glossary.T.SynchronousInterface.group.members.D<GAnnotation>>
        readonly 'forEachType': g_foreach.SYNC.A.P.DictionaryForEach<g_glossary.T.Glossary.types.D<GAnnotation>>
        readonly 'forEachTypeParameter': g_foreach.SYNC.A.P.DictionaryForEach<g_glossary.T.Glossary.types.D.parameters.D<GAnnotation>>
    }, ) => g_this.SYNC.A.P.Serialize<GAnnotation>
}

export type API = {
    readonly 'serialize': A.serialize
}