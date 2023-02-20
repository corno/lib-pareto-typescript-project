import * as pt from 'pareto-core-types'
import * as pd from 'pareto-core-dev'
import * as pl from 'pareto-core-lib'
import * as ps from 'pareto-core-state'

import * as api from "../api"

function getEntry<T, RT>(
    dictionary: pt.Dictionary<T>,
    key: string,
    exists: ($: T) => RT,
    notExists: () => RT
): RT {
    let entry: T | undefined = undefined
    dictionary.__mapWithKey(($, thisKey) => {
        if (thisKey === key) {
            entry = $
        }
    })
    if (entry !== undefined) {
        return exists(entry)
    } else {
        return notExists()
    }
}

export const $$: api.CcreateResolver = ($d) => {

    return <Annotation>($: api.T.Model<Annotation>) => {
        let hasErrors = false
        function onError($: string) {
            $d.onError($)
            hasErrors = true
        }
        function filter<T>($: AnnotatedUnsafeDictionary<T>): api.T.Dictionary<Annotation, T> {
            const db = ps.createUnsafeDictionaryBuilder<T>()
            $.dictionary.__forEach(() => false, ($, key) => {
                if ($[0] === 'set') {
                    db.add(key, $[1])
                }
            })
            return {
                'annotation': $.annotation,
                'dictionary': db.getDictionary()
            }
        }

        type ComputedReference<T> = (ref: api.T._$Reference<Annotation>) => () => T

        type UnsafeDictionary<T> = pt.Dictionary<api.T.Possibly<Annotation, T>>
        type AnnotatedUnsafeDictionary<T> = {
            annotation: Annotation,
            dictionary: UnsafeDictionary<T>
        }
        type AnnotatedDictionary<T> = {
            annotation: Annotation,
            dictionary: pt.Dictionary<T>
        }
        type OptionalAnnotatedUnsafeDictionary<T> = null | AnnotatedUnsafeDictionary<T>
        type PossibleValue<T> = api.T.Possibly<Annotation, T>
        function buildDictionary<TIN, TOUT>($: AnnotatedDictionary<TIN>, cb: ($: TIN, $i: {
            getPrecedingSiblings: () => AnnotatedUnsafeDictionary<TOUT>
            subscribeToSibling: ComputedReference<TOUT>
        }) => TOUT | undefined): AnnotatedUnsafeDictionary<TOUT> {
            const builder = ps.createUnsafeDictionaryBuilder<PossibleValue<TOUT>>()
            const annotation = $.annotation
            $.dictionary.__forEach(() => false, ($, key) => {
                const value = cb($, {
                    getPrecedingSiblings: () => {
                        return {
                            annotation: annotation,
                            dictionary: builder.getDictionary()
                        }
                    },
                    subscribeToSibling: () => {
                        pd.implementMe(`implement subscription`)
                        return () => {
                            pd.implementMe(`SKDFSL:FSF`)
                        }
                    }
                })
                if (value === undefined) {
                    builder.add(key, ['not set', {}])
                } else {
                    builder.add(key, ['set', value])
                }
            })
            return {
                annotation: annotation,
                dictionary: builder.getDictionary()
            }
        }
        function computedReference<T>($: api.T._$Reference<Annotation>, ref: () => T): api.T.ComputedReference<Annotation, T> {
            return {
                'name': $.name,
                'annotation': $.annotation,
                'referenced value': ref,
            }
        }
        function resolve<T>(
            target: string,
            dict: OptionalAnnotatedUnsafeDictionary<T>,
            key: api.T._$Reference<Annotation>,
        ): api.T.Possibly<Annotation, api.T.YReference<Annotation, T>> {
            if (dict === null) {
                onError(`${key.annotation}: no dictionary`)
                return ['not set', {}]
            } else {
                return getEntry(
                    dict.dictionary,
                    key.name,
                    ($): api.T.Possibly<Annotation, api.T.YReference<Annotation, T>> => {
                        if ($[0] === 'not set') {
                            return ['not set', {}]
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
                        return ['not set', {}]
                    }
                )
            }
        }
        function resolveString($: {
            $: api.T.String<Annotation>,
            support: {
                stringTypes: OptionalAnnotatedUnsafeDictionary<api.T.XStringType<Annotation>>
                siblings: OptionalAnnotatedUnsafeDictionary<api.T.XProperty<Annotation>>
            }
        }): api.T.Possibly<Annotation, api.T.XString<Annotation>> {
            const support = $.support
            return pl.cc($.$, ($) => {
                switch ($.constrained[0]) {
                    case 'no':
                        return pl.cc($.constrained[1], ($) => {
                            const r_type = resolve("string type", support.stringTypes, $.type)
                            if (r_type[0] === 'not set') {
                                return ['not set', {}]
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
                            //const annotation = $.annotation
                            function doTail() {
                                $.steps.__forEach(($) => {
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
                                            //onError(`IMPLEMENT OTHER`)
                                            //pd.implementMe(`case`)
                                        })
                                    case 'parameter':
                                        return pl.cc($[1], ($) => {
                                            //pd.implementMe(`case`)
                                        })
                                    case 'sibling':
                                        return pl.cc($[1], ($) => {
                                            if (support.siblings === null) {
                                                pd.implementMe(`NO SIBLINGS`)
                                            } else {
                                                const annotation = $.annotation
                                                const current = resolve("sibling", support.siblings, $)
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
                                            }
                                        })
                                    default: return pl.au($[0])
                                }
                            })
                            //onError(`IMPLEMENT REFERENCE`)
                            return ['not set', {}] ///HIER

                        })
                    default: return pl.au($.constrained[0])
                }
            })
        }
        function resolveType($: {
            $: api.T.LocalType<Annotation>,
            support: {
                stringTypes: OptionalAnnotatedUnsafeDictionary<{}>
                globalTypes: ComputedReference<api.T.XGlobalType<Annotation>>
                siblings: OptionalAnnotatedUnsafeDictionary<api.T.XProperty<Annotation>>
            }
        }): api.T.Possibly<Annotation, api.T.XLocalType<Annotation>> {
            const support = $.support
            return pl.cc($.$, ($): api.T.Possibly<Annotation, api.T.XLocalType<Annotation>> => {

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
                                return ['not set', {}] ///HIER
                            }
                        })
                    case 'boolean':
                        return pl.cc($[1], ($) => {
                            return ['set', ['boolean', {}]]
                        })
                    case 'component':
                        return pl.cc($[1], ($): api.T.Possibly<Annotation, api.T.XLocalType<Annotation>> => {
                            // const r_arguments = buildDictionary<null, api.MConstrainedDictionaryEntry<TXGlobalType, null>>($.arguments, ($, $i) => {
                            //     resolve("global types", support.globalTypes)
                            //     return {
                            //         'value': null
                            //     }
                            // })
                            // return ['set', ['component', {
                            //     'type': computedReference($.type, support.globalTypes($.type)),
                            //     'arguments': filter(r_arguments),
                            // }]]
                            //onError(`IMPLEMENT COMPONENT`)
                            return ['not set', {}]
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
                                return ['not set', {}] ///HIER
                            }
                        })
                    case 'group':
                        return pl.cc($[1], ($) => {
                            const r_properties = buildDictionary<api.T.Property<Annotation>, api.T.XProperty<Annotation>>($.properties, ($, $i) => {

                                const r_type = resolveType({
                                    $: $.type,
                                    support: {
                                        stringTypes: support.stringTypes,
                                        globalTypes: support.globalTypes,
                                        siblings: $i.getPrecedingSiblings(),
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
                                return ['not set', {}] ///HIER
                            } else {
                                const xxx = r_[1]
                                return ['set', ['string', xxx]]
                            }

                        })
                    case 'taggedUnion':
                        return pl.cc($[1], ($) => {
                            const r_options = buildDictionary<api.T.LocalType<Annotation>, api.T.XOption<Annotation>>($.options, ($, $i) => {

                                const r_type = resolveType({
                                    $: $,
                                    support: {
                                        stringTypes: support.stringTypes,
                                        globalTypes: support.globalTypes,
                                        siblings: $i.getPrecedingSiblings(),
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
                            let r_default: api.T.Possibly<Annotation, api.T.YReference<Annotation, api.T.XOption<Annotation>>> = resolve("option", r_options, $.default)
                            if (true
                                && r_default[0] === 'set'
                            ) {
                                return ['set', ['taggedUnion', {
                                    'options': filter(r_options),
                                    'default': r_default[1],
                                }]]

                            } else {
                                return ['not set', {}] ///HIER
                            }

                        })
                    default: return pl.au($[0])
                }
            })
        }
        const r_stringTypes = buildDictionary<null, {}>($.stringTypes, ($, $i) => {
            return {}
        })
        const r_globalTypes = buildDictionary<api.T.GlobalType<Annotation>, api.T.XGlobalType<Annotation>>($.globalTypes, ($, $i) => {
            const r_parameters = buildDictionary<api.T.Parameter<Annotation>, api.T.XParameter<Annotation>>($.parameters, ($, $i) => {
                return {}
            })
            let r_type: api.T.Possibly<Annotation, api.T.XLocalType<Annotation>> = resolveType({
                $: $.type,
                support: {
                    siblings: null,
                    stringTypes: r_stringTypes,
                    globalTypes: $i.subscribeToSibling,
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

        let r_root: api.T.Possibly<Annotation, api.T.YReference<Annotation, api.T.XGlobalType<Annotation>>> = resolve("global type", r_globalTypes, $.root)
        if (true
            && r_root[0] === 'set'
        ) {
            const x: api.T.XModel<Annotation> = {
                'stringTypes': filter(r_stringTypes),
                'globalTypes': filter(r_globalTypes),
                'root': r_root[1],
            }
            return ['set', {
                'model': x,
                'has errors': hasErrors
            }]
        } else {
            return ['not set', {}] ///HIER
        }
    }
}