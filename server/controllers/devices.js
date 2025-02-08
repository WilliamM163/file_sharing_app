exports.getDevices = (req, res) => {
    res.send({
        devices: [
            {
                id: 1,
                name: 'Macbook Air',
                type: 'LAPTOP'
            },
            {
                id: 2,
                name: 'Samsung S23',
                type: 'PHONE'
            },
            {
                id: 3,
                name: 'Samsung Tab S9 FE',
                type: 'TABLET'
            },
            {
                id: 4,
                name: 'Smartwatch',
                type: 'WATCH'
            }
        ],
        friends: [
            {
                id: 1,
                name: 'Lucy',
                profile_pic: null
            },
            {
                id: 2,
                name: 'Dave',
                profile_pic: null
            },
            {
                id: 3,
                name: 'Emily',
                profile_pic: null
            }
        ]
    });
}