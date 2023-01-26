import * as pt from 'pareto-core-types'

import * as malgorithm from "../../../algorithm"
import * as mliana from "../../../liana"
import * as mmain from "lib-pareto-main"
import * as mproject from "../../../project"

export namespace GConfiguration {
    
    export namespace G {
        export type /*FIXME REMOVE*/$ = {
            readonly 'mainData': mmain.TMainData
            readonly 'model': GMappedModel
        }
    }
    export type G = G.$
    export type /*FIXME REMOVE*/$ = G
}
export type GConfiguration = GConfiguration.$

export namespace GMappedModel {
    
    export namespace G {
        
        export namespace Pstringmapping {
            
            export namespace D {
                export type /*FIXME REMOVE*/$ = 
                    | ['number', null]
                    | ['string', null]
            }
            export type D = D.$
            export type /*FIXME REMOVE*/$ = pt.Dictionary<D>
        }
        export type Pstringmapping = Pstringmapping.$
        export type /*FIXME REMOVE*/$ = {
            readonly 'model': mliana.TModel
            readonly 'stringmapping': Pstringmapping
        }
    }
    export type G = G.$
    export type /*FIXME REMOVE*/$ = G
}
export type GMappedModel = GMappedModel.$