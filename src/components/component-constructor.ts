import { Component } from "./component";
import { ComponentDelegate } from "./component-delegate";

export interface ComponentConstructor {
    new (delegate: ComponentDelegate): Component;
}
