import * as pt from 'pareto-core-types'

import * as malgorithm from "../../../algorithm"
import * as mliana from "../../../liana"
import * as mmain from "res-pareto-main"
import * as mproject from "../../../project"

export namespace T {
    
    export namespace Configuration {
        
        export type mainData = mmain.T.MainData
        
        export type model = T.MappedModel
    }
    
    export type Configuration = {
        readonly 'mainData': mmain.T.MainData
        readonly 'model': T.MappedModel
    }
    
    export namespace MappedModel {
        
        export type model = mliana.T.Model
        
        export namespace stringmapping {
            
            export namespace D {
                
                export type _lnumber = null
                
                export type _lstring = null
            }
            
            export type D = 
                | ['number', null]
                | ['string', null]
        }
        
        export type stringmapping = pt.Dictionary<
            | ['number', null]
            | ['string', null]
        >
    }
    
    export type MappedModel = {
        readonly 'model': mliana.T.Model
        readonly 'stringmapping': pt.Dictionary<
            | ['number', null]
            | ['string', null]
        >
    }
    
    export namespace Modules {
        
        export namespace modules {
            
            export type D = mproject.T.Module
        }
        
        export type modules = pt.Dictionary<mproject.T.Module>
    }
    
    export type Modules = {
        readonly 'modules': pt.Dictionary<mproject.T.Module>
    }
}