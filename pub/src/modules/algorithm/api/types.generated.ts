import * as pt from 'pareto-core-types'
import * as mfp from "lib-fountain-pen"

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
            | ['function', {
                readonly 'block': TFunctionBlock
            }]
    }>
}

export type XSerialize = ($: TImplementation, $i: mfp.ILine) => void