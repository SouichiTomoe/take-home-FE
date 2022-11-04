const surveyApi = (req: any, res: any) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(
        JSON.stringify({
            id: 1,
            user: {
                userId: 1,
                name: 'Jhon Doe',
            },
            menuOptions: [
                {
                    label: 'Home',
                    path: '/home',
                },
                {
                    label: 'Report',
                    path: '/report',
                },
            ],
            status: [
                {
                    location: 'A',
                    users: [
                        { name: 'Angela', status: 'online' },
                        { name: 'Catherine', status: 'offline' },
                        { name: 'Brittany', status: 'online' },
                        { name: 'Daisy', status: 'online' },
                    ],
                },
                {
                    location: 'B',
                    users: [
                        { name: 'Angela', status: 'online' },
                        { name: 'Catherine', status: 'offline' },
                        { name: 'Brittany', status: 'online' },
                        { name: 'Daisy', status: 'online' },
                    ],
                },
                {
                    location: 'C',
                    users: [
                        { name: 'Angela', status: 'online' },
                        { name: 'Catherine', status: 'offline' },
                        { name: 'Brittany', status: 'online' },
                        { name: 'Daisy', status: 'online' },
                    ],
                },
                {
                    location: 'D',
                    users: [
                        { name: 'Angela', status: 'online' },
                        { name: 'Catherine', status: 'offline' },
                        { name: 'Brittany', status: 'online' },
                        { name: 'Daisy', status: 'online' },
                    ],
                },
                {
                    location: 'E',
                    users: [
                        { name: 'Angela', status: 'online' },
                        { name: 'Catherine', status: 'offline' },
                        { name: 'Brittany', status: 'online' },
                        { name: 'Daisy', status: 'online' },
                    ],
                },
            ],
            totals: [
                {
                    title: 'Total Deliveries',
                    options: [
                        { label: 'Last weeek', value: 1 },
                        { label: 'Last month', value: 2 },
                    ],
                    text: '38',
                    percentage: '25',
                    background: 'primary',
                },
                {
                    title: 'Total Time in Pod',
                    options: [
                        { label: 'Last weeek', value: 1 },
                        { label: 'Last month', value: 2 },
                    ],
                    text: '12 hours 28 mi',
                    percentage: '48',
                    background: 'secondary',
                },
                {
                    title: 'Total Users',
                    options: [
                        { label: 'Last weeek', value: 1 },
                        { label: 'Last month', value: 2 },
                    ],
                    text: '1,552',
                    percentage: '17',
                    background: 'ternary',
                },
            ],
        })
    );
};

export default surveyApi;
