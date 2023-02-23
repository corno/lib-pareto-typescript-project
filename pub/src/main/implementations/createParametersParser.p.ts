import * as pl from 'pareto-core-lib'

import * as mapi from "../api"

export const $$: mapi.CcreateParametersParser = (
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