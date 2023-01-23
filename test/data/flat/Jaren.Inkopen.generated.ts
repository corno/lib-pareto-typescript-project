import * as pl from 'pareto-core-lib'
export function $$(
    Jaren: string,
    Inkopen: string,
    //////
    Datum: string,
    Brondocument: string,
    operation: string,
    Brondocument_Toegevoegd_Document: string,
    Type: string,
    operation: string,
    Type_Inkoop (met crediteur)_Factuurnummer: string,
    Type_Inkoop (met crediteur)_Crediteur: string,
    Type_Salaris_Ronde: string,
    Type_Salaris_Medewerker: string,
    Type_Loonheffing_Ronde: string,
    Type_WBSO_Ronde: string,
    BTW-regime: string,
    operation: string,
    BTW-regime_Standaard_BTW-periode: string,
    BTW-regime_Geen BTW van toepassing_BTW-periode: string,
    BTW-regime_Binnenland heffing verlegd_BTW-periode: string,
    BTW-regime_Intracommunautair_BTW-periode: string,
    BTW-regime_Import van buiten de EU_BTW-periode: string,
    Afhandeling: string,
    operation: string,
    Afhandeling_Rekening courant_Rekening courant: string,
    Afhandeling_Nog te betalen_Betalingstermijn: string,
) {
    return {
        'Datum': FIXSTRING,
        'Brondocument': pl.cc(Brondocument, ($) => {
            switch ($) {
                case "Toegevoegd": {
                    return ['Toegevoegd', {
                        'Document': FIXSTRING,
                    }]
                }
                case "Nog toevoegen": {
                    return ['Nog toevoegen', {}]
                }
                case "Niet van toepassing": {
                    return ['Niet van toepassing', {}]
                }
                case "Ontbreekt": {
                    return ['Ontbreekt', {}]
                }
                default: pl.panic(`UNEXPECTED VALUE: ${Brondocument}`)
            }
        }),
        'Type': pl.cc(Type, ($) => {
            switch ($) {
                case "Bonnetje": {
                    return ['Bonnetje', {}]
                }
                case "Inkoop (met crediteur)": {
                    return ['Inkoop (met crediteur)', {
                        'Factuurnummer': FIXSTRING,
                        'Crediteur': FIXSTRING,
                    }]
                }
                case "Salaris": {
                    return ['Salaris', {
                        'Ronde': FIXSTRING,
                        'Medewerker': FIXSTRING,
                    }]
                }
                case "Loonheffing": {
                    return ['Loonheffing', {
                        'Ronde': FIXSTRING,
                    }]
                }
                case "WBSO": {
                    return ['WBSO', {
                        'Ronde': FIXSTRING,
                    }]
                }
                default: pl.panic(`UNEXPECTED VALUE: ${Type}`)
            }
        }),
        'BTW-regime': pl.cc(BTW-regime, ($) => {
            switch ($) {
                case "Standaard": {
                    return ['Standaard', {
                        'BTW-periode': FIXSTRING,
                    }]
                }
                case "Geen BTW van toepassing": {
                    return ['Geen BTW van toepassing', {
                        'BTW-periode': FIXSTRING,
                    }]
                }
                case "Binnenland heffing verlegd": {
                    return ['Binnenland heffing verlegd', {
                        'BTW-periode': FIXSTRING,
                    }]
                }
                case "Intracommunautair": {
                    return ['Intracommunautair', {
                        'BTW-periode': FIXSTRING,
                    }]
                }
                case "Import van buiten de EU": {
                    return ['Import van buiten de EU', {
                        'BTW-periode': FIXSTRING,
                    }]
                }
                default: pl.panic(`UNEXPECTED VALUE: ${BTW-regime}`)
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
                case "Nog te betalen": {
                    return ['Nog te betalen', {
                        'Betalingstermijn': FIXSTRING,
                    }]
                }
                default: pl.panic(`UNEXPECTED VALUE: ${Afhandeling}`)
            }
        }),
        'Regels': {},
    }
}