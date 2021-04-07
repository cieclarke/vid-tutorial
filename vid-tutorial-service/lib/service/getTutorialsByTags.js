
module.exports = (tags, data) => {

    if(typeof tags === 'string') {
        if (tags.length == 0) return [];
        tags = tags.split(' ');
    }
    
    tags = tags.filter((tag) => { return tag.length > 0; }).map(tag => tag.toLowerCase());

    return data.filter((item, index, arr) => {

        return item.tags.some((tag) => { return tags.includes(tag.toLowerCase()) });

    });

}
