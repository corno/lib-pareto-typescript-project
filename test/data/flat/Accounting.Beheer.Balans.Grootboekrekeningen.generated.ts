import * as pl from 'pareto-core-lib'
export function $$(
    Grootboekrekeningen: string,
    //////
    Hoofdcategorie: string,
    Subcategorie: string,
    Zijde: string,
    operation: string,
) {
    return {
        'Hoofdcategorie': FIXSTRING,
        'Subcategorie': FIXSTRING,
        'Zijde': pl.cc(Zijde, ($) => {
            switch ($) {
                case "Activa": {
                    return ['Activa', {}]
                }
                case "Passiva": {
                    return ['Passiva', {}]
                }
                default: pl.panic(`UNEXPECTED VALUE: ${Zijde}`)
            }
        }),
    }
}