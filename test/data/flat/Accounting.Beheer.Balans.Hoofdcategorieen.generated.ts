import * as pl from 'pareto-core-lib'
export function $$(
    Hoofdcategorieen: string,
    //////
    Zijde: string,
    operation: string,
) {
    return {
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
        'Subcategorieen': {},
    }
}