import * as gliana2glossary from "lib-liana/dist/submodules/liana2glossary"

import { $ as data } from "../../../data/data.data"

import { Cmain } from "../api"

export const $$: Cmain = ($) => {
    data.__forEach(($) => {
        gliana2glossary.$a.generate($)
    })
}