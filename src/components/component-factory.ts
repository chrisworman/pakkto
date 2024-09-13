import { Component } from "./component";
import { ComponentDelegate } from "./component-delegate";

// TODO: deprecate?

export interface ComponentFactory {
    createComponent: (delegate: ComponentDelegate) => Component;
}
