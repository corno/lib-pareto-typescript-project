import * as pd from 'pareto-core-data'

import * as g_liana from "lib-liana/dist/main"

import { $ as glossary } from "./models/glossary.data"
import { $ as project } from "./models/project.data"

export const $: g_liana.T.CompileParameters<pd.SourceLocation> = {
    'outputs': pd.a([
        {
            'path': `../../pareto/src/data/submodules/glossary/glossary.generated.ts`,
            'data': {
                'settings': {
                    'annotations': true,
                    'datamodel': [true, {
                        'reference mapping': ['string', null],
                    }],
                    'visitor interface': [false],
                    'algorithms': {
                        'serialize': [false],
                    },
                },
                'mapped library': {
                    'library': glossary,

                    'terminal mapping': pd.d({
                        "identifier": ['string', null],
                        "boolean": ['boolean', null],
                    }),
                },
            }
        },
        {
            'path': `../../pareto/src/data/submodules/project/glossary.generated.ts`,
            'data': {
                'settings': {
                    'annotations': true,
                    'datamodel': [true, {
                        'reference mapping': ['string', null],
                    }],
                    'visitor interface': [false],
                    'algorithms': {
                        'serialize': [false],
                    },
                },
                'mapped library': {
                    'library': project,

                    'terminal mapping': pd.d({
                        "identifier": ['string', null],
                        "boolean": ['boolean', null],
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
}