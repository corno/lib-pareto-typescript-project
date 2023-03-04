import * as pd from 'pareto-core-data'
import * as pt from 'pareto-core-types'
import * as pv from 'pareto-core-dev'

import * as gliana2glossary from "lib-liana/dist/submodules/liana2glossary"

import { $ as glossary } from "./models/glossary.data"

pv.logDebugMessage(`REENABLE GLOSSARY GENERATION`)

export const $: pt.Array<gliana2glossary.T.GenerateData<pd.SourceLocation>> = pd.a([
    {
        'path': `../../pareto/src/data/submodules/glossary/glossary.generated.ts`,
        'data': {
            'settings': {
                'datamodel': [true, {
                    'annotations': true,
                    'properties optional': false,
                    'reference mapping': ['string', null],
                }],
                'visitor interface': [false],
                'algorithms': {
                    'serialize': [false],
                },
            },
            'mappedModel': {
                'model': glossary,

                'stringmapping': pd.d({
                    "identifier": ['string', null]
                }),
            },
        }
    },
    // {
    //     'path': `../../pareto/src/data/submodules/glossary_serialize`,
    //     'data': {
    //         'configuration': {
    //             'datamodel': [false],
    //             'visitor interface': [false],
    //             'algorithms': {
    //                 'serialize': [true, null],
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