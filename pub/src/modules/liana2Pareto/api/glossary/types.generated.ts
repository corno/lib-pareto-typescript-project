import * as pt from 'pareto-core-types'

import * as malgorithm from "../../../algorithm"
import * as mliana from "../../../liana"
import * as mmain from "lib-pareto-main"
import * as mproject from "../../../project"

export namespace UConfiguration {}
export type UConfiguration = {
    readonly 'mainData': mmain.TMainData
    readonly 'model': GMappedModel
}
export type GConfiguration = UConfiguration

export namespace UMappedModel {
    
    export namespace Pstringmapping {
        
        export namespace D {}
        export type D = 
            | ['number', null]
            | ['string', null]
    }
    export type Pstringmapping = pt.Dictionary<Pstringmapping.D>
}
export type UMappedModel = {
    readonly 'model': mliana.TModel
    readonly 'stringmapping': UMappedModel.Pstringmapping
}
export type GMappedModel = UMappedModel