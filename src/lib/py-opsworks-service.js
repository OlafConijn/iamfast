export default {
  "service": {
    "actions": {
      "CreateStack": {
        "request": { "operation": "CreateStack" },
        "resource": {
          "type": "Stack",
          "identifiers": [
            { "target": "Id", "source": "response", "path": "StackId" }
          ]
        }
      }
    },
    "has": {
      "Layer": {
        "resource": {
          "type": "Layer",
          "identifiers": [
            { "target": "Id", "source": "input" }
          ]
        }
      },
      "Stack": {
        "resource": {
          "type": "Stack",
          "identifiers": [
            { "target": "Id", "source": "input" }
          ]
        }
      }
    },
    "hasMany": {
      "Stacks": {
        "request": { "operation": "DescribeStacks" },
        "resource": {
          "type": "Stack",
          "identifiers": [
            { "target": "Id", "source": "response", "path": "Stacks[].StackId" }
          ],
          "path": "Stacks[]"
        }
      }
    }
  },
  "resources": {
    "Layer": {
      "identifiers": [
        { "name": "Id" }
      ],
      "shape": "Layer",
      "load": {
        "request": {
          "operation": "DescribeLayers",
          "params": [
            { "target": "LayerIds[]", "source": "identifier", "name": "Id" }
          ]
        },
        "path": "Layers[0]"
      },
      "actions": {
        "Delete": {
          "request": {
            "operation": "DeleteLayer",
            "params": [
              { "target": "LayerId", "source": "identifier", "name": "Id" }
            ]
          }
        }
      },
      "has": {
        "Stack": {
          "resource": {
            "type": "Stack",
            "identifiers": [
              { "target": "Id", "source": "data", "path": "StackId" }
            ]
          }
        }
      }
    },
    "Stack": {
      "identifiers": [
        { "name": "Id" }
      ],
      "shape": "Stack",
      "load": {
        "request": {
          "operation": "DescribeStacks",
          "params": [
            { "target": "StackIds[]", "source": "identifier", "name": "Id" }
          ]
        },
        "path": "Stacks[0]"
      },
      "actions": {
        "CreateLayer": {
          "request": {
            "operation": "CreateLayer",
            "params": [
              { "target": "StackId", "source": "identifier", "name": "Id" }
            ]
          },
          "resource": {
            "type": "Layer",
            "identifiers": [
              { "target": "Id", "source": "response", "path": "LayerId" }
            ]
          }
        },
        "Delete": {
          "request": {
            "operation": "DeleteStack",
            "params": [
              { "target": "StackId", "source": "identifier", "name": "Id" }
            ]
          }
        }
      },
      "has": {
        "Summary": {
          "resource": {
            "type": "StackSummary",
            "identifiers": [
              { "target": "StackId", "source": "identifier", "name": "Id" }
            ]
          }
        }
      },
      "hasMany": {
        "Layers": {
          "request": {
            "operation": "DescribeLayers",
            "params": [
              { "target": "StackId", "source": "identifier", "name": "Id" }
            ]
          },
          "resource": {
            "type": "Layer",
            "identifiers": [
              { "target": "Id", "source": "response", "path": "Layers[].LayerId" }
            ],
            "path": "Layers[]"
          }
        }
      }
    },
    "StackSummary": {
      "identifiers": [
        { "name": "StackId" }
      ],
      "shape": "StackSummary",
      "load": {
        "request": {
          "operation": "DescribeStackSummary",
          "params": [
            { "target": "StackId", "source": "identifier", "name": "StackId" }
          ]
        },
        "path": "StackSummary"
      },
      "has": {
        "Stack": {
          "resource": {
            "type": "Stack",
            "identifiers": [
              { "target": "Id", "source": "identifier", "name": "StackId" }
            ]
          }
        }
      }
    }
  }
}
