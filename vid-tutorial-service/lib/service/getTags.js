
module.exports = (data) => {

    return data.flatMap((item) => item.tags).filter((tag, index, arr) => { return arr.indexOf(tag) == index; });

}