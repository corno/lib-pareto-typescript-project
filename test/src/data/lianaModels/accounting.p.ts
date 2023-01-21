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
                            "Hoofdcategorie fiscus": [[], reference("Hoofdcategorieen fiscus")],
                            "Subcategorie fiscus": [[], reference("Subcategorieen")],
                        }))],
                    }))],
                    "Correctietypes vennootschapsbelasting": [[], dictionary(group({}))],
                    "Grootboekrekeningen": [[], dictionary(group({
                        "Hoofdcategorie": [[], reference("Hoofdcategorieen")],
                        "Subcategorie": [[], reference("Subcategorieen")],
                        "Zijde": [[], taggedUnion({
                            "Opbrengsten": group({}),
                            "Kosten": group({
                                "Correctie op vennootschapsbelasting": [[], taggedUnion({
                                    "Nee": group({}),
                                    "Ja": group({
                                        "Correctietype": [[], reference("Correctietypes vennootschapsbelasting")]
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
                        "Vorig boekjaar": [[], reference("Jaren")]
                    }),
                    "Ja": group({}),
                })],
                "Beginsaldo Winstreserve": [[], string("bedrag")],
                "Afgesloten": [[], taggedUnion({
                    "Nee": group({
                    }),
                    "Ja": group({}),
                })],
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
                    })],
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
                    })],
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
                    })],

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
                            "Crediteur": [[], reference("Leveranciers")],
                        }),
                        "Salaris": group({
                            "Ronde": [[], reference("Rondes")],
                            "Medewerker": [[], reference("Medewerkers")],
                        }),
                        "Loonheffing": group({
                            "Ronde": [[], reference("Rondes")],
                        }),
                        "WBSO": group({
                            "Ronde": [[], reference("Rondes")],
                        }),
                    })],
                    "BTW-regime": [[], taggedUnion({
                        "Standaard": group({
                            "BTW-periode": [[], reference("BTW Periodes")],
                        }),
                        "Geen BTW van toepassing": group({
                            "BTW-periode": [[], reference("BTW Periodes")],
                        }),
                        "Binnenland heffing verlegd": group({
                            "BTW-periode": [[], reference("BTW Periodes")],
                        }),
                        "Intracommunautair": group({
                            "BTW-periode": [[], reference("BTW Periodes")],
                        }),
                        "Import van buiten de EU": group({
                            "BTW-periode": [[], reference("BTW Periodes")],
                        }),
                    })],
                    "Afhandeling": [[], taggedUnion({
                        "Mutaties": group({
                        }),
                        "Rekening courant": group({
                            "Rekening courant": [[], reference("Rekeningen courant")],
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
                                "Grootboekrekening": [[], reference("Grootboekrekeningen")],
                            }),
                            "Balans": group({
                                "Balans item": [[], reference("Balans Items")],
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
                    "Debiteur": [[], reference("Klanten")],
                    "BTW-periode": [[], reference("BTW-periodes")],

                    "Contracttype": [[], taggedUnion({
                        "Licentieovereenkomst": group({
                            "Overeenkomst": [[], reference("Overeenkomsten")],
                        }),
                        "Project": group({
                            "Project": [[], reference("Projecten")],
                            "Offerte": [[], reference("Offerte")],
                        }),
                    })],

                    "Afhandeling": [[], taggedUnion({
                        "Mutaties": group({
                        }),
                        "Rekening courant": group({
                            "Rekening courant": [[], reference("Rekeningen courant")],
                        }),
                    })],
                    "Regels": [[], dictionary(group({
                        "Omschrijving": [[], string("multiline text")],
                        "Bedrag exclusief BTW": [[], string("bedrag")],
                        "Type": [[], taggedUnion({
                            "Opbrengsten": group({
                                "Grootboekrekening": [[], reference("GRootboekrekeningen")],
                            }),
                            "Balans": group({
                                "Balans item": [[], reference("Balans items")],
                            }),
                        })],
                        "BTW-regime": [[], taggedUnion({
                            "Standaard": group({
                                "BTW-cateogrie": [[], reference("BTW Categorieen")],
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
                                "Periode": [[], reference("Periodes")],
                            }),
                            "Project": group({
                                "Opbrengst": [[], reference("Opbrengsten")],
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
                            "Jaar": [[], reference("Jaar")],
                            "Rekening": [[], reference("Bankrekeningen")],
                        }),
                        "Ja": group({}),
                    })],
                    "Grootboekrekening": [[], reference("Grootboekrekeningen")],
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
        }))
    }),
    'root': "Accounting",
}