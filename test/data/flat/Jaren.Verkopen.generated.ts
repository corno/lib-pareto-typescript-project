import * as pl from 'pareto-core-lib'
export function $$(
    Jaren: string,
    Verkopen: string,
    //////
    Brondocument: string,
    operation: string,
    Brondocument_Toegevoegd_Document: string,
    Betalingstermijn: string,
    Debiteur: string,
    BTW-periode: string,
    Contracttype: string,
    operation: string,
    Contracttype_Licentieovereenkomst_Overeenkomst: string,
    Contracttype_Project_Project: string,
    Contracttype_Project_Offerte: string,
    Afhandeling: string,
    operation: string,
    Afhandeling_Rekening courant_Rekening courant: string,
) {
    return {
        'Brondocument': pl.cc(Brondocument, ($) => {
            switch ($) {
                case "Nog toevoegen": {
                    return ['Nog toevoegen', {}]
                }
                case "Toegevoegd": {
                    return ['Toegevoegd', {
                        'Document': FIXSTRING,
                    }]
                }
                default: pl.panic(`UNEXPECTED VALUE: ${Brondocument}`)
            }
        }),
        'Betalingstermijn': FIXSTRING,
        'Debiteur': FIXSTRING,
        'BTW-periode': FIXSTRING,
        'Contracttype': pl.cc(Contracttype, ($) => {
            switch ($) {
                case "Licentieovereenkomst": {
                    return ['Licentieovereenkomst', {
                        'Overeenkomst': FIXSTRING,
                    }]
                }
                case "Project": {
                    return ['Project', {
                        'Project': FIXSTRING,
                        'Offerte': FIXSTRING,
                    }]
                }
                default: pl.panic(`UNEXPECTED VALUE: ${Contracttype}`)
            }
        }),
        'Afhandeling': pl.cc(Afhandeling, ($) => {
            switch ($) {
                case "Mutaties": {
                    return ['Mutaties', {}]
                }
                case "Rekening courant": {
                    return ['Rekening courant', {
                        'Rekening courant': FIXSTRING,
                    }]
                }
                default: pl.panic(`UNEXPECTED VALUE: ${Afhandeling}`)
            }
        }),
        'Regels': {},
    }
}