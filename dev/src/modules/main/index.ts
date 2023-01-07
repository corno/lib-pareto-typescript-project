import { API } from "./api"
import { igenerateProject } from "./implementations/generateProject.p"
import { imain } from "./implementations/main.p"

export * from "./api"

export const $a: API = {
    "generateProject": igenerateProject,
    "main": imain,
}