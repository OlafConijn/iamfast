export default {
  "service": {
    "actions": {
      "CreateDhcpOptions": {
        "request": { "operation": "CreateDhcpOptions" },
        "resource": {
          "type": "DhcpOptions",
          "identifiers": [
            { "target": "Id", "source": "response", "path": "DhcpOptions.DhcpOptionsId" }
          ],
          "path": "DhcpOptions"
        }
      },
      "CreateInstances": {
        "request": { "operation": "RunInstances" },
        "resource": {
          "type": "Instance",
          "identifiers": [
            { "target": "Id", "source": "response", "path": "Instances[].InstanceId" }
          ],
          "path": "Instances[]"
        }
      },
      "CreateInternetGateway": {
        "request": { "operation": "CreateInternetGateway" },
        "resource": {
          "type": "InternetGateway",
          "identifiers": [
            { "target": "Id", "source": "response", "path": "InternetGateway.InternetGatewayId" }
          ],
          "path": "InternetGateway"
        }
      },
      "CreateKeyPair": {
        "request": { "operation": "CreateKeyPair" },
        "resource": {
          "type": "KeyPair",
          "identifiers": [
            { "target": "Name", "source": "response", "path": "KeyName" }
          ],
          "path": "@"
        }
      },
      "CreateNetworkAcl": {
        "request": { "operation": "CreateNetworkAcl" },
        "resource": {
          "type": "NetworkAcl",
          "identifiers": [
            { "target": "Id", "source": "response", "path": "NetworkAcl.NetworkAclId" }
          ],
          "path": "NetworkAcl"
        }
      },
      "CreateNetworkInterface": {
        "request": { "operation": "CreateNetworkInterface" },
        "resource": {
          "type": "NetworkInterface",
          "identifiers": [
            { "target": "Id", "source": "response", "path": "NetworkInterface.NetworkInterfaceId" }
          ],
          "path": "NetworkInterface"
        }
      },
      "CreatePlacementGroup": {
        "request": { "operation": "CreatePlacementGroup" },
        "resource": {
          "type": "PlacementGroup",
          "identifiers": [
            { "target": "Name", "source": "requestParameter", "path": "GroupName" }
          ]
        }
      },
      "CreateRouteTable": {
        "request": { "operation": "CreateRouteTable" },
        "resource": {
          "type": "RouteTable",
          "identifiers": [
            { "target": "Id", "source": "response", "path": "RouteTable.RouteTableId" }
          ],
          "path": "RouteTable"
        }
      },
      "CreateSecurityGroup": {
        "request": { "operation": "CreateSecurityGroup" },
        "resource": {
          "type": "SecurityGroup",
          "identifiers": [
            { "target": "Id", "source": "response", "path": "GroupId" }
          ]
        }
      },
      "CreateSnapshot": {
        "request": { "operation": "CreateSnapshot" },
        "resource": {
          "type": "Snapshot",
          "identifiers": [
            { "target": "Id", "source": "response", "path": "SnapshotId" }
          ],
          "path": "@"
        }
      },
      "CreateSubnet": {
        "request": { "operation": "CreateSubnet" },
        "resource": {
          "type": "Subnet",
          "identifiers": [
            { "target": "Id", "source": "response", "path": "Subnet.SubnetId" }
          ],
          "path": "Subnet"
        }
      },
      "CreateTags": {
        "request": { "operation": "CreateTags" }
      },
      "CreateVolume": {
        "request": { "operation": "CreateVolume" },
        "resource": {
          "type": "Volume",
          "identifiers": [
            { "target": "Id", "source": "response", "path": "VolumeId" }
          ],
          "path": "@"
        }
      },
      "CreateVpc": {
        "request": { "operation": "CreateVpc" },
        "resource": {
          "type": "Vpc",
          "identifiers": [
            { "target": "Id", "source": "response", "path": "Vpc.VpcId" }
          ],
          "path": "Vpc"
        }
      },
      "CreateVpcPeeringConnection": {
        "request": { "operation": "CreateVpcPeeringConnection" },
        "resource": {
          "type": "VpcPeeringConnection",
          "identifiers": [
            { "target": "Id", "source": "response", "path": "VpcPeeringConnection.VpcPeeringConnectionId" }
          ],
          "path": "VpcPeeringConnection"
        }
      },
      "DisassociateRouteTable": {
        "request": { "operation": "DisassociateRouteTable" }
      },
      "ImportKeyPair": {
        "request": { "operation": "ImportKeyPair" },
        "resource": {
          "type": "KeyPairInfo",
          "identifiers": [
            { "target": "Name", "source": "response", "path": "KeyName" }
          ]
        }
      },
      "RegisterImage": {
        "request": { "operation": "RegisterImage" },
        "resource": {
          "type": "Image",
          "identifiers": [
            { "target": "Id", "source": "response", "path": "ImageId" }
          ]
        }
      }
    },
    "has": {
      "DhcpOptions": {
        "resource": {
          "type": "DhcpOptions",
          "identifiers": [
            { "target": "Id", "source": "input" }
          ]
        }
      },
      "Image": {
        "resource": {
          "type": "Image",
          "identifiers": [
            { "target": "Id", "source": "input" }
          ]
        }
      },
      "Instance": {
        "resource": {
          "type": "Instance",
          "identifiers": [
            { "target": "Id", "source": "input" }
          ]
        }
      },
      "InternetGateway": {
        "resource": {
          "type": "InternetGateway",
          "identifiers": [
            { "target": "Id", "source": "input" }
          ]
        }
      },
      "KeyPair": {
        "resource": {
          "type": "KeyPairInfo",
          "identifiers": [
            { "target": "Name", "source": "input" }
          ]
        }
      },
      "NetworkAcl": {
        "resource": {
          "type": "NetworkAcl",
          "identifiers": [
            { "target": "Id", "source": "input" }
          ]
        }
      },
      "NetworkInterface": {
        "resource": {
          "type": "NetworkInterface",
          "identifiers": [
            { "target": "Id", "source": "input" }
          ]
        }
      },
      "PlacementGroup": {
        "resource": {
          "type": "PlacementGroup",
          "identifiers": [
            { "target": "Name", "source": "input" }
          ]
        }
      },
      "RouteTable": {
        "resource": {
          "type": "RouteTable",
          "identifiers": [
            { "target": "Id", "source": "input" }
          ]
        }
      },
      "RouteTableAssociation": {
        "resource": {
          "type": "RouteTableAssociation",
          "identifiers": [
            { "target": "Id", "source": "input" }
          ]
        }
      },
      "SecurityGroup": {
        "resource": {
          "type": "SecurityGroup",
          "identifiers": [
            { "target": "Id", "source": "input" }
          ]
        }
      },
      "Snapshot": {
        "resource": {
          "type": "Snapshot",
          "identifiers": [
            { "target": "Id", "source": "input" }
          ]
        }
      },
      "Subnet": {
        "resource": {
          "type": "Subnet",
          "identifiers": [
            { "target": "Id", "source": "input" }
          ]
        }
      },
      "Volume": {
        "resource": {
          "type": "Volume",
          "identifiers": [
            { "target": "Id", "source": "input" }
          ]
        }
      },
      "Vpc": {
        "resource": {
          "type": "Vpc",
          "identifiers": [
            { "target": "Id", "source": "input" }
          ]
        }
      },
      "VpcPeeringConnection": {
        "resource": {
          "type": "VpcPeeringConnection",
          "identifiers": [
            { "target": "Id", "source": "input" }
          ]
        }
      }
    },
    "hasMany": {
      "ClassicAddresses": {
        "request": {
          "operation": "DescribeAddresses",
          "params": [
            { "target": "Filters[0].Name", "source": "string", "value": "domain" },
            { "target": "Filters[0].Values[0]", "source": "string", "value": "standard" }
          ]
        },
        "resource": {
          "type": "ClassicAddress",
          "identifiers": [
            { "target": "PublicIp", "source": "response", "path": "Addresses[].PublicIp" }
          ],
          "path": "Addresses[]"
        }
      },
      "DhcpOptionsSets": {
        "request": { "operation": "DescribeDhcpOptions" },
        "resource": {
          "type": "DhcpOptions",
          "identifiers": [
            { "target": "Id", "source": "response", "path": "DhcpOptions[].DhcpOptionsId" }
          ],
          "path": "DhcpOptions[]"
        }
      },
      "Images": {
        "request": { "operation": "DescribeImages" },
        "resource": {
          "type": "Image",
          "identifiers": [
            { "target": "Id", "source": "response", "path": "Images[].ImageId" }
          ],
          "path": "Images[]"
        }
      },
      "Instances": {
        "request": { "operation": "DescribeInstances" },
        "resource": {
          "type": "Instance",
          "identifiers": [
            { "target": "Id", "source": "response", "path": "Reservations[].Instances[].InstanceId" }
          ],
          "path": "Reservations[].Instances[]"
        }
      },
      "InternetGateways": {
        "request": { "operation": "DescribeInternetGateways" },
        "resource": {
          "type": "InternetGateway",
          "identifiers": [
            { "target": "Id", "source": "response", "path": "InternetGateways[].InternetGatewayId" }
          ],
          "path": "InternetGateways[]"
        }
      },
      "KeyPairs": {
        "request": { "operation": "DescribeKeyPairs" },
        "resource": {
          "type": "KeyPairInfo",
          "identifiers": [
            { "target": "Name", "source": "response", "path": "KeyPairs[].KeyName" }
          ],
          "path": "KeyPairs[]"
        }
      },
      "NetworkAcls": {
        "request": { "operation": "DescribeNetworkAcls" },
        "resource": {
          "type": "NetworkAcl",
          "identifiers": [
            { "target": "Id", "source": "response", "path": "NetworkAcls[].NetworkAclId" }
          ],
          "path": "NetworkAcls[]"
        }
      },
      "NetworkInterfaces": {
        "request": { "operation": "DescribeNetworkInterfaces" },
        "resource": {
          "type": "NetworkInterface",
          "identifiers": [
            { "target": "Id", "source": "response", "path": "NetworkInterfaces[].NetworkInterfaceId" }
          ],
          "path": "NetworkInterfaces[]"
        }
      },
      "PlacementGroups": {
        "request": { "operation": "DescribePlacementGroups" },
        "resource": {
          "type": "PlacementGroup",
          "identifiers": [
            { "target": "Name", "source": "response", "path": "PlacementGroups[].GroupName" }
          ],
          "path": "PlacementGroups[]"
        }
      },
      "RouteTables": {
        "request": { "operation": "DescribeRouteTables" },
        "resource": {
          "type": "RouteTable",
          "identifiers": [
            { "target": "Id", "source": "response", "path": "RouteTables[].RouteTableId" }
          ],
          "path": "RouteTables[]"
        }
      },
      "SecurityGroups": {
        "request": { "operation": "DescribeSecurityGroups" },
        "resource": {
          "type": "SecurityGroup",
          "identifiers": [
            { "target": "Id", "source": "response", "path": "SecurityGroups[].GroupId" }
          ],
          "path": "SecurityGroups[]"
        }
      },
      "Snapshots": {
        "request": { "operation": "DescribeSnapshots" },
        "resource": {
          "type": "Snapshot",
          "identifiers": [
            { "target": "Id", "source": "response", "path": "Snapshots[].SnapshotId" }
          ],
          "path": "Snapshots[]"
        }
      },
      "Subnets": {
        "request": { "operation": "DescribeSubnets" },
        "resource": {
          "type": "Subnet",
          "identifiers": [
            { "target": "Id", "source": "response", "path": "Subnets[].SubnetId" }
          ],
          "path": "Subnets[]"
        }
      },
      "Volumes": {
        "request": { "operation": "DescribeVolumes" },
        "resource": {
          "type": "Volume",
          "identifiers": [
            { "target": "Id", "source": "response", "path": "Volumes[].VolumeId" }
          ],
          "path": "Volumes[]"
        }
      },
      "VpcAddresses": {
        "request": {
          "operation": "DescribeAddresses",
          "params": [
            { "target": "Filters[0].Name", "source": "string", "value": "domain" },
            { "target": "Filters[0].Values[0]", "source": "string", "value": "vpc" }
          ]
        },
        "resource": {
          "type": "VpcAddress",
          "identifiers": [
            { "target": "AllocationId", "source": "response", "path": "Addresses[].AllocationId" }
          ],
          "path": "Addresses[]"
        }
      },
      "VpcPeeringConnections": {
        "request": { "operation": "DescribeVpcPeeringConnections" },
        "resource": {
          "type": "VpcPeeringConnection",
          "identifiers": [
            { "target": "Id", "source": "response", "path": "VpcPeeringConnections[].VpcPeeringConnectionId" }
          ],
          "path": "VpcPeeringConnections[]"
        }
      },
      "Vpcs": {
        "request": { "operation": "DescribeVpcs" },
        "resource": {
          "type": "Vpc",
          "identifiers": [
            { "target": "Id", "source": "response", "path": "Vpcs[].VpcId" }
          ],
          "path": "Vpcs[]"
        }
      }
    }
  },
  "resources": {
    "ClassicAddress": {
      "identifiers": [
        {
          "name": "PublicIp"
        }
      ],
      "shape": "Address",
      "load": {
        "request": {
          "operation": "DescribeAddresses",
          "params": [
            { "target": "PublicIps[]", "source": "identifier", "name": "PublicIp" }
          ]
        },
        "path": "Addresses[0]"
      },
      "actions": {
        "Associate": {
          "request": {
            "operation": "AssociateAddress",
            "params": [
              { "target": "PublicIp", "source": "identifier", "name": "PublicIp" }
            ]
          }
        },
        "Disassociate": {
          "request": {
            "operation": "DisassociateAddress",
            "params": [
              { "target": "PublicIp", "source": "data", "path": "PublicIp" }
            ]
          }
        },
        "Release": {
          "request": {
            "operation": "ReleaseAddress",
            "params": [
              { "target": "PublicIp", "source": "data", "path": "PublicIp" }
            ]
          }
        }
      }
    },
    "DhcpOptions": {
      "identifiers": [
        {
          "name": "Id",
          "memberName": "DhcpOptionsId"
        }
      ],
      "shape": "DhcpOptions",
      "load": {
        "request": {
          "operation": "DescribeDhcpOptions",
          "params": [
            { "target": "DhcpOptionsIds[0]", "source": "identifier", "name": "Id" }
          ]
        },
        "path": "DhcpOptions[0]"
      },
      "actions": {
        "AssociateWithVpc": {
          "request": {
            "operation": "AssociateDhcpOptions",
            "params": [
              { "target": "DhcpOptionsId", "source": "identifier", "name": "Id" }
            ]
          }
        },
        "CreateTags": {
          "request": {
            "operation": "CreateTags",
            "params": [
              { "target": "Resources[0]", "source": "identifier", "name": "Id" }
            ]
          },
          "resource": {
            "type": "Tag",
            "identifiers": [
              { "target": "ResourceId", "source": "identifier", "name": "Id" },
              { "target": "Key", "source": "requestParameter", "path": "Tags[].Key" },
              { "target": "Value", "source": "requestParameter", "path": "Tags[].Value" }
            ]
          }
        },
        "Delete": {
          "request": {
            "operation": "DeleteDhcpOptions",
            "params": [
              { "target": "DhcpOptionsId", "source": "identifier", "name": "Id" }
            ]
          }
        }
      }
    },
    "Image": {
      "identifiers": [
        {
          "name": "Id",
          "memberName": "ImageId"
        }
      ],
      "shape": "Image",
      "load": {
        "request": {
          "operation": "DescribeImages",
          "params": [
            { "target": "ImageIds[0]", "source": "identifier", "name": "Id" }
          ]
        },
        "path": "Images[0]"
      },
      "actions": {
        "CreateTags": {
          "request": {
            "operation": "CreateTags",
            "params": [
              { "target": "Resources[0]", "source": "identifier", "name": "Id" }
            ]
          },
          "resource": {
            "type": "Tag",
            "identifiers": [
              { "target": "ResourceId", "source": "identifier", "name": "Id" },
              { "target": "Key", "source": "requestParameter", "path": "Tags[].Key" },
              { "target": "Value", "source": "requestParameter", "path": "Tags[].Value" }
            ]
          }
        },
        "Deregister": {
          "request": {
            "operation": "DeregisterImage",
            "params": [
              { "target": "ImageId", "source": "identifier", "name": "Id" }
            ]
          }
        },
        "DescribeAttribute": {
          "request": {
            "operation": "DescribeImageAttribute",
            "params": [
              { "target": "ImageId", "source": "identifier", "name": "Id" }
            ]
          }
        },
        "ModifyAttribute": {
          "request": {
            "operation": "ModifyImageAttribute",
            "params": [
              { "target": "ImageId", "source": "identifier", "name": "Id" }
            ]
          }
        },
        "ResetAttribute": {
          "request": {
            "operation": "ResetImageAttribute",
            "params": [
              { "target": "ImageId", "source": "identifier", "name": "Id" }
            ]
          }
        }
      },
      "waiters": {
        "Exists": {
          "waiterName": "ImageExists",
          "params": [
            { "target": "ImageIds[]", "source": "identifier", "name": "Id" }
          ],
          "path": "Images[0]"
        }
      }
    },
    "Instance": {
      "identifiers": [
        {
          "name": "Id",
          "memberName": "InstanceId"
        }
      ],
      "shape": "Instance",
      "load": {
        "request": {
          "operation": "DescribeInstances",
          "params": [
            { "target": "InstanceIds[0]", "source": "identifier", "name": "Id" }
          ]
        },
        "path": "Reservations[0].Instances[0]"
      },
      "actions": {
        "AttachClassicLinkVpc": {
          "request": {
            "operation": "AttachClassicLinkVpc",
            "params": [
              { "target": "InstanceId", "source": "identifier", "name": "Id" }
            ]
          }
        },
        "AttachVolume": {
          "request": {
            "operation": "AttachVolume",
            "params": [
              { "target": "InstanceId", "source": "identifier", "name": "Id" }
            ]
          }
        },
        "ConsoleOutput": {
          "request": {
            "operation": "GetConsoleOutput",
            "params": [
              { "target": "InstanceId", "source": "identifier", "name": "Id" }
            ]
          }
        },
        "CreateImage": {
          "request": {
            "operation": "CreateImage",
            "params": [
              { "target": "InstanceId", "source": "identifier", "name": "Id" }
            ]
          },
          "resource": {
            "type": "Image",
            "identifiers": [
              { "target": "Id", "source": "response", "path": "ImageId" }
            ]
          }
        },
        "CreateTags": {
          "request": {
            "operation": "CreateTags",
            "params": [
              { "target": "Resources[0]", "source": "identifier", "name": "Id" }
            ]
          },
          "resource": {
            "type": "Tag",
            "identifiers": [
              { "target": "ResourceId", "source": "identifier", "name": "Id" },
              { "target": "Key", "source": "requestParameter", "path": "Tags[].Key" },
              { "target": "Value", "source": "requestParameter", "path": "Tags[].Value" }
            ]
          }
        },
        "DescribeAttribute": {
          "request": {
            "operation": "DescribeInstanceAttribute",
            "params": [
              { "target": "InstanceId", "source": "identifier", "name": "Id" }
            ]
          }
        },
        "DetachClassicLinkVpc": {
          "request": {
            "operation": "DetachClassicLinkVpc",
            "params": [
              { "target": "InstanceId", "source": "identifier", "name": "Id" }
            ]
          }
        },
        "DetachVolume": {
          "request": {
            "operation": "DetachVolume",
            "params": [
              { "target": "InstanceId", "source": "identifier", "name": "Id" }
            ]
          }
        },
        "ModifyAttribute": {
          "request": {
            "operation": "ModifyInstanceAttribute",
            "params": [
              { "target": "InstanceId", "source": "identifier", "name": "Id" }
            ]
          }
        },
        "Monitor": {
          "request": {
            "operation": "MonitorInstances",
            "params": [
              { "target": "InstanceIds[0]", "source": "identifier", "name": "Id" }
            ]
          }
        },
        "PasswordData": {
          "request": {
            "operation": "GetPasswordData",
            "params": [
              { "target": "InstanceId", "source": "identifier", "name": "Id" }
            ]
          }
        },
        "Reboot": {
          "request": {
            "operation": "RebootInstances",
            "params": [
              { "target": "InstanceIds[0]", "source": "identifier", "name": "Id" }
            ]
          }
        },
        "ReportStatus": {
          "request": {
            "operation": "ReportInstanceStatus",
            "params": [
              { "target": "Instances[0]", "source": "identifier", "name": "Id" }
            ]
          }
        },
        "ResetAttribute": {
          "request": {
            "operation": "ResetInstanceAttribute",
            "params": [
              { "target": "InstanceId", "source": "identifier", "name": "Id" }
            ]
          }
        },
        "ResetKernel": {
          "request": {
            "operation": "ResetInstanceAttribute",
            "params": [
              { "target": "InstanceId", "source": "identifier", "name": "Id" },
              { "target": "Attribute", "source": "string", "value": "kernel" }
            ]
          }
        },
        "ResetRamdisk": {
          "request": {
            "operation": "ResetInstanceAttribute",
            "params": [
              { "target": "InstanceId", "source": "identifier", "name": "Id" },
              { "target": "Attribute", "source": "string", "value": "ramdisk" }
            ]
          }
        },
        "ResetSourceDestCheck": {
          "request": {
            "operation": "ResetInstanceAttribute",
            "params": [
              { "target": "InstanceId", "source": "identifier", "name": "Id" },
              { "target": "Attribute", "source": "string", "value": "sourceDestCheck" }
            ]
          }
        },
        "Start": {
          "request": {
            "operation": "StartInstances",
            "params": [
              { "target": "InstanceIds[0]", "source": "identifier", "name": "Id" }
            ]
          }
        },
        "Stop": {
          "request": {
            "operation": "StopInstances",
            "params": [
              { "target": "InstanceIds[0]", "source": "identifier", "name": "Id" }
            ]
          }
        },
        "Terminate": {
          "request": {
            "operation": "TerminateInstances",
            "params": [
              { "target": "InstanceIds[0]", "source": "identifier", "name": "Id" }
            ]
          }
        },
        "Unmonitor": {
          "request": {
            "operation": "UnmonitorInstances",
            "params": [
              { "target": "InstanceIds[0]", "source": "identifier", "name": "Id" }
            ]
          }
        }
      },
      "batchActions": {
        "CreateTags": {
          "request": {
            "operation": "CreateTags",
            "params": [
              { "target": "Resources[]", "source": "identifier", "name": "Id" }
            ]
          }
        },
        "Monitor": {
          "request": {
            "operation": "MonitorInstances",
            "params": [
              { "target": "InstanceIds[]", "source": "identifier", "name": "Id" }
            ]
          }
        },
        "Reboot": {
          "request": {
            "operation": "RebootInstances",
            "params": [
              { "target": "InstanceIds[]", "source": "identifier", "name": "Id" }
            ]
          }
        },
        "Start": {
          "request": {
            "operation": "StartInstances",
            "params": [
              { "target": "InstanceIds[]", "source": "identifier", "name": "Id" }
            ]
          }
        },
        "Stop": {
          "request": {
            "operation": "StopInstances",
            "params": [
              { "target": "InstanceIds[]", "source": "identifier", "name": "Id" }
            ]
          }
        },
        "Terminate": {
          "request": {
            "operation": "TerminateInstances",
            "params": [
              { "target": "InstanceIds[]", "source": "identifier", "name": "Id" }
            ]
          }
        },
        "Unmonitor": {
          "request": {
            "operation": "UnmonitorInstances",
            "params": [
              { "target": "InstanceIds[]", "source": "identifier", "name": "Id" }
            ]
          }
        }
      },
      "waiters": {
        "Exists": {
          "waiterName": "InstanceExists",
          "params": [
            { "target": "InstanceIds[]", "source": "identifier", "name": "Id" }
          ],
          "path": "Reservations[0].Instances[0]"
        },
        "Running": {
          "waiterName": "InstanceRunning",
          "params": [
            { "target": "InstanceIds[]", "source": "identifier", "name": "Id" }
          ],
          "path": "Reservations[0].Instances[0]"
        },
        "Stopped": {
          "waiterName": "InstanceStopped",
          "params": [
            { "target": "InstanceIds[]", "source": "identifier", "name": "Id" }
          ],
          "path": "Reservations[0].Instances[0]"
        },
        "Terminated": {
          "waiterName": "InstanceTerminated",
          "params": [
            { "target": "InstanceIds[]", "source": "identifier", "name": "Id" }
          ],
          "path": "Reservations[0].Instances[0]"
        }
      },
      "has": {
        "ClassicAddress": {
          "resource": {
            "type": "ClassicAddress",
            "identifiers": [
              { "target": "PublicIp", "source": "data", "path": "PublicIpAddress" }
            ]
          }
        },
        "Image": {
          "resource": {
            "type": "Image",
            "identifiers": [
              { "target": "Id", "source": "data", "path": "ImageId" }
            ]
          }
        },
        "KeyPair": {
          "resource": {
            "type": "KeyPairInfo",
            "identifiers": [
              { "target": "Name", "source": "data", "path": "KeyName" }
            ]
          }
        },
        "NetworkInterfaces": {
          "resource": {
            "type": "NetworkInterface",
            "identifiers": [
              { "target": "Id", "source": "data", "path": "NetworkInterfaces[].NetworkInterfaceId" }
            ],
            "path": "NetworkInterfaces[]"
          }
        },
        "PlacementGroup": {
          "resource": {
            "type": "PlacementGroup",
            "identifiers": [
              { "target": "Name", "source": "data", "path": "Placement.GroupName" }
            ]
          }
        },
        "Subnet": {
          "resource": {
            "type": "Subnet",
            "identifiers": [
              { "target": "Id", "source": "data", "path": "SubnetId" }
            ]
          }
        },
        "Vpc": {
          "resource": {
            "type": "Vpc",
            "identifiers": [
              { "target": "Id", "source": "data", "path": "VpcId" }
            ]
          }
        }
      },
      "hasMany": {
        "Volumes": {
          "request": {
            "operation": "DescribeVolumes",
            "params": [
              { "target": "Filters[0].Name", "source": "string", "value": "attachment.instance-id" },
              { "target": "Filters[0].Values[0]", "source": "identifier", "name": "Id" }
            ]
          },
          "resource": {
            "type": "Volume",
            "identifiers": [
              { "target": "Id", "source": "response", "path": "Volumes[].VolumeId" }
            ],
            "path": "Volumes[]"
          }
        },
        "VpcAddresses": {
          "request": {
            "operation": "DescribeAddresses",
            "params": [
              { "target": "Filters[0].Name", "source": "string", "value": "instance-id" },
              { "target": "Filters[0].Values[0]", "source": "identifier", "name": "Id" }
            ]
          },
          "resource": {
            "type": "VpcAddress",
            "identifiers": [
              { "target": "AllocationId", "source": "response", "path": "Addresses[].AllocationId" }
            ],
            "path": "Addresses[]"
          }
        }
      }
    },
    "InternetGateway": {
      "identifiers": [
        {
          "name": "Id",
          "memberName": "InternetGatewayId"
        }
      ],
      "shape": "InternetGateway",
      "load": {
        "request": {
          "operation": "DescribeInternetGateways",
          "params": [
            { "target": "InternetGatewayIds[0]", "source": "identifier", "name": "Id" }
          ]
        },
        "path": "InternetGateways[0]"
      },
      "actions": {
        "AttachToVpc": {
          "request": {
            "operation": "AttachInternetGateway",
            "params": [
              { "target": "InternetGatewayId", "source": "identifier", "name": "Id" }
            ]
          }
        },
        "CreateTags": {
          "request": {
            "operation": "CreateTags",
            "params": [
              { "target": "Resources[0]", "source": "identifier", "name": "Id" }
            ]
          },
          "resource": {
            "type": "Tag",
            "identifiers": [
              { "target": "ResourceId", "source": "identifier", "name": "Id" },
              { "target": "Key", "source": "requestParameter", "path": "Tags[].Key" },
              { "target": "Value", "source": "requestParameter", "path": "Tags[].Value" }
            ]
          }
        },
        "Delete": {
          "request": {
            "operation": "DeleteInternetGateway",
            "params": [
              { "target": "InternetGatewayId", "source": "identifier", "name": "Id" }
            ]
          }
        },
        "DetachFromVpc": {
          "request": {
            "operation": "DetachInternetGateway",
            "params": [
              { "target": "InternetGatewayId", "source": "identifier", "name": "Id" }
            ]
          }
        }
      }
    },
    "KeyPair": {
      "identifiers": [
        {
          "name": "Name",
          "memberName": "KeyName"
        }
      ],
      "shape": "KeyPair",
      "actions": {
        "Delete": {
          "request": {
            "operation": "DeleteKeyPair",
            "params": [
              { "target": "KeyName", "source": "identifier", "name": "Name" }
            ]
          }
        }
      }
    },
    "KeyPairInfo": {
      "identifiers": [
        {
          "name": "Name",
          "memberName": "KeyName"
        }
      ],
      "shape": "KeyPairInfo",
      "load": {
        "request": {
          "operation": "DescribeKeyPairs",
          "params": [
            { "target": "KeyNames[0]", "source": "identifier", "name": "Name" }
          ]
        },
        "path": "KeyPairs[0]"
      },
      "actions": {
        "Delete": {
          "request": {
            "operation": "DeleteKeyPair",
            "params": [
              { "target": "KeyName", "source": "identifier", "name": "Name" }
            ]
          }
        }
      }
    },
    "NetworkAcl": {
      "identifiers": [
        {
          "name": "Id",
          "memberName": "NetworkAclId"
        }
      ],
      "shape": "NetworkAcl",
      "load": {
        "request": {
          "operation": "DescribeNetworkAcls",
          "params": [
            { "target": "NetworkAclIds[0]", "source": "identifier", "name": "Id" }
          ]
        },
        "path": "NetworkAcls[0]"
      },
      "actions": {
        "CreateEntry": {
          "request": {
            "operation": "CreateNetworkAclEntry",
            "params": [
              { "target": "NetworkAclId", "source": "identifier", "name": "Id" }
            ]
          }
        },
        "CreateTags": {
          "request": {
            "operation": "CreateTags",
            "params": [
              { "target": "Resources[0]", "source": "identifier", "name": "Id" }
            ]
          },
          "resource": {
            "type": "Tag",
            "identifiers": [
              { "target": "ResourceId", "source": "identifier", "name": "Id" },
              { "target": "Key", "source": "requestParameter", "path": "Tags[].Key" },
              { "target": "Value", "source": "requestParameter", "path": "Tags[].Value" }
            ]
          }
        },
        "Delete": {
          "request": {
            "operation": "DeleteNetworkAcl",
            "params": [
              { "target": "NetworkAclId", "source": "identifier", "name": "Id" }
            ]
          }
        },
        "DeleteEntry": {
          "request": {
            "operation": "DeleteNetworkAclEntry",
            "params": [
              { "target": "NetworkAclId", "source": "identifier", "name": "Id" }
            ]
          }
        },
        "ReplaceAssociation": {
          "request": {
            "operation": "ReplaceNetworkAclAssociation",
            "params": [
              { "target": "NetworkAclId", "source": "identifier", "name": "Id" }
            ]
          }
        },
        "ReplaceEntry": {
          "request": {
            "operation": "ReplaceNetworkAclEntry",
            "params": [
              { "target": "NetworkAclId", "source": "identifier", "name": "Id" }
            ]
          }
        }
      },
      "has": {
        "Vpc": {
          "resource": {
            "type": "Vpc",
            "identifiers": [
              { "target": "Id", "source": "data", "path": "VpcId" }
            ]
          }
        }
      }
    },
    "NetworkInterface": {
      "identifiers": [
        {
          "name": "Id",
          "memberName": "NetworkInterfaceId"
        }
      ],
      "shape": "NetworkInterface",
      "load": {
        "request": {
          "operation": "DescribeNetworkInterfaces",
          "params": [
            { "target": "NetworkInterfaceIds[0]", "source": "identifier", "name": "Id" }
          ]
        },
        "path": "NetworkInterfaces[0]"
      },
      "actions": {
        "AssignPrivateIpAddresses": {
          "request": {
            "operation": "AssignPrivateIpAddresses",
            "params": [
              { "target": "NetworkInterfaceId", "source": "identifier", "name": "Id" }
            ]
          }
        },
        "Attach": {
          "request": {
            "operation": "AttachNetworkInterface",
            "params": [
              { "target": "NetworkInterfaceId", "source": "identifier", "name": "Id" }
            ]
          }
        },
        "CreateTags": {
          "request": {
            "operation": "CreateTags",
            "params": [
              { "target": "Resources[0]", "source": "identifier", "name": "Id" }
            ]
          },
          "resource": {
            "type": "Tag",
            "identifiers": [
              { "target": "ResourceId", "source": "identifier", "name": "Id" },
              { "target": "Key", "source": "requestParameter", "path": "Tags[].Key" },
              { "target": "Value", "source": "requestParameter", "path": "Tags[].Value" }
            ]
          }
        },
        "Delete": {
          "request": {
            "operation": "DeleteNetworkInterface",
            "params": [
              { "target": "NetworkInterfaceId", "source": "identifier", "name": "Id" }
            ]
          }
        },
        "DescribeAttribute": {
          "request": {
            "operation": "DescribeNetworkInterfaceAttribute",
            "params": [
              { "target": "NetworkInterfaceId", "source": "identifier", "name": "Id" }
            ]
          }
        },
        "Detach": {
          "request": {
            "operation": "DetachNetworkInterface",
            "params": [
              { "target": "AttachmentId", "source": "data", "path": "Attachment.AttachmentId" }
            ]
          }
        },
        "ModifyAttribute": {
          "request": {
            "operation": "ModifyNetworkInterfaceAttribute",
            "params": [
              { "target": "NetworkInterfaceId", "source": "identifier", "name": "Id" }
            ]
          }
        },
        "ResetAttribute": {
          "request": {
            "operation": "ResetNetworkInterfaceAttribute",
            "params": [
              { "target": "NetworkInterfaceId", "source": "identifier", "name": "Id" }
            ]
          }
        },
        "UnassignPrivateIpAddresses": {
          "request": {
            "operation": "UnassignPrivateIpAddresses",
            "params": [
              { "target": "NetworkInterfaceId", "source": "identifier", "name": "Id" }
            ]
          }
        }
      },
      "has": {
        "Association": {
          "resource": {
            "type": "NetworkInterfaceAssociation",
            "identifiers": [
              { "target": "Id", "source": "data", "path": "Association.AssociationId" }
            ],
            "path": "Association"
          }
        },
        "Subnet": {
          "resource": {
            "type": "Subnet",
            "identifiers": [
              { "target": "Id", "source": "data", "path": "SubnetId" }
            ]
          }
        },
        "Vpc": {
          "resource": {
            "type": "Vpc",
            "identifiers": [
              { "target": "Id", "source": "data", "path": "VpcId" }
            ]
          }
        }
      }
    },
    "NetworkInterfaceAssociation": {
      "identifiers": [
        {
          "name": "Id"
        }
      ],
      "shape": "InstanceNetworkInterfaceAssociation",
      "load": {
        "request": {
          "operation": "DescribeNetworkInterfaces",
          "params": [
            { "target": "Filters[0].Name", "source": "string", "value": "association.association-id" },
            { "target": "Filters[0].Values[0]", "source": "identifier", "name": "Id" }
          ]
        },
        "path": "NetworkInterfaces[0].Association"
      },
      "actions": {
        "Delete": {
          "request": {
            "operation": "DisassociateAddress",
            "params": [
              { "target": "AssociationId", "source": "identifier", "name": "Id" }
            ]
          }
        }
      },
      "has": {
        "Address": {
          "resource": {
            "type": "VpcAddress",
            "identifiers": [
              { "target": "AllocationId", "source": "data", "path": "AllocationId" }
            ]
          }
        }
      }
    },
    "PlacementGroup": {
      "identifiers": [
        {
          "name": "Name",
          "memberName": "GroupName"
        }
      ],
      "shape": "PlacementGroup",
      "load": {
        "request": {
          "operation": "DescribePlacementGroups",
          "params": [
            { "target": "GroupNames[0]", "source": "identifier", "name": "Name" }
          ]
        },
        "path": "PlacementGroups[0]"
      },
      "actions": {
        "Delete": {
          "request": {
            "operation": "DeletePlacementGroup",
            "params": [
              { "target": "GroupName", "source": "identifier", "name": "Name" }
            ]
          }
        }
      },
      "hasMany": {
        "Instances": {
          "request": {
            "operation": "DescribeInstances",
            "params": [
              { "target": "Filters[0].Name", "source": "string", "value": "placement-group-name" },
              { "target": "Filters[0].Values[0]", "source": "identifier", "name": "Name" }
            ]
          },
          "resource": {
            "type": "Instance",
            "identifiers": [
              { "target": "Id", "source": "response", "path": "Reservations[].Instances[].InstanceId" }
            ],
            "path": "Reservations[].Instances[]"
          }
        }
      }
    },
    "Route": {
      "identifiers": [
        { "name": "RouteTableId" },
        {
          "name": "DestinationCidrBlock",
          "memberName": "DestinationCidrBlock"
        }
      ],
      "shape": "Route",
      "actions": {
        "Delete": {
          "request": {
            "operation": "DeleteRoute",
            "params": [
              { "target": "RouteTableId", "source": "identifier", "name": "RouteTableId" },
              { "target": "DestinationCidrBlock", "source": "identifier", "name": "DestinationCidrBlock" }
            ]
          }
        },
        "Replace": {
          "request": {
            "operation": "ReplaceRoute",
            "params": [
              { "target": "RouteTableId", "source": "identifier", "name": "RouteTableId" },
              { "target": "DestinationCidrBlock", "source": "identifier", "name": "DestinationCidrBlock" }
            ]
          }
        }
      },
      "has": {
        "RouteTable": {
          "resource": {
            "type": "RouteTable",
            "identifiers": [
              { "target": "Id", "source": "identifier", "name": "RouteTableId" }
            ]
          }
        }
      }
    },
    "RouteTable": {
      "identifiers": [
        {
          "name": "Id",
          "memberName": "RouteTableId"
        }
      ],
      "shape": "RouteTable",
      "load": {
        "request": {
          "operation": "DescribeRouteTables",
          "params": [
            { "target": "RouteTableIds[0]", "source": "identifier", "name": "Id" }
          ]
        },
        "path": "RouteTables[0]"
      },
      "actions": {
        "AssociateWithSubnet": {
          "request": {
            "operation": "AssociateRouteTable",
            "params": [
              { "target": "RouteTableId", "source": "identifier", "name": "Id" }
            ]
          },
          "resource": {
            "type": "RouteTableAssociation",
            "identifiers": [
              { "target": "Id", "source": "response", "path": "AssociationId" }
            ]
          }
        },
        "CreateRoute": {
          "request": {
            "operation": "CreateRoute",
            "params": [
              { "target": "RouteTableId", "source": "identifier", "name": "Id" }
            ]
          },
          "resource": {
            "type": "Route",
            "identifiers": [
              { "target": "RouteTableId", "source": "identifier", "name": "Id" },
              { "target": "DestinationCidrBlock", "source": "requestParameter", "path": "DestinationCidrBlock" }
            ]
          }
        },
        "CreateTags": {
          "request": {
            "operation": "CreateTags",
            "params": [
              { "target": "Resources[0]", "source": "identifier", "name": "Id" }
            ]
          },
          "resource": {
            "type": "Tag",
            "identifiers": [
              { "target": "ResourceId", "source": "identifier", "name": "Id" },
              { "target": "Key", "source": "requestParameter", "path": "Tags[].Key" },
              { "target": "Value", "source": "requestParameter", "path": "Tags[].Value" }
            ]
          }
        },
        "Delete": {
          "request": {
            "operation": "DeleteRouteTable",
            "params": [
              { "target": "RouteTableId", "source": "identifier", "name": "Id" }
            ]
          }
        }
      },
      "has": {
        "Associations": {
          "resource": {
            "type": "RouteTableAssociation",
            "identifiers": [
              { "target": "Id", "source": "data", "path": "Associations[].RouteTableAssociationId" }
            ],
            "path": "Associations[]"
          }
        },
        "Routes": {
          "resource": {
            "type": "Route",
            "identifiers": [
              { "target": "RouteTableId", "source": "identifier", "name": "Id" },
              { "target": "DestinationCidrBlock", "source": "data", "path": "Routes[].DestinationCidrBlock" }
            ],
            "path": "Routes[]"
          }
        },
        "Vpc": {
          "resource": {
            "type": "Vpc",
            "identifiers": [
              { "target": "Id", "source": "data", "path": "VpcId" }
            ]
          }
        }
      }
    },
    "RouteTableAssociation": {
      "identifiers": [
        {
          "name": "Id",
          "memberName": "RouteTableAssociationId"
        }
      ],
      "shape": "RouteTableAssociation",
      "actions": {
        "Delete": {
          "request": {
            "operation": "DisassociateRouteTable",
            "params": [
              { "target": "AssociationId", "source": "identifier", "name": "Id" }
            ]
          }
        },
        "ReplaceSubnet": {
          "request": {
            "operation": "ReplaceRouteTableAssociation",
            "params": [
              { "target": "AssociationId", "source": "identifier", "name": "Id" }
            ]
          },
          "resource": {
            "type": "RouteTableAssociation",
            "identifiers": [
              { "target": "Id", "source": "response", "path": "NewAssociationId" }
            ]
          }
        }
      },
      "has": {
        "RouteTable": {
          "resource": {
            "type": "RouteTable",
            "identifiers": [
              { "target": "Id", "source": "data", "path": "RouteTableId" }
            ]
          }
        },
        "Subnet": {
          "resource": {
            "type": "Subnet",
            "identifiers": [
              { "target": "Id", "source": "data", "path": "SubnetId" }
            ]
          }
        }
      }
    },
    "SecurityGroup": {
      "identifiers": [
        {
          "name": "Id",
          "memberName": "GroupId"
        }
      ],
      "shape": "SecurityGroup",
      "load": {
        "request": {
          "operation": "DescribeSecurityGroups",
          "params": [
            { "target": "GroupIds[0]", "source": "identifier", "name": "Id" }
          ]
        },
        "path": "SecurityGroups[0]"
      },
      "actions": {
        "AuthorizeEgress": {
          "request": {
            "operation": "AuthorizeSecurityGroupEgress",
            "params": [
              { "target": "GroupId", "source": "identifier", "name": "Id" }
            ]
          }
        },
        "AuthorizeIngress": {
          "request": {
            "operation": "AuthorizeSecurityGroupIngress",
            "params": [
              { "target": "GroupId", "source": "identifier", "name": "Id" }
            ]
          }
        },
        "CreateTags": {
          "request": {
            "operation": "CreateTags",
            "params": [
              { "target": "Resources[0]", "source": "identifier", "name": "Id" }
            ]
          },
          "resource": {
            "type": "Tag",
            "identifiers": [
              { "target": "ResourceId", "source": "identifier", "name": "Id" },
              { "target": "Key", "source": "requestParameter", "path": "Tags[].Key" },
              { "target": "Value", "source": "requestParameter", "path": "Tags[].Value" }
            ]
          }
        },
        "Delete": {
          "request": {
            "operation": "DeleteSecurityGroup",
            "params": [
              { "target": "GroupId", "source": "identifier", "name": "Id" }
            ]
          }
        },
        "RevokeEgress": {
          "request": {
            "operation": "RevokeSecurityGroupEgress",
            "params": [
              { "target": "GroupId", "source": "identifier", "name": "Id" }
            ]
          }
        },
        "RevokeIngress": {
          "request": {
            "operation": "RevokeSecurityGroupIngress",
            "params": [
              { "target": "GroupId", "source": "identifier", "name": "Id" }
            ]
          }
        }
      }
    },
    "Snapshot": {
      "identifiers": [
        {
          "name": "Id",
          "memberName": "SnapshotId"
        }
      ],
      "shape": "Snapshot",
      "load": {
        "request": {
          "operation": "DescribeSnapshots",
          "params": [
            { "target": "SnapshotIds[0]", "source": "identifier", "name": "Id" }
          ]
        },
        "path": "Snapshots[0]"
      },
      "actions": {
        "Copy": {
          "request": {
            "operation": "CopySnapshot",
            "params": [
              { "target": "SourceSnapshotId", "source": "identifier", "name": "Id" }
            ]
          }
        },
        "CreateTags": {
          "request": {
            "operation": "CreateTags",
            "params": [
              { "target": "Resources[0]", "source": "identifier", "name": "Id" }
            ]
          },
          "resource": {
            "type": "Tag",
            "identifiers": [
              { "target": "ResourceId", "source": "identifier", "name": "Id" },
              { "target": "Key", "source": "requestParameter", "path": "Tags[].Key" },
              { "target": "Value", "source": "requestParameter", "path": "Tags[].Value" }
            ]
          }
        },
        "Delete": {
          "request": {
            "operation": "DeleteSnapshot",
            "params": [
              { "target": "SnapshotId", "source": "identifier", "name": "Id" }
            ]
          }
        },
        "DescribeAttribute": {
          "request": {
            "operation": "DescribeSnapshotAttribute",
            "params": [
              { "target": "SnapshotId", "source": "identifier", "name": "Id" }
            ]
          }
        },
        "ModifyAttribute": {
          "request": {
            "operation": "ModifySnapshotAttribute",
            "params": [
              { "target": "SnapshotId", "source": "identifier", "name": "Id" }
            ]
          }
        },
        "ResetAttribute": {
          "request": {
            "operation": "ResetSnapshotAttribute",
            "params": [
              { "target": "SnapshotId", "source": "identifier", "name": "Id" }
            ]
          }
        }
      },
      "waiters": {
        "Completed": {
          "waiterName": "SnapshotCompleted",
          "params": [
            { "target": "SnapshotIds[]", "source": "identifier", "name": "Id" }
          ],
          "path": "Snapshots[]"
        }
      },
      "has": {
        "Volume": {
          "resource": {
            "type": "Volume",
            "identifiers": [
              { "target": "Id", "source": "data", "path": "VolumeId" }
            ]
          }
        }
      }
    },
    "Subnet": {
      "identifiers": [
        {
          "name": "Id",
          "memberName": "SubnetId"
        }
      ],
      "shape": "Subnet",
      "load": {
        "request": {
          "operation": "DescribeSubnets",
          "params": [
            { "target": "SubnetIds[0]", "source": "identifier", "name": "Id" }
          ]
        },
        "path": "Subnets[0]"
      },
      "actions": {
        "CreateInstances": {
          "request": {
            "operation": "RunInstances",
            "params": [
              { "target": "SubnetId", "source": "identifier", "name": "Id" }
            ]
          },
          "resource": {
            "type": "Instance",
            "identifiers": [
              { "target": "Id", "source": "response", "path": "Instances[].InstanceId" }
            ],
            "path": "Instances[]"
          }
        },
        "CreateNetworkInterface": {
          "request": {
            "operation": "CreateNetworkInterface",
            "params": [
              { "target": "SubnetId", "source": "identifier", "name": "Id" }
            ]
          },
          "resource": {
            "type": "NetworkInterface",
            "identifiers": [
              { "target": "Id", "source": "response", "path": "NetworkInterface.NetworkInterfaceId" }
            ],
            "path": "NetworkInterface"
          }
        },
        "CreateTags": {
          "request": {
            "operation": "CreateTags",
            "params": [
              { "target": "Resources[0]", "source": "identifier", "name": "Id" }
            ]
          },
          "resource": {
            "type": "Tag",
            "identifiers": [
              { "target": "ResourceId", "source": "identifier", "name": "Id" },
              { "target": "Key", "source": "requestParameter", "path": "Tags[].Key" },
              { "target": "Value", "source": "requestParameter", "path": "Tags[].Value" }
            ]
          }
        },
        "Delete": {
          "request": {
            "operation": "DeleteSubnet",
            "params": [
              { "target": "SubnetId", "source": "identifier", "name": "Id" }
            ]
          }
        }
      },
      "has": {
        "Vpc": {
          "resource": {
            "type": "Vpc",
            "identifiers": [
              { "target": "Id", "source": "data", "path": "VpcId" }
            ]
          }
        }
      },
      "hasMany": {
        "Instances": {
          "request": {
            "operation": "DescribeInstances",
            "params": [
              { "target": "Filters[0].Name", "source": "string", "value": "subnet-id" },
              { "target": "Filters[0].Values[0]", "source": "identifier", "name": "Id" }
            ]
          },
          "resource": {
            "type": "Instance",
            "identifiers": [
              { "target": "Id", "source": "response", "path": "Reservations[].Instances[].InstanceId" }
            ],
            "path": "Reservations[].Instances[]"
          }
        },
        "NetworkInterfaces": {
          "request": {
            "operation": "DescribeNetworkInterfaces",
            "params": [
              { "target": "Filters[0].Name", "source": "string", "value": "subnet-id" },
              { "target": "Filters[0].Values[0]", "source": "identifier", "name": "Id" }
            ]
          },
          "resource": {
            "type": "NetworkInterface",
            "identifiers": [
              { "target": "Id", "source": "response", "path": "NetworkInterfaces[].NetworkInterfaceId" }
            ],
            "path": "NetworkInterfaces[]"
          }
        }
      }
    },
    "Tag": {
      "identifiers": [
        {
          "name": "ResourceId",
          "memberName": "ResourceId"
        },
        {
          "name": "Key",
          "memberName": "Key"
        },
        {
          "name": "Value",
          "memberName": "Value"
        }
      ],
      "shape": "TagDescription",
      "load": {
        "request": {
          "operation": "DescribeTags",
          "params": [
            { "target": "Filters[0].Name", "source": "string", "value": "key" },
            { "target": "Filters[0].Values[0]", "source": "identifier", "name": "Key" },
            { "target": "Filters[1].Name", "source": "string", "value": "value" },
            { "target": "Filters[1].Values[0]", "source": "identifier", "name": "Value" }
          ]
        },
        "path": "Tags[0]"
      },
      "actions": {
        "Delete": {
          "request": {
            "operation": "DeleteTags",
            "params": [
              { "target": "Resources[0]", "source": "identifier", "name": "ResourceId" },
              { "target": "Tags[0].Key", "source": "identifier", "name": "Key" },
              { "target": "Tags[0].Value", "source": "identifier", "name": "Value" }
            ]
          }
        }
      },
      "batchActions": {
        "Delete": {
          "request": {
            "operation": "DeleteTags",
            "params": [
              { "target": "Resources[]", "source": "identifier", "name": "ResourceId" },
              { "target": "Tags[*].Key", "source": "identifier", "name": "Key" },
              { "target": "Tags[*].Value", "source": "identifier", "name": "Value" }
            ]
          }
        }
      }
    },
    "Volume": {
      "identifiers": [
        {
          "name": "Id",
          "memberName": "VolumeId"
        }
      ],
      "shape": "Volume",
      "load": {
        "request": {
          "operation": "DescribeVolumes",
          "params": [
            { "target": "VolumeIds[0]", "source": "identifier", "name": "Id" }
          ]
        },
        "path": "Volumes[0]"
      },
      "actions": {
        "AttachToInstance": {
          "request": {
            "operation": "AttachVolume",
            "params": [
              { "target": "VolumeId", "source": "identifier", "name": "Id" }
            ]
          }
        },
        "CreateSnapshot": {
          "request": {
            "operation": "CreateSnapshot",
            "params": [
              { "target": "VolumeId", "source": "identifier", "name": "Id" }
            ]
          },
          "resource": {
            "type": "Snapshot",
            "identifiers": [
              { "target": "Id", "source": "response", "path": "SnapshotId" }
            ],
            "path": "@"
          }
        },
        "CreateTags": {
          "request": {
            "operation": "CreateTags",
            "params": [
              { "target": "Resources[0]", "source": "identifier", "name": "Id" }
            ]
          },
          "resource": {
            "type": "Tag",
            "identifiers": [
              { "target": "ResourceId", "source": "identifier", "name": "Id" },
              { "target": "Key", "source": "requestParameter", "path": "Tags[].Key" },
              { "target": "Value", "source": "requestParameter", "path": "Tags[].Value" }
            ]
          }
        },
        "Delete": {
          "request": {
            "operation": "DeleteVolume",
            "params": [
              { "target": "VolumeId", "source": "identifier", "name": "Id" }
            ]
          }
        },
        "DescribeAttribute": {
          "request": {
            "operation": "DescribeVolumeAttribute",
            "params": [
              { "target": "VolumeId", "source": "identifier", "name": "Id" }
            ]
          }
        },
        "DescribeStatus": {
          "request": {
            "operation": "DescribeVolumeStatus",
            "params": [
              { "target": "VolumeIds[0]", "source": "identifier", "name": "Id" }
            ]
          }
        },
        "DetachFromInstance": {
          "request": {
            "operation": "DetachVolume",
            "params": [
              { "target": "VolumeId", "source": "identifier", "name": "Id" }
            ]
          }
        },
        "EnableIo": {
          "request": {
            "operation": "EnableVolumeIO",
            "params": [
              { "target": "VolumeId", "source": "identifier", "name": "Id" }
            ]
          }
        },
        "ModifyAttribute": {
          "request": {
            "operation": "ModifyVolumeAttribute",
            "params": [
              { "target": "VolumeId", "source": "identifier", "name": "Id" }
            ]
          }
        }
      },
      "hasMany": {
        "Snapshots": {
          "request": {
            "operation": "DescribeSnapshots",
            "params": [
              { "target": "Filters[0].Name", "source": "string", "value": "volume-id" },
              { "target": "Filters[0].Values[0]", "source": "identifier", "name": "Id" }
            ]
          },
          "resource": {
            "type": "Snapshot",
            "identifiers": [
              { "target": "Id", "source": "response", "path": "Snapshots[].SnapshotId" }
            ],
            "path": "Snapshots[]"
          }
        }
      }
    },
    "Vpc": {
      "identifiers": [
        {
          "name": "Id",
          "memberName": "VpcId"
        }
      ],
      "shape": "Vpc",
      "load": {
        "request": {
          "operation": "DescribeVpcs",
          "params": [
            { "target": "VpcIds[0]", "source": "identifier", "name": "Id" }
          ]
        },
        "path": "Vpcs[0]"
      },
      "actions": {
        "AssociateDhcpOptions": {
          "request": {
            "operation": "AssociateDhcpOptions",
            "params": [
              { "target": "VpcId", "source": "identifier", "name": "Id" }
            ]
          }
        },
        "AttachClassicLinkInstance": {
          "request": {
            "operation": "AttachClassicLinkVpc",
            "params": [
              { "target": "VpcId", "source": "identifier", "name": "Id" }
            ]
          }
        },
        "AttachInternetGateway": {
          "request": {
            "operation": "AttachInternetGateway",
            "params": [
              { "target": "VpcId", "source": "identifier", "name": "Id" }
            ]
          }
        },
        "CreateNetworkAcl": {
          "request": {
            "operation": "CreateNetworkAcl",
            "params": [
              { "target": "VpcId", "source": "identifier", "name": "Id" }
            ]
          },
          "resource": {
            "type": "NetworkAcl",
            "identifiers": [
              { "target": "Id", "source": "response", "path": "NetworkAcl.NetworkAclId" }
            ],
            "path": "NetworkAcl"
          }
        },
        "CreateRouteTable": {
          "request": {
            "operation": "CreateRouteTable",
            "params": [
              { "target": "VpcId", "source": "identifier", "name": "Id" }
            ]
          },
          "resource": {
            "type": "RouteTable",
            "identifiers": [
              { "target": "Id", "source": "response", "path": "RouteTable.RouteTableId" }
            ],
            "path": "RouteTable"
          }
        },
        "CreateSecurityGroup": {
          "request": {
            "operation": "CreateSecurityGroup",
            "params": [
              { "target": "VpcId", "source": "identifier", "name": "Id" }
            ]
          },
          "resource": {
            "type": "SecurityGroup",
            "identifiers": [
              { "target": "Id", "source": "response", "path": "GroupId" }
            ]
          }
        },
        "CreateSubnet": {
          "request": {
            "operation": "CreateSubnet",
            "params": [
              { "target": "VpcId", "source": "identifier", "name": "Id" }
            ]
          },
          "resource": {
            "type": "Subnet",
            "identifiers": [
              { "target": "Id", "source": "response", "path": "Subnet.SubnetId" }
            ],
            "path": "Subnet"
          }
        },
        "CreateTags": {
          "request": {
            "operation": "CreateTags",
            "params": [
              { "target": "Resources[0]", "source": "identifier", "name": "Id" }
            ]
          },
          "resource": {
            "type": "Tag",
            "identifiers": [
              { "target": "ResourceId", "source": "identifier", "name": "Id" },
              { "target": "Key", "source": "requestParameter", "path": "Tags[].Key" },
              { "target": "Value", "source": "requestParameter", "path": "Tags[].Value" }
            ]
          }
        },
        "Delete": {
          "request": {
            "operation": "DeleteVpc",
            "params": [
              { "target": "VpcId", "source": "identifier", "name": "Id" }
            ]
          }
        },
        "DescribeAttribute": {
          "request": {
            "operation": "DescribeVpcAttribute",
            "params": [
              { "target": "VpcId", "source": "identifier", "name": "Id" }
            ]
          }
        },
        "DetachClassicLinkInstance": {
          "request": {
            "operation": "DetachClassicLinkVpc",
            "params": [
              { "target": "VpcId", "source": "identifier", "name": "Id" }
            ]
          }
        },
        "DetachInternetGateway": {
          "request": {
            "operation": "DetachInternetGateway",
            "params": [
              { "target": "VpcId", "source": "identifier", "name": "Id" }
            ]
          }
        },
        "DisableClassicLink": {
          "request": {
            "operation": "DisableVpcClassicLink",
            "params": [
              { "target": "VpcId", "source": "identifier", "name": "Id" }
            ]
          }
        },
        "EnableClassicLink": {
          "request": {
            "operation": "EnableVpcClassicLink",
            "params": [
              { "target": "VpcId", "source": "identifier", "name": "Id" }
            ]
          }
        },
        "ModifyAttribute": {
          "request": {
            "operation": "ModifyVpcAttribute",
            "params": [
              { "target": "VpcId", "source": "identifier", "name": "Id" }
            ]
          }
        },
        "RequestVpcPeeringConnection": {
          "request": {
            "operation": "CreateVpcPeeringConnection",
            "params": [
              { "target": "VpcId", "source": "identifier", "name": "Id" }
            ]
          },
          "resource": {
            "type": "VpcPeeringConnection",
            "identifiers": [
              { "target": "Id", "source": "response", "path": "VpcPeeringConnection.VpcPeeringConnectionId" }
            ],
            "path": "VpcPeeringConnection"
          }
        }
      },
      "waiters": {
        "Available": {
          "waiterName": "VpcAvailable",
          "params": [
            { "target": "VpcIds[]", "source": "identifier", "name": "Id" }
          ]
        },
        "Exists": {
          "waiterName": "VpcExists",
          "params": [
            { "target": "VpcIds[]", "source": "identifier", "name": "Id" }
          ]
        }
      },
      "has": {
        "DhcpOptions": {
          "resource": {
            "type": "DhcpOptions",
            "identifiers": [
              { "target": "Id", "source": "data", "path": "DhcpOptionsId" }
            ]
          }
        }
      },
      "hasMany": {
        "AcceptedVpcPeeringConnections": {
          "request": {
            "operation": "DescribeVpcPeeringConnections",
            "params": [
              { "target": "Filters[0].Name", "source": "string", "value": "accepter-vpc-info.vpc-id" },
              { "target": "Filters[0].Values[0]", "source": "identifier", "name": "Id" }
            ]
          },
          "resource": {
            "type": "VpcPeeringConnection",
            "identifiers": [
              { "target": "Id", "source": "response", "path": "VpcPeeringConnections[].VpcPeeringConnectionId" }
            ],
            "path": "VpcPeeringConnections[]"
          }
        },
        "Instances": {
          "request": {
            "operation": "DescribeInstances",
            "params": [
              { "target": "Filters[0].Name", "source": "string", "value": "vpc-id" },
              { "target": "Filters[0].Values[0]", "source": "identifier", "name": "Id" }
            ]
          },
          "resource": {
            "type": "Instance",
            "identifiers": [
              { "target": "Id", "source": "response", "path": "Reservations[].Instances[].InstanceId" }
            ],
            "path": "Reservations[].Instances[]"
          }
        },
        "InternetGateways": {
          "request": {
            "operation": "DescribeInternetGateways",
            "params": [
              { "target": "Filters[0].Name", "source": "string", "value": "attachment.vpc-id" },
              { "target": "Filters[0].Values[0]", "source": "identifier", "name": "Id" }
            ]
          },
          "resource": {
            "type": "InternetGateway",
            "identifiers": [
              { "target": "Id", "source": "response", "path": "InternetGateways[].InternetGatewayId" }
            ],
            "path": "InternetGateways[]"
          }
        },
        "NetworkAcls": {
          "request": {
            "operation": "DescribeNetworkAcls",
            "params": [
              { "target": "Filters[0].Name", "source": "string", "value": "vpc-id" },
              { "target": "Filters[0].Values[0]", "source": "identifier", "name": "Id" }
            ]
          },
          "resource": {
            "type": "NetworkAcl",
            "identifiers": [
              { "target": "Id", "source": "response", "path": "NetworkAcls[].NetworkAclId" }
            ],
            "path": "NetworkAcls[]"
          }
        },
        "NetworkInterfaces": {
          "request": {
            "operation": "DescribeNetworkInterfaces",
            "params": [
              { "target": "Filters[0].Name", "source": "string", "value": "vpc-id" },
              { "target": "Filters[0].Values[0]", "source": "identifier", "name": "Id" }
            ]
          },
          "resource": {
            "type": "NetworkInterface",
            "identifiers": [
              { "target": "Id", "source": "response", "path": "NetworkInterfaces[].NetworkInterfaceId" }
            ],
            "path": "NetworkInterfaces[]"
          }
        },
        "RequestedVpcPeeringConnections": {
          "request": {
            "operation": "DescribeVpcPeeringConnections",
            "params": [
              { "target": "Filters[0].Name", "source": "string", "value": "requester-vpc-info.vpc-id" },
              { "target": "Filters[0].Values[0]", "source": "identifier", "name": "Id" }
            ]
          },
          "resource": {
            "type": "VpcPeeringConnection",
            "identifiers": [
              { "target": "Id", "source": "response", "path": "VpcPeeringConnections[].VpcPeeringConnectionId" }
            ],
            "path": "VpcPeeringConnections[]"
          }
        },
        "RouteTables": {
          "request": {
            "operation": "DescribeRouteTables",
            "params": [
              { "target": "Filters[0].Name", "source": "string", "value": "vpc-id" },
              { "target": "Filters[0].Values[0]", "source": "identifier", "name": "Id" }
            ]
          },
          "resource": {
            "type": "RouteTable",
            "identifiers": [
              { "target": "Id", "source": "response", "path": "RouteTables[].RouteTableId" }
            ],
            "path": "RouteTables[]"
          }
        },
        "SecurityGroups": {
          "request": {
            "operation": "DescribeSecurityGroups",
            "params": [
              { "target": "Filters[0].Name", "source": "string", "value": "vpc-id" },
              { "target": "Filters[0].Values[0]", "source": "identifier", "name": "Id" }
            ]
          },
          "resource": {
            "type": "SecurityGroup",
            "identifiers": [
              { "target": "Id", "source": "response", "path": "SecurityGroups[].GroupId" }
            ],
            "path": "SecurityGroups[]"
          }
        },
        "Subnets": {
          "request": {
            "operation": "DescribeSubnets",
            "params": [
              { "target": "Filters[0].Name", "source": "string", "value": "vpc-id" },
              { "target": "Filters[0].Values[0]", "source": "identifier", "name": "Id" }
            ]
          },
          "resource": {
            "type": "Subnet",
            "identifiers": [
              { "target": "Id", "source": "response", "path": "Subnets[].SubnetId" }
            ],
            "path": "Subnets[]"
          }
        }
      }
    },
    "VpcPeeringConnection": {
      "identifiers": [
        {
          "name": "Id",
          "memberName": "VpcPeeringConnectionId"
        }
      ],
      "shape": "VpcPeeringConnection",
      "load": {
        "request": {
          "operation": "DescribeVpcPeeringConnections",
          "params": [
            { "target": "VpcPeeringConnectionIds[0]", "source": "identifier", "name": "Id" }
          ]
        },
        "path": "VpcPeeringConnections[0]"
      },
      "actions": {
        "Accept": {
          "request": {
            "operation": "AcceptVpcPeeringConnection",
            "params": [
              { "target": "VpcPeeringConnectionId", "source": "identifier", "name": "Id" }
            ]
          }
        },
        "Delete": {
          "request": {
            "operation": "DeleteVpcPeeringConnection",
            "params": [
              { "target": "VpcPeeringConnectionId", "source": "identifier", "name": "Id" }
            ]
          }
        },
        "Reject": {
          "request": {
            "operation": "RejectVpcPeeringConnection",
            "params": [
              { "target": "VpcPeeringConnectionId", "source": "identifier", "name": "Id" }
            ]
          }
        }
      },
      "waiters": {
        "Exists": {
          "waiterName": "VpcPeeringConnectionExists",
          "params": [
            { "target": "VpcPeeringConnectionIds[]", "source": "identifier", "name": "Id" }
          ],
          "path": "VpcPeeringConnections[0]"
        }
      },
      "has": {
        "AccepterVpc": {
          "resource": {
            "type": "Vpc",
            "identifiers": [
              { "target": "Id", "source": "data", "path": "AccepterVpcInfo.VpcId" }
            ]
          }
        },
        "RequesterVpc": {
          "resource": {
            "type": "Vpc",
            "identifiers": [
              { "target": "Id", "source": "data", "path": "RequesterVpcInfo.VpcId" }
            ]
          }
        }
      }
    },
    "VpcAddress": {
      "identifiers": [
        {
          "name": "AllocationId"
        }
      ],
      "shape": "Address",
      "load": {
        "request": {
          "operation": "DescribeAddresses",
          "params": [
            { "target": "AllocationIds[0]", "source": "identifier", "name": "AllocationId" }
          ]
        },
        "path": "Addresses[0]"
      },
      "actions": {
        "Associate": {
          "request": {
            "operation": "AssociateAddress",
            "params": [
              { "target": "AllocationId", "source": "identifier", "name": "AllocationId" }
            ]
          }
        },
        "Release": {
          "request": {
            "operation": "ReleaseAddress",
            "params": [
              { "target": "AllocationId", "source": "data", "path": "AllocationId" }
            ]
          }
        }
      },
      "has": {
        "Association": {
          "resource": {
            "type": "NetworkInterfaceAssociation",
            "identifiers": [
              { "target": "Id", "source": "data", "path": "AssociationId" }
            ]
          }
        }
      }
    }
  }
}
