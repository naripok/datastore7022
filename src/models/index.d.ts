import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Component {
  readonly id: string;
  readonly name: string;
  readonly children?: ChildComponent[];
  constructor(init: ModelInit<Component>);
  static copyOf(source: Component, mutator: (draft: MutableModel<Component>) => MutableModel<Component> | void): Component;
}

export declare class ChildComponent {
  readonly id: string;
  readonly parent: Component;
  readonly child: Component;
  constructor(init: ModelInit<ChildComponent>);
  static copyOf(source: ChildComponent, mutator: (draft: MutableModel<ChildComponent>) => MutableModel<ChildComponent> | void): ChildComponent;
}