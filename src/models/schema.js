export const schema = {
    "models": {
        "Component": {
            "name": "Component",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "children": {
                    "name": "children",
                    "isArray": true,
                    "type": {
                        "model": "ChildComponent"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "parent"
                    }
                }
            },
            "syncable": true,
            "pluralName": "Components",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                }
            ]
        },
        "ChildComponent": {
            "name": "ChildComponent",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "parent": {
                    "name": "parent",
                    "isArray": false,
                    "type": {
                        "model": "Component"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "parentID"
                    }
                },
                "child": {
                    "name": "child",
                    "isArray": false,
                    "type": {
                        "model": "Component"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "childID"
                    }
                }
            },
            "syncable": true,
            "pluralName": "ChildComponents",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byChild",
                        "fields": [
                            "parentID",
                            "childID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byParent",
                        "fields": [
                            "childID",
                            "parentID"
                        ]
                    }
                }
            ]
        }
    },
    "enums": {},
    "nonModels": {},
    "version": "f274b69f44ad23005bcb0a7f0d041180"
};