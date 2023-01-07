import { API } from "./api"
import { icreateAlgorithmReferenceSerializer } from "./implementations/createAlgorithmReferenceSerializer.p"
import { icreateConstructorSerializer } from "./implementations/createConstructorSerializer.p"
import { icreateModuleDefinitionSerializer } from "./implementations/createModuleDefinitionSerializer.p"

export * from "./api"

export const $a: API = {
    "createAlgorithmReferenceSerializer": icreateAlgorithmReferenceSerializer,
    "createConstructorSerializer": icreateConstructorSerializer,
    "createModuleDefinitionSerializer": icreateModuleDefinitionSerializer,
}