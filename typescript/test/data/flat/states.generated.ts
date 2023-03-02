import * as pl from './templib'
export type SAccounting = {
    'Bankrekeningen': pl.StateDictionary<{}>
    'Beheer': {
        'Balans': {
            'Grootboekrekeningen': pl.StateDictionary<{
                'Hoofdcategorie': string
                'Subcategorie': string
                'Zijde': 
                    | ['Activa', {}]
                    | ['Passiva', {}]
            }>
            'Hoofdcategorieen': pl.StateDictionary<{
                'Subcategorieen': pl.StateDictionary<{
                    'Hoofdcategorie fiscus': string
                    'Subcategorie fiscus': string
                }>
                'Zijde': 
                    | ['Activa', {}]
                    | ['Passiva', {}]
            }>
            'Hoofdcategorieen fiscus': pl.StateDictionary<{
                'Subcategorieen': pl.StateDictionary<{}>
                'Zijde': 
                    | ['Activa', {}]
                    | ['Passiva', {}]
            }>
        }
        'BTW-categorieen': pl.StateDictionary<{
            'BTW-heffing': 
                | ['Ja', {
                    'BTW-promillage': number
                }]
                | ['Nee', {}]
        }>
        'Gebruikers': pl.StateDictionary<{
            'Volledige naam': string
        }>
        'Resultaat': {
            'Correctietypes vennootschapsbelasting': pl.StateDictionary<{}>
            'Grootboekrekeningen': pl.StateDictionary<{
                'Hoofdcategorie': string
                'Subcategorie': string
                'Zijde': 
                    | ['Kosten', {
                        'Correctie op vennootschapsbelasting': 
                            | ['Ja', {
                                'Correctietype': string
                            }]
                            | ['Nee', {}]
                    }]
                    | ['Opbrengsten', {}]
            }>
            'Hoofdcategorieen': pl.StateDictionary<{
                'Subcategorieen': pl.StateDictionary<{
                    'Hoofdcategorie fiscus': string
                    'Subcategorie fiscus': string
                }>
                'Zijde': 
                    | ['Kosten', {}]
                    | ['Opbrengsten', {}]
            }>
            'Hoofdcategorieen fiscus': pl.StateDictionary<{
                'Subcategorieen': pl.StateDictionary<{}>
                'Zijde': 
                    | ['Kosten', {}]
                    | ['Opbrengsten', {}]
            }>
        }
    }
    'Informele rekeningen': pl.StateDictionary<{}>
    'Jaren': SJaren
    'Klanten': pl.StateDictionary<{
        'Licentieovereenkomsten': pl.StateDictionary<{
            'Periodes': pl.StateDictionary<{
                'Bedrag': number
            }>
        }>
        'Projecten': pl.StateDictionary<{
            'Offertes': pl.StateDictionary<{
                'Opbrengsten': pl.StateDictionary<{
                    'Type': 
                        | ['Project', {
                            'Bedrag': number
                            'Betaaldatum': number
                        }]
                }>
            }>
        }>
    }>
    'Leveranciers': pl.StateDictionary<{}>
    'Medewerkers': pl.StateDictionary<{}>
}
export type SAfhandeling = 
    | ['BTW-periode', {
        'BTW-periode': string
        'Jaar': string
    }]
    | ['Informele rekening', {
        'Informele rekening': string
    }]
    | ['Inkoop', {
        'Inkoop': string
        'Jaar': string
    }]
    | ['Verkoop', {
        'Inkoop': string
        'Jaar': string
    }]
    | ['Verrekenpost', {
        'Verrekenpost': string
    }]
export type SInformele__Rekeningen = pl.StateDictionary<{
    'Beginsaldo': number
    'Grootboekrekening': string
    'Nieuw': 
        | ['Ja', {}]
        | ['Nee', {
            'Jaar': string
            'Rekening': string
        }]
}>
export type SJaren = pl.StateDictionary<{
    'Afgesloten': 
        | ['Ja', {}]
        | ['Nee', {}]
    'Balans grootboekrekeningen': pl.StateDictionary<{
        'Type': 
            | ['Bankrekening', {}]
            | ['Informele rekening', {}]
            | ['Overig', {}]
    }>
    'Bankrekeningen': pl.StateDictionary<{
        'Beginsaldo': number
        'Grootboekrekening': string
        'Mutaties': pl.StateDictionary<{
            'Bedrag': number
            'Datum': number
            'Omschrijving': string
            'Status': 
                | ['Nog te verwerken', {}]
                | ['Verwerkt', {
                    'Afhandeling': SAfhandeling
                }]
        }>
        'Nieuw': 
            | ['Ja', {}]
            | ['Nee', {
                'Jaar': string
                'Rekening': string
            }]
    }>
    'Beginsaldo nog aan te geven BTW': number
    'Beginsaldo Winstreserve': number
    'BTW periodes': pl.StateDictionary<{
        '1. BTW-categorieen': pl.StateDictionary<{}>
        'Documenten': pl.StateDictionary<{
            'Bestand': string
        }>
        'Omschrijving': string
        'Status': 
            | ['Aangegeven', {
                'Afronding': number
                'Bedrag': number
                'Datum': number
            }]
            | ['Openstaand', {}]
    }>
    'Eerste boekjaar': 
        | ['Ja', {}]
        | ['Nee', {
            'Vorig boekjaar': string
        }]
    'Grootboek BTW periode': string
    'Grootboek inkoop saldo': string
    'Grootboek verkoop saldo': string
    'Grootboekrekening voor BTW afrondingen': string
    'Grootboekrekening voor nog aan te geven BTW': string
    'Grootboekrekening voor resultaat dit jaar': string
    'Grootboekrekening voor winstreserve': string
    'Informele rekeningen': SInformele__Rekeningen
    'Inkopen': pl.StateDictionary<{
        'Afhandeling': 
            | ['Mutaties', {}]
            | ['Nog te betalen', {
                'Betalingstermijn': number
            }]
            | ['Rekening courant', {
                'Rekening courant': string
            }]
        'Brondocument': 
            | ['Niet van toepassing', {}]
            | ['Nog toevoegen', {}]
            | ['Ontbreekt', {}]
            | ['Toegevoegd', {
                'Document': string
            }]
        'BTW-regime': 
            | ['Binnenland heffing verlegd', {
                'BTW-periode': string
            }]
            | ['Geen BTW van toepassing', {
                'BTW-periode': string
            }]
            | ['Import van buiten de EU', {
                'BTW-periode': string
            }]
            | ['Intracommunautair', {
                'BTW-periode': string
            }]
            | ['Standaard', {
                'BTW-periode': string
            }]
        'Datum': number
        'Regels': pl.StateDictionary<{
            'Bedrag': 
                | ['Bekend', {
                    'Bedrag inclusief BTW': number
                    'BTW': number
                }]
                | ['Nog niet bekend', {
                    'Aantekeningen': string
                }]
            'Omschrijving': string
            'Type': 
                | ['Balans', {
                    'Balans item': string
                }]
                | ['Kosten', {
                    'Grootboekrekening': string
                }]
        }>
        'Type': 
            | ['Bonnetje', {}]
            | ['Inkoop (met crediteur)', {
                'Crediteur': string
                'Factuurnummer': string
            }]
            | ['Loonheffing', {
                'Ronde': string
            }]
            | ['Salaris', {
                'Medewerker': string
                'Ronde': string
            }]
            | ['WBSO', {
                'Ronde': string
            }]
    }>
    'Overige balans items': pl.StateDictionary<{
        'Beginsaldo': number
        'Grootboekrekening': string
        'Memoriaal boekingen': pl.StateDictionary<{
            'Bedrag': number
            'Datum': number
            'Grootboekrekening': string
            'Omschrijving': string
        }>
        'Nieuw': 
            | ['Ja', {}]
            | ['Nee', {
                'Balans item': string
                'Jaar': string
            }]
    }>
    'Resultaat grootboekrekeningen': pl.StateDictionary<{}>
    'Salarisrondes': pl.StateDictionary<{}>
    'Startdatum boekjaar': number
    'Verkopen': pl.StateDictionary<{
        'Afhandeling': 
            | ['Mutaties', {}]
            | ['Rekening courant', {
                'Rekening courant': string
            }]
        'Betalingstermijn': number
        'Brondocument': 
            | ['Nog toevoegen', {}]
            | ['Toegevoegd', {
                'Document': string
            }]
        'BTW-periode': string
        'Contracttype': 
            | ['Licentieovereenkomst', {
                'Overeenkomst': string
            }]
            | ['Project', {
                'Offerte': string
                'Project': string
            }]
        'Debiteur': string
        'Regels': pl.StateDictionary<{
            'Bedrag exclusief BTW': number
            'BTW-regime': 
                | ['Binnenland heffing verlegd', {}]
                | ['Export buiten de EU', {}]
                | ['Installatie of afstandsverkopen binnen de EU', {}]
                | ['Intracommunautair', {}]
                | ['Standaard', {
                    'BTW-cateogrie': string
                }]
            'Contracttype': 
                | ['Licentieovereenkomst', {
                    'Periode': string
                }]
                | ['Los', {}]
                | ['Project', {
                    'Opbrengst': string
                }]
            'Omschrijving': string
            'Type': 
                | ['Balans', {
                    'Balans item': string
                }]
                | ['Opbrengsten', {
                    'Grootboekrekening': string
                }]
        }>
    }>
    'Verrekenposten': pl.StateDictionary<{
        'Mutaties': pl.StateDictionary<{
            'Afhandeling': SAfhandeling
            'Bedrag': number
        }>
    }>
}>