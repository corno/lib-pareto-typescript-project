import * as pr from 'pareto-core-raw'

import * as mmoduleDefinition from "./import_moduleDefinition"
import * as mproject from "./import_project"
import * as mglossary from "./import_glossary"

const d = pr.wrapRawDictionary
const a = pr.wrapRawArray

export const $: mproject.TModule = {
    'definition': {
        'glossary': {
            'imports': d({
                "fp": "lib-fountain-pen",
            }),
            'parameters': d({
                "Annotation": {},
            }),
            'types': d({
                "Accounting": {
                    'parameters': d({}),
                    'type': <mglossary.TType>['group', d({
                        "Bankrekeningen": {
                            'optional': true,
                            'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({})]],
                        },
                        "Beheer": {
                            'optional': true,
                            'type': <mglossary.TType>['group', d({
                                "Balans": {
                                    'optional': true,
                                    'type': <mglossary.TType>['group', d({
                                        "Grootboekrekeningen": {
                                            'optional': true,
                                            'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                                "Hoofdcategorie": {
                                                    'optional': true,
                                                    'type': <mglossary.TType>['reference', {
                                                        'context': <mglossary.TContext>['import', {
                                                            'glossary': "common",
                                                            'arguments': d({}),
                                                        }],
                                                        'type': "Reference",
                                                        'arguments': d({}),
                                                    }],
                                                },
                                                "Subcategorie": {
                                                    'optional': true,
                                                    'type': <mglossary.TType>['reference', {
                                                        'context': <mglossary.TContext>['import', {
                                                            'glossary': "common",
                                                            'arguments': d({}),
                                                        }],
                                                        'type': "Reference",
                                                        'arguments': d({}),
                                                    }],
                                                },
                                                "Zijde": {
                                                    'optional': true,
                                                    'type': <mglossary.TType>['taggedUnion', d({
                                                        "Activa": <mglossary.TType>['group', d({})],
                                                        "Passiva": <mglossary.TType>['group', d({})],
                                                    })],
                                                },
                                            })]],
                                        },
                                        "Hoofdcategorieen": {
                                            'optional': true,
                                            'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                                "Subcategorieen": {
                                                    'optional': true,
                                                    'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                                        "Hoofdcategorie fiscus": {
                                                            'optional': true,
                                                            'type': <mglossary.TType>['reference', {
                                                                'context': <mglossary.TContext>['import', {
                                                                    'glossary': "common",
                                                                    'arguments': d({}),
                                                                }],
                                                                'type': "Reference",
                                                                'arguments': d({}),
                                                            }],
                                                        },
                                                        "Subcategorie fiscus": {
                                                            'optional': true,
                                                            'type': <mglossary.TType>['reference', {
                                                                'context': <mglossary.TContext>['import', {
                                                                    'glossary': "common",
                                                                    'arguments': d({}),
                                                                }],
                                                                'type': "Reference",
                                                                'arguments': d({}),
                                                            }],
                                                        },
                                                    })]],
                                                },
                                                "Zijde": {
                                                    'optional': true,
                                                    'type': <mglossary.TType>['taggedUnion', d({
                                                        "Activa": <mglossary.TType>['group', d({})],
                                                        "Passiva": <mglossary.TType>['group', d({})],
                                                    })],
                                                },
                                            })]],
                                        },
                                        "Hoofdcategorieen fiscus": {
                                            'optional': true,
                                            'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                                "Subcategorieen": {
                                                    'optional': true,
                                                    'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({})]],
                                                },
                                                "Zijde": {
                                                    'optional': true,
                                                    'type': <mglossary.TType>['taggedUnion', d({
                                                        "Activa": <mglossary.TType>['group', d({})],
                                                        "Passiva": <mglossary.TType>['group', d({})],
                                                    })],
                                                },
                                            })]],
                                        },
                                    })],
                                },
                                "BTW-categorieen": {
                                    'optional': true,
                                    'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                        "BTW-heffing": {
                                            'optional': true,
                                            'type': <mglossary.TType>['taggedUnion', d({
                                                "Ja": <mglossary.TType>['group', d({
                                                    "BTW-promillage": {
                                                        'optional': true,
                                                        'type': <mglossary.TType>['number', {}],
                                                    },
                                                })],
                                                "Nee": <mglossary.TType>['group', d({})],
                                            })],
                                        },
                                    })]],
                                },
                                "Gebruikers": {
                                    'optional': true,
                                    'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                        "Volledige naam": {
                                            'optional': true,
                                            'type': <mglossary.TType>['string', {}],
                                        },
                                    })]],
                                },
                                "Resultaat": {
                                    'optional': true,
                                    'type': <mglossary.TType>['group', d({
                                        "Correctietypes vennootschapsbelasting": {
                                            'optional': true,
                                            'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({})]],
                                        },
                                        "Grootboekrekeningen": {
                                            'optional': true,
                                            'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                                "Hoofdcategorie": {
                                                    'optional': true,
                                                    'type': <mglossary.TType>['reference', {
                                                        'context': <mglossary.TContext>['import', {
                                                            'glossary': "common",
                                                            'arguments': d({}),
                                                        }],
                                                        'type': "Reference",
                                                        'arguments': d({}),
                                                    }],
                                                },
                                                "Subcategorie": {
                                                    'optional': true,
                                                    'type': <mglossary.TType>['reference', {
                                                        'context': <mglossary.TContext>['import', {
                                                            'glossary': "common",
                                                            'arguments': d({}),
                                                        }],
                                                        'type': "Reference",
                                                        'arguments': d({}),
                                                    }],
                                                },
                                                "Zijde": {
                                                    'optional': true,
                                                    'type': <mglossary.TType>['taggedUnion', d({
                                                        "Kosten": <mglossary.TType>['group', d({
                                                            "Correctie op vennootschapsbelasting": {
                                                                'optional': true,
                                                                'type': <mglossary.TType>['taggedUnion', d({
                                                                    "Ja": <mglossary.TType>['group', d({
                                                                        "Correctietype": {
                                                                            'optional': true,
                                                                            'type': <mglossary.TType>['reference', {
                                                                                'context': <mglossary.TContext>['import', {
                                                                                    'glossary': "common",
                                                                                    'arguments': d({}),
                                                                                }],
                                                                                'type': "Reference",
                                                                                'arguments': d({}),
                                                                            }],
                                                                        },
                                                                    })],
                                                                    "Nee": <mglossary.TType>['group', d({})],
                                                                })],
                                                            },
                                                        })],
                                                        "Opbrengsten": <mglossary.TType>['group', d({})],
                                                    })],
                                                },
                                            })]],
                                        },
                                        "Hoofdcategorieen": {
                                            'optional': true,
                                            'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                                "Subcategorieen": {
                                                    'optional': true,
                                                    'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                                        "Hoofdcategorie fiscus": {
                                                            'optional': true,
                                                            'type': <mglossary.TType>['reference', {
                                                                'context': <mglossary.TContext>['import', {
                                                                    'glossary': "common",
                                                                    'arguments': d({}),
                                                                }],
                                                                'type': "Reference",
                                                                'arguments': d({}),
                                                            }],
                                                        },
                                                        "Subcategorie fiscus": {
                                                            'optional': true,
                                                            'type': <mglossary.TType>['reference', {
                                                                'context': <mglossary.TContext>['import', {
                                                                    'glossary': "common",
                                                                    'arguments': d({}),
                                                                }],
                                                                'type': "Reference",
                                                                'arguments': d({}),
                                                            }],
                                                        },
                                                    })]],
                                                },
                                                "Zijde": {
                                                    'optional': true,
                                                    'type': <mglossary.TType>['taggedUnion', d({
                                                        "Kosten": <mglossary.TType>['group', d({})],
                                                        "Opbrengsten": <mglossary.TType>['group', d({})],
                                                    })],
                                                },
                                            })]],
                                        },
                                        "Hoofdcategorieen fiscus": {
                                            'optional': true,
                                            'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                                "Subcategorieen": {
                                                    'optional': true,
                                                    'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({})]],
                                                },
                                                "Zijde": {
                                                    'optional': true,
                                                    'type': <mglossary.TType>['taggedUnion', d({
                                                        "Kosten": <mglossary.TType>['group', d({})],
                                                        "Opbrengsten": <mglossary.TType>['group', d({})],
                                                    })],
                                                },
                                            })]],
                                        },
                                    })],
                                },
                            })],
                        },
                        "Informele rekeningen": {
                            'optional': true,
                            'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({})]],
                        },
                        "Jaren": {
                            'optional': true,
                            'type': <mglossary.TType>['reference', {
                                'context': <mglossary.TContext>['local', {}],
                                'type': "Jaren",
                                'arguments': d({}),
                            }],
                        },
                        "Klanten": {
                            'optional': true,
                            'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                "Licentieovereenkomsten": {
                                    'optional': true,
                                    'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                        "Periodes": {
                                            'optional': true,
                                            'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                                "Bedrag": {
                                                    'optional': true,
                                                    'type': <mglossary.TType>['number', {}],
                                                },
                                            })]],
                                        },
                                    })]],
                                },
                                "Projecten": {
                                    'optional': true,
                                    'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                        "Offertes": {
                                            'optional': true,
                                            'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                                "Opbrengsten": {
                                                    'optional': true,
                                                    'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                                        "Type": {
                                                            'optional': true,
                                                            'type': <mglossary.TType>['taggedUnion', d({
                                                                "Project": <mglossary.TType>['group', d({
                                                                    "Bedrag": {
                                                                        'optional': true,
                                                                        'type': <mglossary.TType>['number', {}],
                                                                    },
                                                                    "Betaaldatum": {
                                                                        'optional': true,
                                                                        'type': <mglossary.TType>['number', {}],
                                                                    },
                                                                })],
                                                            })],
                                                        },
                                                    })]],
                                                },
                                            })]],
                                        },
                                    })]],
                                },
                            })]],
                        },
                        "Leveranciers": {
                            'optional': true,
                            'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({})]],
                        },
                        "Medewerkers": {
                            'optional': true,
                            'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({})]],
                        },
                    })]
                },
                "Afhandeling": {
                    'parameters': d({}),
                    'type': <mglossary.TType>['taggedUnion', d({
                        "BTW-periode": <mglossary.TType>['group', d({
                            "BTW-periode": {
                                'optional': true,
                                'type': <mglossary.TType>['reference', {
                                    'context': <mglossary.TContext>['import', {
                                        'glossary': "common",
                                        'arguments': d({}),
                                    }],
                                    'type': "Reference",
                                    'arguments': d({}),
                                }],
                            },
                            "Jaar": {
                                'optional': true,
                                'type': <mglossary.TType>['reference', {
                                    'context': <mglossary.TContext>['import', {
                                        'glossary': "common",
                                        'arguments': d({}),
                                    }],
                                    'type': "Reference",
                                    'arguments': d({}),
                                }],
                            },
                        })],
                        "Informele rekening": <mglossary.TType>['group', d({
                            "Informele rekening": {
                                'optional': true,
                                'type': <mglossary.TType>['reference', {
                                    'context': <mglossary.TContext>['import', {
                                        'glossary': "common",
                                        'arguments': d({}),
                                    }],
                                    'type': "Reference",
                                    'arguments': d({}),
                                }],
                            },
                        })],
                        "Inkoop": <mglossary.TType>['group', d({
                            "Inkoop": {
                                'optional': true,
                                'type': <mglossary.TType>['reference', {
                                    'context': <mglossary.TContext>['import', {
                                        'glossary': "common",
                                        'arguments': d({}),
                                    }],
                                    'type': "Reference",
                                    'arguments': d({}),
                                }],
                            },
                            "Jaar": {
                                'optional': true,
                                'type': <mglossary.TType>['reference', {
                                    'context': <mglossary.TContext>['import', {
                                        'glossary': "common",
                                        'arguments': d({}),
                                    }],
                                    'type': "Reference",
                                    'arguments': d({}),
                                }],
                            },
                        })],
                        "Verkoop": <mglossary.TType>['group', d({
                            "Inkoop": {
                                'optional': true,
                                'type': <mglossary.TType>['reference', {
                                    'context': <mglossary.TContext>['import', {
                                        'glossary': "common",
                                        'arguments': d({}),
                                    }],
                                    'type': "Reference",
                                    'arguments': d({}),
                                }],
                            },
                            "Jaar": {
                                'optional': true,
                                'type': <mglossary.TType>['reference', {
                                    'context': <mglossary.TContext>['import', {
                                        'glossary': "common",
                                        'arguments': d({}),
                                    }],
                                    'type': "Reference",
                                    'arguments': d({}),
                                }],
                            },
                        })],
                        "Verrekenpost": <mglossary.TType>['group', d({
                            "Verrekenpost": {
                                'optional': true,
                                'type': <mglossary.TType>['reference', {
                                    'context': <mglossary.TContext>['import', {
                                        'glossary': "common",
                                        'arguments': d({}),
                                    }],
                                    'type': "Reference",
                                    'arguments': d({}),
                                }],
                            },
                        })],
                    })]
                },
                "Informele Rekeningen": {
                    'parameters': d({}),
                    'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                        "Beginsaldo": {
                            'optional': true,
                            'type': <mglossary.TType>['number', {}],
                        },
                        "Grootboekrekening": {
                            'optional': true,
                            'type': <mglossary.TType>['reference', {
                                'context': <mglossary.TContext>['import', {
                                    'glossary': "common",
                                    'arguments': d({}),
                                }],
                                'type': "Reference",
                                'arguments': d({}),
                            }],
                        },
                        "Nieuw": {
                            'optional': true,
                            'type': <mglossary.TType>['taggedUnion', d({
                                "Ja": <mglossary.TType>['group', d({})],
                                "Nee": <mglossary.TType>['group', d({
                                    "Jaar": {
                                        'optional': true,
                                        'type': <mglossary.TType>['reference', {
                                            'context': <mglossary.TContext>['import', {
                                                'glossary': "common",
                                                'arguments': d({}),
                                            }],
                                            'type': "Reference",
                                            'arguments': d({}),
                                        }],
                                    },
                                    "Rekening": {
                                        'optional': true,
                                        'type': <mglossary.TType>['reference', {
                                            'context': <mglossary.TContext>['import', {
                                                'glossary': "common",
                                                'arguments': d({}),
                                            }],
                                            'type': "Reference",
                                            'arguments': d({}),
                                        }],
                                    },
                                })],
                            })],
                        },
                    })]]
                },
                "Jaren": {
                    'parameters': d({}),
                    'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                        "Afgesloten": {
                            'optional': true,
                            'type': <mglossary.TType>['taggedUnion', d({
                                "Ja": <mglossary.TType>['group', d({})],
                                "Nee": <mglossary.TType>['group', d({})],
                            })],
                        },
                        "Balans grootboekrekeningen": {
                            'optional': true,
                            'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                "Type": {
                                    'optional': true,
                                    'type': <mglossary.TType>['taggedUnion', d({
                                        "Bankrekening": <mglossary.TType>['group', d({})],
                                        "Informele rekening": <mglossary.TType>['group', d({})],
                                        "Overig": <mglossary.TType>['group', d({})],
                                    })],
                                },
                            })]],
                        },
                        "Bankrekeningen": {
                            'optional': true,
                            'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                "Beginsaldo": {
                                    'optional': true,
                                    'type': <mglossary.TType>['number', {}],
                                },
                                "Grootboekrekening": {
                                    'optional': true,
                                    'type': <mglossary.TType>['reference', {
                                        'context': <mglossary.TContext>['import', {
                                            'glossary': "common",
                                            'arguments': d({}),
                                        }],
                                        'type': "Reference",
                                        'arguments': d({}),
                                    }],
                                },
                                "Mutaties": {
                                    'optional': true,
                                    'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                        "Bedrag": {
                                            'optional': true,
                                            'type': <mglossary.TType>['number', {}],
                                        },
                                        "Datum": {
                                            'optional': true,
                                            'type': <mglossary.TType>['number', {}],
                                        },
                                        "Omschrijving": {
                                            'optional': true,
                                            'type': <mglossary.TType>['string', {}],
                                        },
                                        "Status": {
                                            'optional': true,
                                            'type': <mglossary.TType>['taggedUnion', d({
                                                "Nog te verwerken": <mglossary.TType>['group', d({})],
                                                "Verwerkt": <mglossary.TType>['group', d({
                                                    "Afhandeling": {
                                                        'optional': true,
                                                        'type': <mglossary.TType>['reference', {
                                                            'context': <mglossary.TContext>['local', {}],
                                                            'type': "Afhandeling",
                                                            'arguments': d({}),
                                                        }],
                                                    },
                                                })],
                                            })],
                                        },
                                    })]],
                                },
                                "Nieuw": {
                                    'optional': true,
                                    'type': <mglossary.TType>['taggedUnion', d({
                                        "Ja": <mglossary.TType>['group', d({})],
                                        "Nee": <mglossary.TType>['group', d({
                                            "Jaar": {
                                                'optional': true,
                                                'type': <mglossary.TType>['reference', {
                                                    'context': <mglossary.TContext>['import', {
                                                        'glossary': "common",
                                                        'arguments': d({}),
                                                    }],
                                                    'type': "Reference",
                                                    'arguments': d({}),
                                                }],
                                            },
                                            "Rekening": {
                                                'optional': true,
                                                'type': <mglossary.TType>['reference', {
                                                    'context': <mglossary.TContext>['import', {
                                                        'glossary': "common",
                                                        'arguments': d({}),
                                                    }],
                                                    'type': "Reference",
                                                    'arguments': d({}),
                                                }],
                                            },
                                        })],
                                    })],
                                },
                            })]],
                        },
                        "Beginsaldo nog aan te geven BTW": {
                            'optional': true,
                            'type': <mglossary.TType>['number', {}],
                        },
                        "Beginsaldo Winstreserve": {
                            'optional': true,
                            'type': <mglossary.TType>['number', {}],
                        },
                        "BTW periodes": {
                            'optional': true,
                            'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                "1. BTW-categorieen": {
                                    'optional': true,
                                    'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({})]],
                                },
                                "Documenten": {
                                    'optional': true,
                                    'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                        "Bestand": {
                                            'optional': true,
                                            'type': <mglossary.TType>['string', {}],
                                        },
                                    })]],
                                },
                                "Omschrijving": {
                                    'optional': true,
                                    'type': <mglossary.TType>['string', {}],
                                },
                                "Status": {
                                    'optional': true,
                                    'type': <mglossary.TType>['taggedUnion', d({
                                        "Aangegeven": <mglossary.TType>['group', d({
                                            "Afronding": {
                                                'optional': true,
                                                'type': <mglossary.TType>['number', {}],
                                            },
                                            "Bedrag": {
                                                'optional': true,
                                                'type': <mglossary.TType>['number', {}],
                                            },
                                            "Datum": {
                                                'optional': true,
                                                'type': <mglossary.TType>['number', {}],
                                            },
                                        })],
                                        "Openstaand": <mglossary.TType>['group', d({})],
                                    })],
                                },
                            })]],
                        },
                        "Eerste boekjaar": {
                            'optional': true,
                            'type': <mglossary.TType>['taggedUnion', d({
                                "Ja": <mglossary.TType>['group', d({})],
                                "Nee": <mglossary.TType>['group', d({
                                    "Vorig boekjaar": {
                                        'optional': true,
                                        'type': <mglossary.TType>['reference', {
                                            'context': <mglossary.TContext>['import', {
                                                'glossary': "common",
                                                'arguments': d({}),
                                            }],
                                            'type': "Reference",
                                            'arguments': d({}),
                                        }],
                                    },
                                })],
                            })],
                        },
                        "Grootboek BTW periode": {
                            'optional': true,
                            'type': <mglossary.TType>['reference', {
                                'context': <mglossary.TContext>['import', {
                                    'glossary': "common",
                                    'arguments': d({}),
                                }],
                                'type': "Reference",
                                'arguments': d({}),
                            }],
                        },
                        "Grootboek inkoop saldo": {
                            'optional': true,
                            'type': <mglossary.TType>['reference', {
                                'context': <mglossary.TContext>['import', {
                                    'glossary': "common",
                                    'arguments': d({}),
                                }],
                                'type': "Reference",
                                'arguments': d({}),
                            }],
                        },
                        "Grootboek verkoop saldo": {
                            'optional': true,
                            'type': <mglossary.TType>['reference', {
                                'context': <mglossary.TContext>['import', {
                                    'glossary': "common",
                                    'arguments': d({}),
                                }],
                                'type': "Reference",
                                'arguments': d({}),
                            }],
                        },
                        "Grootboekrekening voor BTW afrondingen": {
                            'optional': true,
                            'type': <mglossary.TType>['reference', {
                                'context': <mglossary.TContext>['import', {
                                    'glossary': "common",
                                    'arguments': d({}),
                                }],
                                'type': "Reference",
                                'arguments': d({}),
                            }],
                        },
                        "Grootboekrekening voor nog aan te geven BTW": {
                            'optional': true,
                            'type': <mglossary.TType>['reference', {
                                'context': <mglossary.TContext>['import', {
                                    'glossary': "common",
                                    'arguments': d({}),
                                }],
                                'type': "Reference",
                                'arguments': d({}),
                            }],
                        },
                        "Grootboekrekening voor resultaat dit jaar": {
                            'optional': true,
                            'type': <mglossary.TType>['reference', {
                                'context': <mglossary.TContext>['import', {
                                    'glossary': "common",
                                    'arguments': d({}),
                                }],
                                'type': "Reference",
                                'arguments': d({}),
                            }],
                        },
                        "Grootboekrekening voor winstreserve": {
                            'optional': true,
                            'type': <mglossary.TType>['reference', {
                                'context': <mglossary.TContext>['import', {
                                    'glossary': "common",
                                    'arguments': d({}),
                                }],
                                'type': "Reference",
                                'arguments': d({}),
                            }],
                        },
                        "Informele rekeningen": {
                            'optional': true,
                            'type': <mglossary.TType>['reference', {
                                'context': <mglossary.TContext>['local', {}],
                                'type': "Informele Rekeningen",
                                'arguments': d({}),
                            }],
                        },
                        "Inkopen": {
                            'optional': true,
                            'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                "Afhandeling": {
                                    'optional': true,
                                    'type': <mglossary.TType>['taggedUnion', d({
                                        "Mutaties": <mglossary.TType>['group', d({})],
                                        "Nog te betalen": <mglossary.TType>['group', d({
                                            "Betalingstermijn": {
                                                'optional': true,
                                                'type': <mglossary.TType>['number', {}],
                                            },
                                        })],
                                        "Rekening courant": <mglossary.TType>['group', d({
                                            "Rekening courant": {
                                                'optional': true,
                                                'type': <mglossary.TType>['reference', {
                                                    'context': <mglossary.TContext>['import', {
                                                        'glossary': "common",
                                                        'arguments': d({}),
                                                    }],
                                                    'type': "Reference",
                                                    'arguments': d({}),
                                                }],
                                            },
                                        })],
                                    })],
                                },
                                "Brondocument": {
                                    'optional': true,
                                    'type': <mglossary.TType>['taggedUnion', d({
                                        "Niet van toepassing": <mglossary.TType>['group', d({})],
                                        "Nog toevoegen": <mglossary.TType>['group', d({})],
                                        "Ontbreekt": <mglossary.TType>['group', d({})],
                                        "Toegevoegd": <mglossary.TType>['group', d({
                                            "Document": {
                                                'optional': true,
                                                'type': <mglossary.TType>['string', {}],
                                            },
                                        })],
                                    })],
                                },
                                "BTW-regime": {
                                    'optional': true,
                                    'type': <mglossary.TType>['taggedUnion', d({
                                        "Binnenland heffing verlegd": <mglossary.TType>['group', d({
                                            "BTW-periode": {
                                                'optional': true,
                                                'type': <mglossary.TType>['reference', {
                                                    'context': <mglossary.TContext>['import', {
                                                        'glossary': "common",
                                                        'arguments': d({}),
                                                    }],
                                                    'type': "Reference",
                                                    'arguments': d({}),
                                                }],
                                            },
                                        })],
                                        "Geen BTW van toepassing": <mglossary.TType>['group', d({
                                            "BTW-periode": {
                                                'optional': true,
                                                'type': <mglossary.TType>['reference', {
                                                    'context': <mglossary.TContext>['import', {
                                                        'glossary': "common",
                                                        'arguments': d({}),
                                                    }],
                                                    'type': "Reference",
                                                    'arguments': d({}),
                                                }],
                                            },
                                        })],
                                        "Import van buiten de EU": <mglossary.TType>['group', d({
                                            "BTW-periode": {
                                                'optional': true,
                                                'type': <mglossary.TType>['reference', {
                                                    'context': <mglossary.TContext>['import', {
                                                        'glossary': "common",
                                                        'arguments': d({}),
                                                    }],
                                                    'type': "Reference",
                                                    'arguments': d({}),
                                                }],
                                            },
                                        })],
                                        "Intracommunautair": <mglossary.TType>['group', d({
                                            "BTW-periode": {
                                                'optional': true,
                                                'type': <mglossary.TType>['reference', {
                                                    'context': <mglossary.TContext>['import', {
                                                        'glossary': "common",
                                                        'arguments': d({}),
                                                    }],
                                                    'type': "Reference",
                                                    'arguments': d({}),
                                                }],
                                            },
                                        })],
                                        "Standaard": <mglossary.TType>['group', d({
                                            "BTW-periode": {
                                                'optional': true,
                                                'type': <mglossary.TType>['reference', {
                                                    'context': <mglossary.TContext>['import', {
                                                        'glossary': "common",
                                                        'arguments': d({}),
                                                    }],
                                                    'type': "Reference",
                                                    'arguments': d({}),
                                                }],
                                            },
                                        })],
                                    })],
                                },
                                "Datum": {
                                    'optional': true,
                                    'type': <mglossary.TType>['number', {}],
                                },
                                "Regels": {
                                    'optional': true,
                                    'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                        "Bedrag": {
                                            'optional': true,
                                            'type': <mglossary.TType>['taggedUnion', d({
                                                "Bekend": <mglossary.TType>['group', d({
                                                    "Bedrag inclusief BTW": {
                                                        'optional': true,
                                                        'type': <mglossary.TType>['number', {}],
                                                    },
                                                    "BTW": {
                                                        'optional': true,
                                                        'type': <mglossary.TType>['number', {}],
                                                    },
                                                })],
                                                "Nog niet bekend": <mglossary.TType>['group', d({
                                                    "Aantekeningen": {
                                                        'optional': true,
                                                        'type': <mglossary.TType>['string', {}],
                                                    },
                                                })],
                                            })],
                                        },
                                        "Omschrijving": {
                                            'optional': true,
                                            'type': <mglossary.TType>['string', {}],
                                        },
                                        "Type": {
                                            'optional': true,
                                            'type': <mglossary.TType>['taggedUnion', d({
                                                "Balans": <mglossary.TType>['group', d({
                                                    "Balans item": {
                                                        'optional': true,
                                                        'type': <mglossary.TType>['reference', {
                                                            'context': <mglossary.TContext>['import', {
                                                                'glossary': "common",
                                                                'arguments': d({}),
                                                            }],
                                                            'type': "Reference",
                                                            'arguments': d({}),
                                                        }],
                                                    },
                                                })],
                                                "Kosten": <mglossary.TType>['group', d({
                                                    "Grootboekrekening": {
                                                        'optional': true,
                                                        'type': <mglossary.TType>['reference', {
                                                            'context': <mglossary.TContext>['import', {
                                                                'glossary': "common",
                                                                'arguments': d({}),
                                                            }],
                                                            'type': "Reference",
                                                            'arguments': d({}),
                                                        }],
                                                    },
                                                })],
                                            })],
                                        },
                                    })]],
                                },
                                "Type": {
                                    'optional': true,
                                    'type': <mglossary.TType>['taggedUnion', d({
                                        "Bonnetje": <mglossary.TType>['group', d({})],
                                        "Inkoop (met crediteur)": <mglossary.TType>['group', d({
                                            "Crediteur": {
                                                'optional': true,
                                                'type': <mglossary.TType>['reference', {
                                                    'context': <mglossary.TContext>['import', {
                                                        'glossary': "common",
                                                        'arguments': d({}),
                                                    }],
                                                    'type': "Reference",
                                                    'arguments': d({}),
                                                }],
                                            },
                                            "Factuurnummer": {
                                                'optional': true,
                                                'type': <mglossary.TType>['string', {}],
                                            },
                                        })],
                                        "Loonheffing": <mglossary.TType>['group', d({
                                            "Ronde": {
                                                'optional': true,
                                                'type': <mglossary.TType>['reference', {
                                                    'context': <mglossary.TContext>['import', {
                                                        'glossary': "common",
                                                        'arguments': d({}),
                                                    }],
                                                    'type': "Reference",
                                                    'arguments': d({}),
                                                }],
                                            },
                                        })],
                                        "Salaris": <mglossary.TType>['group', d({
                                            "Medewerker": {
                                                'optional': true,
                                                'type': <mglossary.TType>['reference', {
                                                    'context': <mglossary.TContext>['import', {
                                                        'glossary': "common",
                                                        'arguments': d({}),
                                                    }],
                                                    'type': "Reference",
                                                    'arguments': d({}),
                                                }],
                                            },
                                            "Ronde": {
                                                'optional': true,
                                                'type': <mglossary.TType>['reference', {
                                                    'context': <mglossary.TContext>['import', {
                                                        'glossary': "common",
                                                        'arguments': d({}),
                                                    }],
                                                    'type': "Reference",
                                                    'arguments': d({}),
                                                }],
                                            },
                                        })],
                                        "WBSO": <mglossary.TType>['group', d({
                                            "Ronde": {
                                                'optional': true,
                                                'type': <mglossary.TType>['reference', {
                                                    'context': <mglossary.TContext>['import', {
                                                        'glossary': "common",
                                                        'arguments': d({}),
                                                    }],
                                                    'type': "Reference",
                                                    'arguments': d({}),
                                                }],
                                            },
                                        })],
                                    })],
                                },
                            })]],
                        },
                        "Overige balans items": {
                            'optional': true,
                            'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                "Beginsaldo": {
                                    'optional': true,
                                    'type': <mglossary.TType>['number', {}],
                                },
                                "Grootboekrekening": {
                                    'optional': true,
                                    'type': <mglossary.TType>['reference', {
                                        'context': <mglossary.TContext>['import', {
                                            'glossary': "common",
                                            'arguments': d({}),
                                        }],
                                        'type': "Reference",
                                        'arguments': d({}),
                                    }],
                                },
                                "Memoriaal boekingen": {
                                    'optional': true,
                                    'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                        "Bedrag": {
                                            'optional': true,
                                            'type': <mglossary.TType>['number', {}],
                                        },
                                        "Datum": {
                                            'optional': true,
                                            'type': <mglossary.TType>['number', {}],
                                        },
                                        "Grootboekrekening": {
                                            'optional': true,
                                            'type': <mglossary.TType>['reference', {
                                                'context': <mglossary.TContext>['import', {
                                                    'glossary': "common",
                                                    'arguments': d({}),
                                                }],
                                                'type': "Reference",
                                                'arguments': d({}),
                                            }],
                                        },
                                        "Omschrijving": {
                                            'optional': true,
                                            'type': <mglossary.TType>['string', {}],
                                        },
                                    })]],
                                },
                                "Nieuw": {
                                    'optional': true,
                                    'type': <mglossary.TType>['taggedUnion', d({
                                        "Ja": <mglossary.TType>['group', d({})],
                                        "Nee": <mglossary.TType>['group', d({
                                            "Balans item": {
                                                'optional': true,
                                                'type': <mglossary.TType>['reference', {
                                                    'context': <mglossary.TContext>['import', {
                                                        'glossary': "common",
                                                        'arguments': d({}),
                                                    }],
                                                    'type': "Reference",
                                                    'arguments': d({}),
                                                }],
                                            },
                                            "Jaar": {
                                                'optional': true,
                                                'type': <mglossary.TType>['reference', {
                                                    'context': <mglossary.TContext>['import', {
                                                        'glossary': "common",
                                                        'arguments': d({}),
                                                    }],
                                                    'type': "Reference",
                                                    'arguments': d({}),
                                                }],
                                            },
                                        })],
                                    })],
                                },
                            })]],
                        },
                        "Resultaat grootboekrekeningen": {
                            'optional': true,
                            'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({})]],
                        },
                        "Salarisrondes": {
                            'optional': true,
                            'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({})]],
                        },
                        "Startdatum boekjaar": {
                            'optional': true,
                            'type': <mglossary.TType>['number', {}],
                        },
                        "Verkopen": {
                            'optional': true,
                            'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                "Afhandeling": {
                                    'optional': true,
                                    'type': <mglossary.TType>['taggedUnion', d({
                                        "Mutaties": <mglossary.TType>['group', d({})],
                                        "Rekening courant": <mglossary.TType>['group', d({
                                            "Rekening courant": {
                                                'optional': true,
                                                'type': <mglossary.TType>['reference', {
                                                    'context': <mglossary.TContext>['import', {
                                                        'glossary': "common",
                                                        'arguments': d({}),
                                                    }],
                                                    'type': "Reference",
                                                    'arguments': d({}),
                                                }],
                                            },
                                        })],
                                    })],
                                },
                                "Betalingstermijn": {
                                    'optional': true,
                                    'type': <mglossary.TType>['number', {}],
                                },
                                "Brondocument": {
                                    'optional': true,
                                    'type': <mglossary.TType>['taggedUnion', d({
                                        "Nog toevoegen": <mglossary.TType>['group', d({})],
                                        "Toegevoegd": <mglossary.TType>['group', d({
                                            "Document": {
                                                'optional': true,
                                                'type': <mglossary.TType>['string', {}],
                                            },
                                        })],
                                    })],
                                },
                                "BTW-periode": {
                                    'optional': true,
                                    'type': <mglossary.TType>['reference', {
                                        'context': <mglossary.TContext>['import', {
                                            'glossary': "common",
                                            'arguments': d({}),
                                        }],
                                        'type': "Reference",
                                        'arguments': d({}),
                                    }],
                                },
                                "Contracttype": {
                                    'optional': true,
                                    'type': <mglossary.TType>['taggedUnion', d({
                                        "Licentieovereenkomst": <mglossary.TType>['group', d({
                                            "Overeenkomst": {
                                                'optional': true,
                                                'type': <mglossary.TType>['reference', {
                                                    'context': <mglossary.TContext>['import', {
                                                        'glossary': "common",
                                                        'arguments': d({}),
                                                    }],
                                                    'type': "Reference",
                                                    'arguments': d({}),
                                                }],
                                            },
                                        })],
                                        "Project": <mglossary.TType>['group', d({
                                            "Offerte": {
                                                'optional': true,
                                                'type': <mglossary.TType>['reference', {
                                                    'context': <mglossary.TContext>['import', {
                                                        'glossary': "common",
                                                        'arguments': d({}),
                                                    }],
                                                    'type': "Reference",
                                                    'arguments': d({}),
                                                }],
                                            },
                                            "Project": {
                                                'optional': true,
                                                'type': <mglossary.TType>['reference', {
                                                    'context': <mglossary.TContext>['import', {
                                                        'glossary': "common",
                                                        'arguments': d({}),
                                                    }],
                                                    'type': "Reference",
                                                    'arguments': d({}),
                                                }],
                                            },
                                        })],
                                    })],
                                },
                                "Debiteur": {
                                    'optional': true,
                                    'type': <mglossary.TType>['reference', {
                                        'context': <mglossary.TContext>['import', {
                                            'glossary': "common",
                                            'arguments': d({}),
                                        }],
                                        'type': "Reference",
                                        'arguments': d({}),
                                    }],
                                },
                                "Regels": {
                                    'optional': true,
                                    'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                        "Bedrag exclusief BTW": {
                                            'optional': true,
                                            'type': <mglossary.TType>['number', {}],
                                        },
                                        "BTW-regime": {
                                            'optional': true,
                                            'type': <mglossary.TType>['taggedUnion', d({
                                                "Binnenland heffing verlegd": <mglossary.TType>['group', d({})],
                                                "Export buiten de EU": <mglossary.TType>['group', d({})],
                                                "Installatie of afstandsverkopen binnen de EU": <mglossary.TType>['group', d({})],
                                                "Intracommunautair": <mglossary.TType>['group', d({})],
                                                "Standaard": <mglossary.TType>['group', d({
                                                    "BTW-cateogrie": {
                                                        'optional': true,
                                                        'type': <mglossary.TType>['reference', {
                                                            'context': <mglossary.TContext>['import', {
                                                                'glossary': "common",
                                                                'arguments': d({}),
                                                            }],
                                                            'type': "Reference",
                                                            'arguments': d({}),
                                                        }],
                                                    },
                                                })],
                                            })],
                                        },
                                        "Contracttype": {
                                            'optional': true,
                                            'type': <mglossary.TType>['taggedUnion', d({
                                                "Licentieovereenkomst": <mglossary.TType>['group', d({
                                                    "Periode": {
                                                        'optional': true,
                                                        'type': <mglossary.TType>['reference', {
                                                            'context': <mglossary.TContext>['import', {
                                                                'glossary': "common",
                                                                'arguments': d({}),
                                                            }],
                                                            'type': "Reference",
                                                            'arguments': d({}),
                                                        }],
                                                    },
                                                })],
                                                "Los": <mglossary.TType>['group', d({})],
                                                "Project": <mglossary.TType>['group', d({
                                                    "Opbrengst": {
                                                        'optional': true,
                                                        'type': <mglossary.TType>['reference', {
                                                            'context': <mglossary.TContext>['import', {
                                                                'glossary': "common",
                                                                'arguments': d({}),
                                                            }],
                                                            'type': "Reference",
                                                            'arguments': d({}),
                                                        }],
                                                    },
                                                })],
                                            })],
                                        },
                                        "Omschrijving": {
                                            'optional': true,
                                            'type': <mglossary.TType>['string', {}],
                                        },
                                        "Type": {
                                            'optional': true,
                                            'type': <mglossary.TType>['taggedUnion', d({
                                                "Balans": <mglossary.TType>['group', d({
                                                    "Balans item": {
                                                        'optional': true,
                                                        'type': <mglossary.TType>['reference', {
                                                            'context': <mglossary.TContext>['import', {
                                                                'glossary': "common",
                                                                'arguments': d({}),
                                                            }],
                                                            'type': "Reference",
                                                            'arguments': d({}),
                                                        }],
                                                    },
                                                })],
                                                "Opbrengsten": <mglossary.TType>['group', d({
                                                    "Grootboekrekening": {
                                                        'optional': true,
                                                        'type': <mglossary.TType>['reference', {
                                                            'context': <mglossary.TContext>['import', {
                                                                'glossary': "common",
                                                                'arguments': d({}),
                                                            }],
                                                            'type': "Reference",
                                                            'arguments': d({}),
                                                        }],
                                                    },
                                                })],
                                            })],
                                        },
                                    })]],
                                },
                            })]],
                        },
                        "Verrekenposten": {
                            'optional': true,
                            'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                "Mutaties": {
                                    'optional': true,
                                    'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                        "Afhandeling": {
                                            'optional': true,
                                            'type': <mglossary.TType>['reference', {
                                                'context': <mglossary.TContext>['local', {}],
                                                'type': "Afhandeling",
                                                'arguments': d({}),
                                            }],
                                        },
                                        "Bedrag": {
                                            'optional': true,
                                            'type': <mglossary.TType>['number', {}],
                                        },
                                    })]],
                                },
                            })]],
                        },
                    })]]
                },
            }),
            'interfaces': d({}),
            'functions': d({}),
        },
        'api': {
            'imports': d({
                "common": "glo-pareto-common",
            }),
            'algorithms': d({}),
        },
    },
    'implementation': {
        'implementations': d({}),
    },
}