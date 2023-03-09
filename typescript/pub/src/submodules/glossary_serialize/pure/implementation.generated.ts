import { API } from "./api.generated"
import { $$ as icreateSerializer } from "./implementations/createSerializer.p"

export const $api: API = {
    'createSerializer': icreateSerializer,
}