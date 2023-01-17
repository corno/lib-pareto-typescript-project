import { API } from "./api"
import { icreateSerializer } from "./implementations/createSerializer.p"

export * from "./api"

export const $a: API = {
    'createSerializer': icreateSerializer,
}