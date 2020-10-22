/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createComponent = /* GraphQL */ `
  mutation CreateComponent(
    $input: CreateComponentInput!
    $condition: ModelComponentConditionInput
  ) {
    createComponent(input: $input, condition: $condition) {
      id
      name
      children {
        items {
          id
          parentID
          childID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateComponent = /* GraphQL */ `
  mutation UpdateComponent(
    $input: UpdateComponentInput!
    $condition: ModelComponentConditionInput
  ) {
    updateComponent(input: $input, condition: $condition) {
      id
      name
      children {
        items {
          id
          parentID
          childID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteComponent = /* GraphQL */ `
  mutation DeleteComponent(
    $input: DeleteComponentInput!
    $condition: ModelComponentConditionInput
  ) {
    deleteComponent(input: $input, condition: $condition) {
      id
      name
      children {
        items {
          id
          parentID
          childID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createChildComponent = /* GraphQL */ `
  mutation CreateChildComponent(
    $input: CreateChildComponentInput!
    $condition: ModelChildComponentConditionInput
  ) {
    createChildComponent(input: $input, condition: $condition) {
      id
      parentID
      childID
      parent {
        id
        name
        children {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      child {
        id
        name
        children {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateChildComponent = /* GraphQL */ `
  mutation UpdateChildComponent(
    $input: UpdateChildComponentInput!
    $condition: ModelChildComponentConditionInput
  ) {
    updateChildComponent(input: $input, condition: $condition) {
      id
      parentID
      childID
      parent {
        id
        name
        children {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      child {
        id
        name
        children {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteChildComponent = /* GraphQL */ `
  mutation DeleteChildComponent(
    $input: DeleteChildComponentInput!
    $condition: ModelChildComponentConditionInput
  ) {
    deleteChildComponent(input: $input, condition: $condition) {
      id
      parentID
      childID
      parent {
        id
        name
        children {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      child {
        id
        name
        children {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
