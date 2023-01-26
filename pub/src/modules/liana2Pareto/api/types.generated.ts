import * as pt from 'pareto-core-types'
import * as malgorithm from "../../algorithm"
import * as mliana from "../../liana"
import * as mmain from "lib-pareto-main"
import * as mproject from "../../project"

export type TConfiguration = {
    readonly 'mainData': mmain.TMainData
    readonly 'model': TMappedModel
}

export type TMappedModel = {
    readonly 'model': mliana.TModel
    readonly 'stringmapping': pt.Dictionary<
        | ['number', null]
        | ['string', null]
    >
}

export type FGenerateProject = ($: TConfiguration,) => void

export type FMapLiana2Pareto = ($: TMappedModel,) => mproject.TModule

export type FMapLiana2States = ($: TMappedModel,) => malgorithm.TStates