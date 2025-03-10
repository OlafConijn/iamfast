export default {
    "service": {
        "has": {
            "Alarm": {
                "resource": {
                    "type": "Alarm",
                    "identifiers": [
                        {
                            "target": "Name",
                            "source": "input"
                        }
                    ]
                }
            },
            "Metric": {
                "resource": {
                    "type": "Metric",
                    "identifiers": [
                        {
                            "target": "Namespace",
                            "source": "input"
                        },
                        {
                            "target": "Name",
                            "source": "input"
                        }
                    ]
                }
            }
        },
        "hasMany": {
            "Alarms": {
                "request": { "operation": "DescribeAlarms" },
                "resource": {
                    "type": "Alarm",
                    "identifiers": [
                        {
                            "target": "Name",
                            "source": "response",
                            "path": "MetricAlarms[].AlarmName"
                        }
                    ],
                    "path": "MetricAlarms[]"
                }
            },
            "Metrics": {
                "request": { "operation": "ListMetrics" },
                "resource": {
                    "type": "Metric",
                    "identifiers": [
                        {
                            "target": "Namespace",
                            "source": "response",
                            "path": "Metrics[].Namespace"
                        },
                        {
                            "target": "Name",
                            "source": "response",
                            "path": "Metrics[].MetricName"
                        }
                    ],
                    "path": "Metrics[]"
                }
            }
        }
    },
    "resources": {
        "Alarm": {
            "identifiers": [
                {
                    "name": "Name",
                    "memberName": "AlarmName"
                }
            ],
            "shape": "MetricAlarm",
            "load": {
                "request": {
                    "operation": "DescribeAlarms",
                    "params": [
                        {
                            "target": "AlarmNames[0]",
                            "source": "identifier",
                            "name": "Name"
                        }
                    ]
                },
                "path": "MetricAlarms[0]"
            },
            "actions": {
                "Delete": {
                    "request": {
                        "operation": "DeleteAlarms",
                        "params": [
                            {
                                "target": "AlarmNames[0]",
                                "source": "identifier",
                                "name": "Name"
                            }
                        ]
                    }
                },
                "DescribeHistory": {
                    "request": {
                        "operation": "DescribeAlarmHistory",
                        "params": [
                            {
                                "target": "AlarmName",
                                "source": "identifier",
                                "name": "Name"
                            }
                        ]
                    }
                },
                "DisableActions": {
                    "request": {
                        "operation": "DisableAlarmActions",
                        "params": [
                            {
                                "target": "AlarmNames[0]",
                                "source": "identifier",
                                "name": "Name"
                            }
                        ]
                    }
                },
                "EnableActions": {
                    "request": {
                        "operation": "EnableAlarmActions",
                        "params": [
                            {
                                "target": "AlarmNames[0]",
                                "source": "identifier",
                                "name": "Name"
                            }
                        ]
                    }
                },
                "SetState": {
                    "request": {
                        "operation": "SetAlarmState",
                        "params": [
                            {
                                "target": "AlarmName",
                                "source": "identifier",
                                "name": "Name"
                            }
                        ]
                    }
                }
            },
            "batchActions": {
                "Delete": {
                    "request": {
                        "operation": "DeleteAlarms",
                        "params": [
                            {
                                "target": "AlarmNames[]",
                                "source": "identifier",
                                "name": "Name"
                            }
                        ]
                    }
                },
                "DisableActions": {
                    "request": {
                        "operation": "DisableAlarmActions",
                        "params": [
                            {
                                "target": "AlarmNames[]",
                                "source": "identifier",
                                "name": "Name"
                            }
                        ]
                    }
                },
                "EnableActions": {
                    "request": {
                        "operation": "EnableAlarmActions",
                        "params": [
                            {
                                "target": "AlarmNames[]",
                                "source": "identifier",
                                "name": "Name"
                            }
                        ]
                    }
                }
            },
            "has": {
                "Metric": {
                    "resource": {
                        "type": "Metric",
                        "identifiers": [
                            {
                                "target": "Namespace",
                                "source": "data",
                                "path": "Namespace"
                            },
                            {
                                "target": "Name",
                                "source": "data",
                                "path": "MetricName"
                            }
                        ]
                    }
                }
            }
        },
        "Metric": {
            "identifiers": [
                {
                    "name": "Namespace",
                    "memberName": "Namespace"
                },
                {
                    "name": "Name",
                    "memberName": "MetricName"
                }
            ],
            "shape": "Metric",
            "load": {
                "request": {
                    "operation": "ListMetrics",
                    "params": [
                        {
                            "target": "MetricName",
                            "source": "identifier",
                            "name": "Name"
                        },
                        {
                            "target": "Namespace",
                            "source": "identifier",
                            "name": "Namespace"
                        }
                    ]
                },
                "path": "Metrics[0]"
            },
            "actions": {
                "GetStatistics": {
                    "request": {
                        "operation": "GetMetricStatistics",
                        "params": [
                            {
                                "target": "Namespace",
                                "source": "identifier",
                                "name": "Namespace"
                            },
                            {
                                "target": "MetricName",
                                "source": "identifier",
                                "name": "Name"
                            }
                        ]
                    }
                },
                "PutAlarm": {
                    "request": {
                        "operation": "PutMetricAlarm",
                        "params": [
                            {
                                "target": "Namespace",
                                "source": "identifier",
                                "name": "Namespace"
                            },
                            {
                                "target": "MetricName",
                                "source": "identifier",
                                "name": "Name"
                            }
                        ]
                    },
                    "resource": {
                        "type": "Alarm",
                        "identifiers": [
                            {
                                "target": "Name",
                                "source": "requestParameter",
                                "path": "AlarmName"
                            }
                        ]
                    }
                },
                "PutData": {
                    "request": {
                        "operation": "PutMetricData",
                        "params": [
                            {
                                "target": "Namespace",
                                "source": "identifier",
                                "name": "Namespace"
                            },
                            {
                                "target": "MetricData[].MetricName",
                                "source": "identifier",
                                "name": "Name"
                            }
                        ]
                    }
                }
            },
            "hasMany": {
                "Alarms": {
                    "request": {
                        "operation": "DescribeAlarmsForMetric",
                        "params": [
                            {
                                "target": "Namespace",
                                "source": "identifier",
                                "name": "Namespace"
                            },
                            {
                                "target": "MetricName",
                                "source": "identifier",
                                "name": "Name"
                            }
                        ]
                    },
                    "resource": {
                        "type": "Alarm",
                        "identifiers": [
                            {
                                "target": "Name",
                                "source": "response",
                                "path": "MetricAlarms[].AlarmName"
                            }
                        ],
                        "path": "MetricAlarms[]"
                    }
                }
            }
        }
    }
}
