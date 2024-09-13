import { App } from "./app";
import { Route } from "./routing/route";

class AppBuilder {
    private routes: Route[] = [];

    constructor() {
    }

    withRoutes(routes: Route[]) {
        this.routes = routes;
        return this;
    }

    build() {
        return new App(this.routes);
    }
}

export { AppBuilder }
