const rp = require('request-promise');

module.exports = (uri) => {
    return rp({ uri, json: true}).then((data) => {
        return data;
    })
};