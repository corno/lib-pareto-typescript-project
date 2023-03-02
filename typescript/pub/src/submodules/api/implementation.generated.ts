import { API } from "./definition/api.generated"
import { $$ as icreateSerializer } from "./implementations/createSerializer.p"

export const $a: API = {
    'createSerializer': icreateSerializer,
}