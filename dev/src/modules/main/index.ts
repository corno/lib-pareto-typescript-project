import { API } from "./api"
import { imain } from "./implementations/main.p"

export * from "./api"

export const $a: API = {
    "main": imain,
}