import * as pt from 'pareto-core-types'
import * as pl from 'pareto-core-lib'
import * as pr from 'pareto-core-raw'
import * as ps from 'pareto-core-state'

import * as api from "../api"
import { TXGlobalType } from '../api'

export const $$: api.CcreateResolver = ($d) => {

    function resolveXX<T>(
        where: string,
        dict: pt.Dictionary<T>,
        key: api.T_Reference,
    ): api.MPossibly<api.MReference<T>> {
        return pr.getEntry(
            dict,
            key.name,
            ($): api.MPossibly<api.MReference<T>> => {
                return ['set', {
                    annotation: key.annotation,
                    name: key.name,
                    'referenced type': $,
                }]
            },
            () => {
                $d.pr_onError(`${where}-- unresolved @${key.annotation}: ${key.name}`)
                return ['not set', null]
            }
        )
    }
    function resolve<T>(
        where: string,
        dict: api.MPossibly<pt.Dictionary<T>>,
        key: api.T_Reference,
    ): api.MPossibly<api.MReference<T>> {
        if (dict[0] === 'not set') {
            return ['not set', null]
        } else {
            return resolveXX(where, dict[1], key)
        }
    }
    function add<T>(
        builder: ps.DictionaryBuilder<T>,
        key: string,
        value: api.MPossibly<T>
    ) {
        if (value[0] === 'set') {
            builder.add(key, value[1])
        }
    }
    function set<T>(
        value: T,
    ): api.MPossibly<T> {
        return ['set', value]
    }
    return ($) => {
        const FIXME_RESOLVED_STATUS = false
        function resolveString($: {
            $: api.TString,
            support: {
                stringTypes: api.MPossibly<pt.Dictionary<null>>
            }
        }): api.MPossibly<api.TXString> {
            const support = $.support
            return pl.cc($.$, ($) => {
                switch ($.constrained[0]) {
                    case 'no':
                        return pl.cc($.constrained[1], ($) => {
                            const r_type = resolve("stringtype", support.stringTypes, $.type)
                            if (r_type[0] === 'not set') {
                                return ['not set', null]
                            } else {
                                return ['set', {
                                    'constrained': ['no', {
                                        'type': r_type[1],
                                    }]
                                }]
                            }

                        })
                    case 'yes':
                        return pl.cc($.constrained[1], ($) => {
                            pl.logDebugMessage(`FIXMECASE`)
                            return ['not set', null]

                        })
                    default: return pl.au($.constrained[0])
                }
            })
        }
        function resolveType($: {
            $: api.TLocalType,
            support: {
                stringTypes: api.MPossibly<pt.Dictionary<null>>
            }
        }): api.MPossibly<api.TXLocalType> {
            const support = $.support
            return pl.cc($.$, ($) => {

                switch ($[0]) {
                    case 'array':
                        return pl.cc($[1], ($) => {
                            const r_type = resolveType({
                                $: $.type,
                                support: {
                                    stringTypes: support.stringTypes
                                }
                            })
                            if (true
                                && r_type[0] === 'set'
                            ) {
                                return ['set', ['array', {
                                    'type': r_type[1],
                                }]]

                            } else {
                                return ['not set', null]
                            }
                        })
                    case 'boolean':
                        return pl.cc($[1], ($) => {
                            return ['set', ['boolean', null]]
                        })
                    case 'component':
                        return pl.cc($[1], ($) => {
                            pl.logDebugMessage(`FIXMECASE`)
                            return ['set', ['boolean', null]]

                        })
                    case 'dictionary':
                        return pl.cc($[1], ($) => {
                            const r_key = resolveString({
                                $: $.key,
                                support: {
                                    stringTypes: support.stringTypes
                                }
                            })
                            const r_type = resolveType({
                                $: $.type,
                                support: {
                                    stringTypes: support.stringTypes
                                }
                            })
                            if (true
                                && r_key[0] === 'set'
                                && r_type[0] === 'set'
                            ) {
                                return ['set', ['dictionary', {
                                    'key': r_key[1],
                                    'type': r_type[1],
                                }]]

                            } else {
                                return ['not set', null]
                            }
                        })
                    case 'group':
                        return pl.cc($[1], ($) => {
                            let r_properties: api.MPossibly<pt.Dictionary<api.TXProperty>> = pl.cc($.properties, ($) => {
                                const builder = ps.createUnsafeDictionaryBuilder<api.TXOption>()
                                let foundErrors = false
                                $.forEach(() => false, ($, key) => {
                                    const r_type = resolveType({
                                        $: $.type,
                                        support: {
                                            stringTypes: support.stringTypes
                                        }
                                    })
                                    add(builder, key, pl.cc(null, ($) => {

                                        if (true
                                            && r_type[0] === 'set'
                                        ) {
                                            return ['set', {
                                                'type': r_type[1],
                                            }]
                                        } else {
                                            return ['not set', null]
                                        }
                                    }))
                                })
                                if (foundErrors) {
                                    return ['not set', null]
                                } else {
                                    return ['set', builder.getDictionary()]
                                }
                            })
                            if (true
                                && r_properties[0] === 'set'
                            ) {
                                return ['set', ['group', {
                                    'properties': r_properties[1],
                                }]]

                            } else {
                                return ['not set', null]
                            }
                        })
                    case 'string':
                        return pl.cc($[1], ($) => {
                            const r_ = resolveString({
                                $: $,
                                support: {
                                    stringTypes: support.stringTypes
                                }
                            })
                            if (r_[0] === 'not set') {
                                return ['not set', null]
                            } else {
                                const xxx = r_[1]
                                return ['set', ['string', xxx]]
                            }

                        })
                    case 'taggedUnion':
                        return pl.cc($[1], ($) => {
                            let r_options: api.MPossibly<pt.Dictionary<api.TXOption>> = pl.cc($.options, ($) => {
                                const builder = ps.createUnsafeDictionaryBuilder<api.TXOption>()
                                let foundErrors = false
                                $.forEach(() => false, ($, key) => {
                                    const r_type = resolveType({
                                        $: $.type,
                                        support: {
                                            stringTypes: support.stringTypes
                                        }
                                    })
                                    add(builder, key, pl.cc(null, ($) => {

                                        if (true
                                            && r_type[0] === 'set'
                                        ) {
                                            return ['set', {
                                                'type': r_type[1],
                                            }]
                                        } else {
                                            return ['not set', null]
                                        }
                                    }))
                                })
                                if (foundErrors) {
                                    return ['not set', null]
                                } else {
                                    return ['set', builder.getDictionary()]
                                }
                            })
                            let r_default: api.MPossibly<api.MReference<api.TXOption>> = resolve("default", r_options, $.default)
                            if (true
                                && r_options[0] === 'set'
                                && r_default[0] === 'set'
                            ) {
                                return ['set', ['taggedUnion', {
                                    'options': r_options[1],
                                    'default': r_default[1],
                                }]]

                            } else {
                                return ['not set', null]
                            }

                        })
                    default: return pl.au($[0])
                }
            })
        }
        let r_stringTypes: api.MPossibly<pt.Dictionary<null>> = pl.cc($.stringTypes, ($) => {
            const builder = ps.createUnsafeDictionaryBuilder<null>()
            let foundErrors = false
            $.forEach(() => false, ($, key) => {
                builder.add(key, null)
            })
            if (foundErrors) {
                return ['not set', null]
            } else {
                return ['set', builder.getDictionary()]
            }
        })
        let r_globalTypes: api.MPossibly<pt.Dictionary<api.TXGlobalType>> = pl.cc($.globalTypes, ($) => {
            const builder = ps.createUnsafeDictionaryBuilder<api.TXGlobalType>()
            let foundErrors = false
            $.forEach(() => false, ($, key) => {
                let r_parameters: api.MPossibly<pt.Dictionary<null>> = pl.cc($.parameters, ($) => {
                    const builder = ps.createUnsafeDictionaryBuilder<null>()
                    let foundErrors = false
                    $.forEach(() => false, ($, key) => {
                        builder.add(key, null)
                    })
                    if (foundErrors) {
                        return ['not set', null]
                    } else {
                        return ['set', builder.getDictionary()]
                    }
                })
                let r_type: api.MPossibly<api.TXLocalType> = resolveType({
                    $: $.type,
                    support: {
                        stringTypes: r_stringTypes
                    }
                })
                add(builder, key, pl.cc(null, ($) => {

                    if (true
                        && r_parameters[0] === 'set'
                        && r_type[0] === 'set'
                    ) {
                        return ['set', {
                            'parameters': r_parameters[1],
                            'type': r_type[1],
                        }]
                    } else {
                        return ['not set', null]
                    }
                }))
            })
            if (foundErrors) {
                return ['not set', null]
            } else {
                return ['set', builder.getDictionary()]
            }
        })
        let r_root: api.MPossibly<api.MReference<api.TXGlobalType>> = resolve("root", r_globalTypes, $.root)
        if (true
            && r_stringTypes[0] === 'set'
            && r_globalTypes[0] === 'set'
            && r_root[0] === 'set'
        ) {
            const x: api.TXModel = {
                'stringTypes': r_stringTypes[1],
                'globalTypes': r_globalTypes[1],
                'root': r_root[1],
            }
            return ['set', x]
        } else {
            return ['not set', null]
        }
        // // pl.cc($, () => {
        // //     function doDictionary<T>(
        // //         dict: pt.Dictionary<T>,

        // //     ) {

        // //     }
        // //     const temp = ps.createUnsafeDictionaryBuilder()
        // //     let hasErrors = false
        // //     $.stringTypes.forEach(() => false, ($) => {
        // //         temp.push()
        // //     })
        // //     if (!hasErrors) => {

        // //     }
        // // })
        // // let r_globalTypes: null | pt.Dictionary<TXGlobalType> = null
        // // let r_root: null | api.MReference<api.TXGlobalType> = null
        // pl.cc($, () => {
        //     resolve(
        //         r_globalTypes,
        //         $.root,
        //         ($) => {
        //             r_root = $
        //         }
        //     )
        // })

        // // x = $.globalTypes.map<api.TXGlobalType>(($) => {
        // //     const r_parameters = $.parameters.map(($) => {
        // //         return {

        // //         }
        // //     })
        // //     const r_type: null | api.TXLocalType = null
        // //     return {

        // //     }
        // // })
        // // //const r_root = resolve(r_globalTypes, $.root)
        // if (true
        //     && r_stringTypes !== null
        //     && r_globalTypes !== null
        //     && r_root !== null
        // ) {
        //     // $i({
        //     //     'stringTypes': $.stringTypes.map(($) => {
        //     //         return null
        //     //     }),
        //     //     'globalTypes': r_globalTypes,
        //     //     'root': r_root,
        //     // })

        // }
        // $.globalTypes.forEach(() => false, ($, key) => {
        //     function reference($: {
        //         reference: api.TReference,
        //         parameters: api.TParameters,
        //         siblings: null | pt.Dictionary<api.TProperty>,
        //     }) {
        //         const parameters = $.parameters
        //         const siblings = $.siblings
        //         const annotation = $.reference.annotation
        //         const reference = $.reference
        //         function doTail($: {
        //             type: api.TLocalType,
        //             resolved: boolean
        //         }): api.TLocalType {
        //             let current = $.type
        //             const resolved = $.resolved
        //             reference.steps.forEach(($) => {
        //                 switch ($[0]) {
        //                     case 'array':
        //                         pl.cc($[1], ($) => {
        //                             if (current[0] !== 'array') {
        //                                 pl.panic(`not an array @${reference.annotation}`)
        //                             } else {

        //                             }
        //                         })
        //                         break
        //                     case 'group':
        //                         pl.cc($[1], ($) => {
        //                             if (current[0] !== 'group') {
        //                                 pl.panic(`not a group @${reference.annotation}`)
        //                             } else {

        //                             }

        //                         })
        //                         break
        //                     case 'reference':
        //                         pl.cc($[1], ($) => {
        //                             if (!resolved) {
        //                                 pl.panic(`not resolved @${reference.annotation}`)
        //                             }
        //                             if (current[0] !== 'string') {
        //                                 pl.panic(`not a reference @${reference.annotation}`)
        //                             } else {
        //                                 pl.cc(current[1], ($) => {
        //                                     if ($.constrained[0] !== 'yes') {
        //                                         pl.panic(`not a reference @${reference.annotation}`)
        //                                     } else {
        //                                     }
        //                                 })
        //                             }

        //                         })
        //                         break
        //                     case 'tagged union':
        //                         pl.cc($[1], ($) => {
        //                             if (current[0] !== 'taggedUnion') {
        //                                 pl.panic(`not a tagged union @${reference.annotation}`)
        //                             } else {

        //                             }

        //                         })
        //                         break
        //                     default: pl.au($[0])
        //                 }
        //             })
        //             return current
        //         }
        //         pl.cc($.reference.type, ($) => {
        //             switch ($[0]) {
        //                 case 'other':
        //                     pl.cc($[1], ($) => {

        //                     })
        //                     break
        //                 case 'parameter':
        //                     pl.cc($[1], ($) => {
        //                         pl.logDebugMessage(`PARAMETER: ${$}`)

        //                         pr.getEntry(
        //                             parameters,
        //                             $,
        //                             ($) => { },
        //                             () => {
        //                                 pl.panic(`No such parameter: ${$} @ ${annotation}`)
        //                             }
        //                         )
        //                     })
        //                     break
        //                 case 'sibling':
        //                     pl.cc($[1], ($) => {
        //                         pl.logDebugMessage(`SIBLING: ${$}`)
        //                         if (siblings === null) {
        //                             pl.implementMe(`NO SIBLINGS`)
        //                         } else {
        //                             pr.getEntry(
        //                                 siblings,
        //                                 $,
        //                                 ($) => {
        //                                     const current = doTail({
        //                                         type: $.type,
        //                                         resolved: FIXME_RESOLVED_STATUS,
        //                                     })
        //                                     if (current[0] !== "dictionary") {
        //                                         pl.logDebugMessage(`Not a dicionary but a ${$.type[0]} @ ${annotation}`)
        //                                     }
        //                                 },
        //                                 () => {
        //                                     pl.implementMe(`No such sibling: ${$} @ ${annotation}`)
        //                                 }
        //                             )
        //                         }
        //                     })
        //                     break
        //                 default: pl.au($[0])
        //             }
        //         })
        //     }
        //     function string($: {
        //         string: api.TString,
        //         parameters: api.TParameters,
        //         siblings: null | api.TProperties,
        //     }) {
        //         const parameters = $.parameters
        //         const siblings = $.siblings
        //         pl.cc($.string.constrained, ($) => {

        //             switch ($[0]) {
        //                 case 'no':
        //                     pl.cc($[1], ($) => {

        //                     })
        //                     break
        //                 case 'yes':
        //                     pl.cc($[1], ($) => {
        //                         reference({
        //                             reference: $,
        //                             parameters: parameters,
        //                             siblings: siblings,
        //                         })
        //                         //$['referenced type'] //string
        //                     })
        //                     break
        //                 default: pl.au($[0])
        //             }
        //         })
        //     }
        //     function doType($: {
        //         localType: api.TLocalType,
        //         parameters: api.TParameters,
        //         siblings: null | api.TProperties,
        //     }) {
        //         const parameters = $.parameters
        //         const siblings = $.siblings
        //         pl.cc($.localType, ($) => {

        //             switch ($[0]) {
        //                 case 'array':
        //                     pl.cc($[1], ($) => {
        //                         doType({
        //                             localType: $.type,
        //                             parameters: parameters,
        //                             siblings: siblings
        //                         })
        //                     })
        //                     break
        //                 case 'boolean':
        //                     pl.cc($[1], ($) => {

        //                     })
        //                     break
        //                 case 'component':
        //                     pl.cc($[1], ($) => {

        //                     })
        //                     break
        //                 case 'dictionary':
        //                     pl.cc($[1], ($) => {
        //                         string({
        //                             string: $.key,
        //                             parameters: parameters,
        //                             siblings: siblings,
        //                         })
        //                         doType({
        //                             localType: $.type,
        //                             parameters: parameters,
        //                             siblings: siblings,
        //                         })
        //                     })
        //                     break
        //                 case 'group':
        //                     pl.cc($[1], ($) => {
        //                         const builder = ps.createUnsafeDictionaryBuilder<api.TProperty>()
        //                         $.properties.forEach(() => false, ($, key) => {

        //                             doType({
        //                                 localType: $.type,
        //                                 parameters: parameters,
        //                                 siblings: builder.getDictionary(),
        //                             })
        //                             builder.add(key, $)
        //                         })
        //                     })
        //                     break
        //                 case 'string':
        //                     pl.cc($[1], ($) => {
        //                         string({
        //                             string: $,
        //                             parameters: parameters,
        //                             siblings: siblings,
        //                         })
        //                     })
        //                     break
        //                 case 'taggedUnion':
        //                     pl.cc($[1], ($) => {
        //                         $.options.forEach(() => false, ($) => {
        //                             doType({
        //                                 localType: $.type,
        //                                 parameters: parameters,
        //                                 siblings: siblings,
        //                             })
        //                         })
        //                     })
        //                     break
        //                 default: pl.au($[0])
        //             }
        //         })
        //     }
        //     doType({
        //         localType: $.type,
        //         parameters: $.parameters,
        //         siblings: null,
        //     })
        // })
    }
}