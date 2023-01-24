import * as pl from 'pareto-core-lib'

import * as api from "../api"

export const $$: api.CcreateParametersParser = (
    $d,
) => {
    return ($, $i) => {
        type State = null | string
        let state: State = null
        $.forEach(($) => {
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
                })//FIXME THIS IS NOT THE RIGHT TYPE
            }

        })
    }
}