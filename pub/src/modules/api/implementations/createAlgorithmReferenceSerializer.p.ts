import * as pl from "pareto-core-lib"

import * as api from "../api"

export const icreateAlgorithmReferenceSerializer: api.CcreateAlgorithmReferenceSerializer = ($, $d) => {
    return ($, $i) => {
        pl.cc($.type, ($) => {
            switch ($[0]) {
                case "function":
                    pl.cc($[1], ($) => {
                        if ($.context !== undefined) {
                            pl.cc($.context, ($) => {
                                switch ($[0]) {
                                    case "import":
                                        pl.cc($[1], ($) => {
                                            $i.snippet(`m${$}.`)
                                        })
                                        break
                                    case "local":
                                        pl.cc($[1], ($) => {
                                            $i.snippet(`glo.`)
                                        })
                                        break
                                    default: pl.au($[0])
                                }

                            })
                        } else {
                            $i.snippet(`glo.`)
                        }

                        $i.snippet(`${$.async ? "A" : "F"}`)
                        $i.snippet(`${$.function}`)

                    })
                    break
                case "procedure":
                    pl.cc($[1], ($) => {
                        $i.snippet(`pt.Procedure<`)
                        $d.serializeLeafType($, $i)
                        $i.snippet(`>`)
                    })
                    break
                case "callback":
                    pl.cc($[1], ($) => {
                        if ($.context !== undefined) {
                            pl.cc($.context, ($) => {
                                switch ($[0]) {
                                    // case "api":
                                    //     pl.cc($[1], ($) => {
                                    //         $i.snippet(`api`)
                                    //     })
                                    //     break
                                    case "import":
                                        pl.cc($[1], ($) => {
                                            $i.snippet(`m${$}.`)
                                        })
                                        break
                                    case "local":
                                        pl.cc($[1], ($) => {
                                            $i.snippet(`glo????.`)
                                        })
                                        break
                                    default: pl.au($[0])
                                }

                            })
                        } else {
                            $i.snippet(`glo.`)
                        }

                        $i.snippet(`X`)
                        $i.snippet(`${$.callback}`)

                    })
                    break
                default: pl.au($[0])
            }
        })
    }
}
