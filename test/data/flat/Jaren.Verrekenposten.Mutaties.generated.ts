import * as pl from 'pareto-core-lib'
export function $$(
    Jaren: string,
    Verrekenposten: string,
    Mutaties: string,
    //////
    Bedrag: string,
) {
    return {
        'Bedrag': FIXSTRING,
        'Afhandeling': FIXCOMPONENT,
    }
}