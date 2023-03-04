import * as pd from 'pareto-core-data'

import * as gproject from "lib-pareto-typescript-project/dist/submodules/project"

import { $ as main } from "./main/module.data"
import { $ as algorithm } from "./submodules/algorithm/module.data"
import { $ as api } from "./submodules/api/module.data"
import { $ as pareto2typescript } from "./submodules/pareto2typescript/module.data"
import { $ as project } from "./submodules/project/module.data"
import { $ as glossary_serialize } from "./submodules/glossary_serialize/module.data"
import { $ as glossary } from "./submodules/glossary/module.data"

const d = pd.d

export const $: gproject.T.Project<pd.SourceLocation> = {
    'author': "Corno",
    'description': "A library to generate a typescript project environment for Pareto",
    'license': "TBD",


    'dependencies': d({
        "glo-pareto-common": null,
        "lib-fountain-pen": null,
        "res-pareto-collation": null,
        "res-pareto-dictionary": null,
        "res-pareto-filesystem": null,
        "res-pareto-main": null,
        "res-typescript": null,
        "res-pareto-foreach": null,
    }),
    'type': ['library', {
        'main': main,
        'submodules': d({
            "algorithm": algorithm,
            "glossary": glossary,
            "glossary_serialize": glossary_serialize,
            "api": api,
            "project": project,
            "pareto2typescript": pareto2typescript,
        }),
        'executables': d({}),
        'test': {
            'dependencies': d({
                "lib-fountain-pen": null,
                "res-typescript": null,
            }),
            'glossary': {
                'functions': d({}),
                'parameters': d({}),
                'types': d({}),
                'interfaces': d({}),
            },
            'imports': d({}),

        },

    }],
}