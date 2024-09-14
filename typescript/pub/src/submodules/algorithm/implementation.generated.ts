import { API } from "./api.generated"
import { $$ as iserializeImplementation } from "./implementations/serializeImplementation.s.p"

export const $api: API = {
    'serializeImplementation': iserializeImplementation,
}