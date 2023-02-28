import * as pd from 'pareto-core-data'
import * as pt from 'pareto-core-types'

import * as gliana2pareto from "lib-liana/dist/submodules/liana2pareto"

import { $ as glossary } from "./models/glossary.data"

export const $: pt.Array<gliana2pareto.T.GenerateModuleData<pd.SourceLocation>> = pd.a([
    // {
    //     'path': `../../pareto/src/data/glossary`,
    //     'data': {
    //         'configuration': {
    //             'datamodel': [true, {
    //                 'annotations': true,
    //                 'properties optional': false,
    //                 'reference mapping': ['string', {}],
    //             }],
    //             'visitor interface': [false],
    //             'algorithms': {
    //                 'serialize': [false],
    //             },
    //         },
    //         'mappedModel': {
    //             'model': glossary,

    //             'stringmapping': pd.d({
    //                 "identifier": ['string', null]
    //             }),
    //         },
    //     }
    // },
    // {
    //     'path': `../../pareto/src/data/glossary_serialize`,
    //     'data': {
    //         'configuration': {
    //             'datamodel': [false],
    //             'visitor interface': [false],
    //             'algorithms': {
    //                 'serialize': [true, {
    //                     'datamodel location': "TBD",
    //                 }],
    //             },
    //         },
    //         'mappedModel': {
    //             'model': glossary,

    //             'stringmapping': pd.d({
    //                 "identifier": ['string', null]
    //             }),
    //         },
    //     }
    // }
])