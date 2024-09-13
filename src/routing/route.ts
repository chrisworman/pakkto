import { ComponentConstructor } from "../components/component-constructor";

export interface Route {
    paths: string[];
    root: ComponentConstructor;
    layout?: ComponentConstructor;
}
