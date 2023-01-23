import * as pl from 'pareto-core-lib'
import * as pi from 'pareto-core-internals'//FIXME shouldn't be used
import * as pr from 'pareto-core-raw'//FIXME shouldn't be used

import * as api from "../api"

import * as mliana from "../../liana"
import * as mfp from "lib-fountain-pen"
import * as mcommon from "glo-pareto-common"
import * as mtostring from "res-pareto-tostring"

export const $$: api.CcreateSerializer = ($d) => {

    return ($, $i) => {
        function doDictionaries($: {
            $: mliana.TLocalType,
            path: mcommon.TPath,
            idPath: mcommon.TPath,
            currentName: string,
        }) {
            const path = $.path
            const idPath = $.idPath
            const currentName = $.currentName
            pl.cc($.$, ($) => {

                switch ($[0]) {
                    case 'array':
                        pl.cc($[1], ($) => {
                            doDictionaries({
                                $: $.type,
                                path: path,
                                idPath: idPath,
                                currentName: currentName,
                            })
                        })
                        break
                    case 'boolean':
                        pl.cc($[1], ($) => {

                        })
                        break
                    case 'component':
                        pl.cc($[1], ($) => {

                        })
                        break
                    case 'dictionary':
                        pl.cc($[1], ($) => {
                            const newIDPath = [idPath, currentName]
                            $i.file(
                                `${mtostring.$a.joinNestedStrings({
                                    'strings': path,
                                    'separator': ".",
                                })}.generated.ts`,
                                ($i) => {
                                    $i.literal(`import * as pl from 'pareto-core-lib'`)
                                    $i.line(($i) => {

                                        $i.snippet(`export function $$(`)
                                        $i.indent(($i) => {
                                            pr.wrapRawArray(pi.flatten(newIDPath)).forEach(($) => {
                                                $i.line(($i) => {
                                                    $i.snippet(`${$}: string,`)
                                                })
                                            })
                                            $i.literal(`//////`)
                                            function doScalars(
                                                $: {
                                                    $: mliana.TLocalType,
                                                    path: mcommon.TPath,
                                                }
                                            ) {
                                                const path = $.path
                                                pl.cc($.$, ($) => {

                                                    switch ($[0]) {
                                                        case 'array':
                                                            pl.cc($[1], ($) => {
                                                                doScalars({
                                                                    $: $.type,
                                                                    path: path,
                                                                })
                                                            })
                                                            break
                                                        case 'boolean':
                                                            pl.cc($[1], ($) => {

                                                            })
                                                            break
                                                        case 'component':
                                                            pl.cc($[1], ($) => {

                                                            })
                                                            break
                                                        case 'dictionary':
                                                            pl.cc($[1], ($) => {
                                                            })
                                                            break
                                                        case 'group':
                                                            pl.cc($[1], ($) => {
                                                                $.properties.dictionary.forEach(() => false, ($, key) => {
                                                                    doScalars({
                                                                        $: $.type,
                                                                        path: [path, key],
                                                                    })
                                                                })

                                                            })
                                                            break
                                                        case 'string':
                                                            pl.cc($[1], ($) => {
                                                                $i.line(($i) => {
                                                                    $i.snippet(`${mtostring.$a.joinNestedStrings({
                                                                        strings: path,
                                                                        'separator': '_',
                                                                    })}: string,`)
                                                                })
                                                            })
                                                            break
                                                        case 'taggedUnion':
                                                            pl.cc($[1], ($) => {
                                                                $i.line(($i) => {
                                                                    $i.snippet(`${mtostring.$a.joinNestedStrings({
                                                                        strings: path,
                                                                        'separator': '_',
                                                                    })}: string,`)
                                                                })
                                                                $i.line(($i) => {
                                                                    $i.snippet(`operation: string,`)
                                                                })
                                                                $.options.dictionary.forEach(() => false, ($, key) => {
                                                                    doScalars({
                                                                        $: $.type,
                                                                        path: [path, key],
                                                                    })
                                                                })
                                                            })
                                                            break
                                                        default: pl.au($[0])
                                                    }
                                                })
                                            }
                                            doScalars({
                                                $: $.type,
                                                path: [],
                                            })

                                        })
                                        $i.snippet(`) {`)
                                        $i.indent(($i) => {
                                            $i.line(($i) => {
                                                $i.snippet(`return `)

                                                function writeUnflattener($: {
                                                    $: mliana.TLocalType,
                                                    currentName: string,
                                                }, $i: mfp.ILine) {
                                                    const currentName =$.currentName
                                                    pl.cc($.$, ($) => {
                                                        
                                                        switch ($[0]) {
                                                            case 'array':
                                                                pl.cc($[1], ($) => {
                                                                    $i.snippet(`[]`)
                                                                })
                                                                break
                                                            case 'boolean':
                                                                pl.cc($[1], ($) => {
                                                                    $i.snippet(`FIXBOOLEAN`)
                                                                })
                                                                break
                                                            case 'component':
                                                                pl.cc($[1], ($) => {
                                                                    $i.snippet(`FIXCOMPONENT`)
                                                                })
                                                                break
                                                            case 'dictionary':
                                                                pl.cc($[1], ($) => {
                                                                    $i.snippet(`{}`)
                                                                })
                                                                break
                                                            case 'group':
                                                                pl.cc($[1], ($) => {
                                                                    $i.snippet(`{`)
                                                                    $i.indent(($i) => {
                                                                        $.properties.dictionary.forEach(() => false, ($, key) => {
                                                                            $i.line(($i) => {
                                                                                $i.snippet(`'${key}': `)
                                                                                writeUnflattener({
                                                                                    $: $.type,
                                                                                    currentName: key,
                                                                                }, $i)
                                                                                $i.snippet(`,`)
                                                                            })
                                                                        })
    
                                                                    })
                                                                    $i.snippet(`}`)
                                                                })
                                                                break
                                                            case 'string':
                                                                pl.cc($[1], ($) => {
                                                                    $i.snippet(`FIXSTRING`)
                                                                })
                                                                break
                                                            case 'taggedUnion':
                                                                pl.cc($[1], ($) => {
                                                                    $i.snippet(`pl.cc(${currentName}, ($) => {`)
                                                                    $i.indent(($i) => {
                                                                        $i.line(($i) => {
                                                                            $i.snippet(`switch ($) {`)
                                                                            $i.indent(($i) => {
                                                                                $.options.dictionary.forEach(() => false, ($, key) => {
                                                                                    $i.line(($i) => {
                                                                                        $i.snippet(`case "${key}": {`)
                                                                                        $i.indent(($i) => {
                                                                                            $i.line(($i) => {
                                                                                                $i.snippet(`return ['${key}', `)
                                                                                                writeUnflattener({
                                                                                                    $: $.type,
                                                                                                    currentName: currentName
                                                                                                }, $i)
                                                                                                $i.snippet(`]`)
                                                                                            })
                                                                                        })
                                                                                        $i.snippet(`}`)
                                                                                    })
                                                                                })
                                                                                $i.line(($i) => {
                                                                                    $i.snippet(`default: pl.panic(\`UNEXPECTED VALUE: \${${currentName}}\`)`)
                                                                                })
                                                                            })
                                                                            $i.snippet(`}`)
                                                                        })
                                                                    })
                                                                    $i.snippet(`})`)
                                                                    // $.options.dictionary.forEach(() => false, ($, key) => {
                                                                    //     writeUnflattener($.type, $i)
                                                                    // })
                                                                })
                                                                break
                                                            default: pl.au($[0])
                                                        }
                                                    })
                                                }
                                                writeUnflattener({
                                                    $: $.type,
                                                    currentName: currentName
                                                }, $i)
                                            })
                                        })
                                        $i.snippet(`}`)
                                    })
                                }
                            )
                            doDictionaries({
                                $: $.type,
                                path: path,
                                idPath: newIDPath,
                                currentName: currentName,
                            })
                        })
                        break
                    case 'group':
                        pl.cc($[1], ($) => {
                            $.properties.dictionary.forEach(() => false, ($, key) => {
                                doDictionaries({
                                    $: $.type,
                                    path: [path, key],
                                    idPath: idPath,
                                    currentName: key,
                                })
                            })

                        })
                        break
                    case 'string':
                        pl.cc($[1], ($) => {

                        })
                        break
                    case 'taggedUnion':
                        pl.cc($[1], ($) => {
                            $.options.dictionary.forEach(() => false, ($, key) => {
                                doDictionaries({
                                    $: $.type,
                                    path: [path, key],
                                    idPath: idPath,
                                    currentName: currentName,
                                })
                            })
                        })
                        break
                    default: pl.au($[0])
                }
            })
        }
        $.globalTypes.dictionary.forEach(() => false, ($, key) => {
            doDictionaries({
                $: $.type,
                path: [key],
                idPath: [],
                currentName: key,
            })
        })
    }
}

