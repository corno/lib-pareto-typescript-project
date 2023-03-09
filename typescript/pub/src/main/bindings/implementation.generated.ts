import { API } from "./api.generated"
import { $$ as igenerateProject } from "./implementations/generateProject.p"

export const $api: API = {
    'generateProject': igenerateProject,
}