import * as pt from 'pareto-core-types'

import * as galgorithm from "../../../algorithm"
import * as gapi from "../../../api"
import * as gcommon from "glo-pareto-common"
import * as gfp from "lib-fountain-pen"
import * as gglossary from "../../../glossary"
import * as gproject from "../../../project"

export namespace T {
    
    export type Annotation<GPAnnotation> = GPAnnotation
    
    export namespace GlossarySerializationData {
        
        export type glossary<GPAnnotation> = gglossary.T.Glossary<T.Annotation<GPAnnotation>>
        
        export namespace imports {
            
            export type D<GPAnnotation> = string
        }
        
        export type imports<GPAnnotation> = pt.Dictionary<string>
    }
    
    export type GlossarySerializationData<GPAnnotation> = {
        readonly 'glossary': gglossary.T.Glossary<T.Annotation<GPAnnotation>>
        readonly 'imports': pt.Dictionary<string>
    }
}