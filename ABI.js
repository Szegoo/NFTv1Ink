export const ABI = {
  "metadataVersion": "0.1.0",
  "source": {
    "hash": "0x99a84a66a0b38290956cc06c42b2a4e745d9abe65b8b0551a5ba6e3c955553b7",
    "language": "ink! 3.0.0-rc4",
    "compiler": "rustc 1.56.0-nightly"
  },
  "contract": {
    "name": "flipper",
    "version": "0.1.0",
    "authors": [
      "[your_name] <[your_email]>"
    ]
  },
  "spec": {
    "constructors": [
      {
        "args": [],
        "docs": [],
        "name": [
          "new"
        ],
        "selector": "0x9bae9d5e"
      }
    ],
    "docs": [],
    "events": [
      {
        "args": [
          {
            "docs": [],
            "indexed": true,
            "name": "from",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 6
            }
          },
          {
            "docs": [],
            "indexed": true,
            "name": "to",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 6
            }
          },
          {
            "docs": [],
            "indexed": true,
            "name": "token_id",
            "type": {
              "displayName": [
                "u32"
              ],
              "type": 2
            }
          }
        ],
        "docs": [],
        "name": "Transfer"
      },
      {
        "args": [
          {
            "docs": [],
            "indexed": true,
            "name": "owner",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 6
            }
          },
          {
            "docs": [],
            "indexed": true,
            "name": "spender",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 6
            }
          },
          {
            "docs": [],
            "indexed": true,
            "name": "token_id",
            "type": {
              "displayName": [
                "u32"
              ],
              "type": 2
            }
          }
        ],
        "docs": [],
        "name": "Approve"
      }
    ],
    "messages": [
      {
        "args": [
          {
            "name": "owner",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 6
            }
          }
        ],
        "docs": [],
        "mutates": false,
        "name": [
          "balance_of"
        ],
        "payable": false,
        "returnType": {
          "displayName": [
            "u32"
          ],
          "type": 2
        },
        "selector": "0x0f755a56"
      },
      {
        "args": [
          {
            "name": "token_id",
            "type": {
              "displayName": [
                "u32"
              ],
              "type": 2
            }
          }
        ],
        "docs": [],
        "mutates": false,
        "name": [
          "owner_of"
        ],
        "payable": false,
        "returnType": {
          "displayName": [
            "Option"
          ],
          "type": 11
        },
        "selector": "0x99720c1e"
      },
      {
        "args": [],
        "docs": [],
        "mutates": false,
        "name": [
          "get_last_id"
        ],
        "payable": false,
        "returnType": {
          "displayName": [
            "u32"
          ],
          "type": 2
        },
        "selector": "0xd3de4d5a"
      },
      {
        "args": [
          {
            "name": "spender",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 6
            }
          },
          {
            "name": "token_id",
            "type": {
              "displayName": [
                "u32"
              ],
              "type": 2
            }
          }
        ],
        "docs": [],
        "mutates": true,
        "name": [
          "approve"
        ],
        "payable": false,
        "returnType": null,
        "selector": "0x681266a0"
      },
      {
        "args": [
          {
            "name": "token_id",
            "type": {
              "displayName": [
                "u32"
              ],
              "type": 2
            }
          }
        ],
        "docs": [],
        "mutates": false,
        "name": [
          "approval_of"
        ],
        "payable": false,
        "returnType": {
          "displayName": [
            "Option"
          ],
          "type": 11
        },
        "selector": "0xfd536ca5"
      },
      {
        "args": [],
        "docs": [],
        "mutates": true,
        "name": [
          "mint"
        ],
        "payable": false,
        "returnType": null,
        "selector": "0xcfdd9aa2"
      },
      {
        "args": [
          {
            "name": "token_id",
            "type": {
              "displayName": [
                "u32"
              ],
              "type": 2
            }
          },
          {
            "name": "to",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 6
            }
          }
        ],
        "docs": [],
        "mutates": true,
        "name": [
          "transfer"
        ],
        "payable": false,
        "returnType": null,
        "selector": "0x84a15da1"
      },
      {
        "args": [
          {
            "name": "to",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 6
            }
          },
          {
            "name": "token_id",
            "type": {
              "displayName": [
                "u32"
              ],
              "type": 2
            }
          }
        ],
        "docs": [],
        "mutates": true,
        "name": [
          "transfer_from"
        ],
        "payable": false,
        "returnType": null,
        "selector": "0x0b396f18"
      }
    ]
  },
  "storage": {
    "struct": {
      "fields": [
        {
          "layout": {
            "struct": {
              "fields": [
                {
                  "layout": {
                    "struct": {
                      "fields": [
                        {
                          "layout": {
                            "cell": {
                              "key": "0x0000000000000000000000000000000000000000000000000000000000000000",
                              "ty": 1
                            }
                          },
                          "name": "header"
                        },
                        {
                          "layout": {
                            "struct": {
                              "fields": [
                                {
                                  "layout": {
                                    "cell": {
                                      "key": "0x0100000000000000000000000000000000000000000000000000000000000000",
                                      "ty": 2
                                    }
                                  },
                                  "name": "len"
                                },
                                {
                                  "layout": {
                                    "array": {
                                      "cellsPerElem": 1,
                                      "layout": {
                                        "cell": {
                                          "key": "0x0100000001000000000000000000000000000000000000000000000000000000",
                                          "ty": 3
                                        }
                                      },
                                      "len": 4294967295,
                                      "offset": "0x0200000000000000000000000000000000000000000000000000000000000000"
                                    }
                                  },
                                  "name": "elems"
                                }
                              ]
                            }
                          },
                          "name": "entries"
                        }
                      ]
                    }
                  },
                  "name": "keys"
                },
                {
                  "layout": {
                    "hash": {
                      "layout": {
                        "cell": {
                          "key": "0x0200000001000000000000000000000000000000000000000000000000000000",
                          "ty": 5
                        }
                      },
                      "offset": "0x0100000001000000000000000000000000000000000000000000000000000000",
                      "strategy": {
                        "hasher": "Blake2x256",
                        "postfix": "",
                        "prefix": "0x696e6b20686173686d6170"
                      }
                    }
                  },
                  "name": "values"
                }
              ]
            }
          },
          "name": "owners"
        },
        {
          "layout": {
            "struct": {
              "fields": [
                {
                  "layout": {
                    "struct": {
                      "fields": [
                        {
                          "layout": {
                            "cell": {
                              "key": "0x0200000001000000000000000000000000000000000000000000000000000000",
                              "ty": 1
                            }
                          },
                          "name": "header"
                        },
                        {
                          "layout": {
                            "struct": {
                              "fields": [
                                {
                                  "layout": {
                                    "cell": {
                                      "key": "0x0300000001000000000000000000000000000000000000000000000000000000",
                                      "ty": 2
                                    }
                                  },
                                  "name": "len"
                                },
                                {
                                  "layout": {
                                    "array": {
                                      "cellsPerElem": 1,
                                      "layout": {
                                        "cell": {
                                          "key": "0x0300000002000000000000000000000000000000000000000000000000000000",
                                          "ty": 9
                                        }
                                      },
                                      "len": 4294967295,
                                      "offset": "0x0400000001000000000000000000000000000000000000000000000000000000"
                                    }
                                  },
                                  "name": "elems"
                                }
                              ]
                            }
                          },
                          "name": "entries"
                        }
                      ]
                    }
                  },
                  "name": "keys"
                },
                {
                  "layout": {
                    "hash": {
                      "layout": {
                        "cell": {
                          "key": "0x0400000002000000000000000000000000000000000000000000000000000000",
                          "ty": 10
                        }
                      },
                      "offset": "0x0300000002000000000000000000000000000000000000000000000000000000",
                      "strategy": {
                        "hasher": "Blake2x256",
                        "postfix": "",
                        "prefix": "0x696e6b20686173686d6170"
                      }
                    }
                  },
                  "name": "values"
                }
              ]
            }
          },
          "name": "balances"
        },
        {
          "layout": {
            "struct": {
              "fields": [
                {
                  "layout": {
                    "struct": {
                      "fields": [
                        {
                          "layout": {
                            "cell": {
                              "key": "0x0400000002000000000000000000000000000000000000000000000000000000",
                              "ty": 1
                            }
                          },
                          "name": "header"
                        },
                        {
                          "layout": {
                            "struct": {
                              "fields": [
                                {
                                  "layout": {
                                    "cell": {
                                      "key": "0x0500000002000000000000000000000000000000000000000000000000000000",
                                      "ty": 2
                                    }
                                  },
                                  "name": "len"
                                },
                                {
                                  "layout": {
                                    "array": {
                                      "cellsPerElem": 1,
                                      "layout": {
                                        "cell": {
                                          "key": "0x0500000003000000000000000000000000000000000000000000000000000000",
                                          "ty": 3
                                        }
                                      },
                                      "len": 4294967295,
                                      "offset": "0x0600000002000000000000000000000000000000000000000000000000000000"
                                    }
                                  },
                                  "name": "elems"
                                }
                              ]
                            }
                          },
                          "name": "entries"
                        }
                      ]
                    }
                  },
                  "name": "keys"
                },
                {
                  "layout": {
                    "hash": {
                      "layout": {
                        "cell": {
                          "key": "0x0600000003000000000000000000000000000000000000000000000000000000",
                          "ty": 5
                        }
                      },
                      "offset": "0x0500000003000000000000000000000000000000000000000000000000000000",
                      "strategy": {
                        "hasher": "Blake2x256",
                        "postfix": "",
                        "prefix": "0x696e6b20686173686d6170"
                      }
                    }
                  },
                  "name": "values"
                }
              ]
            }
          },
          "name": "approved"
        },
        {
          "layout": {
            "cell": {
              "key": "0x0600000003000000000000000000000000000000000000000000000000000000",
              "ty": 2
            }
          },
          "name": "last_id"
        }
      ]
    }
  },
  "types": [
    {
      "def": {
        "composite": {
          "fields": [
            {
              "name": "last_vacant",
              "type": 2,
              "typeName": "Index"
            },
            {
              "name": "len",
              "type": 2,
              "typeName": "u32"
            },
            {
              "name": "len_entries",
              "type": 2,
              "typeName": "u32"
            }
          ]
        }
      },
      "path": [
        "ink_storage",
        "collections",
        "stash",
        "Header"
      ]
    },
    {
      "def": {
        "primitive": "u32"
      }
    },
    {
      "def": {
        "variant": {
          "variants": [
            {
              "fields": [
                {
                  "type": 4,
                  "typeName": "VacantEntry"
                }
              ],
              "name": "Vacant"
            },
            {
              "fields": [
                {
                  "type": 2,
                  "typeName": "T"
                }
              ],
              "name": "Occupied"
            }
          ]
        }
      },
      "params": [
        2
      ],
      "path": [
        "ink_storage",
        "collections",
        "stash",
        "Entry"
      ]
    },
    {
      "def": {
        "composite": {
          "fields": [
            {
              "name": "next",
              "type": 2,
              "typeName": "Index"
            },
            {
              "name": "prev",
              "type": 2,
              "typeName": "Index"
            }
          ]
        }
      },
      "path": [
        "ink_storage",
        "collections",
        "stash",
        "VacantEntry"
      ]
    },
    {
      "def": {
        "composite": {
          "fields": [
            {
              "name": "value",
              "type": 6,
              "typeName": "V"
            },
            {
              "name": "key_index",
              "type": 2,
              "typeName": "KeyIndex"
            }
          ]
        }
      },
      "params": [
        6
      ],
      "path": [
        "ink_storage",
        "collections",
        "hashmap",
        "ValueEntry"
      ]
    },
    {
      "def": {
        "composite": {
          "fields": [
            {
              "type": 7,
              "typeName": "[u8; 32]"
            }
          ]
        }
      },
      "path": [
        "ink_env",
        "types",
        "AccountId"
      ]
    },
    {
      "def": {
        "array": {
          "len": 32,
          "type": 8
        }
      }
    },
    {
      "def": {
        "primitive": "u8"
      }
    },
    {
      "def": {
        "variant": {
          "variants": [
            {
              "fields": [
                {
                  "type": 4,
                  "typeName": "VacantEntry"
                }
              ],
              "name": "Vacant"
            },
            {
              "fields": [
                {
                  "type": 6,
                  "typeName": "T"
                }
              ],
              "name": "Occupied"
            }
          ]
        }
      },
      "params": [
        6
      ],
      "path": [
        "ink_storage",
        "collections",
        "stash",
        "Entry"
      ]
    },
    {
      "def": {
        "composite": {
          "fields": [
            {
              "name": "value",
              "type": 2,
              "typeName": "V"
            },
            {
              "name": "key_index",
              "type": 2,
              "typeName": "KeyIndex"
            }
          ]
        }
      },
      "params": [
        2
      ],
      "path": [
        "ink_storage",
        "collections",
        "hashmap",
        "ValueEntry"
      ]
    },
    {
      "def": {
        "variant": {
          "variants": [
            {
              "name": "None"
            },
            {
              "fields": [
                {
                  "type": 6,
                  "typeName": "T"
                }
              ],
              "name": "Some"
            }
          ]
        }
      },
      "params": [
        6
      ],
      "path": [
        "Option"
      ]
    }
  ]
}