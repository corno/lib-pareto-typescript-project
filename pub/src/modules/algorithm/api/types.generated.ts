import * as pt from 'pareto-core-types'
import * as mfp from "lib-fountain-pen"

export type TCallbackBlock = {
    readonly 'innerCallbacks'?: pt.Dictionary<{
        readonly 'block': TCallbackBlock
    }>
    readonly 'statements': pt.Array<
        | ['dependencyCall', {
            readonly 'callback'?: TCallbackBlock
            readonly 'data'?: string
        }]
        | ['innerCallbackCall', {
            readonly 'data'?: TExpression
            readonly 'innerCallback': string
            readonly 'interface'?: string
        }]
        | ['interfaceCall', {
            readonly 'callback'?: TCallbackBlock
            readonly 'data'?: string
            readonly 'property': string
        }]
        | ['switch', {
            readonly 'cases': pt.Dictionary<TCallbackBlock>
            readonly 'path': pt.Array<string>
        }]
    >
}

export type TExpression = 
    | ['call', {
        readonly 'function': string
    }]
    | ['contextChange', {
        readonly 'block': TFunctionBlock
        readonly 'property': string
    }]
    | ['groupInitializer', {
        readonly 'properties': pt.Dictionary<TExpression>
    }]
    | ['implementMe', string]
    | ['mapArray', {
        readonly 'block': TFunctionBlock
    }]
    | ['mapDictionary', {
        readonly 'block': TFunctionBlock
    }]
    | ['propertySelection', {
        readonly 'name': string
    }]
    | ['switch', {
        readonly 'cases': pt.Dictionary<TFunctionBlock>
    }]

export type TFunctionBlock = {
    readonly 'innerFunctions'?: pt.Dictionary<{
        readonly 'block': TFunctionBlock
    }>
    readonly 'returnExpression': TExpression
}

export type TImplementation = {
    readonly 'implementations': pt.Dictionary<{
        readonly 'constructor': boolean
        readonly 'type': 
            | ['callback', {
                readonly 'block': TCallbackBlock
            }]
            | ['function', {
                readonly 'block': TFunctionBlock
            }]
    }>
}

export type FSerialize = ($: TImplementation, $i: mfp.ILine,) => void