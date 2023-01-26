import * as pl from 'pareto-core-lib'

import * as api from "../api"
export const $$: api.CcreateEnricher = ($d) => {
    return ($) => {
        function Accounting() {
            return {
                'Bankrekeningen': $.map(($) => {
                    return {}
                }),
                'Beheer': {
                    'Balans': {
                        'Grootboekrekeningen': $.map(($) => {
                            return {
                                'Hoofdcategorie': pl.implementMe(`liana2Pareto`),
                                'Subcategorie': pl.implementMe(`liana2Pareto`),
                                'Zijde': pl.cc($, ($) => {
                                    switch ($) {
                                        case 'Activa': {
                                            return {}
                                        }
                                        case 'Passiva': {
                                            return {}
                                        }
                                    }
                                }),
                            }
                        }),
                        'Hoofdcategorieen': $.map(($) => {
                            return {
                                'Subcategorieen': $.map(($) => {
                                    return {
                                        'Hoofdcategorie fiscus': pl.implementMe(`liana2Pareto`),
                                        'Subcategorie fiscus': pl.implementMe(`liana2Pareto`),
                                    }
                                }),
                                'Zijde': pl.cc($, ($) => {
                                    switch ($) {
                                        case 'Activa': {
                                            return {}
                                        }
                                        case 'Passiva': {
                                            return {}
                                        }
                                    }
                                }),
                            }
                        }),
                        'Hoofdcategorieen fiscus': $.map(($) => {
                            return {
                                'Subcategorieen': $.map(($) => {
                                    return {}
                                }),
                                'Zijde': pl.cc($, ($) => {
                                    switch ($) {
                                        case 'Activa': {
                                            return {}
                                        }
                                        case 'Passiva': {
                                            return {}
                                        }
                                    }
                                }),
                            }
                        }),
                    },
                    'BTW-categorieen': $.map(($) => {
                        return {
                            'BTW-heffing': pl.cc($, ($) => {
                                switch ($) {
                                    case 'Ja': {
                                        return {
                                            'BTW-promillage': pl.implementMe(`liana2Pareto`),
                                        }
                                    }
                                    case 'Nee': {
                                        return {}
                                    }
                                }
                            }),
                        }
                    }),
                    'Gebruikers': $.map(($) => {
                        return {
                            'Volledige naam': pl.implementMe(`liana2Pareto`),
                        }
                    }),
                    'Resultaat': {
                        'Correctietypes vennootschapsbelasting': $.map(($) => {
                            return {}
                        }),
                        'Grootboekrekeningen': $.map(($) => {
                            return {
                                'Hoofdcategorie': pl.implementMe(`liana2Pareto`),
                                'Subcategorie': pl.implementMe(`liana2Pareto`),
                                'Zijde': pl.cc($, ($) => {
                                    switch ($) {
                                        case 'Kosten': {
                                            return {
                                                'Correctie op vennootschapsbelasting': pl.cc($, ($) => {
                                                    switch ($) {
                                                        case 'Ja': {
                                                            return {
                                                                'Correctietype': pl.implementMe(`liana2Pareto`),
                                                            }
                                                        }
                                                        case 'Nee': {
                                                            return {}
                                                        }
                                                    }
                                                }),
                                            }
                                        }
                                        case 'Opbrengsten': {
                                            return {}
                                        }
                                    }
                                }),
                            }
                        }),
                        'Hoofdcategorieen': $.map(($) => {
                            return {
                                'Subcategorieen': $.map(($) => {
                                    return {
                                        'Hoofdcategorie fiscus': pl.implementMe(`liana2Pareto`),
                                        'Subcategorie fiscus': pl.implementMe(`liana2Pareto`),
                                    }
                                }),
                                'Zijde': pl.cc($, ($) => {
                                    switch ($) {
                                        case 'Kosten': {
                                            return {}
                                        }
                                        case 'Opbrengsten': {
                                            return {}
                                        }
                                    }
                                }),
                            }
                        }),
                        'Hoofdcategorieen fiscus': $.map(($) => {
                            return {
                                'Subcategorieen': $.map(($) => {
                                    return {}
                                }),
                                'Zijde': pl.cc($, ($) => {
                                    switch ($) {
                                        case 'Kosten': {
                                            return {}
                                        }
                                        case 'Opbrengsten': {
                                            return {}
                                        }
                                    }
                                }),
                            }
                        }),
                    },
                },
                'Informele rekeningen': $.map(($) => {
                    return {}
                }),
                'Jaren': Jaren(),
                'Klanten': $.map(($) => {
                    return {
                        'Licentieovereenkomsten': $.map(($) => {
                            return {
                                'Periodes': $.map(($) => {
                                    return {
                                        'Bedrag': pl.implementMe(`liana2Pareto`),
                                    }
                                }),
                            }
                        }),
                        'Projecten': $.map(($) => {
                            return {
                                'Offertes': $.map(($) => {
                                    return {
                                        'Opbrengsten': $.map(($) => {
                                            return {
                                                'Type': pl.cc($, ($) => {
                                                    switch ($) {
                                                        case 'Project': {
                                                            return {
                                                                'Bedrag': pl.implementMe(`liana2Pareto`),
                                                                'Betaaldatum': pl.implementMe(`liana2Pareto`),
                                                            }
                                                        }
                                                    }
                                                }),
                                            }
                                        }),
                                    }
                                }),
                            }
                        }),
                    }
                }),
                'Leveranciers': $.map(($) => {
                    return {}
                }),
                'Medewerkers': $.map(($) => {
                    return {}
                }),
            }
        }
        function Afhandeling() {
            return pl.cc($, ($) => {
                switch ($) {
                    case 'BTW-periode': {
                        return {
                            'BTW-periode': pl.implementMe(`liana2Pareto`),
                            'Jaar': pl.implementMe(`liana2Pareto`),
                        }
                    }
                    case 'Informele rekening': {
                        return {
                            'Informele rekening': pl.implementMe(`liana2Pareto`),
                        }
                    }
                    case 'Inkoop': {
                        return {
                            'Inkoop': pl.implementMe(`liana2Pareto`),
                            'Jaar': pl.implementMe(`liana2Pareto`),
                        }
                    }
                    case 'Verkoop': {
                        return {
                            'Inkoop': pl.implementMe(`liana2Pareto`),
                            'Jaar': pl.implementMe(`liana2Pareto`),
                        }
                    }
                    case 'Verrekenpost': {
                        return {
                            'Verrekenpost': pl.implementMe(`liana2Pareto`),
                        }
                    }
                }
            })
        }
        function Informele Rekeningen() {
            return $.map(($) => {
                return {
                    'Beginsaldo': pl.implementMe(`liana2Pareto`),
                    'Grootboekrekening': pl.implementMe(`liana2Pareto`),
                    'Nieuw': pl.cc($, ($) => {
                        switch ($) {
                            case 'Ja': {
                                return {}
                            }
                            case 'Nee': {
                                return {
                                    'Jaar': pl.implementMe(`liana2Pareto`),
                                    'Rekening': pl.implementMe(`liana2Pareto`),
                                }
                            }
                        }
                    }),
                }
            })
        }
        function Jaren() {
            return $.map(($) => {
                return {
                    'Afgesloten': pl.cc($, ($) => {
                        switch ($) {
                            case 'Ja': {
                                return {}
                            }
                            case 'Nee': {
                                return {}
                            }
                        }
                    }),
                    'Balans grootboekrekeningen': $.map(($) => {
                        return {
                            'Type': pl.cc($, ($) => {
                                switch ($) {
                                    case 'Bankrekening': {
                                        return {}
                                    }
                                    case 'Informele rekening': {
                                        return {}
                                    }
                                    case 'Overig': {
                                        return {}
                                    }
                                }
                            }),
                        }
                    }),
                    'Bankrekeningen': $.map(($) => {
                        return {
                            'Beginsaldo': pl.implementMe(`liana2Pareto`),
                            'Grootboekrekening': pl.implementMe(`liana2Pareto`),
                            'Mutaties': $.map(($) => {
                                return {
                                    'Bedrag': pl.implementMe(`liana2Pareto`),
                                    'Datum': pl.implementMe(`liana2Pareto`),
                                    'Omschrijving': pl.implementMe(`liana2Pareto`),
                                    'Status': pl.cc($, ($) => {
                                        switch ($) {
                                            case 'Nog te verwerken': {
                                                return {}
                                            }
                                            case 'Verwerkt': {
                                                return {
                                                    'Afhandeling': Afhandeling(),
                                                }
                                            }
                                        }
                                    }),
                                }
                            }),
                            'Nieuw': pl.cc($, ($) => {
                                switch ($) {
                                    case 'Ja': {
                                        return {}
                                    }
                                    case 'Nee': {
                                        return {
                                            'Jaar': pl.implementMe(`liana2Pareto`),
                                            'Rekening': pl.implementMe(`liana2Pareto`),
                                        }
                                    }
                                }
                            }),
                        }
                    }),
                    'Beginsaldo nog aan te geven BTW': pl.implementMe(`liana2Pareto`),
                    'Beginsaldo Winstreserve': pl.implementMe(`liana2Pareto`),
                    'BTW periodes': $.map(($) => {
                        return {
                            '1. BTW-categorieen': $.map(($) => {
                                return {}
                            }),
                            'Documenten': $.map(($) => {
                                return {
                                    'Bestand': pl.implementMe(`liana2Pareto`),
                                }
                            }),
                            'Omschrijving': pl.implementMe(`liana2Pareto`),
                            'Status': pl.cc($, ($) => {
                                switch ($) {
                                    case 'Aangegeven': {
                                        return {
                                            'Afronding': pl.implementMe(`liana2Pareto`),
                                            'Bedrag': pl.implementMe(`liana2Pareto`),
                                            'Datum': pl.implementMe(`liana2Pareto`),
                                        }
                                    }
                                    case 'Openstaand': {
                                        return {}
                                    }
                                }
                            }),
                        }
                    }),
                    'Eerste boekjaar': pl.cc($, ($) => {
                        switch ($) {
                            case 'Ja': {
                                return {}
                            }
                            case 'Nee': {
                                return {
                                    'Vorig boekjaar': pl.implementMe(`liana2Pareto`),
                                }
                            }
                        }
                    }),
                    'Grootboek BTW periode': pl.implementMe(`liana2Pareto`),
                    'Grootboek inkoop saldo': pl.implementMe(`liana2Pareto`),
                    'Grootboek verkoop saldo': pl.implementMe(`liana2Pareto`),
                    'Grootboekrekening voor BTW afrondingen': pl.implementMe(`liana2Pareto`),
                    'Grootboekrekening voor nog aan te geven BTW': pl.implementMe(`liana2Pareto`),
                    'Grootboekrekening voor resultaat dit jaar': pl.implementMe(`liana2Pareto`),
                    'Grootboekrekening voor winstreserve': pl.implementMe(`liana2Pareto`),
                    'Informele rekeningen': Informele Rekeningen(),
                    'Inkopen': $.map(($) => {
                        return {
                            'Afhandeling': pl.cc($, ($) => {
                                switch ($) {
                                    case 'Mutaties': {
                                        return {}
                                    }
                                    case 'Nog te betalen': {
                                        return {
                                            'Betalingstermijn': pl.implementMe(`liana2Pareto`),
                                        }
                                    }
                                    case 'Rekening courant': {
                                        return {
                                            'Rekening courant': pl.implementMe(`liana2Pareto`),
                                        }
                                    }
                                }
                            }),
                            'Brondocument': pl.cc($, ($) => {
                                switch ($) {
                                    case 'Niet van toepassing': {
                                        return {}
                                    }
                                    case 'Nog toevoegen': {
                                        return {}
                                    }
                                    case 'Ontbreekt': {
                                        return {}
                                    }
                                    case 'Toegevoegd': {
                                        return {
                                            'Document': pl.implementMe(`liana2Pareto`),
                                        }
                                    }
                                }
                            }),
                            'BTW-regime': pl.cc($, ($) => {
                                switch ($) {
                                    case 'Binnenland heffing verlegd': {
                                        return {
                                            'BTW-periode': pl.implementMe(`liana2Pareto`),
                                        }
                                    }
                                    case 'Geen BTW van toepassing': {
                                        return {
                                            'BTW-periode': pl.implementMe(`liana2Pareto`),
                                        }
                                    }
                                    case 'Import van buiten de EU': {
                                        return {
                                            'BTW-periode': pl.implementMe(`liana2Pareto`),
                                        }
                                    }
                                    case 'Intracommunautair': {
                                        return {
                                            'BTW-periode': pl.implementMe(`liana2Pareto`),
                                        }
                                    }
                                    case 'Standaard': {
                                        return {
                                            'BTW-periode': pl.implementMe(`liana2Pareto`),
                                        }
                                    }
                                }
                            }),
                            'Datum': pl.implementMe(`liana2Pareto`),
                            'Regels': $.map(($) => {
                                return {
                                    'Bedrag': pl.cc($, ($) => {
                                        switch ($) {
                                            case 'Bekend': {
                                                return {
                                                    'Bedrag inclusief BTW': pl.implementMe(`liana2Pareto`),
                                                    'BTW': pl.implementMe(`liana2Pareto`),
                                                }
                                            }
                                            case 'Nog niet bekend': {
                                                return {
                                                    'Aantekeningen': pl.implementMe(`liana2Pareto`),
                                                }
                                            }
                                        }
                                    }),
                                    'Omschrijving': pl.implementMe(`liana2Pareto`),
                                    'Type': pl.cc($, ($) => {
                                        switch ($) {
                                            case 'Balans': {
                                                return {
                                                    'Balans item': pl.implementMe(`liana2Pareto`),
                                                }
                                            }
                                            case 'Kosten': {
                                                return {
                                                    'Grootboekrekening': pl.implementMe(`liana2Pareto`),
                                                }
                                            }
                                        }
                                    }),
                                }
                            }),
                            'Type': pl.cc($, ($) => {
                                switch ($) {
                                    case 'Bonnetje': {
                                        return {}
                                    }
                                    case 'Inkoop (met crediteur)': {
                                        return {
                                            'Crediteur': pl.implementMe(`liana2Pareto`),
                                            'Factuurnummer': pl.implementMe(`liana2Pareto`),
                                        }
                                    }
                                    case 'Loonheffing': {
                                        return {
                                            'Ronde': pl.implementMe(`liana2Pareto`),
                                        }
                                    }
                                    case 'Salaris': {
                                        return {
                                            'Medewerker': pl.implementMe(`liana2Pareto`),
                                            'Ronde': pl.implementMe(`liana2Pareto`),
                                        }
                                    }
                                    case 'WBSO': {
                                        return {
                                            'Ronde': pl.implementMe(`liana2Pareto`),
                                        }
                                    }
                                }
                            }),
                        }
                    }),
                    'Overige balans items': $.map(($) => {
                        return {
                            'Beginsaldo': pl.implementMe(`liana2Pareto`),
                            'Grootboekrekening': pl.implementMe(`liana2Pareto`),
                            'Memoriaal boekingen': $.map(($) => {
                                return {
                                    'Bedrag': pl.implementMe(`liana2Pareto`),
                                    'Datum': pl.implementMe(`liana2Pareto`),
                                    'Grootboekrekening': pl.implementMe(`liana2Pareto`),
                                    'Omschrijving': pl.implementMe(`liana2Pareto`),
                                }
                            }),
                            'Nieuw': pl.cc($, ($) => {
                                switch ($) {
                                    case 'Ja': {
                                        return {}
                                    }
                                    case 'Nee': {
                                        return {
                                            'Balans item': pl.implementMe(`liana2Pareto`),
                                            'Jaar': pl.implementMe(`liana2Pareto`),
                                        }
                                    }
                                }
                            }),
                        }
                    }),
                    'Resultaat grootboekrekeningen': $.map(($) => {
                        return {}
                    }),
                    'Salarisrondes': $.map(($) => {
                        return {}
                    }),
                    'Startdatum boekjaar': pl.implementMe(`liana2Pareto`),
                    'Verkopen': $.map(($) => {
                        return {
                            'Afhandeling': pl.cc($, ($) => {
                                switch ($) {
                                    case 'Mutaties': {
                                        return {}
                                    }
                                    case 'Rekening courant': {
                                        return {
                                            'Rekening courant': pl.implementMe(`liana2Pareto`),
                                        }
                                    }
                                }
                            }),
                            'Betalingstermijn': pl.implementMe(`liana2Pareto`),
                            'Brondocument': pl.cc($, ($) => {
                                switch ($) {
                                    case 'Nog toevoegen': {
                                        return {}
                                    }
                                    case 'Toegevoegd': {
                                        return {
                                            'Document': pl.implementMe(`liana2Pareto`),
                                        }
                                    }
                                }
                            }),
                            'BTW-periode': pl.implementMe(`liana2Pareto`),
                            'Contracttype': pl.cc($, ($) => {
                                switch ($) {
                                    case 'Licentieovereenkomst': {
                                        return {
                                            'Overeenkomst': pl.implementMe(`liana2Pareto`),
                                        }
                                    }
                                    case 'Project': {
                                        return {
                                            'Offerte': pl.implementMe(`liana2Pareto`),
                                            'Project': pl.implementMe(`liana2Pareto`),
                                        }
                                    }
                                }
                            }),
                            'Debiteur': pl.implementMe(`liana2Pareto`),
                            'Regels': $.map(($) => {
                                return {
                                    'Bedrag exclusief BTW': pl.implementMe(`liana2Pareto`),
                                    'BTW-regime': pl.cc($, ($) => {
                                        switch ($) {
                                            case 'Binnenland heffing verlegd': {
                                                return {}
                                            }
                                            case 'Export buiten de EU': {
                                                return {}
                                            }
                                            case 'Installatie of afstandsverkopen binnen de EU': {
                                                return {}
                                            }
                                            case 'Intracommunautair': {
                                                return {}
                                            }
                                            case 'Standaard': {
                                                return {
                                                    'BTW-cateogrie': pl.implementMe(`liana2Pareto`),
                                                }
                                            }
                                        }
                                    }),
                                    'Contracttype': pl.cc($, ($) => {
                                        switch ($) {
                                            case 'Licentieovereenkomst': {
                                                return {
                                                    'Periode': pl.implementMe(`liana2Pareto`),
                                                }
                                            }
                                            case 'Los': {
                                                return {}
                                            }
                                            case 'Project': {
                                                return {
                                                    'Opbrengst': pl.implementMe(`liana2Pareto`),
                                                }
                                            }
                                        }
                                    }),
                                    'Omschrijving': pl.implementMe(`liana2Pareto`),
                                    'Type': pl.cc($, ($) => {
                                        switch ($) {
                                            case 'Balans': {
                                                return {
                                                    'Balans item': pl.implementMe(`liana2Pareto`),
                                                }
                                            }
                                            case 'Opbrengsten': {
                                                return {
                                                    'Grootboekrekening': pl.implementMe(`liana2Pareto`),
                                                }
                                            }
                                        }
                                    }),
                                }
                            }),
                        }
                    }),
                    'Verrekenposten': $.map(($) => {
                        return {
                            'Mutaties': $.map(($) => {
                                return {
                                    'Afhandeling': Afhandeling(),
                                    'Bedrag': pl.implementMe(`liana2Pareto`),
                                }
                            }),
                        }
                    }),
                }
            })
        }
        return pl.cc($, ($) => {
            switch ($) {}
        })
    }
}