import { API } from "./api.generated"
import { $$ as igenerateProjectAndReport } from "./implementations/generateProjectAndReport.s.p"

export const $api: API = {
    'generateProjectAndReport': igenerateProjectAndReport,
}