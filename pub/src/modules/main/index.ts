import { API } from "./api"
import { igenerateProject } from "./implementations/generateProject.p"

export * from "./api"

export const $a: API = {
    "generateProject": igenerateProject,
}