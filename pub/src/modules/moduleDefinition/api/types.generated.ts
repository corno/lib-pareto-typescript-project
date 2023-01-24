import * as pt from 'pareto-core-types'
import * as mfp from "lib-fountain-pen"
import * as mglossary from "../../glossary"

export type T_AlgorithmType = 
    | ['constructor', {
        readonly 'configuration data': null | mglossary.TTypeReference
        readonly 'dependencies': pt.Dictionary<TDefinitionReference>
    }]
    | ['reference', null]

export type TContext = 
    | ['import', string]
    | ['local', null]

export type TDefinitionReference = {
    readonly 'context'?: TContext
    readonly 'function': string
}

export type TModuleDefinition = {
    readonly 'api': {
        readonly 'algorithms': pt.Dictionary<{
            readonly 'definition': TDefinitionReference
            readonly 'type': T_AlgorithmType
        }>
        readonly 'imports': pt.Dictionary<string>
    }
    readonly 'glossary': mglossary.TGlossary
}

export type FSerialize = ($: TModuleDefinition, $i: mfp.ILine,) => void