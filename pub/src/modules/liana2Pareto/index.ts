import { API } from "./api"
import { icreateLiana2ParetoMapper } from "./implementations/createLiana2ParetoMapper.p"
import { icreateProjectGenerator } from "./implementations/createProjectGenerator.p"
import { igenerateProject } from "./implementations/generateProject.p"

export * from "./api"

export const $a: API = {
    "createLiana2ParetoMapper": icreateLiana2ParetoMapper,
    "createProjectGenerator": icreateProjectGenerator,
    "generateProject": igenerateProject,
}