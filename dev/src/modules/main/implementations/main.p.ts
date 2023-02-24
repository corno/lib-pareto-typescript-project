import * as pv from 'pareto-core-dev'
import * as pd from 'pareto-core-data'

import * as gpareto from "lib-pareto-typescript-project"
import * as gliana2pareto from "lib-pareto-typescript-project/dist/submodules/liana2pareto"

import { $ as glossary } from "../../../data/glossary.data"

import { Cmain } from "../api"

export const $$: Cmain = ($) => {
    gliana2pareto.$a.generateModule({
        'path': `../../pareto/src/data/glossary`,
        'data': {
            'configuration': {
                'datamodel': [true, {
                    'annotations': true,
                    'properties optional': false,
                    'reference mapping': ['string', {}],
                }],
                'algorithms': {},
            },
            'mappedModel': {
                'model': glossary,

                'stringmapping': pd.d({
                    "identifier": ['string', null]
                }),
            },
        }
    })
}