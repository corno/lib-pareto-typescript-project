import { API } from "./api"
import { $$ as icreateLiana2paretoMapper } from "./implementations/createLiana2paretoMapper.p"
import { $$ as icreateLiana2StatesMapper } from "./implementations/createLiana2StatesMapper.p"
import { $$ as icreateProjectGenerator } from "./implementations/createProjectGenerator.p"
import { $$ as igenerateProject } from "./implementations/generateProject.p"
import { $$ as imapLiana2pareto } from "./implementations/mapLiana2pareto.p"

export const $a: API = {
    'createLiana2paretoMapper': icreateLiana2paretoMapper,
    'createLiana2StatesMapper': icreateLiana2StatesMapper,
    'createProjectGenerator': icreateProjectGenerator,
    'generateProject': igenerateProject,
    'mapLiana2pareto': imapLiana2pareto,
}