import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"

import * as g_algorithm from "../../algorithm"
import * as g_common from "glo-pareto-common"
import * as g_fp from "lib-fountain-pen"
import * as g_glossary from "../../glossary"
import * as g_project from "../../project"

export namespace ASYNC {
    
    export namespace I {}
    
    export namespace A {}
}

export namespace SYNC {
    
    export namespace A {
        
        
        export namespace P {
            export type ProjectToDirectory<GAnnotation> = ($: g_project.T.Project<T.Annotation<GAnnotation>>, $i: g_fp.SYNC.I.Directory) => void
        }
        
        
        export namespace P {
            export type SerializeBuildEnvironment<GAnnotation> = ($: g_common.T.Null, $i: g_fp.SYNC.I.Directory) => void
        }
        
        
        export namespace P {
            export type SerializeGlossary<GAnnotation> = ($: T.SerializeGlossaryData<GAnnotation>, $i: g_fp.SYNC.I.Directory) => void
        }
        
        
        export namespace P {
            export type SerializeImplementation<GAnnotation> = ($: g_algorithm.T.Implementation<T.Annotation<GAnnotation>>, $i: g_fp.SYNC.I.Directory) => void
        }
        
        
        export namespace P {
            export type SerializeParetoEnvironment<GAnnotation> = ($: g_common.T.Null, $i: g_fp.SYNC.I.Directory) => void
        }
        
        
        export namespace P {
            export type SerializeStates<GAnnotation> = ($: g_algorithm.T.States<T.Annotation<GAnnotation>>, $i: g_fp.SYNC.I.Block) => void
        }
        
        
        export namespace P {
            export type ValidateFiles<GAnnotation> = ($: g_common.T.Null, $i: g_fp.SYNC.I.Directory) => void
        }
    }
}