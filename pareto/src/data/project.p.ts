import * as pr from 'pareto-core-raw'

import * as mproject from "lib-pareto-typescript-project/dist/modules/project"

import { $ as api } from "./api.p"
import { $ as algorithm } from "./modules/algorithm.p"
import { $ as glossary } from "./modules/glossary.p"
import { $ as liana } from "./modules/liana.p"
import { $ as liana_flat } from "./modules/liana_flat.p"
import { $ as liana2Pareto } from "./modules/liana2Pareto.p"
import { $ as moduleDefinition } from "./modules/moduleDefinition.p"
import { $ as pareto2typescript } from "./modules/pareto2typescript.p"
import { $ as project } from "./modules/project.p"

import { $ as glossary_test} from "../data/glo_unresolved/module.generated"

const d = pr.wrapRawDictionary

export const $: mproject.TProject = {
    'type': ['library', {}],
    'modules': d({
        "algorithm": {
            'definition': algorithm,
        },
        "glossary": {
            'definition': glossary,
        },
        "glossary_test": glossary_test,
        "liana": {
            'definition': liana,
        },
        "liana_flat": {
            'definition': liana_flat,
        },
        "liana2Pareto": {
            'definition': liana2Pareto,
        },
        "main": {
            'definition': api,
        },
        "moduleDefinition": {
            'definition': moduleDefinition,
        },
        "project": {
            'definition': project,
        },
        "pareto2typescript": {
            'definition': pareto2typescript,
        },
    }),
    'main': "main"
}