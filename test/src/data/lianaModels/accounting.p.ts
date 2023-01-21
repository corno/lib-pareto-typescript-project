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
        "dagen": null,
        "datum": null,
        "multiline text": null,
        "promillage": null,
        "identifier": null,
        "single line text": null,
    }),
    'globalTypes': d({
        "Accounting": globalType(group({
            "Beheer": [[], group({
                "Gebruikers": [[], dictionary(group({
                    "Volledige naam": [[], string("single line text")],
                }))],
                "Balans": [[], group({
                    "Hoofdcategorieen fiscus": [[], dictionary(group({
                        "Zijde": [[], taggedUnion({
                            "Activa": group({}),
                            "Passiva": group({}),
                        })],
                        "Subcategorieen": [[], dictionary(group({}))],
                    }))],
                    "Hoofdcategorieen": [[], dictionary(group({
                        "Zijde": [[], taggedUnion({
                            "Activa": group({}),
                            "Passiva": group({}),
                        })],
                        "Subcategorieen": [[], dictionary(group({
                            "Hoofdcategorie fiscus": [[], reference(['parent'], "Hoofdcategorieen fiscus")],
                            "Subcategorie fiscus": [[], reference(['sibling'], "Subcategorieen")],
                        }))],
                    }))],
                    "Grootboekrekeningen": [[], dictionary(group({
                        "Hoofdcategorie": [[], reference(['parent'], "Hoofdcategorieen")],
                        "Subcategorie": [[], reference(['sibling'], "Subcategorieen")],
                        "Zijde": [[], taggedUnion({
                            "Activa": group({}),
                            "Passiva": group({}),
                        })],
                    }))]
                })],
                "Resultaat": [[], group({
                    "Hoofdcategorieen fiscus": [[], dictionary(group({
                        "Zijde": [[], taggedUnion({
                            "Kosten": group({}),
                            "Opbrengsten": group({}),
                        })],
                        "Subcategorieen": [[], dictionary(group({}))],
                    }))],
                    "Hoofdcategorieen": [[], dictionary(group({
                        "Zijde": [[], taggedUnion({
                            "Kosten": group({}),
                            "Opbrengsten": group({}),
                        })],
                        "Subcategorieen": [[], dictionary(group({
                            "Hoofdcategorie fiscus": [[], reference(['parent'], "Hoofdcategorieen fiscus")],
                            "Subcategorie fiscus": [[], reference(['sibling'], "Subcategorieen")],
                        }))],
                    }))],
                    "Correctietypes vennootschapsbelasting": [[], dictionary(group({}))],
                    "Grootboekrekeningen": [[], dictionary(group({
                        "Hoofdcategorie": [[], reference(['parent'], "Hoofdcategorieen")],
                        "Subcategorie": [[], reference(['sibling'], "Subcategorieen")],
                        "Zijde": [[], taggedUnion({
                            "Opbrengsten": group({}),
                            "Kosten": group({
                                "Correctie op vennootschapsbelasting": [[], taggedUnion({
                                    "Nee": group({}),
                                    "Ja": group({
                                        "Correctietype": [[], reference(['parent'], "Correctietypes vennootschapsbelasting")]
                                    })
                                })]
                            }),
                        })],
                    }))],
                })],
                "BTW-categorieen": [[], dictionary(group({
                    "BTW-heffing": [[], taggedUnion({
                        "Nee": group({}),
                        "Ja": group({
                            "BTW-promillage": [[], string("promillage")]
                        }),
                    })]
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
                            })],
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
                        "Vorig boekjaar": [[], reference(['self'], "Jaren")]
                    }),
                    "Ja": group({}),
                })],
                "Beginsaldo Winstreserve": [[], string("bedrag")],
                "Afgesloten": [[], taggedUnion({
                    "Nee": group({
                    }),
                    "Ja": group({}),
                })],
                "Grootboekrekening voor resultaat dit jaar": [[], reference(['parent'], "Grootboekrekeningen")],
                "Grootboekrekening voor winstreserve": [[], reference(['parent'], "Grootboekrekeningen")],
                "Grootboekrekening voor BTW afrondingen": [[], reference(['parent'], "Grootboekrekeningen")],
                "Beginsaldo nog aan te geven BTW": [[], string("bedrag")],
                "Grootboekrekening voor nog aan te geven BTW": [[], reference(['parent'], "Grootboekrekeningen")],
                "Grootboek inkoop saldo": [[], reference(['parent'], "Grootboekrekeningen")],
                "Grootboek verkoop saldo": [[], reference(['parent'], "Grootboekrekeningen")],
                "Grootboek BTW periode": [[], reference(['parent'], "Grootboekrekeningen")],
                "Balans grootboekrekeningen": [[], constrainedDictionary("Balans grootboekrekeningen", group({
                    "Type": [[], taggedUnion({
                        "Bankrekening": group({}),
                        "Informele rekening": group({}),
                        "Overig": group({}),
                    })],
                }))],
                "Resultaat grootboekrekeningen": [[], constrainedDictionary("Resultaat grootboekrekeningen", group({
                }))],

                "Informele rekeningen": [[], constrainedDictionary("Informele rekeningen", group({
                    "Grootboekrekening": [[], reference(['parent'], "Grootboekrekeningen")],
                    "Beginsaldo": [[], string("bedrag")],

                    "Nieuw": [[], taggedUnion({
                        "Nee": group({
                            "Jaar": [[], reference(['self'], "Jaar")],
                            "Rekening": [[], reference(['sibling'], "Informele Rekening")],
                        }),
                        "Ja": group({}),
                    })],
                }))],
                "Overige balans items": [[], dictionary(group({
                    "Beginsaldo": [[], string("bedrag")],
                    "Grootboekrekening": [[], reference(['parent'], "Grootboekrekeningen")],

                    "Nieuw": [[], taggedUnion({
                        "Nee": group({
                            "Jaar": [[], reference(['self'], "Jaar")],
                            "Balans item": [[], reference(['sibling'], "Balans Items")],
                        }),
                        "Ja": group({}),
                    })],

                    "Memoriaal boekingen": [[], dictionary(group({
                        "Bedrag": [[], string("bedrag")],
                        "Datum": [[], string("datum")],
                        "Grootboekrekening": [[], reference(['parent'], "Grootboekrekeningen")],
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
                    })],

                    "1. BTW-categorieen": [[], constrainedDictionary("BTW-categorieen", group({
                    }))],
                    "Documenten": [[], dictionary(group({
                        "Bestand": [[], string("bestand")]
                    }))],
                }))],
                "Salarisrondes": [[], dictionary(group({
                }))],
                "Inkopen": [[], dictionary(group({
                    "Datum": [[], string("datum")],
                    "Brondocument": [[], taggedUnion({
                        "Toegevoegd": group({
                            "Document": [[], string("bestand")],
                        }),
                        "Nog toevoegen": group({}),
                        "Niet van toepassing": group({}),
                        "Ontbreekt": group({}),
                    })],
                    "Type": [[], taggedUnion({
                        "Bonnetje": group({
                        }),
                        "Inkoop (met crediteur)": group({
                            "Factuurnummer": [[], string("identifier")],
                            "Crediteur": [[], reference(['parent'], "Leveranciers")],
                        }),
                        "Salaris": group({
                            "Ronde": [[], reference(['parent'], "Rondes")],
                            "Medewerker": [[], reference(['parent'], "Medewerkers")],
                        }),
                        "Loonheffing": group({
                            "Ronde": [[], reference(['parent'], "Rondes")],
                        }),
                        "WBSO": group({
                            "Ronde": [[], reference(['parent'], "Rondes")],
                        }),
                    })],
                    "BTW-regime": [[], taggedUnion({
                        "Standaard": group({
                            "BTW-periode": [[], reference(['parent'], "BTW Periodes")],
                        }),
                        "Geen BTW van toepassing": group({
                            "BTW-periode": [[], reference(['parent'], "BTW Periodes")],
                        }),
                        "Binnenland heffing verlegd": group({
                            "BTW-periode": [[], reference(['parent'], "BTW Periodes")],
                        }),
                        "Intracommunautair": group({
                            "BTW-periode": [[], reference(['parent'], "BTW Periodes")],
                        }),
                        "Import van buiten de EU": group({
                            "BTW-periode": [[], reference(['parent'], "BTW Periodes")],
                        }),
                    })],
                    "Afhandeling": [[], taggedUnion({
                        "Mutaties": group({
                        }),
                        "Rekening courant": group({
                            "Rekening courant": [[], reference(['parent'], "Rekeningen courant")],
                        }),
                        "Nog te betalen": group({
                            "Betalingstermijn": [[], string("dagen")],
                        }),
                    })],
                    "Regels": [[], dictionary(group({
                        "Omschrijving": [[], string("multiline text")],
                        "Bedrag": [[], taggedUnion({
                            "Bekend": group({
                                "Bedrag inclusief BTW": [[], string("bedrag")],
                                "BTW": [[], string("bedrag")],
                            }),
                            "Nog niet bekend": group({
                                "Aantekeningen": [[], string("multiline text")]
                            }),
                        })],
                        "Type": [[], taggedUnion({
                            "Kosten": group({
                                "Grootboekrekening": [[], reference(['parent'], "Grootboekrekeningen")],
                            }),
                            "Balans": group({
                                "Balans item": [[], reference(['parent'], "Balans Items")],
                            }),
                        })],
                    }))],
                }))],
                "Verkopen": [[], dictionary(group({
                    "Brondocument": [[], taggedUnion({
                        "Nog toevoegen": group({
                        }),
                        "Toegevoegd": group({
                            "Document": [[], string("bestand")]
                        }),
                    })],
                    "Betalingstermijn": [[], string("dagen")],
                    "Debiteur": [[], reference(['parent'], "Klanten")],
                    "BTW-periode": [[], reference(['parent'], "BTW-periodes")],

                    "Contracttype": [[], taggedUnion({
                        "Licentieovereenkomst": group({
                            "Overeenkomst": [[], reference(['parent'], "Overeenkomsten")],
                        }),
                        "Project": group({
                            "Project": [[], reference(['parent'], "Projecten")],
                            "Offerte": [[], reference(['sibling'], "Offerte")],
                        }),
                    })],

                    "Afhandeling": [[], taggedUnion({
                        "Mutaties": group({
                        }),
                        "Rekening courant": group({
                            "Rekening courant": [[], reference(['parent'], "Rekeningen courant")],
                        }),
                    })],
                    "Regels": [[], dictionary(group({
                        "Omschrijving": [[], string("multiline text")],
                        "Bedrag exclusief BTW": [[], string("bedrag")],
                        "Type": [[], taggedUnion({
                            "Opbrengsten": group({
                                "Grootboekrekening": [[], reference(['parent'], "GRootboekrekeningen")],
                            }),
                            "Balans": group({
                                "Balans item": [[], reference(['parent'], "Balans items")],
                            }),
                        })],
                        "BTW-regime": [[], taggedUnion({
                            "Standaard": group({
                                "BTW-cateogrie": [[], reference(['parent'], "BTW Categorieen")],
                            }),
                            "Binnenland heffing verlegd": group({
                            }),
                            "Intracommunautair": group({
                            }),
                            "Export buiten de EU": group({
                            }),
                            "Installatie of afstandsverkopen binnen de EU": group({
                            }),
                        })],
                        "Contracttype": [[], taggedUnion({
                            "Los": group({
                            }),
                            "Licentieovereenkomst": group({
                                "Periode": [[], reference(['parent'], "Periodes")],
                            }),
                            "Project": group({
                                "Opbrengst": [[], reference(['parent'], "Opbrengsten")],
                            }),
                        })],
                    }))],
                }))],
                "Verrekenposten": [[], dictionary(group({
                    "Mutaties": [[], dictionary(group({
                        "Bedrag": [[], string("bedrag")],
                        "Afhandeling": [[], component("Afhandeling")]
                    }))],
                }))],
                "Bankrekeningen": [[], dictionary(group({
                    "Beginsaldo": [[], string("bedrag")],
                    "Nieuw": [[], taggedUnion({
                        "Nee": group({
                            "Jaar": [[], reference(['parent'], "Jaar")],
                            "Rekening": [[], reference(['parent'], "Bankrekeningen")],
                        }),
                        "Ja": group({}),
                    })],
                    "Grootboekrekening": [[], reference(['parent'], "Grootboekrekeningen")],
                    "Mutaties": [[], dictionary(group({
                        "Omschrijving": [[], string("multiline text")],
                        "Bedrag": [[], string("bedrag")],
                        "Datum": [[], string("datum")],
                        "Status": [[], taggedUnion({
                            "Nog te verwerken": group({}),
                            "Verwerkt": group({
                                "Afhandeling": [[], component("Afhandeling")]
                            })
                        })]
                    }))],
                }))],
            }))],
        })),
        "Afhandeling": globalType(taggedUnion({
            "Inkoop": group({
                "Jaar": [[], reference(['self'], "Jaren")],
                "Inkoop": [[], reference(['sibling'], "Inkopen")],
            }),
            "Verkoop": group({
                "Jaar": [[], reference(['self'], "Jaren")],
                "Inkoop": [[], reference(['sibling'], "Verkopen")],
            }),
            "BTW-periode": group({
                "Jaar": [[], reference(['self'], "Jaren")],
                "BTW-periode": [[], reference(['sibling'], "BTW-periodes")],
            }),
            "Verrekenpost": group({
                "Verrekenpost": [[], reference(['parent'], "Verrekenposten")],
            }),
            "Informele rekening": group({
                "Informele rekening": [[], reference(['parent'], "Informele rekeningen")],
            }),
        }))
    }),
    'root': "Accounting",
}