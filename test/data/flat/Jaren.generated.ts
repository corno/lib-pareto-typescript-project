import * as pl from 'pareto-core-lib'
export function $$(
    Jaren: string,
    //////
    Startdatum boekjaar: string,
    Eerste boekjaar: string,
    operation: string,
    Eerste boekjaar_Nee_Vorig boekjaar: string,
    Beginsaldo Winstreserve: string,
    Afgesloten: string,
    operation: string,
    Grootboekrekening voor resultaat dit jaar: string,
    Grootboekrekening voor winstreserve: string,
    Grootboekrekening voor BTW afrondingen: string,
    Beginsaldo nog aan te geven BTW: string,
    Grootboekrekening voor nog aan te geven BTW: string,
    Grootboek inkoop saldo: string,
    Grootboek verkoop saldo: string,
    Grootboek BTW periode: string,
) {
    return {
        'Startdatum boekjaar': FIXSTRING,
        'Eerste boekjaar': pl.cc(Eerste boekjaar, ($) => {
            switch ($) {
                case "Nee": {
                    return ['Nee', {
                        'Vorig boekjaar': FIXSTRING,
                    }]
                }
                case "Ja": {
                    return ['Ja', {}]
                }
                default: pl.panic(`UNEXPECTED VALUE: ${Eerste boekjaar}`)
            }
        }),
        'Beginsaldo Winstreserve': FIXSTRING,
        'Afgesloten': pl.cc(Afgesloten, ($) => {
            switch ($) {
                case "Nee": {
                    return ['Nee', {}]
                }
                case "Ja": {
                    return ['Ja', {}]
                }
                default: pl.panic(`UNEXPECTED VALUE: ${Afgesloten}`)
            }
        }),
        'Grootboekrekening voor resultaat dit jaar': FIXSTRING,
        'Grootboekrekening voor winstreserve': FIXSTRING,
        'Grootboekrekening voor BTW afrondingen': FIXSTRING,
        'Beginsaldo nog aan te geven BTW': FIXSTRING,
        'Grootboekrekening voor nog aan te geven BTW': FIXSTRING,
        'Grootboek inkoop saldo': FIXSTRING,
        'Grootboek verkoop saldo': FIXSTRING,
        'Grootboek BTW periode': FIXSTRING,
        'Balans grootboekrekeningen': {},
        'Resultaat grootboekrekeningen': {},
        'Informele rekeningen': FIXCOMPONENT,
        'Overige balans items': {},
        'BTW periodes': {},
        'Salarisrondes': {},
        'Inkopen': {},
        'Verkopen': {},
        'Verrekenposten': {},
        'Bankrekeningen': {},
    }
}