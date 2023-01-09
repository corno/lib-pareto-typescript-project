import { API } from "./api"
import { icreateModuleDefinitionSerializer } from "./implementations/createModuleDefinitionSerializer.p"

export * from "./api"

export const $a: API = {
    "createModuleDefinitionSerializer": icreateModuleDefinitionSerializer,
}