
import * as pr from "pareto-core-raw"

//import { Function, Glossary, LeafType, Type } from "./types.p"


const wd = pr.wrapRawDictionary


// export function boolean(): Type {
//     return ["leaf", ["boolean", null]]
// }
// export function string(): Type {
//     return ["leaf", ["string", null]]
// }
// export function number(): Type {
//     return ["leaf", ["number", null]]
// }
// export function _null(): Type {
//     return ["leaf", ["null", null]]
// }

// export function types($: { [key: string]: Type }) {
//     return wd($)
// }
// export function taggedUnion($: { [key: string]: Type }): Type {
//     return ["taggedUnion", wd($)]
// }
// export function dictionary($: Type): Type {
//     return ["dictionary", $]
// }
// export function array($: Type): Type {
//     return ["array", $]
// }
// export function group($: { [key: string]: Type }): Type {
//     return ["group", wd($)]
// }
// export function reference(type: string): Type {
//     return ["leaf", ["reference", type]]
// }

// export function externalReference( context: string, type: string): Type {
//     return ["external reference", {
//         type: type,
//         context: context,
//     }]
// }
// export function _function(data: LeafType, returnValue: LeafType, async?: boolean): Function {
//     return {
//         "async": async === undefined ? false : async,
//         "data": data,
//         "return value": returnValue,
//     }
// }