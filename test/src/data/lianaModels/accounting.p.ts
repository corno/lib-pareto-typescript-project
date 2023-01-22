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
        "Accounting": globalType([], group({
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
                            "Hoofdcategorie fiscus": [[], reference(['parent', null], "Hoofdcategorieen fiscus")],
                            "Subcategorie fiscus": [[], reference(['sibling', "Hoofdcategorie fiscus"], "Subcategorieen")],
                        }))],
                    }))],
                    "Grootboekrekeningen": [[], dictionary(group({
                        "Hoofdcategorie": [[], reference(['parent', null], "Hoofdcategorieen")],
                        "Subcategorie": [[], reference(['sibling', "Hoofdcategorie"], "Subcategorieen")],
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
                            "Hoofdcategorie fiscus": [[], reference(['parent', null], "Hoofdcategorieen fiscus")],
                            "Subcategorie fiscus": [[], reference(['sibling', "Hoofdcategorie fiscus"], "Subcategorieen")],
                        }))],
                    }))],
                    "Correctietypes vennootschapsbelasting": [[], dictionary(group({}))],
                    "Grootboekrekeningen": [[], dictionary(group({
                        "Hoofdcategorie": [[], reference(['parent', null], "Hoofdcategorieen")],
                        "Subcategorie": [[], reference(['sibling', "Hoofdcategorie"], "Subcategorieen")],
                        "Zijde": [[], taggedUnion({
                            "Opbrengsten": group({}),
                            "Kosten": group({
                                "Correctie op vennootschapsbelasting": [[], taggedUnion({
                                    "Nee": group({}),
                                    "Ja": group({
                                        "Correctietype": [[], reference(['parent', null], "Correctietypes vennootschapsbelasting")]
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
            ], component("Jaren", [])],
        })),
        "Informele Rekeningen": globalType([], constrainedDictionary(['self', null], "Informele rekeningen", group({
            "Grootboekrekening": [[], reference(['parent', null], "Grootboekrekeningen")],
            "Beginsaldo": [[], string("bedrag")],

            "Nieuw": [[], taggedUnion({
                "Nee": group({
                    "Jaar": [[], reference(['self', null], "Jaar")],
                    "Rekening": [[], reference(['sibling', "Jaar"], "Informele Rekening")],
                }),
                "Ja": group({}),
            })],
        }))),
        "Jaren": globalType([], dictionary(group({
            "Startdatum boekjaar": [[], string("datum")],
            "Eerste boekjaar": [[], taggedUnion({
                "Nee": group({
                    "Vorig boekjaar": [[], reference(['self', null], "Jaren")]
                }),
                "Ja": group({}),
            })],
            "Beginsaldo Winstreserve": [[], string("bedrag")],
            "Afgesloten": [[], taggedUnion({
                "Nee": group({
                }),
                "Ja": group({}),
            })],
            "Grootboekrekening voor resultaat dit jaar": [[], reference(['parent', null], "Grootboekrekeningen")],
            "Grootboekrekening voor winstreserve": [[], reference(['parent', null], "Grootboekrekeningen")],
            "Grootboekrekening voor BTW afrondingen": [[], reference(['parent', null], "Grootboekrekeningen")],
            "Beginsaldo nog aan te geven BTW": [[], string("bedrag")],
            "Grootboekrekening voor nog aan te geven BTW": [[], reference(['parent', null], "Grootboekrekeningen")],
            "Grootboek inkoop saldo": [[], reference(['parent', null], "Grootboekrekeningen")],
            "Grootboek verkoop saldo": [[], reference(['parent', null], "Grootboekrekeningen")],
            "Grootboek BTW periode": [[], reference(['parent', null], "Grootboekrekeningen")],
            "Balans grootboekrekeningen": [[], constrainedDictionary(['self', null], "Balans grootboekrekeningen", group({
                "Type": [[], taggedUnion({
                    "Bankrekening": group({}),
                    "Informele rekening": group({}),
                    "Overig": group({}),
                })],
            }))],
            "Resultaat grootboekrekeningen": [[], constrainedDictionary(['self', null], "Resultaat grootboekrekeningen", group({
            }))],

            "Informele rekeningen": [[], component("Informele Rekeningen", [])],
            "Overige balans items": [[], dictionary(group({
                "Beginsaldo": [[], string("bedrag")],
                "Grootboekrekening": [[], reference(['parent', null], "Grootboekrekeningen")],

                "Nieuw": [[], taggedUnion({
                    "Nee": group({
                        "Jaar": [[], reference(['self', null], "Jaren")],
                        "Balans item": [[], reference(['sibling', "Jaar"], "Balans Items")],
                    }),
                    "Ja": group({}),
                })],

                "Memoriaal boekingen": [[], dictionary(group({
                    "Bedrag": [[], string("bedrag")],
                    "Datum": [[], string("datum")],
                    "Grootboekrekening": [[], reference(['parent', null], "Grootboekrekeningen")],
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

                "1. BTW-categorieen": [[], constrainedDictionary(['self', null], "BTW-categorieen", group({
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
                        "Crediteur": [[], reference(['parent', null], "Leveranciers")],
                    }),
                    "Salaris": group({
                        "Ronde": [[], reference(['parent', null], "Rondes")],
                        "Medewerker": [[], reference(['parent', null], "Medewerkers")],
                    }),
                    "Loonheffing": group({
                        "Ronde": [[], reference(['parent', null], "Rondes")],
                    }),
                    "WBSO": group({
                        "Ronde": [[], reference(['parent', null], "Rondes")],
                    }),
                })],
                "BTW-regime": [[], taggedUnion({
                    "Standaard": group({
                        "BTW-periode": [[], reference(['parent', null], "BTW Periodes")],
                    }),
                    "Geen BTW van toepassing": group({
                        "BTW-periode": [[], reference(['parent', null], "BTW Periodes")],
                    }),
                    "Binnenland heffing verlegd": group({
                        "BTW-periode": [[], reference(['parent', null], "BTW Periodes")],
                    }),
                    "Intracommunautair": group({
                        "BTW-periode": [[], reference(['parent', null], "BTW Periodes")],
                    }),
                    "Import van buiten de EU": group({
                        "BTW-periode": [[], reference(['parent', null], "BTW Periodes")],
                    }),
                })],
                "Afhandeling": [[], taggedUnion({
                    "Mutaties": group({
                    }),
                    "Rekening courant": group({
                        "Rekening courant": [[], reference(['parent', null], "Rekeningen courant")],
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
                            "Grootboekrekening": [[], reference(['parent', null], "Grootboekrekeningen")],
                        }),
                        "Balans": group({
                            "Balans item": [[], reference(['parent', null], "Balans Items")],
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
                "Debiteur": [[], reference(['parent', null], "Klanten")],
                "BTW-periode": [[], reference(['parent', null], "BTW-periodes")],

                "Contracttype": [[], taggedUnion({
                    "Licentieovereenkomst": group({
                        "Overeenkomst": [[], reference(['parent', null], "Overeenkomsten")],
                    }),
                    "Project": group({
                        "Project": [[], reference(['parent', null], "Projecten")],
                        "Offerte": [[], reference(['sibling', "Project"], "Offerte")],
                    }),
                })],

                "Afhandeling": [[], taggedUnion({
                    "Mutaties": group({
                    }),
                    "Rekening courant": group({
                        "Rekening courant": [[], reference(['parent', null], "Rekeningen courant")],
                    }),
                })],
                "Regels": [[], dictionary(group({
                    "Omschrijving": [[], string("multiline text")],
                    "Bedrag exclusief BTW": [[], string("bedrag")],
                    "Type": [[], taggedUnion({
                        "Opbrengsten": group({
                            "Grootboekrekening": [[], reference(['parent', null], "GRootboekrekeningen")],
                        }),
                        "Balans": group({
                            "Balans item": [[], reference(['parent', null], "Balans items")],
                        }),
                    })],
                    "BTW-regime": [[], taggedUnion({
                        "Standaard": group({
                            "BTW-cateogrie": [[], reference(['parent', null], "BTW Categorieen")],
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
                            "Periode": [[], reference(['parent', null], "Periodes")],
                        }),
                        "Project": group({
                            "Opbrengst": [[], reference(['parent', null], "Opbrengsten")],
                        }),
                    })],
                }))],
            }))],
            "Verrekenposten": [[], dictionary(group({
                "Mutaties": [[], dictionary(group({
                    "Bedrag": [[], string("bedrag")],
                    "Afhandeling": [[], component("Afhandeling", [])]
                }))],
            }))],
            "Bankrekeningen": [[], dictionary(group({
                "Beginsaldo": [[], string("bedrag")],
                "Nieuw": [[], taggedUnion({
                    "Nee": group({
                        "Jaar": [[], reference(['parent', null], "Jaar")],
                        "Rekening": [[], reference(['parent', null], "Bankrekeningen")],
                    }),
                    "Ja": group({}),
                })],
                "Grootboekrekening": [[], reference(['parent', null], "Grootboekrekeningen")],
                "Mutaties": [[], dictionary(group({
                    "Omschrijving": [[], string("multiline text")],
                    "Bedrag": [[], string("bedrag")],
                    "Datum": [[], string("datum")],
                    "Status": [[], taggedUnion({
                        "Nog te verwerken": group({}),
                        "Verwerkt": group({
                            "Afhandeling": [[], component("Afhandeling", [])]
                        })
                    })]
                }))],
            }))],
        }))),
        "Afhandeling": globalType(["Informele Rekeningen", "Jaren", "Verrekenposten"], taggedUnion({
            "Inkoop": group({
                "Jaar": [[], reference(['parameter', "Jaren"], "Jaren")],
                "Inkoop": [[], reference(['sibling', "Jaar"], "Inkopen")],
            }),
            "Verkoop": group({
                "Jaar": [[], reference(['parameter', "Jaren"], "Jaren")],
                "Inkoop": [[], reference(['sibling', "Jaar"], "Verkopen")],
            }),
            "BTW-periode": group({
                "Jaar": [[], reference(['parameter', "Jaren"], "Jaren")],
                "BTW-periode": [[], reference(['sibling', "Jaar"], "BTW-periodes")],
            }),
            "Verrekenpost": group({
                "Verrekenpost": [[], reference(['parameter', "Verrekenposten"], "Verrekenposten")],
            }),
            "Informele rekening": group({
                "Informele rekening": [[], reference(['parameter', "Informele Rekeningen"], "Informele rekeningen")],
            }),
        }))
    }),
    'root': "Accounting",
}