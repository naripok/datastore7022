// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Component, ChildComponent } = initSchema(schema);

export {
  Component,
  ChildComponent
};