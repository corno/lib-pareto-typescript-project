import * as pl from 'pareto-core-lib'

import { createParametersParser } from "../definition/api.generated"

export const $$: createParametersParser = (
    $d,
) => {
    return ($, $i) => {
        type State = null | string
        let state: State = null
        $.__forEach(($) => {
            if (state !== null) {
                $d.onError(['too many', null])
            } else {
                state = $
            }
        })
        pl.cc($, ($) => {
            if (state === null) {
                $d.onError(['missing', null])
            } else {
                $i({
                    testDirectory: state
                })
            }

        })
    }
}