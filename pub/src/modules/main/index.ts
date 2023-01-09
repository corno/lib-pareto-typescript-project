import { API } from "./api"
import { icreateProjectGenerator } from "./implementations/createProjectGenerator.p"
import { igenerateProject } from "./implementations/generateProject.p"

export * from "./api"

export const $a: API = {
    "createProjectGenerator": icreateProjectGenerator,
    "generateProject": igenerateProject,
}