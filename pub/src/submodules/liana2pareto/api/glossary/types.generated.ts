import * as pt from 'pareto-core-types'

import * as malgorithm from "../../../algorithm"
import * as mliana from "../../../liana"
import * as mmain from "res-pareto-main"
import * as mproject from "../../../project"

export namespace T {
    
    export type Annotation<GPAnnotation> = GPAnnotation
    
    export namespace Configuration {
        
        export type mainData<GPAnnotation> = mmain.T.MainData
        
        export type model<GPAnnotation> = T.MappedModel<GPAnnotation>
    }
    
    export type Configuration<GPAnnotation> = {
        readonly 'mainData': mmain.T.MainData
        readonly 'model': T.MappedModel<GPAnnotation>
    }
    
    export namespace MappedModel {
        
        export type model<GPAnnotation> = mliana.T.Model<T.Annotation<GPAnnotation>>
        
        export namespace stringmapping {
            
            export namespace D {
                
                export type _lnumber<GPAnnotation> = null
                
                export type _lstring<GPAnnotation> = null
            }
            
            export type D<GPAnnotation> = 
                | ['number', null]
                | ['string', null]
        }
        
        export type stringmapping<GPAnnotation> = pt.Dictionary<
            | ['number', null]
            | ['string', null]
        >
    }
    
    export type MappedModel<GPAnnotation> = {
        readonly 'model': mliana.T.Model<T.Annotation<GPAnnotation>>
        readonly 'stringmapping': pt.Dictionary<
            | ['number', null]
            | ['string', null]
        >
    }
    
    export namespace Modules {
        
        export namespace modules {
            
            export type D<GPAnnotation> = mproject.T.Module<T.Annotation<GPAnnotation>>
        }
        
        export type modules<GPAnnotation> = pt.Dictionary<mproject.T.Module<T.Annotation<GPAnnotation>>>
    }
    
    export type Modules<GPAnnotation> = {
        readonly 'modules': pt.Dictionary<mproject.T.Module<T.Annotation<GPAnnotation>>>
    }
}