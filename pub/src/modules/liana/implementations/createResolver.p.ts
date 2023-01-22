import * as pt from 'pareto-core-types'
import * as pl from 'pareto-core-lib'
import * as pr from 'pareto-core-raw'
import * as ps from 'pareto-core-state'

import * as api from "../api"

export const $$: api.CcreateResolver = ($d) => {
    let hasErrors = false
    function onError($: string) {
        hasErrors = true
    }
    function filter<T>($: AnnotatedUnsafeDictionary<T>): api.MDictionary<T> {
        return {
            'annotation': $.annotation,
            'dictionary': $.dictionary.filter(($) => {
                return $[0] === 'not set' ? undefined : $[1]
            })
        }
    }

    type UnsafeDictionary<T> = pt.Dictionary<api.MPossibly<T>>
    type AnnotatedUnsafeDictionary<T> = {
        annotation: string,
        dictionary: UnsafeDictionary<T>
    }
    type AnnotatedDictionary<T> = {
        annotation: string,
        dictionary: pt.Dictionary<T>
    }
    type PossibleValue<T> = api.MPossibly<T>
    function buildDictionary<TIN, TOUT>($: AnnotatedDictionary<TIN>, cb: ($: TIN, $i: {
        getDictionary: () => AnnotatedUnsafeDictionary<TOUT>
        subscribe: ($: api.T_Reference) => () => TOUT
    }) => TOUT | undefined): AnnotatedUnsafeDictionary<TOUT> {
        const builder = ps.createUnsafeDictionaryBuilder<PossibleValue<TOUT>>()
        const annotation = $.annotation
        $.dictionary.forEach(() => false, ($, key) => {
            const value = cb($, {
                getDictionary: () => {
                    return {
                        annotation: annotation,
                        dictionary: builder.getDictionary()
                    }
                },
                subscribe: () => {
                    pl.logDebugMessage(`implement subscription`)
                    return () => {
                        pl.implementMe(`SKDFSL:FSF`)
                    }
                }
            })
            if (value === undefined) {
                builder.add(key, ['not set', null])
            } else {
                builder.add(key, ['set', value])
            }
        })
        return {
            annotation: annotation,
            dictionary: builder.getDictionary()
        }
    }
    function computedReference<T>($: api.T_Reference, ref: () => T): api.MComputedReference<T> {
        return {
            'name': $.name,
            'annotation': $.annotation,
            'referenced value': ref,
        }
    }
    function resolve<T>(
        target: string,
        dict: AnnotatedUnsafeDictionary<T>,
        key: api.T_Reference,
    ): api.MPossibly<api.MReference<T>> {
        return pr.getEntry(
            dict.dictionary,
            key.name,
            ($): api.MPossibly<api.MReference<T>> => {
                if ($[0] === 'not set') {
                    return ['not set', null]
                } else {
                    return ['set', {
                        annotation: key.annotation,
                        name: key.name,
                        'referenced value': $[1],
                    }]
                }
            },
            () => {
                onError(`${key.annotation}: no such '${target}' "${key.name}" @ ${dict.annotation}`)
                return ['not set', null]
            }
        )
    }
    return ($) => {
        const FIXME_RESOLVED_STATUS = false
        function resolveString($: {
            $: api.TString,
            support: {
                stringTypes: AnnotatedUnsafeDictionary<null>
                siblings: null | AnnotatedUnsafeDictionary<api.TXProperty>
            }
        }): api.MPossibly<api.TXString> {
            const support = $.support
            return pl.cc($.$, ($) => {
                switch ($.constrained[0]) {
                    case 'no':
                        return pl.cc($.constrained[1], ($) => {
                            const r_type = resolve("string type", support.stringTypes, $.type)
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
                            const annotation = $.annotation
                            function doTail() {
                                $.steps.forEach(($) => {
                                    switch ($[0]) {
                                        case 'array':
                                            pl.cc($[1], ($) => {
                                                // if (current[0] !== 'array') {
                                                //     pl.panic(`not an array @${reference.annotation}`)
                                                // } else {

                                                // }
                                            })
                                            break
                                        case 'group':
                                            pl.cc($[1], ($) => {
                                                // if (current[0] !== 'group') {
                                                //     pl.panic(`not a group @${reference.annotation}`)
                                                // } else {

                                                // }

                                            })
                                            break
                                        case 'reference':
                                            pl.cc($[1], ($) => {
                                                // if (!resolved) {
                                                //     pl.panic(`not resolved @${reference.annotation}`)
                                                // }
                                                // if (current[0] !== 'string') {
                                                //     pl.panic(`not a reference @${reference.annotation}`)
                                                // } else {
                                                //     pl.cc(current[1], ($) => {
                                                //         if ($.constrained[0] !== 'yes') {
                                                //             pl.panic(`not a reference @${reference.annotation}`)
                                                //         } else {
                                                //         }
                                                //     })
                                                // }

                                            })
                                            break
                                        case 'tagged union':
                                            pl.cc($[1], ($) => {
                                                // if (current[0] !== 'taggedUnion') {
                                                //     pl.panic(`not a tagged union @${reference.annotation}`)
                                                // } else {

                                                // }

                                            })
                                            break
                                        default: pl.au($[0])
                                    }
                                })

                            }
                            const current = pl.cc($.type, ($) => {
                                switch ($[0]) {
                                    case 'other':
                                        return pl.cc($[1], ($) => {
                                            onError(`IMPLEMENT OTHER`)
                                            //pl.implementMe(`case`)
                                        })
                                    case 'parameter':
                                        return pl.cc($[1], ($) => {
                                            //pl.implementMe(`case`)
                                        })
                                    case 'sibling':
                                        return pl.cc($[1], ($) => {
                                            if (support.siblings === null) {
                                                pl.implementMe(`NO SIBLINGS`)
                                            } else {
                                                const siblings = support.siblings
                                                const current = resolve("sibling", support.siblings, {
                                                    name: $,
                                                    annotation: annotation
                                                })
                                                switch (current[0]) {
                                                    case 'not set':
                                                        pl.cc(current[1], ($) => {
                                                            //what to do

                                                        })
                                                        break
                                                    case 'set':
                                                        pl.cc(current[1], ($) => {
                                                            if ($['referenced value'].type[0] !== 'dictionary') {
                                                                onError(`${annotation} not a dictionary`)
                                                            }
                                                        })
                                                        break
                                                    default: pl.au(current[0])
                                                }
                                                // pr.getEntry(
                                                //     support.siblings,
                                                //     $,
                                                //     ($) => {
                                                //         if ($ === undefined) {
                                                //             pl.implementMe(`UNDEFINED ENTRY`)
                                                //         } else {

                                                //         }
                                                //         // const current = doTail({
                                                //         //     type: $.type,
                                                //         //     resolved: FIXME_RESOLVED_STATUS,
                                                //         // })
                                                //         // if (current[0] !== "dictionary") {
                                                //         //     pl.logDebugMessage(`Not a dicionary but a ${$.type[0]} @ ${annotation}`)
                                                //         // }
                                                //     },
                                                //     () => {
                                                //         pl.logDebugMessage(`----------`)
                                                //         siblings.forEach(() => false, ($, key) => {
                                                //             pl.logDebugMessage(`key: ${key}`)
                                                //         })
                                                //         pl.implementMe(`No such sibling: ${$} @ ${annotation}`)
                                                //     }
                                                // )
                                            }
                                        })
                                    default: return pl.au($[0])
                                }
                            })
                            pl.logDebugMessage(`.`)
                            return ['not set', null] ///HIER

                        })
                    default: return pl.au($.constrained[0])
                }
            })
        }
        function resolveType($: {
            $: api.TLocalType,
            support: {
                stringTypes: AnnotatedUnsafeDictionary<null>
                globalTypes: (ref: api.T_Reference) => () => api.TXGlobalType
                siblings: null | AnnotatedUnsafeDictionary<api.TXProperty>
            }
        }): api.MPossibly<api.TXLocalType> {
            const support = $.support
            return pl.cc($.$, ($): api.MPossibly<api.TXLocalType> => {

                switch ($[0]) {
                    case 'array':
                        return pl.cc($[1], ($) => {
                            const r_type = resolveType({
                                $: $.type,
                                support: {
                                    stringTypes: support.stringTypes,
                                    globalTypes: support.globalTypes,
                                    siblings: support.siblings,
                                }
                            })
                            if (true
                                && r_type[0] === 'set'
                            ) {
                                return ['set', ['array', {
                                    'type': r_type[1],
                                }]]

                            } else {
                                return ['not set', null] ///HIER
                            }
                        })
                    case 'boolean':
                        return pl.cc($[1], ($) => {
                            return ['set', ['boolean', null]]
                        })
                    case 'component':
                        return pl.cc($[1], ($): api.MPossibly<api.TXLocalType> => {
                            const r_arguments = buildDictionary<null, api.TXArgument>($.arguments, ($, $i) => {
                                return null
                            })
                            return ['set', ['component', {
                                'type': computedReference($.type, support.globalTypes($.type)),
                                'arguments': filter(r_arguments),
                            }]]
                        })
                    case 'dictionary':
                        return pl.cc($[1], ($) => {
                            const r_key = resolveString({
                                $: $.key,
                                support: {
                                    stringTypes: support.stringTypes,
                                    siblings: support.siblings,
                                }
                            })
                            const r_type = resolveType({
                                $: $.type,
                                support: {
                                    stringTypes: support.stringTypes,
                                    globalTypes: support.globalTypes,
                                    siblings: support.siblings,
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
                                return ['not set', null] ///HIER
                            }
                        })
                    case 'group':
                        return pl.cc($[1], ($) => {
                            const r_properties = buildDictionary<api.TProperty, api.TXProperty>($.properties, ($, $i) => {

                                const r_type = resolveType({
                                    $: $.type,
                                    support: {
                                        stringTypes: support.stringTypes,
                                        globalTypes: support.globalTypes,
                                        siblings: $i.getDictionary(),
                                    }
                                })
                                if (r_type[0] === 'not set') {
                                    return undefined
                                } else {
                                    return {
                                        'type': r_type[1],
                                    }
                                }
                            })
                            return ['set', ['group', {
                                'properties': filter(r_properties),
                            }]]
                        })
                    case 'string':
                        return pl.cc($[1], ($) => {
                            const r_ = resolveString({
                                $: $,
                                support: {
                                    stringTypes: support.stringTypes,
                                    siblings: support.siblings,
                                }
                            })
                            if (r_[0] === 'not set') {
                                return ['not set', null] ///HIER
                            } else {
                                const xxx = r_[1]
                                return ['set', ['string', xxx]]
                            }

                        })
                    case 'taggedUnion':
                        return pl.cc($[1], ($) => {
                            const r_options = buildDictionary<{
                                readonly type: api.TLocalType;
                            }, api.TXOption>($.options, ($, $i) => {

                                const r_type = resolveType({
                                    $: $.type,
                                    support: {
                                        stringTypes: support.stringTypes,
                                        globalTypes: support.globalTypes,
                                        siblings: $i.getDictionary(),
                                    }
                                })
                                if (r_type[0] === 'not set') {
                                    return undefined
                                } else {
                                    return {
                                        'type': r_type[1],
                                    }
                                }
                            })
                            let r_default: api.MPossibly<api.MReference<api.TXOption>> = resolve("option", r_options, $.default)
                            if (true
                                && r_default[0] === 'set'
                            ) {
                                return ['set', ['taggedUnion', {
                                    'options': filter(r_options),
                                    'default': r_default[1],
                                }]]

                            } else {
                                return ['not set', null] ///HIER
                            }

                        })
                    default: return pl.au($[0])
                }
            })
        }
        const r_stringTypes = buildDictionary<null, null>($.stringTypes, ($, $i) => {
            return null
        })
        const r_globalTypes = buildDictionary<api.TGlobalType, api.TXGlobalType>($.globalTypes, ($, $i) => {
            const r_parameters = buildDictionary<null, null>($.parameters, ($, $i) => {
                return null
            })
            let r_type: api.MPossibly<api.TXLocalType> = resolveType({
                $: $.type,
                support: {
                    siblings: null,
                    stringTypes: r_stringTypes,
                    globalTypes: $i.subscribe,
                }
            })
            if (true
                && r_type[0] === 'set'
            ) {
                return {
                    'parameters': filter(r_parameters),
                    'type': r_type[1],
                }
            } else {
                return undefined
            }
        })

        let r_root: api.MPossibly<api.MReference<api.TXGlobalType>> = resolve("global type", r_globalTypes, $.root)
        if (true
            && r_root[0] === 'set'
        ) {
            const x: api.TXModel = {
                'stringTypes': filter(r_stringTypes),
                'globalTypes': filter(r_globalTypes),
                'root': r_root[1],
            }
            return ['set', {
                'model': x,
                'has errors': hasErrors
            }]
        } else {
            return ['not set', null] ///HIER
        }
    }
}