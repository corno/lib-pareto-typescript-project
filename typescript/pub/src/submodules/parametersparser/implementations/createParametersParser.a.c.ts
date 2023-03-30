import * as pl from 'pareto-core-lib'

import { A } from "../api.generated"

export const $$: A.createParametersParser = () => {
    return {
        'construct': ($is) => {
            return {
                'data': ($) => {
                    type State = null | string
                    let state: State = null
                    $.__forEach(($) => {
                        if (state !== null) {
                            $is.errorHandler.data(['too many', null])
                        } else {
                            state = $
                        }
                    })
                    pl.cc($, ($) => {
                        if (state === null) {
                            $is.errorHandler.data(['missing', null])
                        } else {
                            $is.handler({
                                directory: state
                            })
                        }
                    })
                },
                'end': () => {
                    $is.errorHandler.end()
                }
            }
        }
    }
}