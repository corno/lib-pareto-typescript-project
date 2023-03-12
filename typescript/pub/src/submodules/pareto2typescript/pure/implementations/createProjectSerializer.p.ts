import * as pl from 'pareto-core-lib'
import * as pd from 'pareto-core-dev'
import * as pt from 'pareto-core-types'

import * as gfp from "lib-fountain-pen"
import * as gthis from "../../glossary"
import * as gapi from "../../../api"
import * as gproject from "../../../project"

import { createProjectSerializer } from "../api.generated"


export const $$: createProjectSerializer = (
    $d,
) => {
    return <Annotation>($: gproject.T.Project<Annotation>, $i: gfp.B.Directory) => {
        function doOptional<T>(
            $: [false] | [true, T],
            $i: gfp.B.Line,
            $c: {
                onSet: ($: T, $i: gfp.B.Line) => void,
                onNotset: ($: null, $i: gfp.B.Line) => void,
            },
        ) {
            if ($[0] === true) {
                $c.onSet($[1], $i)
            } else {
                $c.onNotset(null, $i)
            }
        }

        function serializeFunctionReference($: gproject.T.FunctionReference<Annotation>, $i: gfp.B.Line) {

            $i.snippet(`g_${$.context.glossary}.`)
            $i.snippet(`F.${$d.createIdentifier(`${$.function}`)}`)
        }
        $i.directory("typescript", ($i) => {
            function tsConfig(
                $: {
                    isResource: boolean,
                    inlineSourceMap: boolean,
                },
                $i: gfp.B.Directory
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
            function globals($i: gfp.B.Directory) {
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
                            pl.cc($.type[1], ($) => {
                                $i.line(`    "pareto-core-types": "^0.0.0"`)
                            })
                            break
                        case 'library':
                            pl.cc($.type[1], ($) => {
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
                            pl.cc($.type[1], ($) => {
                                $d.dictionaryForEach($.nativeDependencies, ($) => {
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
                            pl.cc($.type[1], ($) => {
                                $d.enrichedDictionaryForEach($.devDependencies, {
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
                                    $: gproject.T.Module<Annotation>,
                                    $i: gfp.B.Directory,
                                ) {
                                    function doImplementation($: {
                                        'implementation': gproject.T.Implementation<Annotation>,
                                        'api': gapi.T.API<Annotation>,
                                    }, $i: gfp.B.Directory) {
                                        const api = $.api
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
                                                        $d.dictionaryForEach(api.algorithms, ($) => {
                                                            $i.allowedManual(`${$.key}.p.ts`)
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
                                            $d.dictionaryForEach($.api.algorithms, ($) => {
                                                $i.line(`import { $$ as ${$d.createIdentifier(`i${$.key}`)} } from "./implementations/${$.key}.${suffix}"`)
                                            })
                                            $i.line(``)
                                            $i.nestedLine(($i) => {
                                                $i.snippet(`export const $api: API = {`)
                                                $i.indent(($i) => {
                                                    $d.dictionaryForEach($.api.algorithms, ($) => {
                                                        $i.line(`${$d.createApostrophedString(`${$.key}`)}: ${$d.createIdentifier(`i${$.key}`)},`)
                                                    })
                                                })
                                                $i.snippet(`}`)
                                            })
                                        })
                                    }
                                    function serializeAPI(
                                        $: {

                                            readonly 'api': gapi.T.API<gthis.T.Annotation<Annotation>>
                                            readonly 'imports': pt.Dictionary<string>
                                        },
                                        $i: gfp.B.Block) {


                                        $i.line(`import * as pt from 'pareto-core-types'`)
                                        $i.line(``)
                                        $d.dictionaryForEach($.imports, ($) => {
                                            $i.nestedLine(($i) => {
                                                $i.snippet(`import * as g_${$.key} from "${$.value}"`)
                                            })
                                        })
                                        pl.cc($.api, ($) => {

                                            $d.dictionaryForEach($.algorithms, ($) => {
                                                const definition = $.value.definition
                                                $i.line(``)
                                                $i.nestedLine(($i) => {
                                                    $i.snippet(`export type ${$d.createIdentifier(`${$.key}`)} = `)
                                                    switch ($.value.type[0]) {
                                                        case 'constructor':
                                                            pl.cc($.value.type[1], ($) => {
                                                                $i.snippet(`(`)
                                                                doOptional($['configuration data'], $i, {
                                                                    onNotset: () => { },
                                                                    onSet: ($, $i) => {

                                                                        $i.snippet(`$: `)

                                                                        $i.snippet(`g_${$.context.glossary}.`)

                                                                        $i.snippet(`T.${$d.createIdentifier($.type)}`)
                                                                        $i.snippet(`, `)
                                                                    }
                                                                })
                                                                $i.snippet(`$d: {`)
                                                                $i.indent(($i) => {
                                                                    $d.dictionaryForEach($.dependencies, ($) => {
                                                                        $i.nestedLine(($i) => {
                                                                            $i.snippet(`readonly '${$.key}': `)
                                                                            serializeFunctionReference($.value, $i)
                                                                        })
                                                                    })
                                                                })
                                                                $i.snippet(`}`)
                                                                // pl.cc($.dependencies, ($) => {
                                                                //     $i.snippet(`$d: {`)
                                                                //     $i.indent(($i) => {
                                                                //         // if ($.callbacks !== undefined) {
                                                                //         //     $d.dictionaryForEach($.callbacks, ($, key) => {
                                                                //         //         $i.nestedLine(($i) => {
                                                                //         //             $i.snippet(`readonly "cb${key}": `)
                                                                //         //             serializeCallbackReference($, $i)
                                                                //         //         })
                                                                //         //     })
                                                                //         // }
                                                                //         $d.dictionaryForEach($.functions, ($, key) => {
                                                                //             $i.nestedLine(($i) => {
                                                                //                 $i.snippet(`readonly "f${key}": `)
                                                                //                 serializeFunctionReference($, $i)
                                                                //             })
                                                                //         })
                                                                //         if ($["side effects"] !== undefined) {
                                                                //             $["side effects"].forEach(compare, ($, key) => {
                                                                //                 $i.nestedLine(($i) => {
                                                                //                     $i.snippet(`readonly "se${key}": `)
                                                                //                     serializeProcedure($, $i)
                                                                //                 })
                                                                //             })
                                                                //         }
                                                                //     })
                                                                //     $i.snippet(`}`)
                                                                // })
                                                                $i.snippet(`) => `)
                                                            })
                                                            break
                                                        case 'reference':
                                                            pl.cc($.value.type[1], ($) => {
                                                            })
                                                            break
                                                        default: pl.au($.value.type[0])
                                                    }
                                                    serializeFunctionReference(definition, $i)
                                                })
                                            })
                                            $i.line(``)
                                            $i.nestedLine(($i) => {
                                                $i.snippet(`export type API = {`)
                                                $i.indent(($i) => {
                                                    $d.dictionaryForEach($.algorithms, ($) => {
                                                        $i.line(`${$.key}: ${$d.createIdentifier(`${$.key}`)}`)
                                                    })
                                                })
                                                $i.snippet(`}`)
                                            })
                                        })
                                    }
                                    $i.allowedManual(`shorthands.ts`)
                                    $i.directory(`glossary`, ($i) => {
                                        pl.cc($.glossary, ($) => {

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
                                                                    return `../../../main`
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
                                    pl.optional(
                                        $.bindings,
                                        ($) => {
                                            $i.directory("bindings", ($i) => {
                                                $i.file("api.generated.ts", ($i) => {
                                                    pl.cc($.api, ($) => {
                                                        serializeAPI({
                                                            'api': $.root,
                                                            'imports': $.imports.map(($) => {
                                                                switch ($[0]) {
                                                                    case 'external':
                                                                        return pl.cc($[1], ($) => {
                                                                            return $
                                                                        })
                                                                    case 'sibling':
                                                                        return pl.cc($[1], ($) => {
                                                                            return `../../${$}`
                                                                        })
                                                                    case 'submodule':
                                                                        return pl.cc($[1], ($) => {
                                                                            return `../../submodules/${$}`
                                                                        })
                                                                    case 'this':
                                                                        return pl.cc($[1], ($) => {
                                                                            return `../glossary`
                                                                        })
                                                                    default: return pl.au($[0])
                                                                }
                                                            }),
                                                        }, $i)
                                                    })

                                                })
                                                doImplementation(
                                                    {
                                                        'api': $.api.root,
                                                        'implementation': $.implementation,
                                                    },
                                                    $i
                                                )
                                            })
                                        },
                                        () => {

                                        }
                                    )
                                    pl.cc($['pure algorithms'], ($) => {
                                        $i.directory("pure", ($i) => {

                                            $i.file("api.generated.ts", ($i) => {
                                                pl.cc($.api, ($) => {
                                                    serializeAPI({
                                                        'api': $.root,
                                                        'imports': $.imports.map(($) => {
                                                            switch ($[0]) {
                                                                case 'external':
                                                                    return pl.cc($[1], ($) => {
                                                                        return $
                                                                    })
                                                                case 'sibling':
                                                                    return pl.cc($[1], ($) => {
                                                                        return `../../${$}`
                                                                    })
                                                                case 'submodule':
                                                                    return pl.cc($[1], ($) => {
                                                                        return `../../submodules/${$}`
                                                                    })
                                                                case 'this':
                                                                    return pl.cc($[1], ($) => {
                                                                        return `../glossary`
                                                                    })
                                                                default: return pl.au($[0])
                                                            }
                                                        }),
                                                    }, $i)
                                                })

                                            })
                                            doImplementation(
                                                {
                                                    'api': $.api.root,
                                                    'implementation': $.implementation,
                                                },
                                                $i
                                            )
                                        })
                                    })
                                    $i.file("index.ts", ($i) => {
                                        $i.line(`export * from "./glossary"`)
                                        $i.line(`export { $api as $b } from "./bindings/implementation.generated"`)
                                        $i.line(`export { $api as $a } from "./pure/implementation.generated"`)
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
                                                    $i.line(`import * as gmain from "../main"`)
                                                    $i.line(``)
                                                    $i.line(`pe.runProgram(gmain.$r.${$d.createIdentifier($.key)})`)
                                                })
                                            })
                                        })
                                    }
                                })
                                $i.directory("main", ($i) => {
                                    pl.cc($.main, ($) => {
                                        doModule($, $i)
                                    })
                                })
                                $i.directory("submodules", ($i) => {
                                    $d.dictionaryForEach($.submodules, ($) => {
                                        $i.directory(`${$.key}`, ($i) => {
                                            pl.cc($.value, ($) => {
                                                doModule($, $i)
                                            })
                                        })
                                    })
                                })
                                $i.file("index.ts", ($i) => {
                                    $i.line(`export { $a } from "./main"`)
                                    $i.line(`export * from "./main"`)
                                })
                            })
                            break
                        case 'resource':
                            pl.cc($.type[1], ($) => {
                                $i.directory(`glossary`, ($i) => {
                                    $d.serializeGlossary(
                                        {
                                            'glossary': $.glossary.root,
                                            'imports': $.glossary.imports.map(($) => {
                                                switch ($[0]) {
                                                    case 'external':
                                                        return pl.cc($[1], ($) => {
                                                            return $
                                                        })
                                                    default: return pl.au($[0])
                                                }
                                            }),
                                        },
                                        $i
                                    )
                                })
                                $i.file("api.generated.ts", ($i) => {
                                    const imports = $.api.imports.map(($) => {
                                        switch ($[0]) {
                                            case 'external':
                                                return pl.cc($[1], ($) => {
                                                    return $
                                                })
                                            case 'this':
                                                return pl.cc($[1], ($) => {
                                                    return `./glossary`
                                                })
                                            default: return pl.au($[0])
                                        }
                                    })
                                    $i.line(`import * as pt from 'pareto-core-types'`)
                                    $i.line(``)
                                    $d.dictionaryForEach(imports, ($) => {
                                        $i.nestedLine(($i) => {
                                            $i.snippet(`import * as g_${$.key} from "${$.value}"`)
                                        })
                                    })
                                    pl.cc($.api.root, ($) => {

                                        $d.dictionaryForEach($.algorithms, ($) => {
                                            const definition = $.value.definition
                                            $i.line(``)
                                            $i.nestedLine(($i) => {
                                                $i.snippet(`export type ${$d.createIdentifier(`${$.key}`)} = `)
                                                switch ($.value.type[0]) {
                                                    case 'constructor':
                                                        pl.cc($.value.type[1], ($) => {
                                                            $i.snippet(`(`)
                                                            doOptional($['configuration data'], $i, {
                                                                onNotset: () => { },
                                                                onSet: ($, $i) => {

                                                                    $i.snippet(`$: `)

                                                                    $i.snippet(`g_${$.context.glossary}.`)

                                                                    $i.snippet(`T.${$d.createIdentifier($.type)}`)
                                                                    $i.snippet(`, `)
                                                                }
                                                            })
                                                            $i.snippet(`$d: {`)
                                                            $i.indent(($i) => {
                                                                $d.dictionaryForEach($.dependencies, ($) => {
                                                                    $i.nestedLine(($i) => {
                                                                        $i.snippet(`readonly '${$.key}': `)
                                                                        serializeFunctionReference($.value, $i)
                                                                    })
                                                                })
                                                            })
                                                            $i.snippet(`}`)
                                                            // pl.cc($.dependencies, ($) => {
                                                            //     $i.snippet(`$d: {`)
                                                            //     $i.indent(($i) => {
                                                            //         // if ($.callbacks !== undefined) {
                                                            //         //     $d.dictionaryForEach($.callbacks, ($, key) => {
                                                            //         //         $i.nestedLine(($i) => {
                                                            //         //             $i.snippet(`readonly "cb${key}": `)
                                                            //         //             serializeCallbackReference($, $i)
                                                            //         //         })
                                                            //         //     })
                                                            //         // }
                                                            //         $d.dictionaryForEach($.functions, ($, key) => {
                                                            //             $i.nestedLine(($i) => {
                                                            //                 $i.snippet(`readonly "f${key}": `)
                                                            //                 serializeFunctionReference($, $i)
                                                            //             })
                                                            //         })
                                                            //         if ($["side effects"] !== undefined) {
                                                            //             $["side effects"].forEach(compare, ($, key) => {
                                                            //                 $i.nestedLine(($i) => {
                                                            //                     $i.snippet(`readonly "se${key}": `)
                                                            //                     serializeProcedure($, $i)
                                                            //                 })
                                                            //             })
                                                            //         }
                                                            //     })
                                                            //     $i.snippet(`}`)
                                                            // })
                                                            $i.snippet(`) => `)
                                                        })
                                                        break
                                                    case 'reference':
                                                        pl.cc($.value.type[1], ($) => {
                                                        })
                                                        break
                                                    default: pl.au($.value.type[0])
                                                }
                                                serializeFunctionReference(definition, $i)
                                            })
                                        })
                                        $i.line(``)
                                        $i.nestedLine(($i) => {
                                            $i.snippet(`export type API = {`)
                                            $i.indent(($i) => {
                                                $d.dictionaryForEach($.algorithms, ($) => {
                                                    $i.line(`${$.key}: ${$d.createIdentifier(`${$.key}`)}`)
                                                })
                                            })
                                            $i.snippet(`}`)
                                        })
                                    })
                                })

                                $i.directory("implementations", ($i) => {
                                    $d.dictionaryForEach($.api.root.algorithms, ($) => {
                                        $i.allowedManual(`${$.key}.native.ts`)
                                    })
                                })
                                $i.file("implementation.generated.ts", ($i) => {

                                    $i.line(`import { API } from "./api.generated"`)
                                    $d.dictionaryForEach($.api.root.algorithms, ($) => {
                                        $i.line(`import { $$ as ${$d.createIdentifier(`i${$.key}`)} } from "./implementations/${$.key}.native"`)
                                    })
                                    $i.line(``)
                                    $i.nestedLine(($i) => {
                                        $i.snippet(`export const $r: API = {`)
                                        $i.indent(($i) => {
                                            $d.dictionaryForEach($.api.root.algorithms, ($) => {
                                                $i.line(`${$d.createApostrophedString(`${$.key}`)}: ${$d.createIdentifier(`i${$.key}`)},`)
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
            function doTest($: gproject.T.Test<Annotation>, $i: gfp.B.Directory) {

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
                                $i.line(`import * as gmain from "../modules/main"`)
                                $i.line(``)
                                $i.line(`pe.runProgram(gmain.$a.main)`)
                            })
                        })
                        $i.allowedManual("data")
                        $i.directory("modules", ($i) => {
                            $i.directory("main", ($i) => {
                                $i.file("api.generated.ts", ($i) => {
                                    $i.line(`import * as pt from 'pareto-core-types'`)
                                    $i.line(``)
                                    $i.line(`import * as gmain from "res-pareto-main"`)
                                    $i.line(`import * as gtest from "lib-pareto-test"`)
                                    $i.line(``)
                                    $i.line(`export type getTestSet = gtest.F.GetTestSet`)
                                    $i.line(`export type main = ($: gmain.T.MainData) => void`)
                                    $i.line(``)
                                    $i.line(`export type API = {`)
                                    $i.line(`    'getTestSet': getTestSet`)
                                    $i.line(`    'main': main`)
                                    $i.line(`}`)
                                })
                                $i.directory("implementations", ($i) => {
                                    $i.allowedManual("getTestSet.p.ts")
                                    $i.file("main.generated.ts", ($i) => {
                                        $i.line(`import * as pl from 'pareto-core-lib'`)
                                        $i.line(``)
                                        $i.line(``)
                                        $i.line(`import * as gmain from "res-pareto-main"`)
                                        $i.line(`import * as gtest from "lib-pareto-test"`)
                                        $i.line(``)
                                        $i.line(`import { $$ as getTestSet } from "./getTestSet.p"`)
                                        $i.line(``)
                                        $i.line(`import {  main } from "../api.generated"`)
                                        $i.line(``)
                                        $i.line(`export const $$: main = ($) => {`)
                                        $i.line(`    gtest.$a.createTestProgram({`)
                                        $i.line(`        'getTestSet': getTestSet,`)
                                        $i.line(`        'log': gmain.$r.log,`)
                                        $i.line(`        'logError': gmain.$r.logError,`)
                                        $i.line(`        'onTestErrors': gmain.$r.setExitCodeToFailed`)
                                        $i.line(`    })($)`)
                                        $i.line(`}`)
                                    })
                                })
                                $i.file("export.generated.ts", ($i) => {
                                    $i.line(`import { API } from "./api.generated"`)
                                    $i.line(``)
                                    $i.line(`import { $$ as imain } from "./implementations/main.generated"`)
                                    $i.line(`import { $$ as igetTestSet } from "./implementations/getTestSet.p"`)
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
                        $i.directory("glossary", ($i) => {
                            $d.serializeGlossary(
                                {
                                    'glossary': $.glossary,
                                    'imports': $.imports.map(($) => {
                                        switch ($[0]) {
                                            case 'external':
                                                return pl.cc($[1], ($) => {
                                                    return $
                                                })
                                            case 'this':
                                                return pl.cc($[1], ($) => {
                                                    return `../glossary`
                                                })
                                            case 'pub':
                                                return pl.cc($[1], ($) => {
                                                    return `../../../../../pub`
                                                })
                                            default: return pl.au($[0])
                                        }
                                    }),
                                },
                                $i
                            )
                        })

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