export default {
  "service": {
    "actions": {
      "CreateVault": {
        "request": {
          "operation": "CreateVault",
          "params": [
            { "target": "accountId", "source": "string", "value": "-" }
          ]
        },
        "resource": {
          "type": "Vault",
          "identifiers": [
            { "target": "AccountId", "source": "requestParameter", "path": "accountId" },
            { "target": "Name", "source": "requestParameter", "path": "vaultName" }
          ]
        }
      }
    },
    "has": {
      "Account": {
        "resource": {
          "type": "Account",
          "identifiers": [
            { "target": "Id", "source": "input" }
          ]
        }
      }
    },
    "hasMany": {
      "Vaults": {
        "request": {
          "operation": "ListVaults",
          "params": [
            { "target": "accountId", "source": "string", "value": "-" }
          ]
        },
        "resource": {
          "type": "Vault",
          "identifiers": [
            { "target": "AccountId", "source": "requestParameter", "path": "accountId" },
            { "target": "Name", "source": "response", "path": "VaultList[].VaultName" }
          ],
          "path": "VaultList[]"
        }
      }
    }
  },
  "resources": {
    "Account": {
      "identifiers": [
        { "name": "Id" }
      ],
      "actions": {
        "CreateVault": {
          "request": {
            "operation": "CreateVault",
            "params": [
              { "target": "accountId", "source": "identifier", "name": "Id" }
            ]
          },
          "resource": {
            "type": "Vault",
            "identifiers": [
              { "target": "AccountId", "source": "identifier", "name": "Id" },
              { "target": "Name", "source": "requestParameter", "path": "vaultName" }
            ]
          }
        }
      },
      "has": {
        "Vault": {
          "resource": {
            "type": "Vault",
            "identifiers": [
              { "target": "AccountId", "source": "identifier", "name": "Id" },
              { "target": "Name", "source": "input" }
            ]
          }
        }
      },
      "hasMany": {
        "Vaults": {
          "request": {
            "operation": "ListVaults",
            "params": [
              { "target": "accountId", "source": "identifier", "name": "Id" }
            ]
          },
          "resource": {
            "type": "Vault",
            "identifiers": [
              { "target": "AccountId", "source": "identifier", "name": "Id" },
              { "target": "Name", "source": "response", "path": "VaultList[].VaultName" }
            ],
            "path": "VaultList[]"
          }
        }
      }
    },
    "Archive": {
      "identifiers": [
        { "name": "AccountId" },
        { "name": "VaultName" },
        { "name": "Id" }
      ],
      "actions": {
        "Delete": {
          "request": {
            "operation": "DeleteArchive",
            "params": [
              { "target": "accountId", "source": "identifier", "name": "AccountId" },
              { "target": "vaultName", "source": "identifier", "name": "VaultName" },
              { "target": "archiveId", "source": "identifier", "name": "Id" }
            ]
          }
        },
        "InitiateArchiveRetrieval": {
          "request": {
            "operation": "InitiateJob",
            "params": [
              { "target": "vaultName", "source": "identifier", "name": "VaultName" },
              { "target": "accountId", "source": "identifier", "name": "AccountId" },
              { "target": "jobParameters.Type", "source": "string", "value": "archive-retrieval" },
              { "target": "jobParameters.ArchiveId", "source": "identifier", "name": "Id" }
            ]
          },
          "resource": {
            "type": "Job",
            "identifiers": [
              { "target": "Id", "source": "response", "path": "jobId" },
              { "target": "AccountId", "source": "identifier", "name": "AccountId" },
              { "target": "VaultName", "source": "identifier", "name": "VaultName" }
            ]
          }
        }
      },
      "has": {
        "Vault": {
          "resource": {
            "type": "Vault",
            "identifiers": [
              { "target": "AccountId", "source": "identifier", "name": "AccountId" },
              { "target": "Name", "source": "identifier", "name": "VaultName" }
            ]
          }
        }
      }
    },
    "Job": {
      "identifiers": [
        { "name": "AccountId" },
        { "name": "VaultName" },
        {
          "name": "Id",
          "memberName": "JobId"
        }
      ],
      "shape": "GlacierJobDescription",
      "load": {
        "request": {
          "operation": "DescribeJob",
          "params": [
            { "target": "accountId", "source": "identifier", "name": "AccountId" },
            { "target": "vaultName", "source": "identifier", "name": "VaultName" },
            { "target": "jobId", "source": "identifier", "name": "Id" }
          ]
        },
        "path": "@"
      },
      "actions": {
        "GetOutput": {
          "request": {
            "operation": "GetJobOutput",
            "params": [
              { "target": "accountId", "source": "identifier", "name": "AccountId" },
              { "target": "vaultName", "source": "identifier", "name": "VaultName" },
              { "target": "jobId", "source": "identifier", "name": "Id" }
            ]
          }
        }
      },
      "has": {
        "Vault": {
          "resource": {
            "type": "Vault",
            "identifiers": [
              { "target": "AccountId", "source": "identifier", "name": "AccountId" },
              { "target": "Name", "source": "identifier", "name": "VaultName" }
            ]
          }
        }
      }
    },
    "MultipartUpload": {
      "identifiers": [
        { "name": "AccountId" },
        { "name": "VaultName" },
        {
          "name": "Id",
          "memberName": "MultipartUploadId"
        }
      ],
      "shape": "UploadListElement",
      "actions": {
        "Abort": {
          "request": {
            "operation": "AbortMultipartUpload",
            "params": [
              { "target": "accountId", "source": "identifier", "name": "AccountId" },
              { "target": "vaultName", "source": "identifier", "name": "VaultName" },
              { "target": "uploadId", "source": "identifier", "name": "Id" }
            ]
          }
        },
        "Complete": {
          "request": {
            "operation": "CompleteMultipartUpload",
            "params": [
              { "target": "accountId", "source": "identifier", "name": "AccountId" },
              { "target": "vaultName", "source": "identifier", "name": "VaultName" },
              { "target": "uploadId", "source": "identifier", "name": "Id" }
            ]
          }
        },
        "Parts": {
          "request": {
            "operation": "ListParts",
            "params": [
              { "target": "accountId", "source": "identifier", "name": "AccountId" },
              { "target": "vaultName", "source": "identifier", "name": "VaultName" },
              { "target": "uploadId", "source": "identifier", "name": "Id" }
            ]
          }
        },
        "UploadPart": {
          "request": {
            "operation": "UploadMultipartPart",
            "params": [
              { "target": "accountId", "source": "identifier", "name": "AccountId" },
              { "target": "vaultName", "source": "identifier", "name": "VaultName" },
              { "target": "uploadId", "source": "identifier", "name": "Id" }
            ]
          }
        }
      },
      "has": {
        "Vault": {
          "resource": {
            "type": "Vault",
            "identifiers": [
              { "target": "AccountId", "source": "identifier", "name": "AccountId" },
              { "target": "Name", "source": "identifier", "name": "VaultName" }
            ]
          }
        }
      }
    },
    "Notification": {
      "identifiers": [
        { "name": "AccountId" },
        { "name": "VaultName" }
      ],
      "shape": "VaultNotificationConfig",
      "load": {
        "request": {
          "operation": "GetVaultNotifications",
          "params": [
            { "target": "accountId", "source": "identifier", "name": "AccountId" },
            { "target": "vaultName", "source": "identifier", "name": "VaultName" }
          ]
        },
        "path": "vaultNotificationConfig"
      },
      "actions": {
        "Delete": {
          "request": {
            "operation": "DeleteVaultNotifications",
            "params": [
              { "target": "accountId", "source": "identifier", "name": "AccountId" },
              { "target": "vaultName", "source": "identifier", "name": "VaultName" }
            ]
          }
        },
        "Set": {
          "request": {
            "operation": "SetVaultNotifications",
            "params": [
              { "target": "accountId", "source": "identifier", "name": "AccountId" },
              { "target": "vaultName", "source": "identifier", "name": "VaultName" }
            ]
          }
        }
      },
      "has": {
        "Vault": {
          "resource": {
            "type": "Vault",
            "identifiers": [
              { "target": "AccountId", "source": "identifier", "name": "AccountId" },
              { "target": "Name", "source": "identifier", "name": "VaultName" }
            ]
          }
        }
      }
    },
    "Vault": {
      "identifiers": [
        { "name": "AccountId" },
        {
          "name": "Name",
          "memberName": "VaultName"
        }
      ],
      "shape": "DescribeVaultOutput",
      "load": {
        "request": {
          "operation": "DescribeVault",
          "params": [
            { "target": "vaultName", "source": "identifier", "name": "Name" },
            { "target": "accountId", "source": "identifier", "name": "AccountId" }
          ]
        },
        "path": "@"
      },
      "actions": {
        "Create": {
          "request": {
            "operation": "CreateVault",
            "params": [
              { "target": "vaultName", "source": "identifier", "name": "Name" },
              { "target": "accountId", "source": "identifier", "name": "AccountId" }
            ]
          }
        },
        "Delete": {
          "request": {
            "operation": "DeleteVault",
            "params": [
              { "target": "vaultName", "source": "identifier", "name": "Name" },
              { "target": "accountId", "source": "identifier", "name": "AccountId" }
            ]
          }
        },
        "InitiateInventoryRetrieval": {
          "request": {
            "operation": "InitiateJob",
            "params": [
              { "target": "vaultName", "source": "identifier", "name": "Name" },
              { "target": "accountId", "source": "identifier", "name": "AccountId" },
              { "target": "jobParameters.Type", "source": "string", "value": "inventory-retrieval" }
            ]
          },
          "resource": {
            "type": "Job",
            "identifiers": [
              { "target": "Id", "source": "response", "path": "jobId" },
              { "target": "AccountId", "source": "identifier", "name": "AccountId" },
              { "target": "VaultName", "source": "identifier", "name": "Name" }
            ]
          }
        },
        "InitiateMultipartUpload": {
          "request": {
            "operation": "InitiateMultipartUpload",
            "params": [
              { "target": "vaultName", "source": "identifier", "name": "Name" },
              { "target": "accountId", "source": "identifier", "name": "AccountId" }
            ]
          },
          "resource": {
            "type": "MultipartUpload",
            "identifiers": [
              { "target": "Id", "source": "response", "path": "uploadId" },
              { "target": "AccountId", "source": "identifier", "name": "AccountId" },
              { "target": "VaultName", "source": "identifier", "name": "Name" }
            ]
          }
        },
        "UploadArchive": {
          "request": {
            "operation": "UploadArchive",
            "params": [
              { "target": "vaultName", "source": "identifier", "name": "Name" },
              { "target": "accountId", "source": "identifier", "name": "AccountId" }
            ]
          },
          "resource": {
            "type": "Archive",
            "identifiers": [
              { "target": "Id", "source": "response", "path": "archiveId" },
              { "target": "AccountId", "source": "identifier", "name": "AccountId" },
              { "target": "VaultName", "source": "identifier", "name": "Name" }
            ]
          }
        }
      },
      "has": {
        "Account": {
          "resource": {
            "type": "Account",
            "identifiers": [
              { "target": "Id", "source": "identifier", "name": "AccountId" }
            ]
          }
        },
        "Archive": {
          "resource": {
            "type": "Archive",
            "identifiers": [
              { "target": "AccountId", "source": "identifier", "name": "AccountId" },
              { "target": "VaultName", "source": "identifier", "name": "Name" },
              { "target": "Id", "source": "input" }
            ]
          }
        },
        "Job": {
          "resource": {
            "type": "Job",
            "identifiers": [
              { "target": "AccountId", "source": "identifier", "name": "AccountId" },
              { "target": "VaultName", "source": "identifier", "name": "Name" },
              { "target": "Id", "source": "input" }
            ]
          }
        },
        "MultipartUpload": {
          "resource": {
            "type": "MultipartUpload",
            "identifiers": [
              { "target": "AccountId", "source": "identifier", "name": "AccountId" },
              { "target": "VaultName", "source": "identifier", "name": "Name" },
              { "target": "Id", "source": "input" }
            ]
          }
        },
        "Notification": {
          "resource": {
            "type": "Notification",
            "identifiers": [
              { "target": "AccountId", "source": "identifier", "name": "AccountId" },
              { "target": "VaultName", "source": "identifier", "name": "Name" }
            ]
          }
        }
      },
      "hasMany": {
        "CompletedJobs": {
          "request": {
            "operation": "ListJobs",
            "params": [
              { "target": "accountId", "source": "identifier", "name": "AccountId" },
              { "target": "vaultName", "source": "identifier", "name": "Name" },
              { "target": "completed", "source": "string", "value": "true" }
            ]
          },
          "resource": {
            "type": "Job",
            "identifiers": [
              { "target": "AccountId", "source": "identifier", "name": "AccountId" },
              { "target": "VaultName", "source": "identifier", "name": "Name" },
              { "target": "Id", "source": "response", "path": "JobList[].JobId" }
            ],
            "path": "JobList[]"
          }
        },
        "FailedJobs": {
          "request": {
            "operation": "ListJobs",
            "params": [
              { "target": "accountId", "source": "identifier", "name": "AccountId" },
              { "target": "vaultName", "source": "identifier", "name": "Name" },
              { "target": "statuscode", "source": "string", "value": "Failed" }
            ]
          },
          "resource": {
            "type": "Job",
            "identifiers": [
              { "target": "AccountId", "source": "identifier", "name": "AccountId" },
              { "target": "VaultName", "source": "identifier", "name": "Name" },
              { "target": "Id", "source": "response", "path": "JobList[].JobId" }
            ],
            "path": "JobList[]"
          }
        },
        "Jobs": {
          "request": {
            "operation": "ListJobs",
            "params": [
              { "target": "accountId", "source": "identifier", "name": "AccountId" },
              { "target": "vaultName", "source": "identifier", "name": "Name" }
            ]
          },
          "resource": {
            "type": "Job",
            "identifiers": [
              { "target": "AccountId", "source": "identifier", "name": "AccountId" },
              { "target": "VaultName", "source": "identifier", "name": "Name" },
              { "target": "Id", "source": "response", "path": "JobList[].JobId" }
            ],
            "path": "JobList[]"
          }
        },
        "JobsInProgress": {
          "request": {
            "operation": "ListJobs",
            "params": [
              { "target": "accountId", "source": "identifier", "name": "AccountId" },
              { "target": "vaultName", "source": "identifier", "name": "Name" },
              { "target": "statuscode", "source": "string", "value": "InProgress" }
            ]
          },
          "resource": {
            "type": "Job",
            "identifiers": [
              { "target": "AccountId", "source": "identifier", "name": "AccountId" },
              { "target": "VaultName", "source": "identifier", "name": "Name" },
              { "target": "Id", "source": "response", "path": "JobList[].JobId" }
            ],
            "path": "JobList[]"
          }
        },
        "MultipartUplaods": {
          "request": {
            "operation": "ListMultipartUploads",
            "params": [
              { "target": "vaultName", "source": "identifier", "name": "Name" },
              { "target": "accountId", "source": "identifier", "name": "AccountId" }
            ]
          },
          "resource": {
            "type": "MultipartUpload",
            "identifiers": [
              { "target": "AccountId", "source": "identifier", "name": "AccountId" },
              { "target": "VaultName", "source": "identifier", "name": "Name" },
              { "target": "Id", "source": "response", "path": "UploadsList[].MultipartUploadId" }
            ],
            "path": "UploadsList[]"
          }
        },
        "MultipartUploads": {
          "request": {
            "operation": "ListMultipartUploads",
            "params": [
              { "target": "vaultName", "source": "identifier", "name": "Name" },
              { "target": "accountId", "source": "identifier", "name": "AccountId" }
            ]
          },
          "resource": {
            "type": "MultipartUpload",
            "identifiers": [
              { "target": "AccountId", "source": "identifier", "name": "AccountId" },
              { "target": "VaultName", "source": "identifier", "name": "Name" },
              { "target": "Id", "source": "response", "path": "UploadsList[].MultipartUploadId" }
            ],
            "path": "UploadsList[]"
          }
        },
        "SucceededJobs": {
          "request": {
            "operation": "ListJobs",
            "params": [
              { "target": "accountId", "source": "identifier", "name": "AccountId" },
              { "target": "vaultName", "source": "identifier", "name": "Name" },
              { "target": "statuscode", "source": "string", "value": "Succeeded" }
            ]
          },
          "resource": {
            "type": "Job",
            "identifiers": [
              { "target": "AccountId", "source": "identifier", "name": "AccountId" },
              { "target": "VaultName", "source": "identifier", "name": "Name" },
              { "target": "Id", "source": "response", "path": "JobList[].JobId" }
            ],
            "path": "JobList[]"
          }
        }
      }
    }
  }
}
