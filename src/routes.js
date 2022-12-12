import AppLayout from './AppLayout';
import IndexView from './views/index';

const routes = [
    {
        path: '/',
        element: <AppLayout />,
        redirect: '/products',
        children: [
            {
                index: true,
                element: <IndexView />,
            },
        ],
    },
];

export default routes;
