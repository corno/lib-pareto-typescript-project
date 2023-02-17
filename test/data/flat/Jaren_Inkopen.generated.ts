import * as pl from 'pareto-core-lib'

function assertNotNull($: null | string): string { if ($ === null) { throw new Error("UNEXPECTED NULL") }; return $ }

export function $$(
    FIX PARENT PATH
    id: string,
    item_operation: string,
    //////
    prop_Datum: null | string,
    prop_Brondocument: null | string,
    operation_Brondocument: null | string,
    prop_Brondocument_$Toegevoegd_$Document: null | string,
    prop_Type: null | string,
    operation_Type: null | string,
    prop_Type_$Inkoop___pomet__crediteur_pc_$Factuurnummer: null | string,
    prop_Type_$Inkoop___pomet__crediteur_pc_$Crediteur: null | string,
    prop_Type_$Salaris_$Ronde: null | string,
    prop_Type_$Salaris_$Medewerker: null | string,
    prop_Type_$Loonheffing_$Ronde: null | string,
    prop_Type_$WBSO_$Ronde: null | string,
    prop_BTW_miregime: null | string,
    operation_BTW_miregime: null | string,
    prop_BTW_miregime_$Standaard_$BTW_miperiode: null | string,
    prop_BTW_miregime_$Geen__BTW__van__toepassing_$BTW_miperiode: null | string,
    prop_BTW_miregime_$Binnenland__heffing__verlegd_$BTW_miperiode: null | string,
    prop_BTW_miregime_$Intracommunautair_$BTW_miperiode: null | string,
    prop_BTW_miregime_$Import__van__buiten__de__EU_$BTW_miperiode: null | string,
    prop_Afhandeling: null | string,
    operation_Afhandeling: null | string,
    prop_Afhandeling_$Rekening__courant_$Rekening__courant: null | string,
    prop_Afhandeling_$Nog__te__betalen_$Betalingstermijn: null | string,
) {
    return  {
        'parents': {
            FIX PARENT PATH
        },
        'id': id,
        'data': {
            'Datum': parseInt(assertNotNull(prop_Datum)),
            'Brondocument': pl.cc(prop_Brondocument, ($) => {
                switch ($) {
                    case "Toegevoegd": {
                        return ['Toegevoegd', {
                            'Document': assertNotNull(prop_Brondocument_$Toegevoegd_$Document),
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
                    default: pl.panic(`UNEXPECTED VALUE: '${prop_Brondocument}'`)
                }
            }),
            'Type': pl.cc(prop_Type, ($) => {
                switch ($) {
                    case "Bonnetje": {
                        return ['Bonnetje', {}]
                    }
                    case "Inkoop (met crediteur)": {
                        return ['Inkoop (met crediteur)', {
                            'Factuurnummer': assertNotNull(prop_Type_$Inkoop___pomet__crediteur_pc_$Factuurnummer),
                            'Crediteur': prop_Type_$Inkoop___pomet__crediteur_pc_$Crediteur,
                        }]
                    }
                    case "Salaris": {
                        return ['Salaris', {
                            'Ronde': prop_Type_$Salaris_$Ronde,
                            'Medewerker': prop_Type_$Salaris_$Medewerker,
                        }]
                    }
                    case "Loonheffing": {
                        return ['Loonheffing', {
                            'Ronde': prop_Type_$Loonheffing_$Ronde,
                        }]
                    }
                    case "WBSO": {
                        return ['WBSO', {
                            'Ronde': prop_Type_$WBSO_$Ronde,
                        }]
                    }
                    default: pl.panic(`UNEXPECTED VALUE: '${prop_Type}'`)
                }
            }),
            'BTW-regime': pl.cc(prop_BTW_miregime, ($) => {
                switch ($) {
                    case "Standaard": {
                        return ['Standaard', {
                            'BTW-periode': prop_BTW_miregime_$Standaard_$BTW_miperiode,
                        }]
                    }
                    case "Geen BTW van toepassing": {
                        return ['Geen BTW van toepassing', {
                            'BTW-periode': prop_BTW_miregime_$Geen__BTW__van__toepassing_$BTW_miperiode,
                        }]
                    }
                    case "Binnenland heffing verlegd": {
                        return ['Binnenland heffing verlegd', {
                            'BTW-periode': prop_BTW_miregime_$Binnenland__heffing__verlegd_$BTW_miperiode,
                        }]
                    }
                    case "Intracommunautair": {
                        return ['Intracommunautair', {
                            'BTW-periode': prop_BTW_miregime_$Intracommunautair_$BTW_miperiode,
                        }]
                    }
                    case "Import van buiten de EU": {
                        return ['Import van buiten de EU', {
                            'BTW-periode': prop_BTW_miregime_$Import__van__buiten__de__EU_$BTW_miperiode,
                        }]
                    }
                    default: pl.panic(`UNEXPECTED VALUE: '${prop_BTW_miregime}'`)
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
                    case "Nog te betalen": {
                        return ['Nog te betalen', {
                            'Betalingstermijn': parseInt(assertNotNull(prop_Afhandeling_$Nog__te__betalen_$Betalingstermijn)),
                        }]
                    }
                    default: pl.panic(`UNEXPECTED VALUE: '${prop_Afhandeling}'`)
                }
            }),
            'Regels': {},
        }
    }
}