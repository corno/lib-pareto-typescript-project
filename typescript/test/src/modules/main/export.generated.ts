import { API } from "./definition/api.generated"

import { $$ as imain } from "./implementations/main.generated"
import { $$ as igetTestSet } from "./implementations/getTestSet.p"

export const $a: API = {
    'main': imain,
    'getTestSet': igetTestSet,
}