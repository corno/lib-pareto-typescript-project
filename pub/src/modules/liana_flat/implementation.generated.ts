import { API } from "./api"
import { $$ as icreateSerializer } from "./implementations/createSerializer.p"

export const $a: API = {
    'createSerializer': icreateSerializer,
}