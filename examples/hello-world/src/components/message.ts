import { Component } from "../../../../dist/components/component";
import { ComponentDelegate } from "../../../../dist/components/component-delegate";

class Message implements Component {
    constructor(delegate: ComponentDelegate) {
        const { messageText } = delegate.getProps(); 
        delegate.setData({ text: messageText });
    }

    getTemplateId() {
        return 'messageTemplate';
    }

    getChildComponents() {
        return null;
    }
}

export { Message }
