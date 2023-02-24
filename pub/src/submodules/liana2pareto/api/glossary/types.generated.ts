import * as pt from 'pareto-core-types'

import * as galgorithm from "../../../algorithm"
import * as gcommon from "glo-pareto-common"
import * as gliana from "../../../liana"
import * as gmain from "res-pareto-main"
import * as gproject from "../../../project"

export namespace T {
    
    export type Annotation<GPAnnotation> = GPAnnotation
    
    export namespace GenerateModuleData {
        
        export type data<GPAnnotation> = T.MapLiana2ParetoData<GPAnnotation>
        
        export type path<GPAnnotation> = gcommon.T.Path
    }
    
    export type GenerateModuleData<GPAnnotation> = {
        readonly 'data': T.MapLiana2ParetoData<GPAnnotation>
        readonly 'path': gcommon.T.Path
    }
    
    export namespace GenerationConfiguration {
        
        export namespace algorithms {}
        
        export type algorithms<GPAnnotation> = {}
        
        export namespace datamodel {
            
            export namespace O {
                
                export type annotations<GPAnnotation> = boolean
                
                export type properties__optional<GPAnnotation> = boolean
                
                export namespace reference__mapping {
                    
                    export namespace reference {}
                    
                    export type reference<GPAnnotation> = {}
                    
                    export namespace reference__and__string {}
                    
                    export type reference__and__string<GPAnnotation> = {}
                    
                    export namespace _lstring {}
                    
                    export type _lstring<GPAnnotation> = {}
                }
                
                export type reference__mapping<GPAnnotation> = 
                    | ['reference', {}]
                    | ['reference and string', {}]
                    | ['string', {}]
            }
            
            export type O<GPAnnotation> = {
                readonly 'annotations': boolean
                readonly 'properties optional': boolean
                readonly 'reference mapping': 
                    | ['reference', {}]
                    | ['reference and string', {}]
                    | ['string', {}]
            }
        }
        
        export type datamodel<GPAnnotation> = [ false ] | [ true, {
            readonly 'annotations': boolean
            readonly 'properties optional': boolean
            readonly 'reference mapping': 
                | ['reference', {}]
                | ['reference and string', {}]
                | ['string', {}]
        }]
    }
    
    export type GenerationConfiguration<GPAnnotation> = {
        readonly 'algorithms': {}
        readonly 'datamodel': [ false ] | [ true, {
            readonly 'annotations': boolean
            readonly 'properties optional': boolean
            readonly 'reference mapping': 
                | ['reference', {}]
                | ['reference and string', {}]
                | ['string', {}]
        }]
    }
    
    export namespace MapLiana2ParetoData {
        
        export type configuration<GPAnnotation> = T.GenerationConfiguration<GPAnnotation>
        
        export type mappedModel<GPAnnotation> = T.MappedModel<GPAnnotation>
    }
    
    export type MapLiana2ParetoData<GPAnnotation> = {
        readonly 'configuration': T.GenerationConfiguration<GPAnnotation>
        readonly 'mappedModel': T.MappedModel<GPAnnotation>
    }
    
    export namespace MappedModel {
        
        export type model<GPAnnotation> = gliana.T.Model<T.Annotation<GPAnnotation>>
        
        export namespace stringmapping {
            
            export namespace D {
                
                export type _lboolean<GPAnnotation> = null
                
                export type _lnumber<GPAnnotation> = null
                
                export type _lstring<GPAnnotation> = null
            }
            
            export type D<GPAnnotation> = 
                | ['boolean', null]
                | ['number', null]
                | ['string', null]
        }
        
        export type stringmapping<GPAnnotation> = pt.Dictionary<
            | ['boolean', null]
            | ['number', null]
            | ['string', null]
        >
    }
    
    export type MappedModel<GPAnnotation> = {
        readonly 'model': gliana.T.Model<T.Annotation<GPAnnotation>>
        readonly 'stringmapping': pt.Dictionary<
            | ['boolean', null]
            | ['number', null]
            | ['string', null]
        >
    }
    
    export type Module<GPAnnotation> = gproject.T.Module<T.Annotation<GPAnnotation>>
    
    export namespace Modules {
        
        export namespace modules {
            
            export type D<GPAnnotation> = gproject.T.Module<T.Annotation<GPAnnotation>>
        }
        
        export type modules<GPAnnotation> = pt.Dictionary<gproject.T.Module<T.Annotation<GPAnnotation>>>
    }
    
    export type Modules<GPAnnotation> = {
        readonly 'modules': pt.Dictionary<gproject.T.Module<T.Annotation<GPAnnotation>>>
    }
}