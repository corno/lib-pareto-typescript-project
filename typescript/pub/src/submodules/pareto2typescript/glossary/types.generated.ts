import * as pt from 'pareto-core-types'

import * as g_algorithm from "../../algorithm"
import * as g_api from "../../api"
import * as g_common from "glo-pareto-common"
import * as g_fp from "lib-fountain-pen"
import * as g_glossary from "../../glossary"
import * as g_project from "../../project"

export namespace T {
    
    export type Annotation<GAnnotation> = GAnnotation
    
    export namespace SerializeAPIData {
        
        export type api<GAnnotation> = g_api.T.API<T.Annotation<GAnnotation>>
        
        export namespace imports {
            
            export type D<GAnnotation> = string
        }
        
        export type imports<GAnnotation> = pt.Dictionary<string>
    }
    
    export type SerializeAPIData<GAnnotation> = {
        readonly 'api': g_api.T.API<T.Annotation<GAnnotation>>
        readonly 'imports': pt.Dictionary<string>
    }
    
    export namespace SerializeGlossaryData {
        
        export type glossary<GAnnotation> = g_glossary.T.Glossary<T.Annotation<GAnnotation>>
        
        export namespace imports {
            
            export type D<GAnnotation> = string
        }
        
        export type imports<GAnnotation> = pt.Dictionary<string>
    }
    
    export type SerializeGlossaryData<GAnnotation> = {
        readonly 'glossary': g_glossary.T.Glossary<T.Annotation<GAnnotation>>
        readonly 'imports': pt.Dictionary<string>
    }
}