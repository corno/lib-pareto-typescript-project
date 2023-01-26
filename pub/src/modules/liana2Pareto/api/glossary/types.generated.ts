import * as pt from 'pareto-core-types'

import * as malgorithm from "../../../algorithm"
import * as mliana from "../../../liana"
import * as mmain from "lib-pareto-main"
import * as mproject from "../../../project"

export namespace GConfiguration {
    
    export namespace G {}
    export type G = {
        readonly 'mainData': mmain.TMainData
        readonly 'model': GMappedModel
    }
}
export type GConfiguration = GConfiguration.G

export namespace GMappedModel {
    
    export namespace G {
        
        export namespace Pstringmapping {
            
            export namespace D {}
            export type D = 
                | ['number', null]
                | ['string', null]
        }
        export type Pstringmapping = pt.Dictionary<Pstringmapping.D>
    }
    export type G = {
        readonly 'model': mliana.TModel
        readonly 'stringmapping': G.Pstringmapping
    }
}
export type GMappedModel = GMappedModel.G