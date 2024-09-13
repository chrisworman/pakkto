import { Component } from "../../../../dist/components/component";
import { ComponentDelegate } from "../../../../dist/components/component-delegate";
import { Message } from "./message";

class Root implements Component {
    constructor(delegate: ComponentDelegate) {
        delegate.setData({ messageText: 'Hello World' });
    }

    getTemplateId(): string {
        // TODO: consider delegate.setTemplate instead?
        return 'rootTemplate';
    }

    getChildComponents() {
        return [Message];
    }
}

export { Root }
