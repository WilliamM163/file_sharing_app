exports.login = (req, res) => {
    console.log(req.body);
    res.send({title: 'Success'});
}

exports.register = (req, res) => {
    console.log(req.body);
    res.send({title: 'Success'});
}