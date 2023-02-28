import * as pd from 'pareto-core-data'

import * as gproject from "lib-pareto-typescript-project/dist/submodules/project"

import { $ as api } from "./api.data"
import { $ as algorithm } from "./modules/algorithm.deprecated"
import { $ as moduleDefinition } from "./modules/moduleDefinition.deprecated"
import { $ as pareto2typescript } from "./modules/pareto2typescript.data"
import { $ as project } from "./modules/project.deprecated"

import { $ as glossary_serialize_temp } from "./modules/glossary_serialize_temp.data"
import { $ as glossary } from "./glossary/module.generated"

const d = pd.d

export const $: gproject.T.Project<pd.SourceLocation> = {
    'author': "Corno",
    'description': "A library to generate a typescript project environment for Pareto",
    'license': "TBD",


    'dependencies': d({
        "glo-pareto-common": {},
        "lib-fountain-pen": {},
        "res-pareto-collation": {},
        "res-pareto-filesystem": {},
        "res-pareto-main": {},
        "res-typescript": {},
        "res-pareto-foreach": {},
    }),
    'type': ['library', {
        'main': {
            'definition': api,
            'implementation': ['manual', {}],
        },
        'submodules': d({
            "algorithm": {
                'definition': algorithm,
                'implementation': ['manual', {}],
            },
            "glossary": glossary,
            "glossary_serialize_temp": glossary_serialize_temp,
            "moduleDefinition": {
                'definition': moduleDefinition,
                'implementation': ['manual', {}],
            },
            "project": {
                'definition': project,
                'implementation': ['manual', {}],
            },
            "pareto2typescript": {
                'definition': pareto2typescript,
                'implementation': ['manual', {}],
            },
        }),
        'executables': d({}),
        'test': {
            'dependencies': d({
                "lib-fountain-pen": {},
                "res-typescript": {},

            }),
            'glossary': {
                'functions': d({}),
                'imports': d({}),
                'parameters': d({}),
                'types': d({}),
                'interfaces': d({}),
            },
        },

    }],
}