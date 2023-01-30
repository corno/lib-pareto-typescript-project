import * as pt from 'pareto-core-types'

import * as malgorithm from "../../../algorithm"
import * as mliana from "../../../liana"
import * as mmain from "res-pareto-main"
import * as mproject from "../../../project"

export namespace GConfiguration {}
export type GConfiguration = {
    readonly 'mainData': mmain.TMainData
    readonly 'model': UMappedModel
}
export type UConfiguration = GConfiguration

export namespace GMappedModel {
    
    export namespace Pstringmapping {
        
        export namespace D {}
        export type D = 
            | ['number', null]
            | ['string', null]
    }
    export type Pstringmapping = pt.Dictionary<Pstringmapping.D>
}
export type GMappedModel = {
    readonly 'model': mliana.TModel
    readonly 'stringmapping': GMappedModel.Pstringmapping
}
export type UMappedModel = GMappedModel

export namespace GModules {
    
    export namespace Pmodules {}
    export type Pmodules = pt.Dictionary<mproject.TModule>
}
export type GModules = {
    readonly 'modules': GModules.Pmodules
}
export type UModules = GModules