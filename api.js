module.exports = (req, res) => {
    const reply = {
        message: 'This is an example of a Node.js API.'
    };

    res.end(JSON.stringify(reply));
};
