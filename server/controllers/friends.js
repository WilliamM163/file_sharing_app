exports.getFriends = (req, res) => {
    res.send({
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