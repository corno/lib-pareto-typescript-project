import { API } from "./api"
import { $$ as icreateLiana2ParetoMapper } from "./implementations/createLiana2ParetoMapper.p"
import { $$ as icreateLiana2StatesMapper } from "./implementations/createLiana2StatesMapper.p"
import { $$ as icreateModuleGenerator } from "./implementations/createModuleGenerator.p"
import { $$ as igenerateModule } from "./implementations/generateModule.p"
import { $$ as imapLiana2Pareto } from "./implementations/mapLiana2Pareto.p"

export const $a: API = {
    'createLiana2ParetoMapper': icreateLiana2ParetoMapper,
    'createLiana2StatesMapper': icreateLiana2StatesMapper,
    'createModuleGenerator': icreateModuleGenerator,
    'generateModule': igenerateModule,
    'mapLiana2Pareto': imapLiana2Pareto,
}