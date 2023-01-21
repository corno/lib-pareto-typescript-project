import * as pr from 'pareto-core-raw'

import * as mliana from "../../../../pub/dist/modules/liana"
import {
    array,
    boolean,
    component,
    constrainedDictionary,
    dictionary,
    globalType,
    group,
    reference,
    string,
    taggedUnion,
} from "../../../../pub/dist/modules/liana/api/shorthands.p"

const d = pr.wrapRawDictionary

export const $: mliana.TModel = {
    'stringTypes': d({
        "text": null,
        "bedrag": null,
        "promillage": null,
        "datum": null,
    }),
    'globalTypes': d({
        "Accounting": globalType(group({
            "Beheer": [[], group({
                "Gebruikers": [[], dictionary(group({
                    "Volledige naam": [[], string("text")],
                }))],
                "Balans": [[], group({
                    "Hoofdcategorieen fiscus": [[], dictionary(group({
                        "Zijde": [[], taggedUnion({
                            "Activa": group({}),
                            "Passiva": group({}),
                        }, "Activa")],
                        "Subcategorieen": [[], dictionary(group({}))],
                    }))],
                    "Hoofdcategorieen": [[], dictionary(group({
                        "Zijde": [[], taggedUnion({
                            "Activa": group({}),
                            "Passiva": group({}),
                        }, "Activa")],
                        "Subcategorieen": [[], dictionary(group({
                            "Hoofdcategorie fiscus": [[], reference("Hoofdcategorieen fiscus")],
                            "Subcategorie fiscus": [[], reference("Subcategorieen")],
                        }))],
                    }))],
                    "Grootboekrekeningen": [[], dictionary(group({
                        "Hoofdcategorie": [[], reference("Hoofdcategorieen")],
                        "Subcategorie": [[], reference("Subcategorieen")],
                        "Zijde": [[], taggedUnion({
                            "Activa": group({}),
                            "Passiva": group({}),
                        }, "Activa")],
                    }))]
                })],
                "Resultaat": [[], group({
                    "Hoofdcategorieen fiscus": [[], dictionary(group({
                        "Zijde": [[], taggedUnion({
                            "Kosten": group({}),
                            "Opbrengsten": group({}),
                        }, "Kosten")],
                        "Subcategorieen": [[], dictionary(group({}))],
                    }))],
                    "Hoofdcategorieen": [[], dictionary(group({
                        "Zijde": [[], taggedUnion({
                            "Kosten": group({}),
                            "Opbrengsten": group({}),
                        }, "Kosten")],
                        "Subcategorieen": [[], dictionary(group({
                            "Hoofdcategorie fiscus": [[], reference("Hoofdcategorieen fiscus")],
                            "Subcategorie fiscus": [[], reference("Subcategorieen")],
                        }))],
                    }))],
                    "Correctietypes vennootschapsbelasting": [[], dictionary(group({}))],
                    "Grootboekrekeningen": [[], dictionary(group({
                        "Hoofdcategorie": [[], reference("Hoofdcategorieen")],
                        "Subcategorie": [[], reference("Subcategorieen")],
                        "Zijde": [[], taggedUnion({
                            "Kosten": group({
                                "Correctie op vennootschapsbelasting": [[], taggedUnion({
                                    "Nee": group({}),
                                    "Ja": group({
                                        "Correctietype": [[], reference("Correctietypes vennootschapsbelasting")]
                                    })
                                }, "Nee")]
                            }),
                            "Opbrengsten": group({}),
                        }, "Kosten")],
                    }))],
                })],
                "BTW-categorieen": [[], dictionary(group({
                    "BTW-heffing": [[], taggedUnion({
                        "Ja": group({
                            "BTW-promillage": [[], string("promillage")]
                        }),
                        "Nee": group({}),
                    }, "Nee")]
                }))]
            })],
            "Klanten": [[], dictionary(group({
                "Projecten": [[], dictionary(group({
                    "Offertes": [[], dictionary(group({
                        "Opbrengsten": [[], dictionary(group({
                            "Type": [[], taggedUnion({
                                "Project": group({
                                    "Betaaldatum": [[], string("datum")],
                                    "Bedrag": [[], string("bedrag")],
                                })
                            }, "Project")],
                        }))]
                    }))]
                }))],
                "Licentieovereenkomsten": [[], dictionary(group({
                    "Periodes": [[], dictionary(group({
                        "Bedrag": [[], string("bedrag")],
                    }))],
                }))],
            }))],
            "Medewerkers": [[], dictionary(group({}))],
            "Leveranciers": [[], dictionary(group({}))],
            "Bankrekeningen": [[], dictionary(group({}))],
            "Informele rekeningen": [[], dictionary(group({}))],
            "Jaren": [[
                "Beheer",
                "Klanten",
                "Medewerkers",
                "Leveranciers",
                "Bankrekeningen",
                "Informele rekeningen",
            ], dictionary(group({
                "Startdatum boekjar": [[], string("datum")],
                //""
                // 'startdatum': Date,
                // 'eersteboekjaar':
                // | ['ja', {}]
                // | ['nee', {
                //     'vorigboekjaar': string,
                // }]
                // 'beginsaldoWinstReserve': number,
                // 'afgesloten': boolean,
                // 'grootboekrekeningResultaat': string,
                // 'grootboekrekeningWinstreserve': string,
                // 'grootboekrekeningBTWAfrondingen': string,
                // 'beginsaldoBTW': number,
                // 'grootboekNogAanteGevenBTW': string,
                // 'grootboekInkoopSaldo': string,
                // 'grootboekVerkoopSaldo': string,
                // 'grootboekBTW': string,
                "Balans grootboekrekeningen": [[], constrainedDictionary("Balans grootboekrekeningen", group({
                    /////<---- HIER

                }))],
                "Resultaat grootboekrekeningen": [[], constrainedDictionary("Resultaat grootboekrekeningen", group({
                    /////<---- HIER

                }))],

                "Informele rekeningen": [[], constrainedDictionary("Informele rekeningen", group({
                    /////<---- HIER

                }))],
                "Overige balans items": [[], dictionary(group({
                    /////<---- HIER

                    "Memoriaal boekingen": [[], dictionary(group({

                        /////<---- HIER

                    }))],
                }))],
                "BTW periodes": [[], dictionary(group({
                    /////<---- HIER

                    "1. BTW-categorieen": [[], dictionary(group({
                        /////<---- HIER

                    }))],
                    "Documenten": [[], dictionary(group({
                        /////<---- HIER

                    }))],
                }))],
                "Salarisrondes": [[], dictionary(group({
                    /////<---- HIER

                }))],
                "Inkopen": [[], dictionary(group({
                    // 'datum': Date
                    // 'brondocument': string
                    // 'type':
                    // | ['bonnetje', {
                
                    // }]
                    // | ['inkoop', {
                    //     'factuurnummer': string
                    //     'crediteur': string
                    // }]
                    // | ['salaris', {
                    //     'ronde': string
                    //     'medewerker': string
                    // }]
                    // | ['loonheffing', {
                    //     'ronde': string
                    // }]
                    // | ['wbso', {
                    //     'ronde': string
                    // }]
                    // 'btw':
                    // | ['geen', {
                    //     'periode': string
                    // }]
                    // | ['standaard', {
                    //     'periode': string
                    // }]
                    // | ['binnenland', {
                    //     'periode': string
                    // }]
                    // | ['intracommunautair', {
                    //     'periode': string
                    // }]
                    // | ['import van buiten de EU', {
                    //     'periode': string
                    // }]
                    // 'afhandeling':
                    // | ['mutaties', {}]
                    // | ['rekening courant', {
                    //     'rekening courant': string
                    // }]
                    // | ['nog te betalen', {
                    //     'betalingstermijn': number
                    // }]
                    "Regels": [[], dictionary(group({
                        // 'bedrag':
                        // | ['bekend', {
                        //     'bedragInc': number,
                        //     'btw': number,
                        // }]
                        // | ['nog niet bekend', {
                        //     'aantekeningen': string,
                        // }],
                        // 'omschrijving': string,
                        // 'type':
                        // | ['kosten', {
                        //     'grootboekrekening': string
                        // }]
                        // | ['balans', {
                        //     'balansItem': string
                        // }]
                    }))],
                }))],
                "Verkopen": [[], dictionary(group({
                    /////<---- HIER

                    "Regels": [[], dictionary(group({
                        /////<---- HIER

                    }))],
                }))],
                "Verrekenposten": [[], dictionary(group({
                    /////<---- HIER

                    "Mutaties": [[], dictionary(group({
                        /////<---- HIER

                    }))],
                }))],
                "Bankrekeningen": [[], dictionary(group({
                    /////<---- HIER

                    "Mutaties": [[], dictionary(group({
                        /////<---- HIER

                    }))],
                }))],
            }))],
        })),
    }),
    'root': "Accounting",
}