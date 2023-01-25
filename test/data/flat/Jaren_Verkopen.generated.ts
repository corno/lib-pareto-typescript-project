import * as pl from 'pareto-core-lib'

function assertNotNull($: null | string): string { if ($ === null) { throw new Error("UNEXPECTED NULL") }; return $ }

export function $$(
    parent_Jaren: string,
    id: string,
    item_operation: string,
    //////
    prop_Brondocument: null | string,
    operation_Brondocument: null | string,
    prop_Brondocument_$Toegevoegd_$Document: null | string,
    prop_Betalingstermijn: null | string,
    prop_Debiteur: null | string,
    prop_BTW_miperiode: null | string,
    prop_Contracttype: null | string,
    operation_Contracttype: null | string,
    prop_Contracttype_$Licentieovereenkomst_$Overeenkomst: null | string,
    prop_Contracttype_$Project_$Project: null | string,
    prop_Contracttype_$Project_$Offerte: null | string,
    prop_Afhandeling: null | string,
    operation_Afhandeling: null | string,
    prop_Afhandeling_$Rekening__courant_$Rekening__courant: null | string,
) {
    return  {
        'parents': {
            'Jaren': parent_Jaren,
        },
        'id': id,
        'data': {
            'Brondocument': pl.cc(prop_Brondocument, ($) => {
                switch ($) {
                    case "Nog toevoegen": {
                        return ['Nog toevoegen', {}]
                    }
                    case "Toegevoegd": {
                        return ['Toegevoegd', {
                            'Document': assertNotNull(prop_Brondocument_$Toegevoegd_$Document),
                        }]
                    }
                    default: pl.panic(`UNEXPECTED VALUE: '${prop_Brondocument}'`)
                }
            }),
            'Betalingstermijn': parseInt(assertNotNull(prop_Betalingstermijn)),
            'Debiteur': prop_Debiteur,
            'BTW-periode': prop_BTW_miperiode,
            'Contracttype': pl.cc(prop_Contracttype, ($) => {
                switch ($) {
                    case "Licentieovereenkomst": {
                        return ['Licentieovereenkomst', {
                            'Overeenkomst': prop_Contracttype_$Licentieovereenkomst_$Overeenkomst,
                        }]
                    }
                    case "Project": {
                        return ['Project', {
                            'Project': prop_Contracttype_$Project_$Project,
                            'Offerte': prop_Contracttype_$Project_$Offerte,
                        }]
                    }
                    default: pl.panic(`UNEXPECTED VALUE: '${prop_Contracttype}'`)
                }
            }),
            'Afhandeling': pl.cc(prop_Afhandeling, ($) => {
                switch ($) {
                    case "Mutaties": {
                        return ['Mutaties', {}]
                    }
                    case "Rekening courant": {
                        return ['Rekening courant', {
                            'Rekening courant': prop_Afhandeling_$Rekening__courant_$Rekening__courant,
                        }]
                    }
                    default: pl.panic(`UNEXPECTED VALUE: '${prop_Afhandeling}'`)
                }
            }),
            'Regels': {},
        }
    }
}