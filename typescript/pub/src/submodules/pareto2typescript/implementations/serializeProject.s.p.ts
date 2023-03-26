import * as pl from 'pareto-core-lib'
import * as pd from 'pareto-core-dev'
import * as pt from 'pareto-core-types'

import * as g_fp from "lib-fountain-pen"
import * as g_this from "../glossary"
import * as g_project from "../../project"
import * as g_foreach from "res-pareto-foreach"
import * as g_ts from "res-typescript"

import { A } from "../api.generated"


export const $$: A.serializeProject = <GAnnotation>($d: {

    readonly 'createIdentifier': g_ts.SYNC.A.F.CreateIdentifier
    readonly 'serializeGlossary': g_this.SYNC.A.P.SerializeGlossary<GAnnotation>
    readonly 'serializeImplementation': g_this.SYNC.A.P.SerializeImplementation<GAnnotation>
    readonly 'enrichedForEachContextArgument': g_foreach.SYNC.A.P.EnrichedDictionaryForEach<g_project.T.Context.arguments.D<GAnnotation>>
    readonly 'enrichedForEachAlgorithm': g_foreach.SYNC.A.P.EnrichedDictionaryForEach<g_project.T.ModuleDefinition.api.root.algorithms.D<GAnnotation>>
    readonly 'forEachAlgorithm': g_foreach.SYNC.A.P.DictionaryForEach<g_project.T.ModuleDefinition.api.root.algorithms.D<GAnnotation>>
    readonly 'enrichedForEachAlgorithmParameter': g_foreach.SYNC.A.P.EnrichedDictionaryForEach<g_project.T.ModuleDefinition.api.root.algorithms.D.parameters.D<GAnnotation>>
    readonly 'enrichedForEachAlgorithmDependency': g_foreach.SYNC.A.P.EnrichedDictionaryForEach<g_project.T.ModuleDefinition.api.root.algorithms.D._ltype.dependent.dependencies.D<GAnnotation>>
    readonly 'forEachDependency': g_foreach.SYNC.A.P.DictionaryForEach<g_project.T.Project.dependencies.D<GAnnotation>>
    readonly 'forEachNativeDependency': g_foreach.SYNC.A.P.DictionaryForEach<g_project.T.Project._ltype.resource.temp.nativeDependencies.D<GAnnotation>>
    readonly 'enrichedForEachDevDependency': g_foreach.SYNC.A.P.EnrichedDictionaryForEach<g_project.T.Project._ltype.resource.temp.devDependencies.D<GAnnotation>>
    readonly 'enrichedForEachExecutable': g_foreach.SYNC.A.P.EnrichedDictionaryForEach<g_project.T.Project._ltype.library.executables.D<GAnnotation>>
    readonly 'enrichedForEachSideEffect': g_foreach.SYNC.A.P.EnrichedDictionaryForEach<g_project.T.ModuleDefinition.api.root.algorithms.D._ltype.dependent.side__effects.D<GAnnotation>>
    readonly 'forEachSubModule': g_foreach.SYNC.A.P.DictionaryForEach<g_project.T.Project._ltype.library.submodules.D<GAnnotation>>
    readonly 'forEachImport2': g_foreach.SYNC.A.P.DictionaryForEach<string>
}) => {
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

        function serializeAlgorithmTypeReference($: g_project.T.AlgorithmTypeReference<GAnnotation>, $i: g_fp.SYNC.I.Line) {

            $i.snippet(`g_${$.context.glossary}.`)
            switch ($.type[0]) {
                case 'asynchronous':
                    pl.cc($.type[1], ($) => {
                        switch ($[0]) {
                            case 'constructor':
                                pl.cc($[1], ($) => {
                                    $i.snippet(`ASYNC.A.C.${$d.createIdentifier(`${$.constructor}`)}`)
                                })
                                break
                            case 'function':
                                pl.cc($[1], ($) => {
                                    $i.snippet(`ASYNC.A.F.${$d.createIdentifier(`${$.function}`)}`)
                                })
                                break
                            default: pl.au($[0])
                        }
                    })
                    break
                case 'synchronous':
                    pl.cc($.type[1], ($) => {
                        switch ($[0]) {
                            case 'procedure':
                                pl.cc($[1], ($) => {
                                    $i.snippet(`SYNC.A.P.${$d.createIdentifier(`${$.procedure}`)}`)
                                })
                                break
                            case 'function':
                                pl.cc($[1], ($) => {
                                    $i.snippet(`SYNC.A.F.${$d.createIdentifier(`${$.function}`)}`)
                                })
                                break
                            default: pl.au($[0])
                        }
                    })
                    break
                default: pl.au($.type[0])
            }
            $d.enrichedForEachContextArgument($.context.arguments, {
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
        //                 pl.cc($.type[1], ($) => {
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
        //                 pl.cc($.type[1], ($) => {
        //                     $i.snippet(`g_${context.glossary}.`)
        //                     $i.snippet(`F.${$d.createIdentifier(`${$.function}`)}`)
        //                     seralizeArguments($i)
        //                 })
        //                 break
        //             case 'interface':
        //                 pl.cc($.type[1], ($) => {
        //                     $i.snippet(`g_${context.glossary}.`)
        //                     $i.snippet(`I.${$d.createIdentifier(`${$.interface}`)}`)
        //                     seralizeArguments($i)
        //                 })
        //                 break
        //             case 'resource':
        //                 pl.cc($.type[1], ($) => {
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
                                        case 'external':
                                            return pl.cc($[1], ($) => {
                                                return $
                                            })
                                        case 'main':
                                            return pl.cc($[1], ($) => {
                                                return `${pathPrefix}../../main`
                                            })
                                        case 'sibling':
                                            return pl.cc($[1], ($) => {
                                                return `../../${$}`
                                            })
                                        case 'temp submodule':
                                            return pl.cc($[1], ($) => {
                                                return `../../submodules/${$}`
                                            })
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

                                readonly 'api': g_project.T.ModuleDefinition.api.root<g_this.T.Annotation<GAnnotation>>
                                readonly 'imports': pt.Dictionary<string>
                            },
                            $i: g_fp.SYNC.I.Block
                        ) {
                            $i.line(`import * as pt from 'pareto-core-types'`)
                            $i.line(``)
                            $d.forEachImport2($.imports, ($) => {
                                $i.nestedLine(($i) => {
                                    $i.snippet(`import * as g_${$.key} from "${$.value}"`)
                                })
                            })
                            $i.line(``)
                            pl.cc($.api, ($) => {
                                $i.nestedLine(($i) => {
                                    $i.snippet(`export namespace A {`)
                                    $i.indent(($i) => {
                                        $d.forEachAlgorithm($.algorithms, ($) => {

                                            $i.line(``)
                                            $i.nestedLine(($i) => {
                                                $i.snippet(`export type ${$d.createIdentifier($.key)} = `)
                                                pl.cc($.value, ($) => {
                                                    $d.enrichedForEachAlgorithmParameter($.parameters, {
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
                                                    $i.snippet(`(`)
                                                    switch ($.type[0]) {
                                                        case 'dependent':
                                                            pl.cc($.type[1], ($) => {
                                                                doOptional($['configuration data'], $i, {
                                                                    onNotset: () => { },
                                                                    onSet: ($, $i) => {

                                                                        $i.snippet(`$: `)

                                                                        $i.snippet(`g_${$.context.glossary}.`)

                                                                        $i.snippet(`T.${$d.createIdentifier($.type)}`)
                                                                        $i.snippet(`, `)
                                                                    }
                                                                })
                                                                $d.enrichedForEachAlgorithmDependency($.dependencies, {
                                                                    'onEmpty': () => { },
                                                                    'onNotEmpty': ($c) => {
                                                                        $i.snippet(`$d: {`)
                                                                        $i.indent(($i) => {

                                                                            $c(($) => {

                                                                                $i.nestedLine(($i) => {
                                                                                    $i.snippet(`readonly '${$.key}': `)
                                                                                    serializeAlgorithmTypeReference($.value, $i)
                                                                                })
                                                                            })
                                                                        })
                                                                        $i.snippet(`}, `)
                                                                    }
                                                                })
                                                                $d.enrichedForEachSideEffect($['side effects'], {
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
                                                                                                pl.cc($.type[1], ($) => {
                                                                                                    $i.snippet(`ASYNC.I.${$d.createIdentifier(`${$.interface}`)}`)
                                                                                                })
                                                                                                break
                                                                                            case 'synchronous':
                                                                                                pl.cc($.type[1], ($) => {
                                                                                                    $i.snippet(`SYNC.I.${$d.createIdentifier(`${$.interface}`)}`)
                                                                                                })
                                                                                                break
                                                                                            default: pl.au($.type[0])
                                                                                        }

                                                                                        $d.enrichedForEachContextArgument($.context.arguments, {
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
                                                                        $i.snippet(`}, `)
                                                                    }
                                                                })
                                                            })
                                                            break
                                                        case 'independent':
                                                            pl.cc($.type[1], ($) => {
                                                            })
                                                            break
                                                        default: pl.au($.type[0])
                                                    }
                                                    $i.snippet(`) => `)
                                                    pl.cc($.definition, ($) => {
                                                        serializeAlgorithmTypeReference($, $i)
                                                    })
                                                    $d.enrichedForEachAlgorithmParameter($.parameters, {
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
                                    $d.enrichedForEachAlgorithm($.algorithms, {
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
                                    case 'external':
                                        return pl.cc($[1], ($) => {
                                            return $
                                        })
                                    case 'main':
                                        return pl.cc($[1], ($) => {
                                            return `${pathPrefix}../main`
                                        })
                                    case 'sibling':
                                        return pl.cc($[1], ($) => {
                                            return `../${$}`
                                        })
                                    case 'submodule':
                                        return pl.cc($[1], ($) => {
                                            return `../submodules/${$}`
                                        })
                                    case 'this':
                                        return pl.cc($[1], ($) => {
                                            return `./glossary`
                                        })
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
                    $d.forEachDependency($.dependencies, ($) => {
                        $i.line(`    "${$.key}": "^0.0.0",`)
                    })
                    switch ($.type[0]) {
                        case 'glossary':
                            pl.cc($.type[1], ($) => {
                                $i.line(`    "pareto-core-types": "^0.0.0"`)
                            })
                            break
                        case 'library':
                            pl.cc($.type[1], ($) => {
                                $d.enrichedForEachExecutable($.executables, {
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
                            pl.cc($.type[1], ($) => {
                                $d.forEachNativeDependency($.temp.nativeDependencies, ($) => {
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
                            pl.cc($.type[1], ($) => {

                            })
                            break
                        case 'library':
                            pl.cc($.type[1], ($) => {
                                $d.enrichedForEachExecutable($.executables, {
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
                            pl.cc($.type[1], ($) => {
                                $d.enrichedForEachDevDependency($.temp.devDependencies, {
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
                            pl.cc($.type[1], ($) => {
                                globals($i)
                                $d.serializeGlossary(
                                    {
                                        'glossary': $.root,
                                        'imports': $.imports.map(($) => {
                                            switch ($[0]) {
                                                case 'external':
                                                    return pl.cc($[1], ($) => {
                                                        return `${$}`
                                                    })
                                                default: return pl.au($[0])
                                            }
                                        }),
                                    },
                                    $i
                                )
                            })
                            break
                        case 'library':
                            pl.cc($.type[1], ($) => {
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
                                    function getExtension($: g_project.T.AlgorithmTypeReference<GAnnotation>) {

                                        return pl.cc($, ($): string => {

                                            switch ($.type[0]) {
                                                case 'asynchronous':
                                                    return pl.cc($.type[1], ($) => {
                                                        switch ($[0]) {
                                                            case 'constructor':
                                                                return pl.cc($[1], ($) => {
                                                                    return "a.c"
                                                                })
                                                            case 'function':
                                                                return pl.cc($[1], ($) => {
                                                                    return "a.f"
                                                                })
                                                            default: return pl.au($[0])
                                                        }
                                                    })
                                                case 'synchronous':
                                                    return pl.cc($.type[1], ($) => {
                                                        switch ($[0]) {
                                                            case 'procedure':
                                                                return pl.cc($[1], ($) => {
                                                                    return "s.p"
                                                                })
                                                            case 'function':
                                                                return pl.cc($[1], ($) => {
                                                                    return "s.f"
                                                                })
                                                            default: return pl.au($[0])
                                                        }
                                                    })
                                                default: return pl.au($.type[0])
                                            }
                                        })
                                    }
                                    pl.cc($.module.implementation, ($) => {
                                        switch ($[0]) {
                                            case 'pareto':
                                                pl.cc($[1], ($) => {
                                                    pd.implementMe("IMPLEMENTATIONS")
                                                    //$d.serializeImplementation($, $i)
                                                })
                                                break
                                            case 'typescript':
                                                pl.cc($[1], ($) => {
                                                    $i.directory("implementations", ($i) => {
                                                        $d.forEachAlgorithm(api.algorithms, ($) => {
                                                            $i.allowedManual(`${$.key}.${getExtension($.value.definition)}.ts`)
                                                        })
                                                    })
                                                })
                                                break
                                            default: pl.au($[0])
                                        }
                                    })
                                    $i.file("implementation.generated.ts", ($i) => {
                                        const imp = $.module.implementation
                                        $i.line(`import { API } from "./api.generated"`)
                                        $d.forEachAlgorithm(api.algorithms, ($) => {
                                            const suffix = pl.cc($, ($) => {

                                                const ext = getExtension($.value.definition)
                                                switch (imp[0]) {
                                                    case 'typescript':
                                                        return pl.cc(imp[1], ($) => {
                                                            return ext
                                                        })
                                                    case 'pareto':
                                                        return pl.cc(imp[1], ($) => {
                                                            return `generated`
                                                        })
                                                    default: return pl.au(imp[0])
                                                }
                                            })
                                            $i.line(`import { $$ as ${$d.createIdentifier(`i${$.key}`)} } from "./implementations/${$.key}.${suffix}"`)
                                        })
                                        $i.line(``)
                                        $i.nestedLine(($i) => {
                                            $i.snippet(`export const $api: API = `)
                                            $d.enrichedForEachAlgorithm(api.algorithms, {
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
                                    $i.file("index.ts", ($i) => {
                                        $i.line(`export * from "./glossary"`)
                                        $i.line(`export { $api as $a } from "./implementation.generated"`)
                                    })
                                }
                                globals($i)
                                $d.enrichedForEachExecutable($.executables, {
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
                                                    $i.line(`import * as g_main from "../main"`)
                                                    $i.line(``)
                                                    $i.line(`pe.runProgram(g_main.$r.${$d.createIdentifier($.key)})`)
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
                                    $d.forEachSubModule($.submodules, ($) => {
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
                                            switch ($.implementation[0]) {
                                                case 'pareto':
                                                    pl.cc($.implementation[1], ($) => {
                                                        pd.implementMe("IMPLEMENTATIONS")
                                                        //$d.serializeImplementation($, $i)
                                                    })
                                                    break
                                                case 'typescript':
                                                    pl.cc($.implementation[1], ($) => {
                                                        $i.directory("implementations", ($i) => {
                                                            $d.forEachAlgorithm(api.root.algorithms, ($) => {
                                                                $i.allowedManual(`${$.key}.b.ts`)
                                                            })
                                                        })
                                                    })
                                                    break
                                                default: pl.au($.implementation[0])
                                            }
                                            $i.file("implementation.generated.ts", ($i) => {
                                                const suffix = pl.cc($, ($) => {
                                                    switch ($.implementation[0]) {
                                                        case 'typescript':
                                                            return pl.cc($.implementation[1], ($) => {
                                                                return `p`
                                                            })
                                                        case 'pareto':
                                                            return pl.cc($.implementation[1], ($) => {
                                                                return `generated`
                                                            })
                                                        default: return pl.au($.implementation[0])
                                                    }
                                                })
                                                $i.line(`import { API } from "./api.generated"`)
                                                $d.forEachAlgorithm($.definition.api.root.algorithms, ($) => {
                                                    $i.line(`import { $$ as ${$d.createIdentifier(`i${$.key}`)} } from "./implementations/${$.key}.${suffix}"`)
                                                })
                                                $i.line(``)
                                                $i.nestedLine(($i) => {
                                                    $i.snippet(`export const $api: API = `)
                                                    $d.enrichedForEachAlgorithm($.definition.api.root.algorithms, {
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
                            pl.cc($.type[1], ($) => {
                                doModuleDefinition(
                                    {
                                        'definition': $.definition,
                                        'pathPrefix': "",
                                    },
                                    $i
                                )
                                $i.directory("implementations", ($i) => {
                                    $d.forEachAlgorithm($.definition.api.root.algorithms, ($) => {
                                        $i.allowedManual(`${$.key}.native.ts`)
                                    })
                                })
                                $i.file("implementation.generated.ts", ($i) => {

                                    $i.line(`import { API } from "./api.generated"`)
                                    $d.forEachAlgorithm($.definition.api.root.algorithms, ($) => {
                                        $i.line(`import { $$ as ${$d.createIdentifier(`i${$.key}`)} } from "./implementations/${$.key}.native"`)
                                    })
                                    $i.line(``)
                                    $i.nestedLine(($i) => {
                                        $i.snippet(`export const $r: API = {`)
                                        $i.indent(($i) => {
                                            $d.forEachAlgorithm($.definition.api.root.algorithms, ($) => {
                                                $i.nestedLine(($i) => {
                                                    $i.snippet(`'${$.key}': `)
                                                    $i.snippet(`${$d.createIdentifier(`i${$.key}`)}`)
                                                    $i.snippet(`,`)
                                                })
                                            })
                                        })
                                        $i.snippet(`}`)
                                    })
                                })
                                $i.allowedManual("native")
                                $i.file("index.ts", ($i) => {
                                    $i.line(`export * from "./api.generated"`)
                                    $i.line(`export * from "./glossary"`)
                                    $i.line(`export { $r } from "./implementation.generated"`)
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
                        $d.forEachDependency($.dependencies, ($) => {
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
                                    $i.allowedManual("getTestSet.a.f.ts")
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
                        //                 //                     pl.cc($[1], ($) => {
                        //                 //                     })
                        //                 //                     break
                        //                 //                 case 'constructor':
                        //                 //                     pl.cc($[1], ($) => {
                        //                 //                         $d.dictionaryForEach($.dependencies, ($, key) => {
                        //                 //                             $i.nestedLine(($i) => {
                        //                 //                                 $i.snippet(`| [ '${key}', `)
                        //                 //                                 switch ($.type[0]) {
                        //                 //                                     case 'function':
                        //                 //                                         pl.cc($.type[1], ($) => {
                        //                 //                                             if ($.context !== undefined) {
                        //                 //                                                 switch ($.context[0]) {
                        //                 //                                                     case 'import':
                        //                 //                                                         pl.cc($.context[1], ($) => {
                        //                 //                                                         })
                        //                 //                                                         break
                        //                 //                                                     case 'local':
                        //                 //                                                         pl.cc($.context[1], ($) => {
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
                        //                 //                                         pl.cc($.type[1], ($) => {
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
                    pl.cc($.type[1], ($) => {

                    })
                    break
                case 'library':
                    pl.cc($.type[1], ($) => {
                        doTest($.test, $i)
                    })
                    break
                case 'resource':
                    pl.cc($.type[1], ($) => {
                        doTest($.test, $i)

                    })
                    break
                default: pl.au($.type[0])
            }
        })
    }
}