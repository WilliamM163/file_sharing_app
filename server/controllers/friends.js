exports.getFriends = (req, res) => {
    res.send({
        friends: [
            {
                email: 'lucy@gmail.com',
                name: 'Lucy',
                profile_pic: null
            },
            {
                email: 'dave@icloud.com',
                name: 'Dave',
                profile_pic: null
            },
            {
                email: 'emily@gmail.com',
                name: 'Emily',
                profile_pic: null
            }
        ]
    });
}