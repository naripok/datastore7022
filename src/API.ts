/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateComponentInput = {
  id?: string | null,
  name: string,
  _version?: number | null,
};

export type ModelComponentConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelComponentConditionInput | null > | null,
  or?: Array< ModelComponentConditionInput | null > | null,
  not?: ModelComponentConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateComponentInput = {
  id: string,
  name?: string | null,
  _version?: number | null,
};

export type DeleteComponentInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreateChildComponentInput = {
  id?: string | null,
  parentID: string,
  childID: string,
  _version?: number | null,
};

export type ModelChildComponentConditionInput = {
  parentID?: ModelIDInput | null,
  childID?: ModelIDInput | null,
  and?: Array< ModelChildComponentConditionInput | null > | null,
  or?: Array< ModelChildComponentConditionInput | null > | null,
  not?: ModelChildComponentConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateChildComponentInput = {
  id: string,
  parentID?: string | null,
  childID?: string | null,
  _version?: number | null,
};

export type DeleteChildComponentInput = {
  id?: string | null,
  _version?: number | null,
};

export type ModelComponentFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelComponentFilterInput | null > | null,
  or?: Array< ModelComponentFilterInput | null > | null,
  not?: ModelComponentFilterInput | null,
};

export type ModelChildComponentFilterInput = {
  id?: ModelIDInput | null,
  parentID?: ModelIDInput | null,
  childID?: ModelIDInput | null,
  and?: Array< ModelChildComponentFilterInput | null > | null,
  or?: Array< ModelChildComponentFilterInput | null > | null,
  not?: ModelChildComponentFilterInput | null,
};

export type CreateComponentMutationVariables = {
  input: CreateComponentInput,
  condition?: ModelComponentConditionInput | null,
};

export type CreateComponentMutation = {
  createComponent:  {
    __typename: "Component",
    id: string,
    name: string,
    children:  {
      __typename: "ModelChildComponentConnection",
      items:  Array< {
        __typename: "ChildComponent",
        id: string,
        parentID: string,
        childID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateComponentMutationVariables = {
  input: UpdateComponentInput,
  condition?: ModelComponentConditionInput | null,
};

export type UpdateComponentMutation = {
  updateComponent:  {
    __typename: "Component",
    id: string,
    name: string,
    children:  {
      __typename: "ModelChildComponentConnection",
      items:  Array< {
        __typename: "ChildComponent",
        id: string,
        parentID: string,
        childID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteComponentMutationVariables = {
  input: DeleteComponentInput,
  condition?: ModelComponentConditionInput | null,
};

export type DeleteComponentMutation = {
  deleteComponent:  {
    __typename: "Component",
    id: string,
    name: string,
    children:  {
      __typename: "ModelChildComponentConnection",
      items:  Array< {
        __typename: "ChildComponent",
        id: string,
        parentID: string,
        childID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateChildComponentMutationVariables = {
  input: CreateChildComponentInput,
  condition?: ModelChildComponentConditionInput | null,
};

export type CreateChildComponentMutation = {
  createChildComponent:  {
    __typename: "ChildComponent",
    id: string,
    parentID: string,
    childID: string,
    parent:  {
      __typename: "Component",
      id: string,
      name: string,
      children:  {
        __typename: "ModelChildComponentConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    child:  {
      __typename: "Component",
      id: string,
      name: string,
      children:  {
        __typename: "ModelChildComponentConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateChildComponentMutationVariables = {
  input: UpdateChildComponentInput,
  condition?: ModelChildComponentConditionInput | null,
};

export type UpdateChildComponentMutation = {
  updateChildComponent:  {
    __typename: "ChildComponent",
    id: string,
    parentID: string,
    childID: string,
    parent:  {
      __typename: "Component",
      id: string,
      name: string,
      children:  {
        __typename: "ModelChildComponentConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    child:  {
      __typename: "Component",
      id: string,
      name: string,
      children:  {
        __typename: "ModelChildComponentConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteChildComponentMutationVariables = {
  input: DeleteChildComponentInput,
  condition?: ModelChildComponentConditionInput | null,
};

export type DeleteChildComponentMutation = {
  deleteChildComponent:  {
    __typename: "ChildComponent",
    id: string,
    parentID: string,
    childID: string,
    parent:  {
      __typename: "Component",
      id: string,
      name: string,
      children:  {
        __typename: "ModelChildComponentConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    child:  {
      __typename: "Component",
      id: string,
      name: string,
      children:  {
        __typename: "ModelChildComponentConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type SyncComponentsQueryVariables = {
  filter?: ModelComponentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncComponentsQuery = {
  syncComponents:  {
    __typename: "ModelComponentConnection",
    items:  Array< {
      __typename: "Component",
      id: string,
      name: string,
      children:  {
        __typename: "ModelChildComponentConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type GetComponentQueryVariables = {
  id: string,
};

export type GetComponentQuery = {
  getComponent:  {
    __typename: "Component",
    id: string,
    name: string,
    children:  {
      __typename: "ModelChildComponentConnection",
      items:  Array< {
        __typename: "ChildComponent",
        id: string,
        parentID: string,
        childID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListComponentsQueryVariables = {
  filter?: ModelComponentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListComponentsQuery = {
  listComponents:  {
    __typename: "ModelComponentConnection",
    items:  Array< {
      __typename: "Component",
      id: string,
      name: string,
      children:  {
        __typename: "ModelChildComponentConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type SyncChildComponentsQueryVariables = {
  filter?: ModelChildComponentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncChildComponentsQuery = {
  syncChildComponents:  {
    __typename: "ModelChildComponentConnection",
    items:  Array< {
      __typename: "ChildComponent",
      id: string,
      parentID: string,
      childID: string,
      parent:  {
        __typename: "Component",
        id: string,
        name: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      },
      child:  {
        __typename: "Component",
        id: string,
        name: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      },
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type GetChildComponentQueryVariables = {
  id: string,
};

export type GetChildComponentQuery = {
  getChildComponent:  {
    __typename: "ChildComponent",
    id: string,
    parentID: string,
    childID: string,
    parent:  {
      __typename: "Component",
      id: string,
      name: string,
      children:  {
        __typename: "ModelChildComponentConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    child:  {
      __typename: "Component",
      id: string,
      name: string,
      children:  {
        __typename: "ModelChildComponentConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListChildComponentsQueryVariables = {
  filter?: ModelChildComponentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChildComponentsQuery = {
  listChildComponents:  {
    __typename: "ModelChildComponentConnection",
    items:  Array< {
      __typename: "ChildComponent",
      id: string,
      parentID: string,
      childID: string,
      parent:  {
        __typename: "Component",
        id: string,
        name: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      },
      child:  {
        __typename: "Component",
        id: string,
        name: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      },
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type OnCreateComponentSubscription = {
  onCreateComponent:  {
    __typename: "Component",
    id: string,
    name: string,
    children:  {
      __typename: "ModelChildComponentConnection",
      items:  Array< {
        __typename: "ChildComponent",
        id: string,
        parentID: string,
        childID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateComponentSubscription = {
  onUpdateComponent:  {
    __typename: "Component",
    id: string,
    name: string,
    children:  {
      __typename: "ModelChildComponentConnection",
      items:  Array< {
        __typename: "ChildComponent",
        id: string,
        parentID: string,
        childID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteComponentSubscription = {
  onDeleteComponent:  {
    __typename: "Component",
    id: string,
    name: string,
    children:  {
      __typename: "ModelChildComponentConnection",
      items:  Array< {
        __typename: "ChildComponent",
        id: string,
        parentID: string,
        childID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateChildComponentSubscription = {
  onCreateChildComponent:  {
    __typename: "ChildComponent",
    id: string,
    parentID: string,
    childID: string,
    parent:  {
      __typename: "Component",
      id: string,
      name: string,
      children:  {
        __typename: "ModelChildComponentConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    child:  {
      __typename: "Component",
      id: string,
      name: string,
      children:  {
        __typename: "ModelChildComponentConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateChildComponentSubscription = {
  onUpdateChildComponent:  {
    __typename: "ChildComponent",
    id: string,
    parentID: string,
    childID: string,
    parent:  {
      __typename: "Component",
      id: string,
      name: string,
      children:  {
        __typename: "ModelChildComponentConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    child:  {
      __typename: "Component",
      id: string,
      name: string,
      children:  {
        __typename: "ModelChildComponentConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteChildComponentSubscription = {
  onDeleteChildComponent:  {
    __typename: "ChildComponent",
    id: string,
    parentID: string,
    childID: string,
    parent:  {
      __typename: "Component",
      id: string,
      name: string,
      children:  {
        __typename: "ModelChildComponentConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    child:  {
      __typename: "Component",
      id: string,
      name: string,
      children:  {
        __typename: "ModelChildComponentConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};
