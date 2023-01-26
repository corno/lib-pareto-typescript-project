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
                "Annotation": null,
            }),
            'templates': d({}),
            'types': d({
                "Accounting": <mglossary.TType>['group', d({
                    "Bankrekeningen": {
                        'optional': false,
                        'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({})]],
                    },
                    "Beheer": {
                        'optional': false,
                        'type': <mglossary.TType>['group', d({
                            "Balans": {
                                'optional': false,
                                'type': <mglossary.TType>['group', d({
                                    "Grootboekrekeningen": {
                                        'optional': false,
                                        'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                            "Hoofdcategorie": {
                                                'optional': false,
                                                'type': <mglossary.TType>['template', {
                                                    'context': <mglossary.TContext>['local', null],
                                                    'arguments': d({
                                                        "RererencedType": <mglossary.TType>['reference', {
                                                            'context': <mglossary.TContext>['local', null],
                                                            'type': "FIXMEFIXMEFIXME",
                                                        }],
                                                    }),
                                                    'template': "Reference",
                                                }],
                                            },
                                            "Subcategorie": {
                                                'optional': false,
                                                'type': <mglossary.TType>['template', {
                                                    'context': <mglossary.TContext>['local', null],
                                                    'arguments': d({
                                                        "RererencedType": <mglossary.TType>['reference', {
                                                            'context': <mglossary.TContext>['local', null],
                                                            'type': "FIXMEFIXMEFIXME",
                                                        }],
                                                    }),
                                                    'template': "Reference",
                                                }],
                                            },
                                            "Zijde": {
                                                'optional': false,
                                                'type': <mglossary.TType>['taggedUnion', d({
                                                    "Activa": <mglossary.TType>['group', d({})],
                                                    "Passiva": <mglossary.TType>['group', d({})],
                                                })],
                                            },
                                        })]],
                                    },
                                    "Hoofdcategorieen": {
                                        'optional': false,
                                        'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                            "Subcategorieen": {
                                                'optional': false,
                                                'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                                    "Hoofdcategorie fiscus": {
                                                        'optional': false,
                                                        'type': <mglossary.TType>['template', {
                                                            'context': <mglossary.TContext>['local', null],
                                                            'arguments': d({
                                                                "RererencedType": <mglossary.TType>['reference', {
                                                                    'context': <mglossary.TContext>['local', null],
                                                                    'type': "FIXMEFIXMEFIXME",
                                                                }],
                                                            }),
                                                            'template': "Reference",
                                                        }],
                                                    },
                                                    "Subcategorie fiscus": {
                                                        'optional': false,
                                                        'type': <mglossary.TType>['template', {
                                                            'context': <mglossary.TContext>['local', null],
                                                            'arguments': d({
                                                                "RererencedType": <mglossary.TType>['reference', {
                                                                    'context': <mglossary.TContext>['local', null],
                                                                    'type': "FIXMEFIXMEFIXME",
                                                                }],
                                                            }),
                                                            'template': "Reference",
                                                        }],
                                                    },
                                                })]],
                                            },
                                            "Zijde": {
                                                'optional': false,
                                                'type': <mglossary.TType>['taggedUnion', d({
                                                    "Activa": <mglossary.TType>['group', d({})],
                                                    "Passiva": <mglossary.TType>['group', d({})],
                                                })],
                                            },
                                        })]],
                                    },
                                    "Hoofdcategorieen fiscus": {
                                        'optional': false,
                                        'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                            "Subcategorieen": {
                                                'optional': false,
                                                'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({})]],
                                            },
                                            "Zijde": {
                                                'optional': false,
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
                                'optional': false,
                                'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                    "BTW-heffing": {
                                        'optional': false,
                                        'type': <mglossary.TType>['taggedUnion', d({
                                            "Ja": <mglossary.TType>['group', d({
                                                "BTW-promillage": {
                                                    'optional': false,
                                                    'type': <mglossary.TType>['number', null],
                                                },
                                            })],
                                            "Nee": <mglossary.TType>['group', d({})],
                                        })],
                                    },
                                })]],
                            },
                            "Gebruikers": {
                                'optional': false,
                                'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                    "Volledige naam": {
                                        'optional': false,
                                        'type': <mglossary.TType>['string', null],
                                    },
                                })]],
                            },
                            "Resultaat": {
                                'optional': false,
                                'type': <mglossary.TType>['group', d({
                                    "Correctietypes vennootschapsbelasting": {
                                        'optional': false,
                                        'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({})]],
                                    },
                                    "Grootboekrekeningen": {
                                        'optional': false,
                                        'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                            "Hoofdcategorie": {
                                                'optional': false,
                                                'type': <mglossary.TType>['template', {
                                                    'context': <mglossary.TContext>['local', null],
                                                    'arguments': d({
                                                        "RererencedType": <mglossary.TType>['reference', {
                                                            'context': <mglossary.TContext>['local', null],
                                                            'type': "FIXMEFIXMEFIXME",
                                                        }],
                                                    }),
                                                    'template': "Reference",
                                                }],
                                            },
                                            "Subcategorie": {
                                                'optional': false,
                                                'type': <mglossary.TType>['template', {
                                                    'context': <mglossary.TContext>['local', null],
                                                    'arguments': d({
                                                        "RererencedType": <mglossary.TType>['reference', {
                                                            'context': <mglossary.TContext>['local', null],
                                                            'type': "FIXMEFIXMEFIXME",
                                                        }],
                                                    }),
                                                    'template': "Reference",
                                                }],
                                            },
                                            "Zijde": {
                                                'optional': false,
                                                'type': <mglossary.TType>['taggedUnion', d({
                                                    "Kosten": <mglossary.TType>['group', d({
                                                        "Correctie op vennootschapsbelasting": {
                                                            'optional': false,
                                                            'type': <mglossary.TType>['taggedUnion', d({
                                                                "Ja": <mglossary.TType>['group', d({
                                                                    "Correctietype": {
                                                                        'optional': false,
                                                                        'type': <mglossary.TType>['template', {
                                                                            'context': <mglossary.TContext>['local', null],
                                                                            'arguments': d({
                                                                                "RererencedType": <mglossary.TType>['reference', {
                                                                                    'context': <mglossary.TContext>['local', null],
                                                                                    'type': "FIXMEFIXMEFIXME",
                                                                                }],
                                                                            }),
                                                                            'template': "Reference",
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
                                        'optional': false,
                                        'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                            "Subcategorieen": {
                                                'optional': false,
                                                'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                                    "Hoofdcategorie fiscus": {
                                                        'optional': false,
                                                        'type': <mglossary.TType>['template', {
                                                            'context': <mglossary.TContext>['local', null],
                                                            'arguments': d({
                                                                "RererencedType": <mglossary.TType>['reference', {
                                                                    'context': <mglossary.TContext>['local', null],
                                                                    'type': "FIXMEFIXMEFIXME",
                                                                }],
                                                            }),
                                                            'template': "Reference",
                                                        }],
                                                    },
                                                    "Subcategorie fiscus": {
                                                        'optional': false,
                                                        'type': <mglossary.TType>['template', {
                                                            'context': <mglossary.TContext>['local', null],
                                                            'arguments': d({
                                                                "RererencedType": <mglossary.TType>['reference', {
                                                                    'context': <mglossary.TContext>['local', null],
                                                                    'type': "FIXMEFIXMEFIXME",
                                                                }],
                                                            }),
                                                            'template': "Reference",
                                                        }],
                                                    },
                                                })]],
                                            },
                                            "Zijde": {
                                                'optional': false,
                                                'type': <mglossary.TType>['taggedUnion', d({
                                                    "Kosten": <mglossary.TType>['group', d({})],
                                                    "Opbrengsten": <mglossary.TType>['group', d({})],
                                                })],
                                            },
                                        })]],
                                    },
                                    "Hoofdcategorieen fiscus": {
                                        'optional': false,
                                        'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                            "Subcategorieen": {
                                                'optional': false,
                                                'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({})]],
                                            },
                                            "Zijde": {
                                                'optional': false,
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
                        'optional': false,
                        'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({})]],
                    },
                    "Jaren": {
                        'optional': false,
                        'type': <mglossary.TType>['reference', {
                            'context': <mglossary.TContext>['local', null],
                            'type': "Jaren",
                        }],
                    },
                    "Klanten": {
                        'optional': false,
                        'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                            "Licentieovereenkomsten": {
                                'optional': false,
                                'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                    "Periodes": {
                                        'optional': false,
                                        'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                            "Bedrag": {
                                                'optional': false,
                                                'type': <mglossary.TType>['number', null],
                                            },
                                        })]],
                                    },
                                })]],
                            },
                            "Projecten": {
                                'optional': false,
                                'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                    "Offertes": {
                                        'optional': false,
                                        'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                            "Opbrengsten": {
                                                'optional': false,
                                                'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                                    "Type": {
                                                        'optional': false,
                                                        'type': <mglossary.TType>['taggedUnion', d({
                                                            "Project": <mglossary.TType>['group', d({
                                                                "Bedrag": {
                                                                    'optional': false,
                                                                    'type': <mglossary.TType>['number', null],
                                                                },
                                                                "Betaaldatum": {
                                                                    'optional': false,
                                                                    'type': <mglossary.TType>['number', null],
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
                        'optional': false,
                        'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({})]],
                    },
                    "Medewerkers": {
                        'optional': false,
                        'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({})]],
                    },
                })],
                "Afhandeling": <mglossary.TType>['taggedUnion', d({
                    "BTW-periode": <mglossary.TType>['group', d({
                        "BTW-periode": {
                            'optional': false,
                            'type': <mglossary.TType>['template', {
                                'context': <mglossary.TContext>['local', null],
                                'arguments': d({
                                    "RererencedType": <mglossary.TType>['reference', {
                                        'context': <mglossary.TContext>['local', null],
                                        'type': "FIXMEFIXMEFIXME",
                                    }],
                                }),
                                'template': "Reference",
                            }],
                        },
                        "Jaar": {
                            'optional': false,
                            'type': <mglossary.TType>['template', {
                                'context': <mglossary.TContext>['local', null],
                                'arguments': d({
                                    "RererencedType": <mglossary.TType>['reference', {
                                        'context': <mglossary.TContext>['local', null],
                                        'type': "FIXMEFIXMEFIXME",
                                    }],
                                }),
                                'template': "Reference",
                            }],
                        },
                    })],
                    "Informele rekening": <mglossary.TType>['group', d({
                        "Informele rekening": {
                            'optional': false,
                            'type': <mglossary.TType>['template', {
                                'context': <mglossary.TContext>['local', null],
                                'arguments': d({
                                    "RererencedType": <mglossary.TType>['reference', {
                                        'context': <mglossary.TContext>['local', null],
                                        'type': "FIXMEFIXMEFIXME",
                                    }],
                                }),
                                'template': "Reference",
                            }],
                        },
                    })],
                    "Inkoop": <mglossary.TType>['group', d({
                        "Inkoop": {
                            'optional': false,
                            'type': <mglossary.TType>['template', {
                                'context': <mglossary.TContext>['local', null],
                                'arguments': d({
                                    "RererencedType": <mglossary.TType>['reference', {
                                        'context': <mglossary.TContext>['local', null],
                                        'type': "FIXMEFIXMEFIXME",
                                    }],
                                }),
                                'template': "Reference",
                            }],
                        },
                        "Jaar": {
                            'optional': false,
                            'type': <mglossary.TType>['template', {
                                'context': <mglossary.TContext>['local', null],
                                'arguments': d({
                                    "RererencedType": <mglossary.TType>['reference', {
                                        'context': <mglossary.TContext>['local', null],
                                        'type': "FIXMEFIXMEFIXME",
                                    }],
                                }),
                                'template': "Reference",
                            }],
                        },
                    })],
                    "Verkoop": <mglossary.TType>['group', d({
                        "Inkoop": {
                            'optional': false,
                            'type': <mglossary.TType>['template', {
                                'context': <mglossary.TContext>['local', null],
                                'arguments': d({
                                    "RererencedType": <mglossary.TType>['reference', {
                                        'context': <mglossary.TContext>['local', null],
                                        'type': "FIXMEFIXMEFIXME",
                                    }],
                                }),
                                'template': "Reference",
                            }],
                        },
                        "Jaar": {
                            'optional': false,
                            'type': <mglossary.TType>['template', {
                                'context': <mglossary.TContext>['local', null],
                                'arguments': d({
                                    "RererencedType": <mglossary.TType>['reference', {
                                        'context': <mglossary.TContext>['local', null],
                                        'type': "FIXMEFIXMEFIXME",
                                    }],
                                }),
                                'template': "Reference",
                            }],
                        },
                    })],
                    "Verrekenpost": <mglossary.TType>['group', d({
                        "Verrekenpost": {
                            'optional': false,
                            'type': <mglossary.TType>['template', {
                                'context': <mglossary.TContext>['local', null],
                                'arguments': d({
                                    "RererencedType": <mglossary.TType>['reference', {
                                        'context': <mglossary.TContext>['local', null],
                                        'type': "FIXMEFIXMEFIXME",
                                    }],
                                }),
                                'template': "Reference",
                            }],
                        },
                    })],
                })],
                "Informele Rekeningen": <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                    "Beginsaldo": {
                        'optional': false,
                        'type': <mglossary.TType>['number', null],
                    },
                    "Grootboekrekening": {
                        'optional': false,
                        'type': <mglossary.TType>['template', {
                            'context': <mglossary.TContext>['local', null],
                            'arguments': d({
                                "RererencedType": <mglossary.TType>['reference', {
                                    'context': <mglossary.TContext>['local', null],
                                    'type': "FIXMEFIXMEFIXME",
                                }],
                            }),
                            'template': "Reference",
                        }],
                    },
                    "Nieuw": {
                        'optional': false,
                        'type': <mglossary.TType>['taggedUnion', d({
                            "Ja": <mglossary.TType>['group', d({})],
                            "Nee": <mglossary.TType>['group', d({
                                "Jaar": {
                                    'optional': false,
                                    'type': <mglossary.TType>['template', {
                                        'context': <mglossary.TContext>['local', null],
                                        'arguments': d({
                                            "RererencedType": <mglossary.TType>['reference', {
                                                'context': <mglossary.TContext>['local', null],
                                                'type': "FIXMEFIXMEFIXME",
                                            }],
                                        }),
                                        'template': "Reference",
                                    }],
                                },
                                "Rekening": {
                                    'optional': false,
                                    'type': <mglossary.TType>['template', {
                                        'context': <mglossary.TContext>['local', null],
                                        'arguments': d({
                                            "RererencedType": <mglossary.TType>['reference', {
                                                'context': <mglossary.TContext>['local', null],
                                                'type': "FIXMEFIXMEFIXME",
                                            }],
                                        }),
                                        'template': "Reference",
                                    }],
                                },
                            })],
                        })],
                    },
                })]],
                "Jaren": <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                    "Afgesloten": {
                        'optional': false,
                        'type': <mglossary.TType>['taggedUnion', d({
                            "Ja": <mglossary.TType>['group', d({})],
                            "Nee": <mglossary.TType>['group', d({})],
                        })],
                    },
                    "Balans grootboekrekeningen": {
                        'optional': false,
                        'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                            "Type": {
                                'optional': false,
                                'type': <mglossary.TType>['taggedUnion', d({
                                    "Bankrekening": <mglossary.TType>['group', d({})],
                                    "Informele rekening": <mglossary.TType>['group', d({})],
                                    "Overig": <mglossary.TType>['group', d({})],
                                })],
                            },
                        })]],
                    },
                    "Bankrekeningen": {
                        'optional': false,
                        'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                            "Beginsaldo": {
                                'optional': false,
                                'type': <mglossary.TType>['number', null],
                            },
                            "Grootboekrekening": {
                                'optional': false,
                                'type': <mglossary.TType>['template', {
                                    'context': <mglossary.TContext>['local', null],
                                    'arguments': d({
                                        "RererencedType": <mglossary.TType>['reference', {
                                            'context': <mglossary.TContext>['local', null],
                                            'type': "FIXMEFIXMEFIXME",
                                        }],
                                    }),
                                    'template': "Reference",
                                }],
                            },
                            "Mutaties": {
                                'optional': false,
                                'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                    "Bedrag": {
                                        'optional': false,
                                        'type': <mglossary.TType>['number', null],
                                    },
                                    "Datum": {
                                        'optional': false,
                                        'type': <mglossary.TType>['number', null],
                                    },
                                    "Omschrijving": {
                                        'optional': false,
                                        'type': <mglossary.TType>['string', null],
                                    },
                                    "Status": {
                                        'optional': false,
                                        'type': <mglossary.TType>['taggedUnion', d({
                                            "Nog te verwerken": <mglossary.TType>['group', d({})],
                                            "Verwerkt": <mglossary.TType>['group', d({
                                                "Afhandeling": {
                                                    'optional': false,
                                                    'type': <mglossary.TType>['reference', {
                                                        'context': <mglossary.TContext>['local', null],
                                                        'type': "Afhandeling",
                                                    }],
                                                },
                                            })],
                                        })],
                                    },
                                })]],
                            },
                            "Nieuw": {
                                'optional': false,
                                'type': <mglossary.TType>['taggedUnion', d({
                                    "Ja": <mglossary.TType>['group', d({})],
                                    "Nee": <mglossary.TType>['group', d({
                                        "Jaar": {
                                            'optional': false,
                                            'type': <mglossary.TType>['template', {
                                                'context': <mglossary.TContext>['local', null],
                                                'arguments': d({
                                                    "RererencedType": <mglossary.TType>['reference', {
                                                        'context': <mglossary.TContext>['local', null],
                                                        'type': "FIXMEFIXMEFIXME",
                                                    }],
                                                }),
                                                'template': "Reference",
                                            }],
                                        },
                                        "Rekening": {
                                            'optional': false,
                                            'type': <mglossary.TType>['template', {
                                                'context': <mglossary.TContext>['local', null],
                                                'arguments': d({
                                                    "RererencedType": <mglossary.TType>['reference', {
                                                        'context': <mglossary.TContext>['local', null],
                                                        'type': "FIXMEFIXMEFIXME",
                                                    }],
                                                }),
                                                'template': "Reference",
                                            }],
                                        },
                                    })],
                                })],
                            },
                        })]],
                    },
                    "Beginsaldo nog aan te geven BTW": {
                        'optional': false,
                        'type': <mglossary.TType>['number', null],
                    },
                    "Beginsaldo Winstreserve": {
                        'optional': false,
                        'type': <mglossary.TType>['number', null],
                    },
                    "BTW periodes": {
                        'optional': false,
                        'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                            "1. BTW-categorieen": {
                                'optional': false,
                                'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({})]],
                            },
                            "Documenten": {
                                'optional': false,
                                'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                    "Bestand": {
                                        'optional': false,
                                        'type': <mglossary.TType>['string', null],
                                    },
                                })]],
                            },
                            "Omschrijving": {
                                'optional': false,
                                'type': <mglossary.TType>['string', null],
                            },
                            "Status": {
                                'optional': false,
                                'type': <mglossary.TType>['taggedUnion', d({
                                    "Aangegeven": <mglossary.TType>['group', d({
                                        "Afronding": {
                                            'optional': false,
                                            'type': <mglossary.TType>['number', null],
                                        },
                                        "Bedrag": {
                                            'optional': false,
                                            'type': <mglossary.TType>['number', null],
                                        },
                                        "Datum": {
                                            'optional': false,
                                            'type': <mglossary.TType>['number', null],
                                        },
                                    })],
                                    "Openstaand": <mglossary.TType>['group', d({})],
                                })],
                            },
                        })]],
                    },
                    "Eerste boekjaar": {
                        'optional': false,
                        'type': <mglossary.TType>['taggedUnion', d({
                            "Ja": <mglossary.TType>['group', d({})],
                            "Nee": <mglossary.TType>['group', d({
                                "Vorig boekjaar": {
                                    'optional': false,
                                    'type': <mglossary.TType>['template', {
                                        'context': <mglossary.TContext>['local', null],
                                        'arguments': d({
                                            "RererencedType": <mglossary.TType>['reference', {
                                                'context': <mglossary.TContext>['local', null],
                                                'type': "FIXMEFIXMEFIXME",
                                            }],
                                        }),
                                        'template': "Reference",
                                    }],
                                },
                            })],
                        })],
                    },
                    "Grootboek BTW periode": {
                        'optional': false,
                        'type': <mglossary.TType>['template', {
                            'context': <mglossary.TContext>['local', null],
                            'arguments': d({
                                "RererencedType": <mglossary.TType>['reference', {
                                    'context': <mglossary.TContext>['local', null],
                                    'type': "FIXMEFIXMEFIXME",
                                }],
                            }),
                            'template': "Reference",
                        }],
                    },
                    "Grootboek inkoop saldo": {
                        'optional': false,
                        'type': <mglossary.TType>['template', {
                            'context': <mglossary.TContext>['local', null],
                            'arguments': d({
                                "RererencedType": <mglossary.TType>['reference', {
                                    'context': <mglossary.TContext>['local', null],
                                    'type': "FIXMEFIXMEFIXME",
                                }],
                            }),
                            'template': "Reference",
                        }],
                    },
                    "Grootboek verkoop saldo": {
                        'optional': false,
                        'type': <mglossary.TType>['template', {
                            'context': <mglossary.TContext>['local', null],
                            'arguments': d({
                                "RererencedType": <mglossary.TType>['reference', {
                                    'context': <mglossary.TContext>['local', null],
                                    'type': "FIXMEFIXMEFIXME",
                                }],
                            }),
                            'template': "Reference",
                        }],
                    },
                    "Grootboekrekening voor BTW afrondingen": {
                        'optional': false,
                        'type': <mglossary.TType>['template', {
                            'context': <mglossary.TContext>['local', null],
                            'arguments': d({
                                "RererencedType": <mglossary.TType>['reference', {
                                    'context': <mglossary.TContext>['local', null],
                                    'type': "FIXMEFIXMEFIXME",
                                }],
                            }),
                            'template': "Reference",
                        }],
                    },
                    "Grootboekrekening voor nog aan te geven BTW": {
                        'optional': false,
                        'type': <mglossary.TType>['template', {
                            'context': <mglossary.TContext>['local', null],
                            'arguments': d({
                                "RererencedType": <mglossary.TType>['reference', {
                                    'context': <mglossary.TContext>['local', null],
                                    'type': "FIXMEFIXMEFIXME",
                                }],
                            }),
                            'template': "Reference",
                        }],
                    },
                    "Grootboekrekening voor resultaat dit jaar": {
                        'optional': false,
                        'type': <mglossary.TType>['template', {
                            'context': <mglossary.TContext>['local', null],
                            'arguments': d({
                                "RererencedType": <mglossary.TType>['reference', {
                                    'context': <mglossary.TContext>['local', null],
                                    'type': "FIXMEFIXMEFIXME",
                                }],
                            }),
                            'template': "Reference",
                        }],
                    },
                    "Grootboekrekening voor winstreserve": {
                        'optional': false,
                        'type': <mglossary.TType>['template', {
                            'context': <mglossary.TContext>['local', null],
                            'arguments': d({
                                "RererencedType": <mglossary.TType>['reference', {
                                    'context': <mglossary.TContext>['local', null],
                                    'type': "FIXMEFIXMEFIXME",
                                }],
                            }),
                            'template': "Reference",
                        }],
                    },
                    "Informele rekeningen": {
                        'optional': false,
                        'type': <mglossary.TType>['reference', {
                            'context': <mglossary.TContext>['local', null],
                            'type': "Informele Rekeningen",
                        }],
                    },
                    "Inkopen": {
                        'optional': false,
                        'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                            "Afhandeling": {
                                'optional': false,
                                'type': <mglossary.TType>['taggedUnion', d({
                                    "Mutaties": <mglossary.TType>['group', d({})],
                                    "Nog te betalen": <mglossary.TType>['group', d({
                                        "Betalingstermijn": {
                                            'optional': false,
                                            'type': <mglossary.TType>['number', null],
                                        },
                                    })],
                                    "Rekening courant": <mglossary.TType>['group', d({
                                        "Rekening courant": {
                                            'optional': false,
                                            'type': <mglossary.TType>['template', {
                                                'context': <mglossary.TContext>['local', null],
                                                'arguments': d({
                                                    "RererencedType": <mglossary.TType>['reference', {
                                                        'context': <mglossary.TContext>['local', null],
                                                        'type': "FIXMEFIXMEFIXME",
                                                    }],
                                                }),
                                                'template': "Reference",
                                            }],
                                        },
                                    })],
                                })],
                            },
                            "Brondocument": {
                                'optional': false,
                                'type': <mglossary.TType>['taggedUnion', d({
                                    "Niet van toepassing": <mglossary.TType>['group', d({})],
                                    "Nog toevoegen": <mglossary.TType>['group', d({})],
                                    "Ontbreekt": <mglossary.TType>['group', d({})],
                                    "Toegevoegd": <mglossary.TType>['group', d({
                                        "Document": {
                                            'optional': false,
                                            'type': <mglossary.TType>['string', null],
                                        },
                                    })],
                                })],
                            },
                            "BTW-regime": {
                                'optional': false,
                                'type': <mglossary.TType>['taggedUnion', d({
                                    "Binnenland heffing verlegd": <mglossary.TType>['group', d({
                                        "BTW-periode": {
                                            'optional': false,
                                            'type': <mglossary.TType>['template', {
                                                'context': <mglossary.TContext>['local', null],
                                                'arguments': d({
                                                    "RererencedType": <mglossary.TType>['reference', {
                                                        'context': <mglossary.TContext>['local', null],
                                                        'type': "FIXMEFIXMEFIXME",
                                                    }],
                                                }),
                                                'template': "Reference",
                                            }],
                                        },
                                    })],
                                    "Geen BTW van toepassing": <mglossary.TType>['group', d({
                                        "BTW-periode": {
                                            'optional': false,
                                            'type': <mglossary.TType>['template', {
                                                'context': <mglossary.TContext>['local', null],
                                                'arguments': d({
                                                    "RererencedType": <mglossary.TType>['reference', {
                                                        'context': <mglossary.TContext>['local', null],
                                                        'type': "FIXMEFIXMEFIXME",
                                                    }],
                                                }),
                                                'template': "Reference",
                                            }],
                                        },
                                    })],
                                    "Import van buiten de EU": <mglossary.TType>['group', d({
                                        "BTW-periode": {
                                            'optional': false,
                                            'type': <mglossary.TType>['template', {
                                                'context': <mglossary.TContext>['local', null],
                                                'arguments': d({
                                                    "RererencedType": <mglossary.TType>['reference', {
                                                        'context': <mglossary.TContext>['local', null],
                                                        'type': "FIXMEFIXMEFIXME",
                                                    }],
                                                }),
                                                'template': "Reference",
                                            }],
                                        },
                                    })],
                                    "Intracommunautair": <mglossary.TType>['group', d({
                                        "BTW-periode": {
                                            'optional': false,
                                            'type': <mglossary.TType>['template', {
                                                'context': <mglossary.TContext>['local', null],
                                                'arguments': d({
                                                    "RererencedType": <mglossary.TType>['reference', {
                                                        'context': <mglossary.TContext>['local', null],
                                                        'type': "FIXMEFIXMEFIXME",
                                                    }],
                                                }),
                                                'template': "Reference",
                                            }],
                                        },
                                    })],
                                    "Standaard": <mglossary.TType>['group', d({
                                        "BTW-periode": {
                                            'optional': false,
                                            'type': <mglossary.TType>['template', {
                                                'context': <mglossary.TContext>['local', null],
                                                'arguments': d({
                                                    "RererencedType": <mglossary.TType>['reference', {
                                                        'context': <mglossary.TContext>['local', null],
                                                        'type': "FIXMEFIXMEFIXME",
                                                    }],
                                                }),
                                                'template': "Reference",
                                            }],
                                        },
                                    })],
                                })],
                            },
                            "Datum": {
                                'optional': false,
                                'type': <mglossary.TType>['number', null],
                            },
                            "Regels": {
                                'optional': false,
                                'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                    "Bedrag": {
                                        'optional': false,
                                        'type': <mglossary.TType>['taggedUnion', d({
                                            "Bekend": <mglossary.TType>['group', d({
                                                "Bedrag inclusief BTW": {
                                                    'optional': false,
                                                    'type': <mglossary.TType>['number', null],
                                                },
                                                "BTW": {
                                                    'optional': false,
                                                    'type': <mglossary.TType>['number', null],
                                                },
                                            })],
                                            "Nog niet bekend": <mglossary.TType>['group', d({
                                                "Aantekeningen": {
                                                    'optional': false,
                                                    'type': <mglossary.TType>['string', null],
                                                },
                                            })],
                                        })],
                                    },
                                    "Omschrijving": {
                                        'optional': false,
                                        'type': <mglossary.TType>['string', null],
                                    },
                                    "Type": {
                                        'optional': false,
                                        'type': <mglossary.TType>['taggedUnion', d({
                                            "Balans": <mglossary.TType>['group', d({
                                                "Balans item": {
                                                    'optional': false,
                                                    'type': <mglossary.TType>['template', {
                                                        'context': <mglossary.TContext>['local', null],
                                                        'arguments': d({
                                                            "RererencedType": <mglossary.TType>['reference', {
                                                                'context': <mglossary.TContext>['local', null],
                                                                'type': "FIXMEFIXMEFIXME",
                                                            }],
                                                        }),
                                                        'template': "Reference",
                                                    }],
                                                },
                                            })],
                                            "Kosten": <mglossary.TType>['group', d({
                                                "Grootboekrekening": {
                                                    'optional': false,
                                                    'type': <mglossary.TType>['template', {
                                                        'context': <mglossary.TContext>['local', null],
                                                        'arguments': d({
                                                            "RererencedType": <mglossary.TType>['reference', {
                                                                'context': <mglossary.TContext>['local', null],
                                                                'type': "FIXMEFIXMEFIXME",
                                                            }],
                                                        }),
                                                        'template': "Reference",
                                                    }],
                                                },
                                            })],
                                        })],
                                    },
                                })]],
                            },
                            "Type": {
                                'optional': false,
                                'type': <mglossary.TType>['taggedUnion', d({
                                    "Bonnetje": <mglossary.TType>['group', d({})],
                                    "Inkoop (met crediteur)": <mglossary.TType>['group', d({
                                        "Crediteur": {
                                            'optional': false,
                                            'type': <mglossary.TType>['template', {
                                                'context': <mglossary.TContext>['local', null],
                                                'arguments': d({
                                                    "RererencedType": <mglossary.TType>['reference', {
                                                        'context': <mglossary.TContext>['local', null],
                                                        'type': "FIXMEFIXMEFIXME",
                                                    }],
                                                }),
                                                'template': "Reference",
                                            }],
                                        },
                                        "Factuurnummer": {
                                            'optional': false,
                                            'type': <mglossary.TType>['string', null],
                                        },
                                    })],
                                    "Loonheffing": <mglossary.TType>['group', d({
                                        "Ronde": {
                                            'optional': false,
                                            'type': <mglossary.TType>['template', {
                                                'context': <mglossary.TContext>['local', null],
                                                'arguments': d({
                                                    "RererencedType": <mglossary.TType>['reference', {
                                                        'context': <mglossary.TContext>['local', null],
                                                        'type': "FIXMEFIXMEFIXME",
                                                    }],
                                                }),
                                                'template': "Reference",
                                            }],
                                        },
                                    })],
                                    "Salaris": <mglossary.TType>['group', d({
                                        "Medewerker": {
                                            'optional': false,
                                            'type': <mglossary.TType>['template', {
                                                'context': <mglossary.TContext>['local', null],
                                                'arguments': d({
                                                    "RererencedType": <mglossary.TType>['reference', {
                                                        'context': <mglossary.TContext>['local', null],
                                                        'type': "FIXMEFIXMEFIXME",
                                                    }],
                                                }),
                                                'template': "Reference",
                                            }],
                                        },
                                        "Ronde": {
                                            'optional': false,
                                            'type': <mglossary.TType>['template', {
                                                'context': <mglossary.TContext>['local', null],
                                                'arguments': d({
                                                    "RererencedType": <mglossary.TType>['reference', {
                                                        'context': <mglossary.TContext>['local', null],
                                                        'type': "FIXMEFIXMEFIXME",
                                                    }],
                                                }),
                                                'template': "Reference",
                                            }],
                                        },
                                    })],
                                    "WBSO": <mglossary.TType>['group', d({
                                        "Ronde": {
                                            'optional': false,
                                            'type': <mglossary.TType>['template', {
                                                'context': <mglossary.TContext>['local', null],
                                                'arguments': d({
                                                    "RererencedType": <mglossary.TType>['reference', {
                                                        'context': <mglossary.TContext>['local', null],
                                                        'type': "FIXMEFIXMEFIXME",
                                                    }],
                                                }),
                                                'template': "Reference",
                                            }],
                                        },
                                    })],
                                })],
                            },
                        })]],
                    },
                    "Overige balans items": {
                        'optional': false,
                        'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                            "Beginsaldo": {
                                'optional': false,
                                'type': <mglossary.TType>['number', null],
                            },
                            "Grootboekrekening": {
                                'optional': false,
                                'type': <mglossary.TType>['template', {
                                    'context': <mglossary.TContext>['local', null],
                                    'arguments': d({
                                        "RererencedType": <mglossary.TType>['reference', {
                                            'context': <mglossary.TContext>['local', null],
                                            'type': "FIXMEFIXMEFIXME",
                                        }],
                                    }),
                                    'template': "Reference",
                                }],
                            },
                            "Memoriaal boekingen": {
                                'optional': false,
                                'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                    "Bedrag": {
                                        'optional': false,
                                        'type': <mglossary.TType>['number', null],
                                    },
                                    "Datum": {
                                        'optional': false,
                                        'type': <mglossary.TType>['number', null],
                                    },
                                    "Grootboekrekening": {
                                        'optional': false,
                                        'type': <mglossary.TType>['template', {
                                            'context': <mglossary.TContext>['local', null],
                                            'arguments': d({
                                                "RererencedType": <mglossary.TType>['reference', {
                                                    'context': <mglossary.TContext>['local', null],
                                                    'type': "FIXMEFIXMEFIXME",
                                                }],
                                            }),
                                            'template': "Reference",
                                        }],
                                    },
                                    "Omschrijving": {
                                        'optional': false,
                                        'type': <mglossary.TType>['string', null],
                                    },
                                })]],
                            },
                            "Nieuw": {
                                'optional': false,
                                'type': <mglossary.TType>['taggedUnion', d({
                                    "Ja": <mglossary.TType>['group', d({})],
                                    "Nee": <mglossary.TType>['group', d({
                                        "Balans item": {
                                            'optional': false,
                                            'type': <mglossary.TType>['template', {
                                                'context': <mglossary.TContext>['local', null],
                                                'arguments': d({
                                                    "RererencedType": <mglossary.TType>['reference', {
                                                        'context': <mglossary.TContext>['local', null],
                                                        'type': "FIXMEFIXMEFIXME",
                                                    }],
                                                }),
                                                'template': "Reference",
                                            }],
                                        },
                                        "Jaar": {
                                            'optional': false,
                                            'type': <mglossary.TType>['template', {
                                                'context': <mglossary.TContext>['local', null],
                                                'arguments': d({
                                                    "RererencedType": <mglossary.TType>['reference', {
                                                        'context': <mglossary.TContext>['local', null],
                                                        'type': "FIXMEFIXMEFIXME",
                                                    }],
                                                }),
                                                'template': "Reference",
                                            }],
                                        },
                                    })],
                                })],
                            },
                        })]],
                    },
                    "Resultaat grootboekrekeningen": {
                        'optional': false,
                        'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({})]],
                    },
                    "Salarisrondes": {
                        'optional': false,
                        'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({})]],
                    },
                    "Startdatum boekjaar": {
                        'optional': false,
                        'type': <mglossary.TType>['number', null],
                    },
                    "Verkopen": {
                        'optional': false,
                        'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                            "Afhandeling": {
                                'optional': false,
                                'type': <mglossary.TType>['taggedUnion', d({
                                    "Mutaties": <mglossary.TType>['group', d({})],
                                    "Rekening courant": <mglossary.TType>['group', d({
                                        "Rekening courant": {
                                            'optional': false,
                                            'type': <mglossary.TType>['template', {
                                                'context': <mglossary.TContext>['local', null],
                                                'arguments': d({
                                                    "RererencedType": <mglossary.TType>['reference', {
                                                        'context': <mglossary.TContext>['local', null],
                                                        'type': "FIXMEFIXMEFIXME",
                                                    }],
                                                }),
                                                'template': "Reference",
                                            }],
                                        },
                                    })],
                                })],
                            },
                            "Betalingstermijn": {
                                'optional': false,
                                'type': <mglossary.TType>['number', null],
                            },
                            "Brondocument": {
                                'optional': false,
                                'type': <mglossary.TType>['taggedUnion', d({
                                    "Nog toevoegen": <mglossary.TType>['group', d({})],
                                    "Toegevoegd": <mglossary.TType>['group', d({
                                        "Document": {
                                            'optional': false,
                                            'type': <mglossary.TType>['string', null],
                                        },
                                    })],
                                })],
                            },
                            "BTW-periode": {
                                'optional': false,
                                'type': <mglossary.TType>['template', {
                                    'context': <mglossary.TContext>['local', null],
                                    'arguments': d({
                                        "RererencedType": <mglossary.TType>['reference', {
                                            'context': <mglossary.TContext>['local', null],
                                            'type': "FIXMEFIXMEFIXME",
                                        }],
                                    }),
                                    'template': "Reference",
                                }],
                            },
                            "Contracttype": {
                                'optional': false,
                                'type': <mglossary.TType>['taggedUnion', d({
                                    "Licentieovereenkomst": <mglossary.TType>['group', d({
                                        "Overeenkomst": {
                                            'optional': false,
                                            'type': <mglossary.TType>['template', {
                                                'context': <mglossary.TContext>['local', null],
                                                'arguments': d({
                                                    "RererencedType": <mglossary.TType>['reference', {
                                                        'context': <mglossary.TContext>['local', null],
                                                        'type': "FIXMEFIXMEFIXME",
                                                    }],
                                                }),
                                                'template': "Reference",
                                            }],
                                        },
                                    })],
                                    "Project": <mglossary.TType>['group', d({
                                        "Offerte": {
                                            'optional': false,
                                            'type': <mglossary.TType>['template', {
                                                'context': <mglossary.TContext>['local', null],
                                                'arguments': d({
                                                    "RererencedType": <mglossary.TType>['reference', {
                                                        'context': <mglossary.TContext>['local', null],
                                                        'type': "FIXMEFIXMEFIXME",
                                                    }],
                                                }),
                                                'template': "Reference",
                                            }],
                                        },
                                        "Project": {
                                            'optional': false,
                                            'type': <mglossary.TType>['template', {
                                                'context': <mglossary.TContext>['local', null],
                                                'arguments': d({
                                                    "RererencedType": <mglossary.TType>['reference', {
                                                        'context': <mglossary.TContext>['local', null],
                                                        'type': "FIXMEFIXMEFIXME",
                                                    }],
                                                }),
                                                'template': "Reference",
                                            }],
                                        },
                                    })],
                                })],
                            },
                            "Debiteur": {
                                'optional': false,
                                'type': <mglossary.TType>['template', {
                                    'context': <mglossary.TContext>['local', null],
                                    'arguments': d({
                                        "RererencedType": <mglossary.TType>['reference', {
                                            'context': <mglossary.TContext>['local', null],
                                            'type': "FIXMEFIXMEFIXME",
                                        }],
                                    }),
                                    'template': "Reference",
                                }],
                            },
                            "Regels": {
                                'optional': false,
                                'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                    "Bedrag exclusief BTW": {
                                        'optional': false,
                                        'type': <mglossary.TType>['number', null],
                                    },
                                    "BTW-regime": {
                                        'optional': false,
                                        'type': <mglossary.TType>['taggedUnion', d({
                                            "Binnenland heffing verlegd": <mglossary.TType>['group', d({})],
                                            "Export buiten de EU": <mglossary.TType>['group', d({})],
                                            "Installatie of afstandsverkopen binnen de EU": <mglossary.TType>['group', d({})],
                                            "Intracommunautair": <mglossary.TType>['group', d({})],
                                            "Standaard": <mglossary.TType>['group', d({
                                                "BTW-cateogrie": {
                                                    'optional': false,
                                                    'type': <mglossary.TType>['template', {
                                                        'context': <mglossary.TContext>['local', null],
                                                        'arguments': d({
                                                            "RererencedType": <mglossary.TType>['reference', {
                                                                'context': <mglossary.TContext>['local', null],
                                                                'type': "FIXMEFIXMEFIXME",
                                                            }],
                                                        }),
                                                        'template': "Reference",
                                                    }],
                                                },
                                            })],
                                        })],
                                    },
                                    "Contracttype": {
                                        'optional': false,
                                        'type': <mglossary.TType>['taggedUnion', d({
                                            "Licentieovereenkomst": <mglossary.TType>['group', d({
                                                "Periode": {
                                                    'optional': false,
                                                    'type': <mglossary.TType>['template', {
                                                        'context': <mglossary.TContext>['local', null],
                                                        'arguments': d({
                                                            "RererencedType": <mglossary.TType>['reference', {
                                                                'context': <mglossary.TContext>['local', null],
                                                                'type': "FIXMEFIXMEFIXME",
                                                            }],
                                                        }),
                                                        'template': "Reference",
                                                    }],
                                                },
                                            })],
                                            "Los": <mglossary.TType>['group', d({})],
                                            "Project": <mglossary.TType>['group', d({
                                                "Opbrengst": {
                                                    'optional': false,
                                                    'type': <mglossary.TType>['template', {
                                                        'context': <mglossary.TContext>['local', null],
                                                        'arguments': d({
                                                            "RererencedType": <mglossary.TType>['reference', {
                                                                'context': <mglossary.TContext>['local', null],
                                                                'type': "FIXMEFIXMEFIXME",
                                                            }],
                                                        }),
                                                        'template': "Reference",
                                                    }],
                                                },
                                            })],
                                        })],
                                    },
                                    "Omschrijving": {
                                        'optional': false,
                                        'type': <mglossary.TType>['string', null],
                                    },
                                    "Type": {
                                        'optional': false,
                                        'type': <mglossary.TType>['taggedUnion', d({
                                            "Balans": <mglossary.TType>['group', d({
                                                "Balans item": {
                                                    'optional': false,
                                                    'type': <mglossary.TType>['template', {
                                                        'context': <mglossary.TContext>['local', null],
                                                        'arguments': d({
                                                            "RererencedType": <mglossary.TType>['reference', {
                                                                'context': <mglossary.TContext>['local', null],
                                                                'type': "FIXMEFIXMEFIXME",
                                                            }],
                                                        }),
                                                        'template': "Reference",
                                                    }],
                                                },
                                            })],
                                            "Opbrengsten": <mglossary.TType>['group', d({
                                                "Grootboekrekening": {
                                                    'optional': false,
                                                    'type': <mglossary.TType>['template', {
                                                        'context': <mglossary.TContext>['local', null],
                                                        'arguments': d({
                                                            "RererencedType": <mglossary.TType>['reference', {
                                                                'context': <mglossary.TContext>['local', null],
                                                                'type': "FIXMEFIXMEFIXME",
                                                            }],
                                                        }),
                                                        'template': "Reference",
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
                        'optional': false,
                        'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                            "Mutaties": {
                                'optional': false,
                                'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                    "Afhandeling": {
                                        'optional': false,
                                        'type': <mglossary.TType>['reference', {
                                            'context': <mglossary.TContext>['local', null],
                                            'type': "Afhandeling",
                                        }],
                                    },
                                    "Bedrag": {
                                        'optional': false,
                                        'type': <mglossary.TType>['number', null],
                                    },
                                })]],
                            },
                        })]],
                    },
                })]],
            }),
            'interfaces': d({}),
            'functions': d({}),
        },
        'api': {
            'imports': d({
                'common': "glo-pareto-common"
            }),
            'algorithms': d({}),
        },
    },
    'implementation': {
        'implementations': d({}),
    },
}