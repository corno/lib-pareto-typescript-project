import { API } from "./api"
import { $$ as icreateLiana2ParetoMapper } from "./implementations/createLiana2ParetoMapper.p"
import { $$ as icreateProjectGenerator } from "./implementations/createProjectGenerator.p"
import { $$ as igenerateProject } from "./implementations/generateProject.p"

export const $a: API = {
    'createLiana2ParetoMapper': icreateLiana2ParetoMapper,
    'createProjectGenerator': icreateProjectGenerator,
    'generateProject': igenerateProject,
}