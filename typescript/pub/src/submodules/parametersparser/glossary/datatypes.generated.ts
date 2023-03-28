import * as pt from 'pareto-core-types'

import * as g_main from "res-pareto-main"
import * as g_parameters from "../../parameters"

export namespace N {}

export namespace T {
    
    export namespace ArgumentsError {
        
        export type missing = null
        
        export type too__many = null
    }
    
    export type ArgumentsError = 
        | ['missing', null]
        | ['too many', null]
}