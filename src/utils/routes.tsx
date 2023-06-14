import {lazy} from 'react';

export enum ROUTES {
    MAIN = '/',
    ABOUT = '/about'
}

const HomeAsync = lazy(() => import('../pages/Home'));
const AboutAsync = lazy(() => import('../pages/About'));

export const routes = [
    {
        path: ROUTES.MAIN,
        element: <HomeAsync/>,
    },
    {
        path: ROUTES.ABOUT,
        element: <AboutAsync/>,
    },
];
