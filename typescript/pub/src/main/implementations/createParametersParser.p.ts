import * as pl from 'pareto-core-lib'
import * as pd from 'pareto-core-dev'

import { createParametersParser } from "../api.generated"

export const $$: createParametersParser = (
    $d,
) => {
    return ($, $i) => {
        type State = null | string
        let state: State = null
        $.__forEach(($) => {
            if (state !== null) {
                pd.implementMe(`FSFSDF`)
                //$i.onError(['too many', null])
            } else {
                state = $
            }
        })
        pl.cc($, ($) => {
            if (state === null) {
                pd.implementMe(`FSFSDF`)

                //$d.onError(['missing', null])
            } else {
                $i({
                    testDirectory: state
                })
            }

        })
    }
}