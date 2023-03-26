import { API } from "./api.generated"

import { $$ as imain } from "./implementations/main.generated"
import { $$ as igetTestSet } from "./implementations/getTestSet.a.f"

export const $a: API = {
    'main': imain,
    'getTestSet': igetTestSet,
}