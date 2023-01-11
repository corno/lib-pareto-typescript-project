import { API } from "./api"
import { icreateParametersParser } from "./implementations/createParametersParser.p"
import { icreateProjectGenerator } from "./implementations/createProjectGenerator.p"
import { igenerateProject } from "./implementations/generateProject.p"

export * from "./api"

export const $a: API = {
    "createParametersParser": icreateParametersParser,
    "createProjectGenerator": icreateProjectGenerator,
    "generateProject": igenerateProject,
}