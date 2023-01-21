import * as pl from 'pareto-core-lib'
import * as pr from 'pareto-core-raw'

import * as api from "../api"

export const $$: api.Cresolve = ($) => {

    $.globalTypes.forEach(() => false, ($, key) => {
        function doType($: api.TLocalType) {
            switch ($[0]) {
                case 'array':
                    pl.cc($[1], ($) => {

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

                    })
                    break
                case 'string':
                    pl.cc($[1], ($) => {
                        switch ($.constrained[0]) {
                            case 'no':
                                pl.cc($.constrained[1], ($) => {

                                })
                                break
                            case 'yes':
                                pl.cc($.constrained[1], ($) => {
                                    $['referenced type'] //string
                                })
                                break
                            default: pl.au($.constrained[0])
                        }
                    })
                    break
                case 'taggedUnion':
                    pl.cc($[1], ($) => {

                    })
                    break
                default: pl.au($[0])
            }
        }
        doType($.type)
    })

}