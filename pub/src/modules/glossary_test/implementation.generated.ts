import { API } from "./api"
import { $$ as icreateSerializer } from "./implementations/createSerializer.generated"

export const $a: API = {
    'createSerializer': icreateSerializer,
}