import * as pt from "pareto-core-types"

import * as glo from "./types.generated"

import * as mcollation from "res-pareto-collation"
import * as mglossary from "../../glossary"

export type CcreateAlgorithmReferenceSerializer = ($: null, $d: {
    readonly "serializeLeafType": mglossary.XSerializeLeafType
}) => glo.XSerializeAlgorithmReference

export type CcreateConstructorSerializer = ($: null, $d: {
    readonly "compare": mcollation.FIsABeforeB
    readonly "serializeAlgorithmReference": glo.XSerializeAlgorithmReference
    readonly "serializeLeafType": mglossary.XSerializeLeafType
}) => glo.XSerializeConstructor

export type CcreateModuleDefinitionSerializer = ($: null, $d: {
    readonly "compare": mcollation.FIsABeforeB
    readonly "serializeAlgorithmReference": glo.XSerializeAlgorithmReference
    readonly "serializeConstructor": glo.XSerializeConstructor
    readonly "serializeGlossary": mglossary.XSerializeGlossary
}) => glo.XSerializeModuleDefinition

export type API = {
    createAlgorithmReferenceSerializer: CcreateAlgorithmReferenceSerializer
    createConstructorSerializer: CcreateConstructorSerializer
    createModuleDefinitionSerializer: CcreateModuleDefinitionSerializer
}