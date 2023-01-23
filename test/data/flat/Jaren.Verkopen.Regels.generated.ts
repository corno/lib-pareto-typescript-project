import * as pl from 'pareto-core-lib'
export function $$(
    Jaren: string,
    Verkopen: string,
    Regels: string,
    //////
    Omschrijving: string,
    Bedrag exclusief BTW: string,
    Type: string,
    operation: string,
    Type_Opbrengsten_Grootboekrekening: string,
    Type_Balans_Balans item: string,
    BTW-regime: string,
    operation: string,
    BTW-regime_Standaard_BTW-cateogrie: string,
    Contracttype: string,
    operation: string,
    Contracttype_Licentieovereenkomst_Periode: string,
    Contracttype_Project_Opbrengst: string,
) {
    return {
        'Omschrijving': FIXSTRING,
        'Bedrag exclusief BTW': FIXSTRING,
        'Type': pl.cc(Type, ($) => {
            switch ($) {
                case "Opbrengsten": {
                    return ['Opbrengsten', {
                        'Grootboekrekening': FIXSTRING,
                    }]
                }
                case "Balans": {
                    return ['Balans', {
                        'Balans item': FIXSTRING,
                    }]
                }
                default: pl.panic(`UNEXPECTED VALUE: ${Type}`)
            }
        }),
        'BTW-regime': pl.cc(BTW-regime, ($) => {
            switch ($) {
                case "Standaard": {
                    return ['Standaard', {
                        'BTW-cateogrie': FIXSTRING,
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
                default: pl.panic(`UNEXPECTED VALUE: ${BTW-regime}`)
            }
        }),
        'Contracttype': pl.cc(Contracttype, ($) => {
            switch ($) {
                case "Los": {
                    return ['Los', {}]
                }
                case "Licentieovereenkomst": {
                    return ['Licentieovereenkomst', {
                        'Periode': FIXSTRING,
                    }]
                }
                case "Project": {
                    return ['Project', {
                        'Opbrengst': FIXSTRING,
                    }]
                }
                default: pl.panic(`UNEXPECTED VALUE: ${Contracttype}`)
            }
        }),
    }
}