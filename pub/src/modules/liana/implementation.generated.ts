import { API } from "./api"
import { $$ as iresolve } from "./implementations/resolve.p"

export const $a: API = {
    'resolve': iresolve,
}