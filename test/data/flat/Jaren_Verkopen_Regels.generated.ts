import * as pl from 'pareto-core-lib'

function assertNotNull($: null | string): string { if ($ === null) { throw new Error("UNEXPECTED NULL") }; return $ }

export function $$(
    FIX PARENT PATH
    id: string,
    item_operation: string,
    //////
    prop_Omschrijving: null | string,
    prop_Bedrag__exclusief__BTW: null | string,
    prop_Type: null | string,
    operation_Type: null | string,
    prop_Type_$Opbrengsten_$Grootboekrekening: null | string,
    prop_Type_$Balans_$Balans__item: null | string,
    prop_BTW_miregime: null | string,
    operation_BTW_miregime: null | string,
    prop_BTW_miregime_$Standaard_$BTW_micateogrie: null | string,
    prop_Contracttype: null | string,
    operation_Contracttype: null | string,
    prop_Contracttype_$Licentieovereenkomst_$Periode: null | string,
    prop_Contracttype_$Project_$Opbrengst: null | string,
) {
    return  {
        'parents': {
            FIX PARENT PATH
        },
        'id': id,
        'data': {
            'Omschrijving': assertNotNull(prop_Omschrijving),
            'Bedrag exclusief BTW': parseInt(assertNotNull(prop_Bedrag__exclusief__BTW)),
            'Type': pl.cc(prop_Type, ($) => {
                switch ($) {
                    case "Opbrengsten": {
                        return ['Opbrengsten', {
                            'Grootboekrekening': prop_Type_$Opbrengsten_$Grootboekrekening,
                        }]
                    }
                    case "Balans": {
                        return ['Balans', {
                            'Balans item': prop_Type_$Balans_$Balans__item,
                        }]
                    }
                    default: pl.panic(`UNEXPECTED VALUE: '${prop_Type}'`)
                }
            }),
            'BTW-regime': pl.cc(prop_BTW_miregime, ($) => {
                switch ($) {
                    case "Standaard": {
                        return ['Standaard', {
                            'BTW-cateogrie': prop_BTW_miregime_$Standaard_$BTW_micateogrie,
                        }]
                    }
                    case "Binnenland heffing verlegd": {
                        return ['Binnenland heffing verlegd', {}]
                    }
                    case "Intracommunautair": {
                        return ['Intracommunautair', {}]
                    }
                    case "Export buiten de EU": {
                        return ['Export buiten de EU', {}]
                    }
                    case "Installatie of afstandsverkopen binnen de EU": {
                        return ['Installatie of afstandsverkopen binnen de EU', {}]
                    }
                    default: pl.panic(`UNEXPECTED VALUE: '${prop_BTW_miregime}'`)
                }
            }),
            'Contracttype': pl.cc(prop_Contracttype, ($) => {
                switch ($) {
                    case "Los": {
                        return ['Los', {}]
                    }
                    case "Licentieovereenkomst": {
                        return ['Licentieovereenkomst', {
                            'Periode': prop_Contracttype_$Licentieovereenkomst_$Periode,
                        }]
                    }
                    case "Project": {
                        return ['Project', {
                            'Opbrengst': prop_Contracttype_$Project_$Opbrengst,
                        }]
                    }
                    default: pl.panic(`UNEXPECTED VALUE: '${prop_Contracttype}'`)
                }
            }),
        }
    }
}