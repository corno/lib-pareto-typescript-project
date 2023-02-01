import { API } from "./api"
import { $$ as icreateSerializer } from "./implementations/createSerializer.native"

export const $a: API = {
    'createSerializer': icreateSerializer,
}