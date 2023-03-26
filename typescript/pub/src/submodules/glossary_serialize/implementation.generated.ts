import { API } from "./api.generated"
import { $$ as iserialize } from "./implementations/serialize.s.p"

export const $api: API = {
    'serialize': iserialize,
}