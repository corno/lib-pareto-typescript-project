import * as pl from 'pareto-core-lib'

import * as api from "../api"

import * as mliana from "../../liana"
import * as mliana2Pareto from "../../liana2Pareto"
import * as mfp from "lib-fountain-pen"
import * as mcommon from "glo-pareto-common"

export const $$: api.CcreateSerializer = ($d) => {
    return <Annotation>($: mliana2Pareto.T.MappedModel<Annotation>, $i: mfp.IWriter) => {

        $i.file(`states.generated.ts`, ($i) => {
            $d.serializeStates($d.mapLiana2States($), $i)

        })
        function getPathID($: mcommon.T.Path) {

            return $d.createIdentifier($d.joinNestedStrings($))
        }
        function doDictionaries($: {
            $: mliana.T.LocalType<Annotation>,
            path: mcommon.T.Path,
            idPath: mcommon.T.Path,
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
                    case 'optional':
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
                            //const parentPathAsArray = pr.wrapRawArray(pi.flatten(idPath))
                            $i.file(
                                `${$d.joinNestedStrings(path)}.generated.ts`,
                                ($i) => {
                                    $i.line(`import * as pl from 'pareto-core-lib'`)
                                    $i.line(``)
                                    $i.line(`function assertNotNull($: null | string): string { if ($ === null) { throw new Error("UNEXPECTED NULL") }; return $ }`)
                                    $i.line(``)
                                    $i.nestedLine(($i) => {

                                        $i.snippet(`export function $$(`)
                                        $i.indent(($i) => {
                                            $i.line(`FIX PARENT PATH`)
                                            // parentPathAsArray.forEach(($) => {
                                            //     $i.line(`parent_${$d.createIdentifier($)}: string,`)
                                            // })
                                            $i.line(`id: string,`)
                                            $i.line(`item_operation: string,`)
                                            $i.line(`//////`)
                                            function doScalars(
                                                $: {
                                                    $: mliana.T.LocalType<Annotation>,
                                                    isRoot: boolean,
                                                    path: mcommon.T.Path,
                                                }
                                            ) {
                                                const path = $.path
                                                const pathID = getPathID(path)
                                                const type = `${$.isRoot ? `` : `null | `}string`

                                                pl.cc($.$, ($) => {
                                                    switch ($[0]) {
                                                        case 'array':
                                                            pl.cc($[1], ($) => {
                                                                doScalars({
                                                                    $: $.type,
                                                                    isRoot: false,
                                                                    path: path,
                                                                })
                                                            })
                                                            break
                                                        case 'optional':
                                                            pl.cc($[1], ($) => {
                                                                doScalars({
                                                                    $: $.type,
                                                                    isRoot: false,
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
                                                                $.properties.dictionary.__forEach(() => false, ($, key) => {
                                                                    doScalars({
                                                                        $: $.type,
                                                                        isRoot: false,
                                                                        path: [path, key],
                                                                    })
                                                                })

                                                            })
                                                            break
                                                        case 'string':
                                                            pl.cc($[1], ($) => {
                                                                $i.line(`prop_${pathID}: ${type},`)
                                                            })
                                                            break
                                                        case 'taggedUnion':
                                                            pl.cc($[1], ($) => {
                                                                $i.line(`prop_${pathID}: ${type},`)
                                                                $i.line(`operation_${pathID}: ${type},`)
                                                                $.options.dictionary.__forEach(() => false, ($, key) => {
                                                                    doScalars({
                                                                        $: $,
                                                                        isRoot: false,
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
                                                isRoot: true,
                                                path: [],
                                            })

                                        })
                                        $i.snippet(`) {`)
                                        $i.indent(($i) => {
                                            $i.nestedLine(($i) => {
                                                $i.snippet(`return  {`)
                                                $i.indent(($i) => {
                                                    $i.nestedLine(($i) => {
                                                        $i.snippet(`'parents': {`)
                                                        $i.indent(($i) => {
                                                            $i.line(`FIX PARENT PATH`)
                                                            // parentPathAsArray.forEach(($) => {
                                                            //     $i.line(`'${$}': parent_${$d.createIdentifier($)},`)
                                                            // })
                                                        })
                                                        $i.snippet(`},`)
                                                    })

                                                    $i.line(`'id': id,`)
                                                    $i.nestedLine(($i) => {
                                                        $i.snippet(`'data': `)
                                                        function writeUnflattener($: {
                                                            $: mliana.T.LocalType<Annotation>,
                                                            path: mcommon.T.Path,
                                                            currentName: string,
                                                        }, $i: mfp.ILine) {
                                                            const path = $.path
                                                            const pathID = `prop_${getPathID(path)}`
                                                            const currentName = $.currentName
                                                            pl.cc($.$, ($) => {

                                                                switch ($[0]) {
                                                                    case 'array':
                                                                        pl.cc($[1], ($) => {
                                                                            $i.snippet(`[]`)
                                                                        })
                                                                        break
                                                                    case 'optional':
                                                                        pl.cc($[1], ($) => {
                                                                            $i.snippet(`[false]`)
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
                                                                                $.properties.dictionary.__forEach(() => false, ($, key) => {
                                                                                    $i.nestedLine(($i) => {
                                                                                        $i.snippet(`'${key}': `)
                                                                                        writeUnflattener({
                                                                                            $: $.type,
                                                                                            path: [path, key],
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
                                                                            switch ($.constrained[0]) {
                                                                                case 'no':
                                                                                    pl.cc($.constrained[1], ($) => {
                                                                                        const type = pl.cc($, ($): string => {
                                                                                            switch ($.type.key) {
                                                                                                case "bedrag": {
                                                                                                    return "number"
                                                                                                }
                                                                                                case "bestand": {
                                                                                                    return "undefined"
                                                                                                }
                                                                                                case "dagen": {
                                                                                                    return "number"
                                                                                                }
                                                                                                case "datum": {
                                                                                                    return "number"
                                                                                                }
                                                                                                case "identifier": {
                                                                                                    return "string"
                                                                                                }
                                                                                                case "multiline text": {
                                                                                                    return "string"
                                                                                                }
                                                                                                case "promillage": {
                                                                                                    return "number"
                                                                                                }
                                                                                                case "single line text": {
                                                                                                    return "string"
                                                                                                }
                                                                                                default: pl.panic(`Unknown string type: ${$.type.key}`)
                                                                                            }
                                                                                        })
                                                                                        $i.snippet(type === "number" ? `parseInt(assertNotNull(${pathID}))` : `assertNotNull(${pathID})`)
                                                                                    })
                                                                                    break
                                                                                case 'yes':
                                                                                    pl.cc($.constrained[1], ($) => {
                                                                                        $i.snippet(pathID)
                                                                                    })
                                                                                    break
                                                                                default: pl.au($.constrained[0])
                                                                            }
                                                                        })
                                                                        break
                                                                    case 'taggedUnion':
                                                                        pl.cc($[1], ($) => {
                                                                            $i.snippet(`pl.cc(prop_${$d.createIdentifier(currentName)}, ($) => {`)
                                                                            $i.indent(($i) => {
                                                                                $i.nestedLine(($i) => {
                                                                                    $i.snippet(`switch ($) {`)
                                                                                    $i.indent(($i) => {
                                                                                        $.options.dictionary.__forEach(() => false, ($, key) => {
                                                                                            $i.nestedLine(($i) => {
                                                                                                $i.snippet(`case "${key}": {`)
                                                                                                $i.indent(($i) => {
                                                                                                    $i.nestedLine(($i) => {
                                                                                                        $i.snippet(`return ['${key}', `)
                                                                                                        writeUnflattener({
                                                                                                            $: $,
                                                                                                            path: [path, key],
                                                                                                            currentName: currentName
                                                                                                        }, $i)
                                                                                                        $i.snippet(`]`)
                                                                                                    })
                                                                                                })
                                                                                                $i.snippet(`}`)
                                                                                            })
                                                                                        })
                                                                                        $i.line(`default: pl.panic(\`UNEXPECTED VALUE: '\${${pathID}}'\`)`)
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
                                                            path: [],
                                                            currentName: currentName
                                                        }, $i)

                                                    })
                                                })
                                                $i.snippet(`}`)
                                            })
                                        })
                                        $i.snippet(`}`)
                                    })
                                }
                            )
                            doDictionaries({
                                $: $.type,
                                path: path,
                                idPath: [idPath, currentName],
                                currentName: currentName,
                            })
                        })
                        break
                    case 'group':
                        pl.cc($[1], ($) => {
                            $.properties.dictionary.__forEach(() => false, ($, key) => {
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
                            $.options.dictionary.__forEach(() => false, ($, key) => {
                                doDictionaries({
                                    $: $,
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
        $.model.globalTypes.dictionary.__forEach(() => false, ($, key) => {
            doDictionaries({
                $: $.type,
                path: [key],
                idPath: [],
                currentName: key,
            })
        })
    }
}

