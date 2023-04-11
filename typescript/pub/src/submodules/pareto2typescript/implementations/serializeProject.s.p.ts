import * as pl from 'pareto-core-lib'
import * as pd from 'pareto-core-dev'
import * as pt from 'pareto-core-types'

import * as g_fp from "lib-fountain-pen"
import * as g_project from "../../project"

import { A, D } from "../api.generated"

export const $$: A.serializeProject = <GAnnotation>($d: D.serializeProject<GAnnotation>) => {
    return ($: g_project.T.Project<GAnnotation>, $i: g_fp.SYNC.I.Directory) => {
        function doOptional<T>(
            $: pt.OptionalValue<T>,
            $i: g_fp.SYNC.I.Line,
            $c: {
                onSet: ($: T, $i: g_fp.SYNC.I.Line) => void,
                onNotset: ($: null, $i: g_fp.SYNC.I.Line) => void,
            },
        ) {
            if ($[0] === true) {
                $c.onSet($[1], $i)
            } else {
                $c.onNotset(null, $i)
            }
        }

        function generateAPI(
            $p: g_project.T.ModuleDefinition.api.root<GAnnotation>,
            $i: g_fp.SYNC.I.Directory,
            $c: {
                'extension': ($: g_project.T.ModuleDefinition.api.root.algorithms.D<GAnnotation>) => string
            }
        ) {

            $i.file("implementation.generated.ts", ($i) => {
                $i.line(`import { API } from "./api.generated"`)
                $d.dictionaryForEach($p.algorithms, ($) => {
                    $i.line(`import { $$ as ${$d.createIdentifier(`i${$.key}`)} } from "./implementations/${$.key}.${$c.extension($.value)}"`)
                })
                $i.line(``)
                $i.nestedLine(($i) => {
                    $i.snippet(`export const $api: API = `)
                    $d.enrichedDictionaryForEach($p.algorithms, {
                        'onEmpty': () => {
                            $i.snippet(`null`)
                        },
                        'onNotEmpty': ($c) => {
                            $i.snippet(`{`)
                            $i.indent(($i) => {
                                $c(($) => {

                                    $i.nestedLine(($i) => {
                                        $i.snippet(`'${$.key}': `)
                                        $i.snippet(`${$d.createIdentifier(`i${$.key}`)}`)
                                        $i.snippet(`,`)
                                    })
                                })
                            })
                            $i.snippet(`}`)
                        }
                    })
                })
            })
        }

        function generateTemplates(
            $p: g_project.T.ModuleDefinition.api.root<GAnnotation>,
            $i: g_fp.SYNC.I.Directory,
            $c: {
                'extension': ($: g_project.T.ModuleDefinition.api.root.algorithms.D<GAnnotation>) => string
            }
        ) {
            $i.directory("implementations", ($i) => {
                $d.dictionaryForEach($p.algorithms, ($) => {
                    $i.template(`${$.key}.${$c.extension($.value)}.ts`, ($i) => {
                        $i.line(`import * as pl from 'pareto-core-lib'`)
                        $i.line(`import * as pd from 'pareto-core-dev'`)
                        $i.line(``)
                        $i.line(`import { A } from "../api.generated"`)
                        $i.line(``)
                        $i.nestedLine(($i) => {
                            const key = $.key
                            $i.snippet(`export const $$: A.${$d.createIdentifier($.key)} = (`)
                            pl.cc($.value.type, ($) => {
                                switch ($[0]) {
                                    case 'dependent':
                                        pl.ss($, ($) => {
                                            if ($['configuration data'][0] === true) {
                                                $i.snippet(`$c, `)
                                            }
                                            $d.enrichedDictionaryForEach($.dependencies, {
                                                'onEmpty': () => {

                                                },
                                                'onNotEmpty': () => {
                                                    $i.snippet(`$d, `)
                                                }
                                            })
                                            $d.enrichedDictionaryForEach($['side effects'], {
                                                'onEmpty': () => {

                                                },
                                                'onNotEmpty': () => {
                                                    $i.snippet(`$se, `)
                                                }
                                            })
                                        })
                                        break
                                    case 'independent':
                                        pl.ss($, ($) => {

                                        })
                                        break
                                    default: pl.au($[0])
                                }
                            })
                            $i.snippet(`) => {`)
                            $i.indent(($i) => {
                                $i.nestedLine(($i) => {
                                    $i.snippet(`return `)
                                    pl.cc($.value.definition.type, ($) => {
                                        switch ($[0]) {
                                            case 'asynchronous':
                                                pl.ss($, ($) => {
                                                    switch ($[0]) {
                                                        case 'constructor':
                                                            pl.ss($, ($) => {
                                                                $i.snippet(`{`)
                                                                $i.indent(($i) => {
                                                                    $i.nestedLine(($i) => {
                                                                        $i.snippet(`'construct': ($is) => {`)
                                                                        $i.indent(($i) => {
                                                                            $i.nestedLine(($i) => {
                                                                                $i.snippet(`pd.implementMe(\`IMPLEMENT ${key}\`)`)
                                                                            })
                                                                        })
                                                                        $i.snippet(`}`)
                                                                    })
                                                                })
                                                                $i.snippet(`}`)
                                                            })
                                                            break
                                                        case 'function':
                                                            pl.ss($, ($) => {
                                                                $i.snippet(`($) => {`)
                                                                $i.indent(($i) => {
                                                                    $i.nestedLine(($i) => {
                                                                        $i.snippet(`return pd.implementMe(\`IMPLEMENT ${key}\`)`)
                                                                    })
                                                                })
                                                                $i.snippet(`}`)

                                                            })
                                                            break
                                                        case 'resource':
                                                            pl.ss($, ($) => {
                                                                $i.snippet(`() => {`)
                                                                $i.indent(($i) => {
                                                                    $i.nestedLine(($i) => {
                                                                        $i.snippet(`return pd.implementMe(\`IMPLEMENT ${key}\`)`)
                                                                    })
                                                                })
                                                                $i.snippet(`}`)

                                                            })
                                                            break
                                                        default: pl.au($[0])
                                                    }
                                                })
                                                break
                                            case 'synchronous':
                                                pl.ss($, ($) => {
                                                    switch ($[0]) {
                                                        case 'function':
                                                            pl.ss($, ($) => {
                                                                $i.snippet(`($) => {`)
                                                                $i.indent(($i) => {
                                                                    $i.nestedLine(($i) => {
                                                                        $i.snippet(`return pd.implementMe(\`IMPLEMENT ${key}\`)`)
                                                                    })
                                                                })
                                                                $i.snippet(`}`)

                                                            })
                                                            break
                                                        case 'procedure':
                                                            pl.ss($, ($) => {
                                                                $i.snippet(`($) => {`)
                                                                $i.indent(($i) => {
                                                                    $i.nestedLine(($i) => {
                                                                        $i.snippet(`pd.implementMe(\`IMPLEMENT ${key}\`)`)
                                                                    })
                                                                })
                                                                $i.snippet(`}`)

                                                            })
                                                            break
                                                        default: pl.au($[0])
                                                    }
                                                })
                                                break
                                            default: pl.au($[0])
                                        }
                                    })
                                })
                            })
                            $i.snippet(`}`)
                        })
                    })
                })
            })

        }
        function serializeAlgorithmTypeReference($: g_project.T.AlgorithmTypeReference<GAnnotation>, $i: g_fp.SYNC.I.Line) {

            $i.snippet(`g_${$.context.glossary}.`)
            switch ($.type[0]) {
                case 'asynchronous':
                    pl.ss($.type, ($) => {
                        switch ($[0]) {
                            case 'constructor':
                                pl.ss($, ($) => {
                                    $i.snippet(`ASYNC.A.C.${$d.createIdentifier(`${$.constructor}`)}`)
                                })
                                break
                            case 'function':
                                pl.ss($, ($) => {
                                    $i.snippet(`ASYNC.A.F.${$d.createIdentifier(`${$.function}`)}`)
                                })
                                break
                            case 'resource':
                                pl.ss($, ($) => {
                                    $i.snippet(`ASYNC.A.R.${$d.createIdentifier(`${$.resource}`)}`)
                                })
                                break
                            default: pl.au($[0])
                        }
                    })
                    break
                case 'synchronous':
                    pl.ss($.type, ($) => {
                        switch ($[0]) {
                            case 'procedure':
                                pl.ss($, ($) => {
                                    $i.snippet(`SYNC.A.P.${$d.createIdentifier(`${$.procedure}`)}`)
                                })
                                break
                            case 'function':
                                pl.ss($, ($) => {
                                    $i.snippet(`SYNC.A.F.${$d.createIdentifier(`${$.function}`)}`)
                                })
                                break
                            default: pl.au($[0])
                        }
                    })
                    break
                default: pl.au($.type[0])
            }
            $d.enrichedDictionaryForEach($.context.arguments, {
                'onEmpty': () => {
                },
                'onNotEmpty': ($c) => {
                    $i.snippet(`<`)
                    $c(($) => {
                        //FIXME This is a raw value
                        $i.snippet(`${$.value}${$.isLast ? `` : `, `}`)
                    })
                    $i.snippet(`>`)
                }
            })
        }

        // function serializeDefinitionReference2(
        //     $: {
        //         'def': g_project.T.DefinitionReference<Annotation>,
        //         'wrapBuilder': boolean
        //     },
        //     $i: g_fp.SYNC.I.Line
        // ) {
        //     const wrapped = $.wrapBuilder
        //     pl.cc($.def, ($) => {
        //         const context = $.context
        //         function seralizeArguments(
        //             $i: g_fp.SYNC.I.Line,
        //         ) {

        //         }
        //         switch ($.type[0]) {
        //             case 'builder':
        //                 pl.ss($.type, ($) => {
        //                     if (wrapped) {
        //                         $i.snippet(`($c: g_${context.glossary}.C.${$d.createIdentifier(`${$.builder}`)}`)
        //                         seralizeArguments($i)
        //                         $i.snippet(`) => void`)

        //                     } else {
        //                         $i.snippet(`g_${context.glossary}.`)
        //                         $i.snippet(`B.${$d.createIdentifier(`${$.builder}`)}`)
        //                         seralizeArguments($i)
        //                     }

        //                 })
        //                 break
        //             case 'function':
        //                 pl.ss($.type, ($) => {
        //                     $i.snippet(`g_${context.glossary}.`)
        //                     $i.snippet(`F.${$d.createIdentifier(`${$.function}`)}`)
        //                     seralizeArguments($i)
        //                 })
        //                 break
        //             case 'interface':
        //                 pl.ss($.type, ($) => {
        //                     $i.snippet(`g_${context.glossary}.`)
        //                     $i.snippet(`I.${$d.createIdentifier(`${$.interface}`)}`)
        //                     seralizeArguments($i)
        //                 })
        //                 break
        //             case 'resource':
        //                 pl.ss($.type, ($) => {
        //                     $i.snippet(`g_${context.glossary}.`)
        //                     $i.snippet(`R.${$d.createIdentifier(`${$.resource}`)}`)
        //                     seralizeArguments($i)
        //                 })
        //                 break
        //             default: pl.au($.type[0])
        //         }

        //     })
        // }
        // function serializeNonWrappedDefinitionReference($: g_project.T.DefinitionReference<Annotation>, $i: g_fp.SYNC.I.Line) {
        //     serializeDefinitionReference2(
        //         {
        //             'def': $,
        //             'wrapBuilder': false,
        //         },
        //         $i,
        //     )
        // }
        // function serializeWrappedDefinitionReference($: g_project.T.DefinitionReference<Annotation>, $i: g_fp.SYNC.I.Line) {
        //     serializeDefinitionReference2(
        //         {
        //             'def': $,
        //             'wrapBuilder': true,
        //         },
        //         $i,
        //     )
        // }
        $i.allowedManual(`tmp`)
        $i.directory("typescript", ($i) => {
            function doModuleDefinition(
                $: {
                    definition: g_project.T.ModuleDefinition<GAnnotation>,
                    pathPrefix: string
                },
                $i: g_fp.SYNC.I.Directory,
            ) {
                const pathPrefix = $.pathPrefix
                $i.allowedManual(`shorthands.ts`)
                $i.directory(`glossary`, ($i) => {
                    pl.cc($.definition.glossary, ($) => {

                        $d.serializeGlossary(
                            {
                                'glossary': $.root,
                                'imports': $.imports.map(($) => {
                                    switch ($[0]) {
                                        case 'external': return pl.ss($, ($) => $)
                                        case 'main': return pl.ss($, ($) => `${pathPrefix}../../main`)
                                        case 'sibling': return pl.ss($, ($) => `../../${$}`)
                                        case 'temp submodule': return pl.ss($, ($) => `../../submodules/${$}`)
                                        default: return pl.au($[0])
                                    }
                                }),
                            },
                            $i
                        )
                    })
                })

                $i.file("api.generated.ts", ($i) => {
                    pl.cc($.definition.api, ($) => {
                        function serializeAPI(
                            $: {

                                readonly 'api': g_project.T.ModuleDefinition.api.root<GAnnotation>
                                readonly 'imports': pt.Dictionary<string>
                            },
                            $i: g_fp.SYNC.I.Block
                        ) {
                            $i.line(`import * as pt from 'pareto-core-types'`)
                            $i.line(``)
                            $d.dictionaryForEach($.imports, ($) => {
                                $i.nestedLine(($i) => {
                                    $i.snippet(`import * as g_${$.key} from "${$.value}"`)
                                })
                            })
                            $i.line(``)
                            pl.cc($.api, ($) => {
                                $i.nestedLine(($i) => {
                                    $i.snippet(`export namespace D {`)
                                    $i.indent(($i) => {
                                        $d.dictionaryForEach($.algorithms, ($) => {
                                            const key = $.key
                                            const parameters = $.value.parameters
                                            $i.line(``)
                                            pl.cc($.value, ($) => {
                                                switch ($.type[0]) {
                                                    case 'dependent':
                                                        pl.ss($.type, ($) => {
                                                            $d.enrichedDictionaryForEach($.dependencies, {
                                                                'onEmpty': () => { },
                                                                'onNotEmpty': ($c) => {
                                                                    $i.nestedLine(($i) => {
                                                                        $i.snippet(`export type ${$d.createIdentifier(key)}`)
                                                                        $d.enrichedDictionaryForEach(parameters, {
                                                                            'onEmpty': () => {

                                                                            },
                                                                            'onNotEmpty': ($c) => {
                                                                                $i.snippet(`<`)
                                                                                $c(($) => {
                                                                                    $i.snippet(`G${$d.createIdentifier($.key)}${$.isLast ? `` : `, `}`)
                                                                                })
                                                                                $i.snippet(`>`)
                                                                            }
                                                                        })
                                                                        $i.snippet(` = `)
                                                                        $i.snippet(`{`)
                                                                        $i.indent(($i) => {

                                                                            $c(($) => {

                                                                                $i.nestedLine(($i) => {
                                                                                    $i.snippet(`readonly '${$.key}': `)
                                                                                    serializeAlgorithmTypeReference($.value, $i)
                                                                                })
                                                                            })
                                                                        })
                                                                        $i.snippet(`}`)
                                                                    })
                                                                }
                                                            })
                                                        })
                                                        break
                                                    case 'independent':
                                                        pl.ss($.type, ($) => {
                                                        })
                                                        break
                                                    default: pl.au($.type[0])
                                                }
                                            })
                                        })
                                    })
                                    $i.snippet(`}`)
                                })
                                $i.line(``)
                                $i.nestedLine(($i) => {
                                    $i.snippet(`export namespace A {`)
                                    $i.indent(($i) => {
                                        $d.dictionaryForEach($.algorithms, ($) => {
                                            const key = $.key
                                            $i.line(``)
                                            $i.nestedLine(($i) => {
                                                $i.snippet(`export type ${$d.createIdentifier($.key)} = `)
                                                pl.cc($.value, ($) => {
                                                    function doParameters($i: g_fp.SYNC.I.Line) {
                                                        $d.enrichedDictionaryForEach($.parameters, {
                                                            'onEmpty': () => {

                                                            },
                                                            'onNotEmpty': ($c) => {
                                                                $i.snippet(`<`)
                                                                $c(($) => {
                                                                    $i.snippet(`G${$d.createIdentifier($.key)}${$.isLast ? `` : `, `}`)
                                                                })
                                                                $i.snippet(`>`)
                                                            }
                                                        })
                                                    }
                                                    doParameters($i)
                                                    $i.snippet(`(`)
                                                    switch ($.type[0]) {
                                                        case 'dependent':
                                                            pl.ss($.type, ($) => {
                                                                doOptional($['configuration data'], $i, {
                                                                    onNotset: () => { },
                                                                    onSet: ($, $i) => {

                                                                        $i.snippet(`$: `)

                                                                        $i.snippet(`g_${$.context.glossary}.`)

                                                                        $i.snippet(`T.${$d.createIdentifier($.type)}`)
                                                                        $i.snippet(`, `)
                                                                    }
                                                                })
                                                                $d.enrichedDictionaryForEach($.dependencies, {
                                                                    'onEmpty': () => { },
                                                                    'onNotEmpty': ($c) => {
                                                                        $i.snippet(`$d: D.${$d.createIdentifier(key)}`)
                                                                        doParameters($i)
                                                                        $i.snippet(`, `)
                                                                    }
                                                                })
                                                                $d.enrichedDictionaryForEach($['side effects'], {
                                                                    'onEmpty': () => { },
                                                                    'onNotEmpty': ($c) => {
                                                                        $i.snippet(`$se: {`)
                                                                        $i.indent(($i) => {
                                                                            $c(($) => {
                                                                                $i.nestedLine(($i) => {
                                                                                    $i.snippet(`readonly '${$.key}': `)
                                                                                    pl.cc($.value, ($) => {
                                                                                        $i.snippet(`g_${$.context.glossary}.`)
                                                                                        switch ($.type[0]) {
                                                                                            case 'asynchronous':
                                                                                                pl.ss($.type, ($) => {
                                                                                                    $i.snippet(`ASYNC.I.${$d.createIdentifier(`${$.interface}`)}`)
                                                                                                })
                                                                                                break
                                                                                            case 'synchronous':
                                                                                                pl.ss($.type, ($) => {
                                                                                                    $i.snippet(`SYNC.I.${$d.createIdentifier(`${$.interface}`)}`)
                                                                                                })
                                                                                                break
                                                                                            default: pl.au($.type[0])
                                                                                        }

                                                                                        $d.enrichedDictionaryForEach($.context.arguments, {
                                                                                            'onEmpty': () => {

                                                                                            },
                                                                                            'onNotEmpty': ($c) => {
                                                                                                $i.snippet(`<`)
                                                                                                $c(($) => {
                                                                                                    $i.snippet(`G${$d.createIdentifier($.value)}${$.isLast ? `` : `, `}`)
                                                                                                })
                                                                                                $i.snippet(`>`)
                                                                                            }
                                                                                        })
                                                                                    })
                                                                                })
                                                                            })
                                                                        })
                                                                        $i.snippet(`}`)
                                                                    }
                                                                })
                                                            })
                                                            break
                                                        case 'independent':
                                                            pl.ss($.type, ($) => {
                                                            })
                                                            break
                                                        default: pl.au($.type[0])
                                                    }
                                                    $i.snippet(`) => `)
                                                    pl.cc($.definition, ($) => {
                                                        serializeAlgorithmTypeReference($, $i)
                                                    })
                                                    $d.enrichedDictionaryForEach($.parameters, {
                                                        'onEmpty': () => {

                                                        },
                                                        'onNotEmpty': ($c) => {
                                                            $i.snippet(`<`)
                                                            $c(($) => {
                                                                $i.snippet(`G${$d.createIdentifier($.key)}${$.isLast ? `` : `, `}`)
                                                            })
                                                            $i.snippet(`>`)
                                                        }
                                                    })
                                                })
                                            })
                                        })
                                    })
                                    $i.snippet(`}`)
                                })
                                $i.line(``)
                                $i.nestedLine(($i) => {
                                    $i.snippet(`export type API = `)
                                    $d.enrichedDictionaryForEach($.algorithms, {
                                        'onEmpty': () => {
                                            //typescript treats an empty object very lax therefor I make it a null
                                            $i.snippet(`null`)
                                        },
                                        'onNotEmpty': ($c) => {
                                            $i.snippet(`{`)
                                            $i.indent(($i) => {
                                                $c(($) => {

                                                    $i.nestedLine(($i) => {
                                                        $i.snippet(`readonly '${$.key}': `)
                                                        $i.snippet(`A.${$d.createIdentifier($.key)}`)
                                                    })
                                                })
                                            })
                                            $i.snippet(`}`)
                                        }
                                    })
                                })
                            })
                        }
                        serializeAPI({
                            'api': $.root,
                            'imports': $.imports.map(($) => {
                                switch ($[0]) {
                                    case 'external': return pl.ss($, ($) => $)
                                    case 'main': return pl.ss($, ($) => `${pathPrefix}../main`)
                                    case 'sibling': return pl.ss($, ($) => `../${$}`)
                                    case 'submodule': return pl.ss($, ($) => `../submodules/${$}`)
                                    case 'this': return pl.ss($, ($) => `./glossary`)
                                    default: return pl.au($[0])
                                }
                            }),
                        }, $i)
                    })

                })
            }
            function tsConfig(
                $: {
                    isResource: boolean,
                    inlineSourceMap: boolean,
                },
                $i: g_fp.SYNC.I.Directory
            ) {
                $i.file("tsconfig.json", ($i) => {
                    $i.nestedLine(($i) => {
                        $i.snippet(`{`)
                        $i.indent(($i) => {
                            $i.nestedLine(($i) => {
                                $i.snippet(`"compilerOptions": {`)
                                $i.indent(($i) => {
                                    if (!$.isResource) { $i.line(`"noLib": true,`) }
                                    $i.line(`"target": "ES2015",`)
                                    $i.line(`"module": "commonjs",`)
                                    $i.line(`"declaration": true,`)
                                    $i.line(`"outDir": "./dist",`)
                                    $i.line(`"rootDir": "./src",`)
                                    $i.line(`"strict": true,`)
                                    $i.line(`"esModuleInterop": true,`)
                                    if ($.inlineSourceMap) { $i.line(`"inlineSourceMap": true,`) }
                                    $i.line(`"forceConsistentCasingInFileNames": true`)
                                })
                                $i.snippet(`},`)
                            })
                            $i.line(`"include": [`)
                            $i.line(`  "./src"`)
                            $i.line(`]`)
                        })
                        $i.snippet(`}`)
                    })
                })
            }
            function globals($i: g_fp.SYNC.I.Directory) {
                $i.file("globals.generated.ts", ($i) => {
                    $i.line(`interface Array<T> {`)
                    $i.line(`    [n: number]: T`)
                    $i.line(`}`)
                    $i.line(`interface Boolean { }`)
                    $i.line(`interface CallableFunction { }`)
                    $i.line(`interface Function { }`)
                    $i.line(`interface IArguments { }`)
                    $i.line(`interface NewableFunction { }`)
                    $i.line(`interface Number { }`)
                    $i.line(`interface Object { }`)
                    $i.line(`interface RegExp { }`)
                    $i.line(`interface String { }`)
                    $i.line(``)
                })
            }
            $i.directory("pub", ($i) => {
                $i.allowedGenerated("dist")
                $i.allowedGenerated("node_modules")
                $i.allowedGenerated("package-lock.json")
                $i.file("package.json", ($i) => {
                    $i.line(`{`)
                    $i.line(`  "author": "${$.author}",`)
                    $i.line(`  "license": "${$.license}",`)
                    $i.line(`  "description": "${$.description}",`)
                    $i.line(``)
                    $i.line(`  "dependencies": {`)
                    $d.dictionaryForEach($.dependencies, ($) => {
                        $i.line(`    "${$.key}": "^0.0.0",`)
                    })
                    switch ($.type[0]) {
                        case 'glossary':
                            pl.ss($.type, ($) => {
                                $i.line(`    "pareto-core-types": "^0.0.0"`)
                            })
                            break
                        case 'library':
                            pl.ss($.type, ($) => {
                                $d.enrichedDictionaryForEach($.executables, {
                                    onEmpty: () => {
                                    },
                                    onNotEmpty: ($c) => {
                                        $i.line(`    "pareto-core-exe": "^0.0.0",`)
                                    }
                                })
                                $i.line(`    "pareto-core-async": "^0.0.0",`)
                                $i.line(`    "pareto-core-dev": "^0.0.0",`)
                                $i.line(`    "pareto-core-data": "^0.0.0",`)
                                $i.line(`    "pareto-core-map": "^0.0.0",`)
                                $i.line(`    "pareto-core-lib": "^0.0.0",`)
                                $i.line(`    "pareto-core-state": "^0.0.0"`)
                            })
                            break
                        case 'resource':
                            pl.ss($.type, ($) => {
                                $d.dictionaryForEach($.temp.nativeDependencies, ($) => {
                                    $i.line(`    "${$.key}": "^0.0.0",`)
                                })
                                $i.line(`    "pareto-core-internals": "^0.0.0"`)
                            })
                            break
                        default: pl.au($.type[0])
                    }
                    $i.line(`  },`)
                    switch ($.type[0]) {
                        case 'glossary':
                            pl.ss($.type, ($) => {

                            })
                            break
                        case 'library':
                            pl.ss($.type, ($) => {
                                $d.enrichedDictionaryForEach($.executables, {
                                    onEmpty: () => {

                                    },
                                    onNotEmpty: ($c) => {
                                        $i.line(`  "bin": {`)
                                        $c(($) => {
                                            $i.line(`    "${$.key}": "dist/bin/${$.key}.js"${$.isLast ? `` : `,`}`)
                                        })
                                        $i.line(`  },`)
                                    }
                                })

                            })
                            break
                        case 'resource':
                            pl.ss($.type, ($) => {
                                $d.enrichedDictionaryForEach($.temp.devDependencies, {
                                    onEmpty: () => {

                                    },
                                    onNotEmpty: ($c) => {
                                        $i.line(`  "devDependencies": {`)
                                        $c(($) => {
                                            $i.line(`    "${$.key}": "^0.0.0"${$.isLast ? `` : `,`}`)
                                        })
                                        $i.line(`  },`)
                                    }
                                })

                            })
                            break
                        default: pl.au($.type[0])
                    }
                    $i.line(`  "files": [`)
                    $i.line(`    "dist"`)
                    $i.line(`  ],`)
                    $i.line(`  "repository": {`)
                    $i.line(`    "type": "git"`)
                    $i.line(`  },`)
                    $i.line(`  "main": "dist/index.js",`)
                    $i.line(`  "types": "dist/index.d.ts"`)
                    $i.line(`}`)
                    $i.line(``)
                })
                $i.directory("src", ($i) => {
                    switch ($.type[0]) {
                        case 'glossary':
                            pl.ss($.type, ($) => {
                                globals($i)
                                $d.serializeGlossary(
                                    {
                                        'glossary': $.root,
                                        'imports': $.imports.map(($) => {
                                            switch ($[0]) {
                                                case 'external': return pl.ss($, ($) => `${$}`)
                                                default: return pl.au($[0])
                                            }
                                        }),
                                    },
                                    $i
                                )
                            })
                            break
                        case 'library':
                            pl.ss($.type, ($) => {
                                function doModule(
                                    $: {
                                        'module': g_project.T.Module<GAnnotation>,
                                        'pathPrefix': string,
                                    },
                                    $i: g_fp.SYNC.I.Directory,
                                ) {
                                    doModuleDefinition(
                                        {
                                            'definition': $.module.definition,
                                            'pathPrefix': $.pathPrefix,
                                        },
                                        $i
                                    )
                                    const api = $.module.definition.api.root
                                    function getExtension($: g_project.T.AlgorithmTypeReference<GAnnotation>): string {
                                        switch ($.type[0]) {
                                            case 'asynchronous': return pl.ss($.type, ($) => {
                                                switch ($[0]) {
                                                    case 'constructor': return pl.ss($, ($) => "a.c")
                                                    case 'function': return pl.ss($, ($) => "a.f")
                                                    case 'resource': return pl.ss($, ($) => "a.r")
                                                    default: return pl.au($[0])
                                                }
                                            })
                                            case 'synchronous': return pl.ss($.type, ($) => {
                                                switch ($[0]) {
                                                    case 'procedure': return pl.ss($, ($) => "s.p")
                                                    case 'function': return pl.ss($, ($) => "s.f")
                                                    default: return pl.au($[0])
                                                }
                                            })
                                            default: return pl.au($.type[0])
                                        }
                                    }
                                    const imp = $.module.implementation
                                    pl.cc($.module.implementation, ($) => {
                                        switch ($[0]) {
                                            case 'pareto':
                                                pl.ss($, ($) => {
                                                    pd.implementMe("IMPLEMENTATIONS")
                                                    //$d.serializeImplementation($, $i)
                                                })
                                                break
                                            case 'typescript':
                                                pl.ss($, ($) => {
                                                    generateTemplates(
                                                        api,
                                                        $i,
                                                        {
                                                            'extension': ($) => getExtension($.definition)
                                                        }
                                                    )
                                                })
                                                break
                                            default: pl.au($[0])
                                        }
                                    })
                                    generateAPI(
                                        api,
                                        $i,
                                        {
                                            'extension': ($) => pl.cc($, ($) => {
                                                const ext = getExtension($.definition)
                                                switch (imp[0]) {
                                                    case 'typescript': return pl.ss(imp, ($) => ext)
                                                    case 'pareto': return pl.ss(imp, ($) => `generated`)
                                                    default: return pl.au(imp[0])
                                                }
                                            })
                                        }
                                    )
                                    $i.file("index.ts", ($i) => {
                                        $i.line(`export * from "./glossary"`)
                                        $i.line(`export { $api as $a } from "./implementation.generated"`)
                                    })
                                }
                                globals($i)
                                $d.enrichedDictionaryForEach($.executables, {
                                    'onEmpty': () => {

                                    },
                                    'onNotEmpty': ($c) => {
                                        $i.directory("bin", ($i) => {
                                            $c(($) => {
                                                $i.file(`${$.key}.generated.ts`, ($i) => {
                                                    $i.line(`#!/usr/bin/env node`)
                                                    $i.line(``)
                                                    $i.line(`import * as pe from 'pareto-core-exe'`)
                                                    $i.line(``)
                                                    $i.line(`import * as a_bindings from "../bindings/implementation.generated"`)
                                                    $i.line(``)
                                                    $i.line(`pe.runProgram(a_bindings.$api.${$d.createIdentifier($.value.constructor)}()())`)
                                                })
                                            })
                                        })
                                    }
                                })
                                $i.directory("main", ($i) => {
                                    pl.cc($.main, ($) => {
                                        doModule(
                                            {
                                                'module': $,
                                                'pathPrefix': "",
                                            },
                                            $i,
                                        )
                                    })
                                })
                                $i.directory("submodules", ($i) => {
                                    $d.dictionaryForEach($.submodules, ($) => {
                                        $i.directory(`${$.key}`, ($i) => {
                                            pl.cc($.value, ($) => {
                                                doModule(
                                                    {
                                                        'module': $,
                                                        'pathPrefix': "../",
                                                    },
                                                    $i,
                                                )
                                            })
                                        })
                                    })
                                })

                                pl.optional(
                                    $.bindings,
                                    ($) => {
                                        $i.directory("bindings", ($i) => {
                                            doModuleDefinition(
                                                {
                                                    'definition': $.definition,
                                                    'pathPrefix': "",
                                                },
                                                $i
                                            )
                                            const api = $.definition.api
                                            const imp = $.implementation
                                            switch ($.implementation[0]) {
                                                case 'pareto':
                                                    pl.ss($.implementation, ($) => {
                                                        pd.implementMe("IMPLEMENTATIONS")
                                                        //$d.serializeImplementation($, $i)
                                                    })
                                                    break
                                                case 'typescript':
                                                    pl.ss($.implementation, ($) => {
                                                        generateTemplates(
                                                            api.root,
                                                            $i,
                                                            {
                                                                'extension': ($) => `b`
                                                            }
                                                        )
                                                    })
                                                    break
                                                default: pl.au($.implementation[0])
                                            }
                                            generateAPI(
                                                api.root,
                                                $i,
                                                {
                                                    'extension': ($) => pl.cc($, ($) => {
                                                        switch (imp[0]) {
                                                            case 'typescript': return `b`
                                                            case 'pareto': return `generated`
                                                            default: return pl.au(imp[0])
                                                        }
                                                    })
                                                }
                                            )
                                        })
                                    },
                                    () => {

                                    },
                                )
                                $i.file("index.ts", ($i) => {
                                    $i.line(`export { $a } from "./main"`)
                                    $i.line(`export * from "./main"`)
                                    pl.optional(
                                        $.bindings,
                                        () => {
                                            $i.line(`export { $api as $b } from "./bindings/implementation.generated"`)
                                        },
                                        () => {

                                        },
                                    )
                                })
                            })
                            break
                        case 'resource':
                            pl.ss($.type, ($) => {
                                doModuleDefinition(
                                    {
                                        'definition': $.definition,
                                        'pathPrefix': "",
                                    },
                                    $i
                                )
                                generateTemplates(
                                    $.definition.api.root,
                                    $i,
                                    {
                                        'extension': ($) => `native`
                                    }
                                )
                                generateAPI(
                                    $.definition.api.root,
                                    $i,
                                    {
                                        'extension': ($) => `native`
                                    }
                                )
                                $i.allowedManual("native")
                                $i.file("index.ts", ($i) => {
                                    $i.line(`export * from "./api.generated"`)
                                    $i.line(`export * from "./glossary"`)
                                    $i.line(`export { $api as $r } from "./implementation.generated"`)
                                })
                            })
                            break
                        default: pl.au($.type[0])
                    }
                })
                tsConfig(
                    {
                        'isResource': $.type !== undefined && $.type[0] === 'resource',
                        'inlineSourceMap': false,
                    },
                    $i
                )
            })
            function doTest($: g_project.T.Test<GAnnotation>, $i: g_fp.SYNC.I.Directory) {

                $i.directory("test", ($i) => {
                    $i.allowedManual("data")
                    $i.allowedGenerated("dist")
                    $i.allowedGenerated("node_modules")
                    $i.allowedGenerated("package-lock.json")
                    $i.file("package.json", ($i) => {
                        $i.line(`{`)
                        $i.line(`  "dependencies": {`)
                        $d.dictionaryForEach($.dependencies, ($) => {
                            $i.line(`    "${$.key}": "^0.0.0",`)
                        })
                        $i.line(`    "lib-pareto-test": "^0.0.0",`)
                        $i.line(`    "pareto-core-exe": "^0.0.0",`)
                        $i.line(`    "pareto-core-map": "^0.0.0",`)
                        $i.line(`    "pareto-core-async": "^0.0.0",`)
                        $i.line(`    "pareto-core-dev": "^0.0.0",`)
                        $i.line(`    "pareto-core-lib": "^0.0.0",`)
                        $i.line(`    "pareto-core-data": "^0.0.0",`)
                        $i.line(`    "pareto-core-state": "^0.0.0",`)
                        $i.line(`    "res-pareto-main": "^0.0.0"`)
                        $i.line(`  }`)
                        $i.line(`}`)
                        $i.line(``)
                    })
                    $i.directory("src", ($i) => {
                        globals($i)
                        $i.directory("bin", ($i) => {
                            $i.file("test.generated.ts", ($i) => {
                                $i.line(`import * as pe from 'pareto-core-exe'`)
                                $i.line(``)
                                $i.line(`import * as g_main from "../modules/main"`)
                                $i.line(``)
                                $i.line(`pe.runProgram(g_main.$a.main)`)
                            })
                        })
                        $i.allowedManual("data")
                        $i.directory("modules", ($i) => {
                            $i.directory("main", ($i) => {
                                $i.file("api.generated.ts", ($i) => {
                                    $i.line(`import * as pt from 'pareto-core-types'`)
                                    $i.line(``)
                                    $i.line(`import * as g_main from "res-pareto-main"`)
                                    $i.line(`import * as g_test from "lib-pareto-test"`)
                                    $i.line(``)
                                    $i.line(`export namespace A {`)
                                    $i.line(``)
                                    $i.line(`    export type getTestSet = g_test.ASYNC.A.F.GetTestSet`)
                                    $i.line(`    export type main = ($: g_main.T.MainData) => void`)
                                    $i.line(``)
                                    $i.line(`}`)
                                    $i.line(``)
                                    $i.line(`export type API = {`)
                                    $i.line(`    'getTestSet': g_test.ASYNC.A.F.GetTestSet`)
                                    $i.line(`    'main': A.main`)
                                    $i.line(`}`)
                                })
                                $i.directory("implementations", ($i) => {
                                    $i.template("getTestSet.a.f.ts", ($i) => {
                                        $i.line(`import * as pm from 'pareto-core-map'`)
                                        $i.line(`import * as pa from 'pareto-core-async'`)
                                        $i.line(`import * as pd from 'pareto-core-dev'`)
                                        $i.line(``)
                                        $i.line(`import * as g_pub from "../../../../../pub"`)
                                        $i.line(``)
                                        $i.line(`import { A } from "../api.generated"`)
                                        $i.line(``)
                                        $i.line(`export const $$: A.getTestSet = ($) => {`)
                                        $i.line(`    pd.implementMe("IMPLEMENT A TESTSET")`)
                                        $i.line(`    return pa.asyncValue({`)
                                        $i.line(`        elements: pm.wrapRawDictionary({})`)
                                        $i.line(`    })`)
                                        $i.line(`}`)
                                    })
                                    $i.file("main.generated.ts", ($i) => {
                                        $i.line(`import * as pl from 'pareto-core-lib'`)
                                        $i.line(`import * as pv from 'pareto-core-dev'`)
                                        $i.line(``)
                                        $i.line(`import * as g_main from "res-pareto-main"`)
                                        $i.line(`import * as g_test from "lib-pareto-test"`)
                                        $i.line(``)
                                        $i.line(`import { $$ as getTestSet } from "./getTestSet.a.f"`)
                                        $i.line(``)
                                        $i.line(`import { A } from "../api.generated"`)
                                        $i.line(``)
                                        $i.line(`export const $$: A.main = ($) => {`)
                                        $i.line(`    g_test.$b.createTestProgram({`)
                                        $i.line(`        'getTestSet': getTestSet,`)
                                        $i.line(`    })()($)`)
                                        $i.line(`}`)
                                    })
                                })
                                $i.file("export.generated.ts", ($i) => {
                                    $i.line(`import { API } from "./api.generated"`)
                                    $i.line(``)
                                    $i.line(`import { $$ as imain } from "./implementations/main.generated"`)
                                    $i.line(`import { $$ as igetTestSet } from "./implementations/getTestSet.a.f"`)
                                    $i.line(``)
                                    $i.line(`export const $a: API = {`)
                                    $i.line(`    'main': imain,`)
                                    $i.line(`    'getTestSet': igetTestSet,`)
                                    $i.line(`}`)
                                })
                                $i.file("index.ts", ($i) => {
                                    $i.line(`export * from "./api.generated"`)
                                    $i.line(`export * from "./export.generated"`)
                                })
                            })
                        })
                        doModuleDefinition(
                            {
                                'definition': $.definition,
                                'pathPrefix': "../../../pub", //????
                            },
                            $i
                        )

                        // $i.file("testXXXXX.generated.ts", ($i) => {
                        //     $i.line(`import * as pt from 'pareto-core-types'`)
                        //     $i.line(`import * as pd from 'pareto-core-data'`)
                        //     $i.line(`import * as pl from 'pareto-core-lib'`)
                        //     $i.line(``)
                        //     $i.line(`import * as gtst from "lib-pareto-test"`)
                        //     $i.line(``)
                        //     $d.dictionaryForEach($.modules, ($, key) => {
                        //         const moduleName = key
                        //         $d.dictionaryForEach($.definition.api.algorithms, ($, key) => {
                        //             $i.nestedLine(($i) => {
                        //                 $i.snippet(`import { test as ${moduleName}_${key} } from "../modules/${moduleName}/${key}.generated"`)
                        //             })
                        //         })
                        //     })
                        //     $i.line(``)
                        //     $i.nestedLine(($i) => {
                        //         $i.snippet(`const x = pd.wrapRawDictionary<pt.Dictionary<() => pt.AsyncValue<tst.TTestElement>>>({`)
                        //         $i.indent(($i) => {
                        //             $d.dictionaryForEach($.modules, ($, key) => {
                        //                 const moduleName = key
                        //                 $i.nestedLine(($i) => {
                        //                     $i.snippet(`'${key}': pd.wrapRawDictionary({`)
                        //                     $i.indent(($i) => {
                        //                         $d.dictionaryForEach($.definition.api.algorithms, ($, key) => {
                        //                             $i.nestedLine(($i) => {
                        //                                 $i.snippet(`'${key}': ${moduleName}_${key},`)
                        //                             })
                        //                         })
                        //                     })
                        //                     $i.snippet(`}),`)
                        //                 })
                        //             })
                        //         })
                        //         $i.snippet(`}).asyncMap(($, key) => $.asyncMap(($, key) => $()))`)
                        //     })
                        // })
                        // $i.directory("modules", ($i) => {
                        //     $d.dictionaryForEach($.modules, ($, key) => {
                        //         const moduleName = key
                        //         $i.directory(key, ($i) => {
                        //             const def = $.definition
                        //             $d.dictionaryForEach($.definition.api.algorithms, ($, key) => {
                        //                 // $i.file(`${key}_tmp.p.ts`, ($i) => {
                        //                 //     $i.line(`import * as pt from 'pareto-core-types'`)
                        //                 //     $i.line(`import * as pl from 'pareto-core-lib'`)
                        //                 //     $i.line(``)
                        //                 //     $i.line(`import * as tst from "lib-pareto-test"`)
                        //                 //     $i.line(``)
                        //                 //     def.api.imports.forEach(compare, ($, key) => {
                        //                 //         $i.line(`import * as g${key} from "${$}"`)
                        //                 //     })
                        //                 //     $i.nestedLine(($i) => {
                        //                 //         $i.snippet(`export type XX = `)
                        //                 //         $i.indent(($i) => {
                        //                 //             switch ($[0]) {
                        //                 //                 case 'algorithm':
                        //                 //                     pl.ss($, ($) => {
                        //                 //                     })
                        //                 //                     break
                        //                 //                 case 'constructor':
                        //                 //                     pl.ss($, ($) => {
                        //                 //                         $d.dictionaryForEach($.dependencies, ($, key) => {
                        //                 //                             $i.nestedLine(($i) => {
                        //                 //                                 $i.snippet(`| [ '${key}', `)
                        //                 //                                 switch ($.type[0]) {
                        //                 //                                     case 'function':
                        //                 //                                         pl.ss($.type, ($) => {
                        //                 //                                             if ($.context !== undefined) {
                        //                 //                                                 switch ($.context[0]) {
                        //                 //                                                     case 'import':
                        //                 //                                                         pl.ss($.context, ($) => {
                        //                 //                                                         })
                        //                 //                                                         break
                        //                 //                                                     case 'local':
                        //                 //                                                         pl.ss($.context, ($) => {
                        //                 //                                                         })
                        //                 //                                                         break
                        //                 //                                                     default: pl.au($.context[0])
                        //                 //                                                 }
                        //                 //                                             } else {
                        //                 //                                             }
                        //                 //                                             $i.snippet(`string/*FIXME*/`)
                        //                 //                                         })
                        //                 //                                         break
                        //                 //                                     case 'procedure':
                        //                 //                                         pl.ss($.type, ($) => {
                        //                 //                                             $d.serializeLeafType($, $i)
                        //                 //                                         })
                        //                 //                                         break
                        //                 //                                     default: pl.au($.type[0])
                        //                 //                                 }
                        //                 //                                 $i.snippet(` ]`)
                        //                 //                             })
                        //                 //                         })
                        //                 //                     })
                        //                 //                     break
                        //                 //                 default: pl.au($[0])
                        //                 //             }
                        //                 //         })
                        //                 //         $i.snippet(`}`)
                        //                 //     })
                        //                 //     $i.line(``)
                        //                 // })
                        //                 $i.file(`${key}.generated.ts`, ($i) => {
                        //                     $i.line(`import * as pt from 'pareto-core-types'`)
                        //                     $i.line(`import * as pl from 'pareto-core-lib'`)
                        //                     $i.line(``)
                        //                     $i.line(`import * as tst from "lib-pareto-test"`)
                        //                     $i.line(``)
                        //                     $i.nestedLine(($i) => {
                        //                         $i.snippet(`export function test(): pt.AsyncValue<tst.TTestElement> {`)
                        //                         $i.indent(($i) => {
                        //                             $i.line(`pd.implementMe(\`${moduleName}:${key}\`)`)
                        //                         })
                        //                         $i.snippet(`}`)
                        //                     })
                        //                 })
                        //             })
                        //         })
                        //     })
                        // })
                    })
                    tsConfig({
                        isResource: false,
                        inlineSourceMap: true,
                    }, $i)
                })
            }
            switch ($.type[0]) {
                case 'glossary':
                    pl.ss($.type, ($) => {

                    })
                    break
                case 'library':
                    pl.ss($.type, ($) => {
                        doTest($.test, $i)
                    })
                    break
                case 'resource':
                    pl.ss($.type, ($) => {
                        doTest($.test, $i)

                    })
                    break
                default: pl.au($.type[0])
            }
        })
    }
}