import * as pt from 'pareto-core-types'
import * as pl from 'pareto-core-lib'
import * as pr from 'pareto-core-raw'
import * as ps from 'pareto-core-state'

import * as api from "../api"

export const $$: api.Cresolve = ($) => {

    $.globalTypes.forEach(() => false, ($, key) => {
        function reference($: {
            reference: api.TReference,
            parameters: api.TParameters,
            siblings: null | pt.Dictionary<api.TProperty>,
        }) {
            const parameters = $.parameters
            const siblings = $.siblings
            const annotation = $.reference.annotation
            pl.cc($.reference.type, ($) => {
                switch ($[0]) {
                    case 'other':
                        pl.cc($[1], ($) => {

                        })
                        break
                    case 'parameter':
                        pl.cc($[1], ($) => {
                            pl.logDebugMessage(`PARAMETER: ${$}`)

                            pr.getEntry(
                                parameters,
                                $,
                                ($) => { },
                                () => {
                                    pl.panic(`No such parameter: ${$} @ ${annotation}`)
                                }
                            )
                        })
                        break
                    case 'sibling':
                        pl.cc($[1], ($) => {
                            pl.logDebugMessage(`SIBLING: ${$}`)
                            if (siblings === null) {
                                pl.implementMe(`NO SIBLINGS`)
                            } else {
                                pr.getEntry(
                                    siblings,
                                    $,
                                    ($) => { },
                                    () => {
                                        pl.implementMe(`No such sibling: ${$} @ ${annotation}`)
                                    }
                                )
                            }
                        })
                        break
                    default: pl.au($[0])
                }
            })
        }
        function string($: {
            string: api.TString,
            parameters: api.TParameters,
            siblings: null | api.TProperties,
        }) {
            const parameters = $.parameters
            const siblings = $.siblings
            pl.cc($.string.constrained, ($) => {

                switch ($[0]) {
                    case 'no':
                        pl.cc($[1], ($) => {

                        })
                        break
                    case 'yes':
                        pl.cc($[1], ($) => {
                            reference({
                                reference: $,
                                parameters: parameters,
                                siblings: siblings,
                            })
                            $['referenced type'] //string
                        })
                        break
                    default: pl.au($[0])
                }
            })
        }
        function doType($: {
            localType: api.TLocalType,
            parameters: api.TParameters,
            siblings: null | api.TProperties,
        }) {
            const parameters = $.parameters
            const siblings = $.siblings
            pl.cc($.localType, ($) => {

                switch ($[0]) {
                    case 'array':
                        pl.cc($[1], ($) => {
                            doType({
                                localType: $.type,
                                parameters: parameters,
                                siblings: siblings
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
                            string({
                                string: $.key,
                                parameters: parameters,
                                siblings: siblings,
                            })
                            doType({
                                localType: $.type,
                                parameters: parameters,
                                siblings: siblings,
                            })
                        })
                        break
                    case 'group':
                        pl.cc($[1], ($) => {
                            const builder = ps.createUnsafeDictionaryBuilder<api.TProperty>()
                            $.properties.forEach(() => false, ($, key) => {

                                doType({
                                    localType: $.type,
                                    parameters: parameters,
                                    siblings: builder.getDictionary(),
                                })
                                builder.add(key, $)
                            })
                        })
                        break
                    case 'string':
                        pl.cc($[1], ($) => {
                            string({
                                string: $,
                                parameters: parameters,
                                siblings: siblings,
                            })
                        })
                        break
                    case 'taggedUnion':
                        pl.cc($[1], ($) => {
                            $.options.forEach(() => false, ($) => {
                                doType({
                                    localType: $.type,
                                    parameters: parameters,
                                    siblings: siblings,
                                })
                            })
                        })
                        break
                    default: pl.au($[0])
                }
            })
        }
        doType({
            localType: $.type,
            parameters: $.parameters,
            siblings: null,
        })
    })

}