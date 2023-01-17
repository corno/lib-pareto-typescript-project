import * as api from "../api"

export const $$: api.CcreateParametersParser = (
    $d,
) => {
    return ($) => {
        type State = null | string
        let state: State = null
        $.forEach(($) => {
            if (state !== null) {
                $d.pr_onError(['too many', null])
            } else {
                state = $
            }
        })
        if (state === null) {
            $d.pr_onError(['missing', null])
        } else {
            $d.pr_callback(state)
        }
    }
}