import * as pl from 'pareto-core-lib'

function assertNotNull($: null | string): string { if ($ === null) { throw new Error("UNEXPECTED NULL") }; return $ }

export function $$(
    FIX PARENT PATH
    id: string,
    item_operation: string,
    //////
    prop_Hoofdcategorie: null | string,
    prop_Subcategorie: null | string,
    prop_Zijde: null | string,
    operation_Zijde: null | string,
    prop_Zijde_$Kosten_$Correctie__op__vennootschapsbelasting: null | string,
    operation_Zijde_$Kosten_$Correctie__op__vennootschapsbelasting: null | string,
    prop_Zijde_$Kosten_$Correctie__op__vennootschapsbelasting_$Ja_$Correctietype: null | string,
) {
    return  {
        'parents': {
            FIX PARENT PATH
        },
        'id': id,
        'data': {
            'Hoofdcategorie': prop_Hoofdcategorie,
            'Subcategorie': prop_Subcategorie,
            'Zijde': pl.cc(prop_Zijde, ($) => {
                switch ($) {
                    case "Opbrengsten": {
                        return ['Opbrengsten', {}]
                    }
                    case "Kosten": {
                        return ['Kosten', {
                            'Correctie op vennootschapsbelasting': pl.cc(prop_Correctie__op__vennootschapsbelasting, ($) => {
                                switch ($) {
                                    case "Nee": {
                                        return ['Nee', {}]
                                    }
                                    case "Ja": {
                                        return ['Ja', {
                                            'Correctietype': prop_Zijde_$Kosten_$Correctie__op__vennootschapsbelasting_$Ja_$Correctietype,
                                        }]
                                    }
                                    default: pl.panic(`UNEXPECTED VALUE: '${prop_Zijde_$Kosten_$Correctie__op__vennootschapsbelasting}'`)
                                }
                            }),
                        }]
                    }
                    default: pl.panic(`UNEXPECTED VALUE: '${prop_Zijde}'`)
                }
            }),
        }
    }
}