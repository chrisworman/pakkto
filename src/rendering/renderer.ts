import { App } from "../app";
import { ComponentDelegate } from "../components/component-delegate";

class Renderer {
    constructor(private app: App) {}

    render() {
        const currentRoute = this.app.getRoute();
        if (!currentRoute) {
            // TODO: consider throwing `RouteError`
            console.error('No route: nothing to render');
            return null;
        }

        const rootDelegate = new ComponentDelegate();
        const rootComponent = new currentRoute.root(rootDelegate);
        // TODO: use currentRoute.root.name (converted to skewer case) to load the template for the element instead of getTemplateId() unless getTemplateId() is defined
        console.log(`Root component class name is ${currentRoute.root.name}`);
        const rootTemplate: any = document.getElementById(rootComponent.getTemplateId());
        const rootChildComponents = rootComponent.getChildComponents();
        if (rootChildComponents) {
            rootChildComponents.forEach((childComponent) => {
                // TODO: The child tag name will be toSkewerCase(childComponent.name)
                console.log(`${childComponent?.name}`, childComponent);
            });
        }

        return rootTemplate.content.cloneNode(true).firstElementChild; // TODO: render the template!
    }
}

export { Renderer }
