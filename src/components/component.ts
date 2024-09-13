import { ComponentConstructor } from "./component-constructor";

export interface Component {
    getTemplateId(): string; // TODO: consider getTemplateId?(): string; then use class name to find the template by id (convention over configuration)
    getChildComponents(): ComponentConstructor[] | null;
}
