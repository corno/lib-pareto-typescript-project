import { API } from "./api.generated"
import { $$ as iresolve } from "./implementations/resolve.s.f"

export const $api: API = {
    'resolve': iresolve,
}