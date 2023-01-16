import * as pr from "pareto-core-raw"

import * as mproject from "lib-pareto-typescript-project/dist/modules/project"

import { api } from "./api.p"
import { $ as glossary } from "./modules/glossary.p"
import { $ as liana } from "./modules/liana.p"
import { $ as liana2Pareto } from "./modules/liana2Pareto.p"
import { $ as moduleDefinition } from "./modules/moduleDefinition.p"
import { $ as project } from "./modules/project.p"

const wd = pr.wrapRawDictionary

export const $: mproject.TProject = {
    'type': ['library', null],
    'modules': wd({
        "glossary": {
            'definition': glossary,
            'implementation': {}
        },
        "liana": {
            'definition': liana,
            'implemenation': {}
        },
        "liana2Pareto": {
            'definition': liana2Pareto,
            'implemenation': {}
        },
        "main": {
            'definition': api,
            'implementation': {}
        },
        "moduleDefinition": {
            'definition': moduleDefinition,
            'implementation': {}
        },
        "project": {
            'definition': project,
            'implemenation': {}
        },
        // "temp": {
        //     'definition': def({
        //         'glossary': {
        //             'imports': wd({}),
        //             'types': types({
        //                 "Dictionary": dictionary(str()),
        //                 "B": group({
        //                     "key": member(str()),
        //                     "value": member(str()),
        //                     "isFirst": member(bln()),
        //                 }),
        //             }),
        //             'functions': wd({}),
        //             'interfaces': wd({
        //                 "X": ['group', {
        //                     'members': wd({
        //                         "onEmpty": ['method', {
        //                             'data': ['null', null],
        //                             'interface': ['null', null],

        //                         }],
        //                         "onNotEmpty": ['method', {
        //                             'data': ['null', null],
        //                             'interface': ['set', {
        //                                 'interface': "Y"
        //                             }],
        //                         }],
        //                     })
        //                 }],
        //                 "Y": ['method', {
        //                     'data': ['null', null],
        //                     'interface': ['set', {
        //                         'interface': "Y"
        //                     }],
        //                 }],
        //             }),
        //             'callbacks': wd({
        //                 "EnrichedDictionaryForEach": {
        //                     'data': ['type', reference("Dictionary")],
        //                     'interface': "X",
        //                 },
        //             }),
        //             'pipes': wd({}),
        //         },
        //         "api": {
        //             'imports': wd({}),
        //             'algorithms': wd({})
        //         },
        //     }),
        //     'implementation': {}

        // },
    }),
    'main': "main"
}