import * as pt from 'pareto-core-types'


export namespace GAnnotatedToken {}
export type GAnnotatedToken = {
    readonly 'annotation': HAnnotation
    readonly 'token': UToken
}
export type UAnnotatedToken = GAnnotatedToken
export type UAnnotation = HAnnotation

export namespace GMultilineStringData {
    
    export namespace Plines {}
    export type Plines = pt.Array<string>
}
export type GMultilineStringData = {
    readonly 'lines': GMultilineStringData.Plines
}
export type UMultilineStringData = GMultilineStringData

export namespace GSimpleStringData {}
export type GSimpleStringData = {
    readonly 'value': string
    readonly 'wrapping': UWrapping
}
export type USimpleStringData = GSimpleStringData

export namespace GStructuralTokenData {}
export type GStructuralTokenData = {
    readonly 'type': UStructuralTokenType
}
export type UStructuralTokenData = GStructuralTokenData

export namespace GStructuralTokenType {
    
    export namespace Oclose__dictionary {}
    export type Oclose__dictionary = {}
    
    export namespace Oclose__list {}
    export type Oclose__list = {}
    
    export namespace Oclose__shorthand__group {}
    export type Oclose__shorthand__group = {}
    
    export namespace Oclose__verbose__group {}
    export type Oclose__verbose__group = {}
    
    export namespace Oopen__dictionary {}
    export type Oopen__dictionary = {}
    
    export namespace Oopen__list {}
    export type Oopen__list = {}
    
    export namespace Oopen__shorthand__group {}
    export type Oopen__shorthand__group = {}
    
    export namespace Oopen__verbose__group {}
    export type Oopen__verbose__group = {}
    
    export namespace Otagged__union__start {}
    export type Otagged__union__start = {}
}
export type GStructuralTokenType = 
    | ['close dictionary', GStructuralTokenType.Oclose__dictionary]
    | ['close list', GStructuralTokenType.Oclose__list]
    | ['close shorthand group', GStructuralTokenType.Oclose__shorthand__group]
    | ['close verbose group', GStructuralTokenType.Oclose__verbose__group]
    | ['open dictionary', GStructuralTokenType.Oopen__dictionary]
    | ['open list', GStructuralTokenType.Oopen__list]
    | ['open shorthand group', GStructuralTokenType.Oopen__shorthand__group]
    | ['open verbose group', GStructuralTokenType.Oopen__verbose__group]
    | ['tagged union start', GStructuralTokenType.Otagged__union__start]
export type UStructuralTokenType = GStructuralTokenType

export namespace GToken {
    
    export namespace Oheader__start {}
    export type Oheader__start = {}
}
export type GToken = 
    | ['header start', GToken.Oheader__start]
    | ['multiline string', UMultilineStringData]
    | ['simple string', USimpleStringData]
    | ['structural', UStructuralTokenData]
export type UToken = GToken

export namespace GWrapping {
    
    export namespace Oapostrophe {}
    export type Oapostrophe = {}
    
    export namespace Onone {}
    export type Onone = {}
    
    export namespace Oquote {}
    export type Oquote = {}
}
export type GWrapping = 
    | ['apostrophe', GWrapping.Oapostrophe]
    | ['none', GWrapping.Onone]
    | ['quote', GWrapping.Oquote]
export type UWrapping = GWrapping