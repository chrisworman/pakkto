import { AppBuilder } from '../../../dist/index'
import { Root } from './components/root';

// TODO: consider making App expose the builder interface instead of having a AppBuilder class? Does that even make sense?
const appBuilder = new AppBuilder();
const app = appBuilder
    .withRoutes([{
        paths: ['/'],
        root: Root,
    }])
    .build();

app.run();


