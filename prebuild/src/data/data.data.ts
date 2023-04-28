import * as pd from 'pareto-core-data'

import * as g_liana from "lib-liana/dist/main"

import { $ as d_glossary } from "./models/glossary.data"
import { $ as d_project } from "./models/project.data"
import { $ as d_lowlevel_implemenatation } from "./models/lowlevel_implementation.data"
import { $ as d_lowlevel_typesystem } from "./models/lowlevel_typesystem.data"

export const $: g_liana.T.CompileParameters<pd.SourceLocation> = {
    'outputs': pd.a([
        {
            'path': pd.a([`../../pareto/src/data/submodules/glossary/glossary.generated.ts`]),
            'data': {
                'settings': {
                    'annotations': true,
                    'datamodel': [true, {
                        'constraints mapping': {
                            'terminal values': true,
                            'constraints': [false]
                        },
                    }],
                    'visitor interface': [false],
                    'algorithms': {
                        'serialize': [false],
                    },
                },
                'mapped library': {
                    'library': d_glossary,

                    'terminal mapping': pd.d({
                        "identifier": ['string', null],
                        "boolean": ['boolean', null],
                    }),
                },
            }
        },
        {
            'path': pd.a([`../../pareto/src/data/submodules/project/glossary.generated.ts`]),
            'data': {
                'settings': {
                    'annotations': true,
                    'datamodel': [true, {
                        'constraints mapping': {
                            'terminal values': true,
                            'constraints': [false]
                        },
                    }],
                    'visitor interface': [false],
                    'algorithms': {
                        'serialize': [false],
                    },
                },
                'mapped library': {
                    'library': d_project,

                    'terminal mapping': pd.d({
                        "identifier": ['string', null],
                        "boolean": ['boolean', null],
                    }),
                },
            }
        },
        {
            'path': pd.a([`../../pareto/src/data/submodules/lowlevel_typesystem_possiblyresolved/glossary.generated.ts`]),
            'data': {
                'settings': {
                    'annotations': true,
                    'datamodel': [true, {
                        'constraints mapping': {
                            'terminal values': true,
                            'constraints': [true, ['optional', null]]
                        },
                    }],
                    'visitor interface': [false],
                    'algorithms': {
                        'serialize': [false],
                    },
                },
                'mapped library': {
                    'library': d_lowlevel_typesystem,

                    'terminal mapping': pd.d({
                        "identifier": ['string', null],
                    }),
                },
            }
        },
        {
            'path': pd.a([`../../pareto/src/data/submodules/lowlevel_typesystem/glossary.generated.ts`]),
            'data': {
                'settings': {
                    'annotations': true,
                    'datamodel': [true, {
                        'constraints mapping': {
                            'terminal values': true,
                            'constraints': [false]
                        },
                    }],
                    'visitor interface': [false],
                    'algorithms': {
                        'serialize': [false],
                    },
                },
                'mapped library': {
                    'library': d_lowlevel_typesystem,

                    'terminal mapping': pd.d({
                        "identifier": ['string', null],
                    }),
                },
            }
        },
        {
            'path': pd.a([`../../pareto/src/data/submodules/lowlevel_implementation_possiblyresolved/glossary.generated.ts`]),
            'data': {
                'settings': {
                    'annotations': true,
                    'datamodel': [true, {
                        'constraints mapping': {
                            'terminal values': true,
                            'constraints': [true, ['optional', null]]
                        },
                    }],
                    'visitor interface': [false],
                    'algorithms': {
                        'serialize': [false],
                    },
                },
                'mapped library': {
                    'library': d_lowlevel_implemenatation.model['type library'],

                    'terminal mapping': pd.d({
                        "identifier": ['string', null],
                        "numeric literal": ['string', null],
                        "string literal": ['string', null],
                    }),
                },
            }
        },
        {
            'path': pd.a([`../../pareto/src/data/submodules/lowlevel_implementation/glossary.generated.ts`]),
            'data': {
                'settings': {
                    'annotations': true,
                    'datamodel': [true, {
                        'constraints mapping': {
                            'terminal values': true,
                            'constraints': [false]
                        },
                    }],
                    'visitor interface': [false],
                    'algorithms': {
                        'serialize': [false],
                    },
                },
                'mapped library': {
                    'library': d_lowlevel_implemenatation.model['type library'],

                    'terminal mapping': pd.d({
                        "identifier": ['string', null],
                        "numeric literal": ['string', null],
                        "string literal": ['string', null],
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