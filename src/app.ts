import { Renderer } from "./rendering/renderer";
import { Route } from "./routing/route";

class App {
    private renderer: Renderer;
    private appDomElement: any; // TODO: dom node type?

    constructor(
        private routes: Route[]
    ) {
        this.renderer = new Renderer(this);
        this.appDomElement = null;
    }

    run() {
        console.log(`pakkto app run`, this.routes);
        // TODO: check if DOM is already loaded?
        document.addEventListener("DOMContentLoaded", () => {
            fetch('templates.html').then((response) => {
                if (!response.ok) {
                    throw new Error(`Template response status: ${response.status}`);
                }

                response.text().then((templateHtml) => {

                    // TODO: consider lazily injecting individual templates into document the very first time a component that uses that template is rendered
                    const templatesNode = document.createElement('div');
                    templatesNode.innerHTML = templateHtml;
                    document.body.appendChild(templatesNode);

                    this.appDomElement = document.getElementById('app'); // TODO: throw if no element
                    const renderedNode = this.renderer.render();
                    if (renderedNode) {
                        this.appDomElement.appendChild(renderedNode);
                    } else {
                        this.appDomElement.innerHTML = '';
                    }

                }).catch((textError) => {
                    console.error(textError);
                });

                

            }).catch((error) => {
                console.error(error);
            });
        });
    }

    getRoute() {
        // TODO: move into Router class
        // TODO: add support for query string parameters
        // TODO: add support for path parameters
        const currentPath = window.location.pathname;
        return this.routes.find((route) => route.paths.includes(currentPath));
    }
}

export { App }
