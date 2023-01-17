import * as pt from 'pareto-core-types'
import * as mliana from "../../liana"
import * as mmain from "lib-pareto-main"
import * as mproject from "../../project"

export type TConfiguration = {
    readonly 'mainData': mmain.TMainData
    readonly 'model': mliana.TModel
}

export type FMapLiana2Pareto = ($: mliana.TModel) => mproject.TModule