import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"

import * as g_main from "res-pareto-main"
import * as g_parameters from "../../parameters"

export namespace ASYNC {
    
    export namespace I {
        
        export type ErrorsHandler = {
            'data': ($: T.ArgumentsError, ) => void
            'end': () => void
        }
        
        export type HandleArguments = {
            'data': ($: g_main.T.Arguments, ) => void
            'end': () => void
        }
        
        export type ParametersHandler = ($: g_parameters.T.Parameters, ) => void
    }
    
    export namespace A {
        
        
        export namespace C {
            export type CreateParametersParser = ($is: {
                readonly 'errorHandler': ASYNC.I.ErrorsHandler
                readonly 'handler': ASYNC.I.ParametersHandler
            }) => ASYNC.I.HandleArguments
        }
    }
}

export namespace SYNC {}