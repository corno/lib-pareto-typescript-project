import * as pl from 'pareto-core-lib'
export function $$(
    Klanten: string,
    Licentieovereenkomsten: string,
    Periodes: string,
    //////
    Bedrag: string,
) {
    return {
        'Bedrag': FIXSTRING,
    }
}