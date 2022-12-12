import AppLayout from './AppLayout';
import IndexView from './views/index';
import ReadView from './views/read';

const routes = [
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                index: true,
                element: <IndexView />,
            },
            {
                path: 'products/:productId',
                element: <ReadView />,
            },
        ],
    },
];

export default routes;
