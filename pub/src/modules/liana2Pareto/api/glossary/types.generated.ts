import * as pt from 'pareto-core-types'

import * as malgorithm from "../../../algorithm"
import * as mliana from "../../../liana"
import * as mmain from "lib-pareto-main"
import * as mproject from "../../../project"

export namespace GConfiguration {
    
    export namespace G {
        export type $ = {
            readonly 'mainData': mmain.TMainData
            readonly 'model': GMappedModel.$
        }
    }
    export type $ = G.$
}

export namespace GMappedModel {
    
    export namespace G {
        
        export namespace Pstringmapping {
            
            export namespace D {
                export type $ = 
                    | ['number', null]
                    | ['string', null]
            }
            export type $ = pt.Dictionary<D.$>
        }
        export type $ = {
            readonly 'model': mliana.TModel
            readonly 'stringmapping': Pstringmapping.$
        }
    }
    export type $ = G.$
}