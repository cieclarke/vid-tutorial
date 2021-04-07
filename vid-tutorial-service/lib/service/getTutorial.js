
module.exports = (id, data) => {

    return data.find((item, index, arr) => {
        return item.id == id;
    });

}