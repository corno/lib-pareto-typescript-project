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
        "bedrag": null,
        "bestand": null,
        "datum": null,
        "multiline text": null,
        "promillage": null,
        "text": null,
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
                "Startdatum boekjaar": [[], string("datum")],
                "Eerste boekjaar": [[], taggedUnion({
                    "Nee": group({
                        "Vorig boekjaar": [[], reference("Jaren")]
                    }),
                    "Ja": group({}),
                }, "Ja")],
                "Beginsaldo Winstreserve": [[], string("bedrag")],
                "Afgesloten": [[], taggedUnion({
                    "Nee": group({
                    }),
                    "Ja": group({}),
                }, "Nee")],
                "Grootboekrekening voor resultaat dit jaar": [[], reference("Grootboekrekeningen")],
                "Grootboekrekening voor winstreserve": [[], reference("Grootboekrekeningen")],
                "Grootboekrekening voor BTW afrondingen": [[], reference("Grootboekrekeningen")],
                "Beginsaldo nog aan te geven BTW": [[], string("bedrag")],
                "Grootboekrekening voor nog aan te geven BTW": [[], reference("Grootboekrekeningen")],
                "Grootboek inkoop saldo": [[], reference("Grootboekrekeningen")],
                "Grootboek verkoop saldo": [[], reference("Grootboekrekeningen")],
                "Grootboek BTW periode": [[], reference("Grootboekrekeningen")],
                "Balans grootboekrekeningen": [[], constrainedDictionary("Balans grootboekrekeningen", group({
                    "Type": [[], taggedUnion({
                        "Bankrekening": group({}),
                        "Informele rekening": group({}),
                        "Overig": group({}),
                    }, "Bankrekening")],
                }))],
                "Resultaat grootboekrekeningen": [[], constrainedDictionary("Resultaat grootboekrekeningen", group({
                }))],

                "Informele rekeningen": [[], constrainedDictionary("Informele rekeningen", group({
                    "Grootboekrekening": [[], reference("Grootboekrekeningen")],
                    "Beginsaldo": [[], string("bedrag")],

                    "Nieuw": [[], taggedUnion({
                        "Nee": group({
                            "Jaar": [[], reference("Jaar")],
                            "Rekening": [[], reference("Informele Rekening")],
                        }),
                        "Ja": group({}),
                    }, "Ja")],
                }))],
                "Overige balans items": [[], dictionary(group({
                    "Beginsaldo": [[], string("bedrag")],
                    "Grootboekrekening": [[], reference("Grootboekrekeningen")],

                    "Nieuw": [[], taggedUnion({
                        "Nee": group({
                            "Jaar": [[], reference("Jaar")],
                            "Balans item": [[], reference("Balans Items")],
                        }),
                        "Ja": group({}),
                    }, "Ja")],

                    "Memoriaal boekingen": [[], dictionary(group({
                        "Bedrag": [[], string("bedrag")],
                        "Datum": [[], string("datum")],
                        "Grootboekrekening": [[], reference("Grootboekrekeningen")],
                        "Omschrijving": [[], string("multiline text")],
                    }))],
                }))],
                "BTW periodes": [[], dictionary(group({
                    "Omschrijving": [[], string("multiline text")],
                    "Status": [[], taggedUnion({
                        "Aangegeven": group({
                            "Bedrag": [[], string("bedrag")],
                            "Afronding": [[], string("bedrag")],
                            "Datum": [[], string("datum")],
                        }),
                        "Openstaand": group({}),
                    }, "Openstaand")],

                    "1. BTW-categorieen": [[], constrainedDictionary("BTW-categorieen", group({
                    }))],
                    "Documenten": [[], dictionary(group({
                        "Bestand": [[], string("bestand")]
                    }))],
                }))],
                "Salarisrondes": [[], dictionary(group({
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
                    "Mutaties": [[], dictionary(group({
                        "Bedrag": [[], string("bedrag")],
                        "Afhandeling": [[], taggedUnion({
                            "Inkoop": group({
                                "Jaar": [[], reference("Jaren")],
                                "Inkoop": [[], reference("Inkopen")],
                            }),
                            "Verkoop": group({
                                "Jaar": [[], reference("Jaren")],
                                "Inkoop": [[], reference("Verkopen")],
                            }),
                            "BTW-periode": group({
                                "Jaar": [[], reference("Jaren")],
                                "BTW-periode": [[], reference("BTW-periodes")],
                            }),
                            "Verrekenpost": group({
                                "Verrekenpost": [[], reference("Verrekenposten")],
                            }),
                            "Informele rekening": group({
                                "Informele rekening": [[], reference("Informele rekeningen")],
                            }),
                        }, "Inkoop")]
                    }))],
                }))],
                "Bankrekeningen": [[], dictionary(group({
                    "Beginsaldo": [[], string("bedrag")],
                    "Nieuw": [[], taggedUnion({
                        "Nee": group({
                            "Jaar": [[], reference("Jaar")],
                            "Rekening": [[], reference("Bankrekeningen")],
                        }),
                        "Ja": group({}),
                    }, "Ja")],
                    "Grootboekrekening": [[], reference("Grootboekrekeningen")],
                    "Mutaties": [[], dictionary(group({
                        "Omschrijving": [[], string("multiline text")],
                        "Bedrag": [[], string("bedrag")],
                        "Datum": [[], string("datum")],
                        "Status": [[], taggedUnion({
                            "Nog te verwerken": group({}),
                            "Verwerkt": group({
                                "Afhandeling": [[], taggedUnion({
                                    "Inkoop": group({
                                        "Jaar": [[], reference("Jaren")],
                                        "Inkoop": [[], reference("Inkopen")],
                                    }),
                                    "Verkoop": group({
                                        "Jaar": [[], reference("Jaren")],
                                        "Inkoop": [[], reference("Verkopen")],
                                    }),
                                    "BTW-periode": group({
                                        "Jaar": [[], reference("Jaren")],
                                        "BTW-periode": [[], reference("BTW-periodes")],
                                    }),
                                    "Verrekenpost": group({
                                        "Verrekenpost": [[], reference("Verrekenposten")],
                                    }),
                                    "Informele rekening": group({
                                        "Informele rekening": [[], reference("Informele rekeningen")],
                                    }),
                                }, "Inkoop")]
                            })
                        }, "Nog te verwerken")]
                    }))],
                }))],
            }))],
        })),
    }),
    'root': "Accounting",
}