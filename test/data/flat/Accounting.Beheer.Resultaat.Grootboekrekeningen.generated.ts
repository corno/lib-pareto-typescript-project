import * as pl from 'pareto-core-lib'
export function $$(
    Grootboekrekeningen: string,
    //////
    Hoofdcategorie: string,
    Subcategorie: string,
    Zijde: string,
    operation: string,
    Zijde_Kosten_Correctie op vennootschapsbelasting: string,
    operation: string,
    Zijde_Kosten_Correctie op vennootschapsbelasting_Ja_Correctietype: string,
) {
    return {
        'Hoofdcategorie': FIXSTRING,
        'Subcategorie': FIXSTRING,
        'Zijde': pl.cc(Zijde, ($) => {
            switch ($) {
                case "Opbrengsten": {
                    return ['Opbrengsten', {}]
                }
                case "Kosten": {
                    return ['Kosten', {
                        'Correctie op vennootschapsbelasting': pl.cc(Correctie op vennootschapsbelasting, ($) => {
                            switch ($) {
                                case "Nee": {
                                    return ['Nee', {}]
                                }
                                case "Ja": {
                                    return ['Ja', {
                                        'Correctietype': FIXSTRING,
                                    }]
                                }
                                default: pl.panic(`UNEXPECTED VALUE: ${Correctie op vennootschapsbelasting}`)
                            }
                        }),
                    }]
                }
                default: pl.panic(`UNEXPECTED VALUE: ${Zijde}`)
            }
        }),
    }
}