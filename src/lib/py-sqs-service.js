export default {
  "service": {
    "actions": {
      "CreateQueue": {
        "request": { "operation": "CreateQueue" },
        "resource": {
          "type": "Queue",
          "identifiers": [
            { "target": "Url", "source": "response", "path": "QueueUrl" }
          ]
        }
      },
      "GetQueueByName": {
        "request": { "operation": "GetQueueUrl" },
        "resource": {
          "type": "Queue",
          "identifiers": [
            { "target": "Url", "source": "response", "path": "QueueUrl" }
          ]
        }
      }
    },
    "has": {
      "Queue": {
        "resource": {
          "type": "Queue",
          "identifiers": [
            { "target": "Url", "source": "input" }
          ]
        }
      }
    },
    "hasMany": {
      "Queues": {
        "request": { "operation": "ListQueues" },
        "resource": {
          "type": "Queue",
          "identifiers": [
            { "target": "Url", "source": "response", "path": "QueueUrls[]" }
          ]
        }
      }
    }
  },
  "resources": {
    "Message": {
      "identifiers": [
        { "name": "QueueUrl" },
        {
          "name": "ReceiptHandle",
          "memberName": "ReceiptHandle"
        }
      ],
      "shape": "Message",
      "actions": {
        "ChangeVisibility": {
          "request": {
            "operation": "ChangeMessageVisibility",
            "params": [
              { "target": "QueueUrl", "source": "identifier", "name": "QueueUrl" },
              { "target": "ReceiptHandle", "source": "identifier", "name": "ReceiptHandle" }
            ]
          }
        },
        "Delete": {
          "request": {
            "operation": "DeleteMessage",
            "params": [
              { "target": "QueueUrl", "source": "identifier", "name": "QueueUrl" },
              { "target": "ReceiptHandle", "source": "identifier", "name": "ReceiptHandle" }
            ]
          }
        }
      },
      "batchActions": {
        "Delete": {
          "request": {
            "operation": "DeleteMessageBatch",
            "params": [
              { "target": "QueueUrl", "source": "identifier", "name": "QueueUrl" },
              { "target": "Entries[*].Id", "source": "data", "path": "MessageId" },
              { "target": "Entries[*].ReceiptHandle", "source": "identifier", "name": "ReceiptHandle" }
            ]
          }
        }
      },
      "has": {
        "Queue": {
          "resource": {
            "type": "Queue",
            "identifiers": [
              { "target": "Url", "source": "identifier", "name": "QueueUrl" }
            ]
          }
        }
      }
    },
    "Queue": {
      "identifiers": [
        { "name": "Url" }
      ],
      "shape": "GetQueueAttributesResult",
      "load": {
        "request": {
          "operation": "GetQueueAttributes",
          "params": [
            { "target": "QueueUrl", "source": "identifier", "name": "Url" },
            { "target": "AttributeNames[]", "source": "string", "value": "All" }
          ]
        },
        "path": "@"
      },
      "actions": {
        "AddPermission": {
          "request": {
            "operation": "AddPermission",
            "params": [
              { "target": "QueueUrl", "source": "identifier", "name": "Url" }
            ]
          }
        },
        "ChangeMessageVisibilityBatch": {
          "request": {
            "operation": "ChangeMessageVisibilityBatch",
            "params": [
              { "target": "QueueUrl", "source": "identifier", "name": "Url" }
            ]
          }
        },
        "Delete": {
          "request": {
            "operation": "DeleteQueue",
            "params": [
              { "target": "QueueUrl", "source": "identifier", "name": "Url" }
            ]
          }
        },
        "DeleteMessages": {
          "request": {
            "operation": "DeleteMessageBatch",
            "params": [
              { "target": "QueueUrl", "source": "identifier", "name": "Url" }
            ]
          }
        },
        "Purge": {
          "request": {
            "operation": "PurgeQueue",
            "params": [
              { "target": "QueueUrl", "source": "identifier", "name": "Url" }
            ]
          }
        },
        "ReceiveMessages": {
          "request": {
            "operation": "ReceiveMessage",
            "params": [
              { "target": "QueueUrl", "source": "identifier", "name": "Url" }
            ]
          },
          "resource": {
            "type": "Message",
            "identifiers": [
              { "target": "QueueUrl", "source": "identifier", "name": "Url" },
              { "target": "ReceiptHandle", "source": "response", "path": "Messages[].ReceiptHandle" }
            ],
            "path": "Messages[]"
          }
        },
        "RemovePermission": {
          "request": {
            "operation": "RemovePermission",
            "params": [
              { "target": "QueueUrl", "source": "identifier", "name": "Url" }
            ]
          }
        },
        "SendMessage": {
          "request": {
            "operation": "SendMessage",
            "params": [
              { "target": "QueueUrl", "source": "identifier", "name": "Url" }
            ]
          }
        },
        "SendMessages": {
          "request": {
            "operation": "SendMessageBatch",
            "params": [
              { "target": "QueueUrl", "source": "identifier", "name": "Url" }
            ]
          }
        },
        "SetAttributes": {
          "request": {
            "operation": "SetQueueAttributes",
            "params": [
              { "target": "QueueUrl", "source": "identifier", "name": "Url" }
            ]
          }
        }
      },
      "has": {
        "Message": {
          "resource": {
            "type": "Message",
            "identifiers": [
              { "target": "QueueUrl", "source": "identifier", "name": "Url" },
              { "target": "ReceiptHandle", "source": "input" }
            ]
          }
        }
      },
      "hasMany": {
        "DeadLetterSourceQueues": {
          "request": {
            "operation": "ListDeadLetterSourceQueues",
            "params": [
              { "target": "QueueUrl", "source": "identifier", "name": "Url" }
            ]
          },
          "resource": {
            "type": "Queue",
            "identifiers": [
              { "target": "Url", "source": "response", "path": "queueUrls[]" }
            ]
          }
        }
      }
    }
  }
}
