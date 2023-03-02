import * as pl from 'pareto-core-lib'

function assertNotNull($: null | string): string { if ($ === null) { throw new Error("UNEXPECTED NULL") }; return $ }

export function $$(
    FIX PARENT PATH
    id: string,
    item_operation: string,
    //////
    prop_Startdatum__boekjaar: null | string,
    prop_Eerste__boekjaar: null | string,
    operation_Eerste__boekjaar: null | string,
    prop_Eerste__boekjaar_$Nee_$Vorig__boekjaar: null | string,
    prop_Beginsaldo__Winstreserve: null | string,
    prop_Afgesloten: null | string,
    operation_Afgesloten: null | string,
    prop_Grootboekrekening__voor__resultaat__dit__jaar: null | string,
    prop_Grootboekrekening__voor__winstreserve: null | string,
    prop_Grootboekrekening__voor__BTW__afrondingen: null | string,
    prop_Beginsaldo__nog__aan__te__geven__BTW: null | string,
    prop_Grootboekrekening__voor__nog__aan__te__geven__BTW: null | string,
    prop_Grootboek__inkoop__saldo: null | string,
    prop_Grootboek__verkoop__saldo: null | string,
    prop_Grootboek__BTW__periode: null | string,
) {
    return  {
        'parents': {
            FIX PARENT PATH
        },
        'id': id,
        'data': {
            'Startdatum boekjaar': parseInt(assertNotNull(prop_Startdatum__boekjaar)),
            'Eerste boekjaar': pl.cc(prop_Eerste__boekjaar, ($) => {
                switch ($) {
                    case 'Nee': {
                        return ['Nee', {
                            'Vorig boekjaar': prop_Eerste__boekjaar_$Nee_$Vorig__boekjaar,
                        }]
                    }
                    case 'Ja': {
                        return ['Ja', {}]
                    }
                    default: pl.panic(`UNEXPECTED VALUE: '${prop_Eerste__boekjaar}'`)
                }
            }),
            'Beginsaldo Winstreserve': parseInt(assertNotNull(prop_Beginsaldo__Winstreserve)),
            'Afgesloten': pl.cc(prop_Afgesloten, ($) => {
                switch ($) {
                    case 'Nee': {
                        return ['Nee', {}]
                    }
                    case 'Ja': {
                        return ['Ja', {}]
                    }
                    default: pl.panic(`UNEXPECTED VALUE: '${prop_Afgesloten}'`)
                }
            }),
            'Grootboekrekening voor resultaat dit jaar': prop_Grootboekrekening__voor__resultaat__dit__jaar,
            'Grootboekrekening voor winstreserve': prop_Grootboekrekening__voor__winstreserve,
            'Grootboekrekening voor BTW afrondingen': prop_Grootboekrekening__voor__BTW__afrondingen,
            'Beginsaldo nog aan te geven BTW': parseInt(assertNotNull(prop_Beginsaldo__nog__aan__te__geven__BTW)),
            'Grootboekrekening voor nog aan te geven BTW': prop_Grootboekrekening__voor__nog__aan__te__geven__BTW,
            'Grootboek inkoop saldo': prop_Grootboek__inkoop__saldo,
            'Grootboek verkoop saldo': prop_Grootboek__verkoop__saldo,
            'Grootboek BTW periode': prop_Grootboek__BTW__periode,
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
}