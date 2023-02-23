import * as pd from 'pareto-core-data'

import * as gliana2pareto from "../../../../../pub/dist/submodules/liana2pareto"
import {
    d,
    r,
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
} from "../../../../../pub/dist/submodules/liana/shorthands"



export const $: gliana2pareto.T.MappedModel<pd.SourceLocation> = {
    'stringmapping': pd.d({
        "bedrag": ['number', null],
        "bestand": ['string', null],
        "dagen": ['number', null],
        "datum": ['number', null],
        "multiline text": ['string', null],
        "promillage": ['number', null],
        "identifier": ['string', null],
        "single line text": ['string', null],
    }),
    'model': {
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
            "Accounting": globalType({}, group({
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
                                "Hoofdcategorie fiscus": [[], reference(['parent', null], [])],
                                "Subcategorie fiscus": [[], reference(['sibling', "Hoofdcategorie fiscus"], [])],
                            }))],
                        }))],
                        "Grootboekrekeningen": [[], dictionary(group({
                            "Hoofdcategorie": [[], reference(['parent', null], [])],
                            "Subcategorie": [[], reference(['sibling', "Hoofdcategorie"], [])],
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
                                "Hoofdcategorie fiscus": [[], reference(['parent', null], [])],
                                "Subcategorie fiscus": [[], reference(['sibling', "Hoofdcategorie fiscus"], [])],
                            }))],
                        }))],
                        "Correctietypes vennootschapsbelasting": [[], dictionary(group({}))],
                        "Grootboekrekeningen": [[], dictionary(group({
                            "Hoofdcategorie": [[], reference(['parent', null], [])],
                            "Subcategorie": [[], reference(['sibling', "Hoofdcategorie"], [])],
                            "Zijde": [[], taggedUnion({
                                "Opbrengsten": group({}),
                                "Kosten": group({
                                    "Correctie op vennootschapsbelasting": [[], taggedUnion({
                                        "Nee": group({}),
                                        "Ja": group({
                                            "Correctietype": [[], reference(['parent', null], [])]
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
                ], component("Jaren", {})],
            })),
            "Informele Rekeningen": globalType({}, constrainedDictionary(['self', null], [], group({
                "Grootboekrekening": [[], reference(['parent', null], [])],
                "Beginsaldo": [[], string("bedrag")],

                "Nieuw": [[], taggedUnion({
                    "Nee": group({
                        "Jaar": [[], reference(['self', null], [])],
                        "Rekening": [[], reference(['sibling', "Jaar"], [])],
                    }),
                    "Ja": group({}),
                })],
            }))),
            "Jaren": globalType({}, dictionary(group({
                "Startdatum boekjaar": [[], string("datum")],
                "Eerste boekjaar": [[], taggedUnion({
                    "Nee": group({
                        "Vorig boekjaar": [[], reference(['self', null], [])]
                    }),
                    "Ja": group({}),
                })],
                "Beginsaldo Winstreserve": [[], string("bedrag")],
                "Afgesloten": [[], taggedUnion({
                    "Nee": group({
                    }),
                    "Ja": group({}),
                })],
                "Grootboekrekening voor resultaat dit jaar": [[], reference(['parent', null], [])],
                "Grootboekrekening voor winstreserve": [[], reference(['parent', null], [])],
                "Grootboekrekening voor BTW afrondingen": [[], reference(['parent', null], [])],
                "Beginsaldo nog aan te geven BTW": [[], string("bedrag")],
                "Grootboekrekening voor nog aan te geven BTW": [[], reference(['parent', null], [])],
                "Grootboek inkoop saldo": [[], reference(['parent', null], [])],
                "Grootboek verkoop saldo": [[], reference(['parent', null], [])],
                "Grootboek BTW periode": [[], reference(['parent', null], [])],
                "Balans grootboekrekeningen": [[], constrainedDictionary(['self', null], [], group({
                    "Type": [[], taggedUnion({
                        "Bankrekening": group({}),
                        "Informele rekening": group({}),
                        "Overig": group({}),
                    })],
                }))],
                "Resultaat grootboekrekeningen": [[], constrainedDictionary(['self', null], [], group({
                }))],

                "Informele rekeningen": [[], component("Informele Rekeningen", {})],
                "Overige balans items": [[], dictionary(group({
                    "Beginsaldo": [[], string("bedrag")],
                    "Grootboekrekening": [[], reference(['parent', null], [])],

                    "Nieuw": [[], taggedUnion({
                        "Nee": group({
                            "Jaar": [[], reference(['self', null], [])],
                            "Balans item": [[], reference(['sibling', "Jaar"], [])],
                        }),
                        "Ja": group({}),
                    })],

                    "Memoriaal boekingen": [[], dictionary(group({
                        "Bedrag": [[], string("bedrag")],
                        "Datum": [[], string("datum")],
                        "Grootboekrekening": [[], reference(['parent', null], [])],
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

                    "1. BTW-categorieen": [[], constrainedDictionary(['self', null], [], group({
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
                            "Crediteur": [[], reference(['parent', null], [])],
                        }),
                        "Salaris": group({
                            "Ronde": [[], reference(['parent', null], [])],
                            "Medewerker": [[], reference(['parent', null], [])],
                        }),
                        "Loonheffing": group({
                            "Ronde": [[], reference(['parent', null], [])],
                        }),
                        "WBSO": group({
                            "Ronde": [[], reference(['parent', null], [])],
                        }),
                    })],
                    "BTW-regime": [[], taggedUnion({
                        "Standaard": group({
                            "BTW-periode": [[], reference(['parent', null], [])],
                        }),
                        "Geen BTW van toepassing": group({
                            "BTW-periode": [[], reference(['parent', null], [])],
                        }),
                        "Binnenland heffing verlegd": group({
                            "BTW-periode": [[], reference(['parent', null], [])],
                        }),
                        "Intracommunautair": group({
                            "BTW-periode": [[], reference(['parent', null], [])],
                        }),
                        "Import van buiten de EU": group({
                            "BTW-periode": [[], reference(['parent', null], [])],
                        }),
                    })],
                    "Afhandeling": [[], taggedUnion({
                        "Mutaties": group({
                        }),
                        "Rekening courant": group({
                            "Rekening courant": [[], reference(['parent', null], [])],
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
                                "Grootboekrekening": [[], reference(['parent', null], [])],
                            }),
                            "Balans": group({
                                "Balans item": [[], reference(['parent', null], [])],
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
                    "Debiteur": [[], reference(['parent', null], [])],
                    "BTW-periode": [[], reference(['parent', null], [])],

                    "Contracttype": [[], taggedUnion({
                        "Licentieovereenkomst": group({
                            "Overeenkomst": [[], reference(['parent', null], [])],
                        }),
                        "Project": group({
                            "Project": [[], reference(['parent', null], [])],
                            "Offerte": [[], reference(['sibling', "Project"], [])],
                        }),
                    })],

                    "Afhandeling": [[], taggedUnion({
                        "Mutaties": group({
                        }),
                        "Rekening courant": group({
                            "Rekening courant": [[], reference(['parent', null], [])],
                        }),
                    })],
                    "Regels": [[], dictionary(group({
                        "Omschrijving": [[], string("multiline text")],
                        "Bedrag exclusief BTW": [[], string("bedrag")],
                        "Type": [[], taggedUnion({
                            "Opbrengsten": group({
                                "Grootboekrekening": [[], reference(['parent', null], [])],
                            }),
                            "Balans": group({
                                "Balans item": [[], reference(['parent', null], [])],
                            }),
                        })],
                        "BTW-regime": [[], taggedUnion({
                            "Standaard": group({
                                "BTW-cateogrie": [[], reference(['parent', null], [])],
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
                                "Periode": [[], reference(['parent', null], [])],
                            }),
                            "Project": group({
                                "Opbrengst": [[], reference(['parent', null], [])],
                            }),
                        })],
                    }))],
                }))],
                "Verrekenposten": [[], dictionary(group({
                    "Mutaties": [[], dictionary(group({
                        "Bedrag": [[], string("bedrag")],
                        "Afhandeling": [[], component("Afhandeling", {})]
                    }))],
                }))],
                "Bankrekeningen": [[], dictionary(group({
                    "Beginsaldo": [[], string("bedrag")],
                    "Nieuw": [[], taggedUnion({
                        "Nee": group({
                            "Jaar": [[], reference(['parent', null], [])],
                            "Rekening": [[], reference(['parent', null], [])],
                        }),
                        "Ja": group({}),
                    })],
                    "Grootboekrekening": [[], reference(['parent', null], [])],
                    "Mutaties": [[], dictionary(group({
                        "Omschrijving": [[], string("multiline text")],
                        "Bedrag": [[], string("bedrag")],
                        "Datum": [[], string("datum")],
                        "Status": [[], taggedUnion({
                            "Nog te verwerken": group({}),
                            "Verwerkt": group({
                                "Afhandeling": [[], component("Afhandeling", {})]
                            })
                        })]
                    }))],
                }))],
            }))),
            //"Afhandeling": globalType(["Informele Rekeningen", "Jaren", "Verrekenposten"], taggedUnion({
            "Afhandeling": globalType({}, taggedUnion({
                "Inkoop": group({
                    "Jaar": [[], reference(['parameter', "Jaren"], [])],
                    "Inkoop": [[], reference(['sibling', "Jaar"], [])],
                }),
                "Verkoop": group({
                    "Jaar": [[], reference(['parameter', "Jaren"], [])],
                    "Inkoop": [[], reference(['sibling', "Jaar"], [])],
                }),
                "BTW-periode": group({
                    "Jaar": [[], reference(['parameter', "Jaren"], [])],
                    "BTW-periode": [[], reference(['sibling', "Jaar"], [])],
                }),
                "Verrekenpost": group({
                    "Verrekenpost": [[], reference(['parameter', "Verrekenposten"], [])],
                }),
                "Informele rekening": group({
                    "Informele rekening": [[], reference(['parameter', "Informele Rekeningen"], [])],
                }),
            }))
        }),
        'root': r("Accounting"),
    }
}