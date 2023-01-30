import { API } from "./api"
import { $$ as icreateResolver } from "./implementations/createResolver.p"

export const $a: API = {
    'createResolver': icreateResolver,
}