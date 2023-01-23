import * as pl from 'pareto-core-lib'
export function $$(
    Hoofdcategorieen fiscus: string,
    //////
    Zijde: string,
    operation: string,
) {
    return {
        'Zijde': pl.cc(Zijde, ($) => {
            switch ($) {
                case "Kosten": {
                    return ['Kosten', {}]
                }
                case "Opbrengsten": {
                    return ['Opbrengsten', {}]
                }
                default: pl.panic(`UNEXPECTED VALUE: ${Zijde}`)
            }
        }),
        'Subcategorieen': {},
    }
}