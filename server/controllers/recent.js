exports.recentFiles = (res, req) => {
    req.send({
        files: [
            {
                id: 1,
                name: 'Photo.jpg',
                type: 'PHOTO',
                from: 'Rebekah'
            },
            {
                id: 2,
                name: 'Video.mp4',
                type: 'VIDEO',
                from: 'Lucy'
            },
            {
                id: 3,
                name: 'Webpage.html',
                type: 'HTML',
                from: 'William'
            },
            {
                id: 4,
                name: 'Song.mp3',
                type: 'AUDIO',
                from: 'Rebekah'
            }
        ]
    });
}