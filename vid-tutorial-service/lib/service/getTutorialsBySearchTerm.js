
module.exports = (terms, data) => {
    
    if(typeof terms === 'string') {
        if (terms.length == 0) return [];
        terms = terms.split(' ');
    }
    

    terms = terms.filter((term) => { return term.length > 0; }).map(term => term.toLowerCase());

    return data.filter((item, index, arr) => {

        return item.tags.some((tag) => { 
            return terms.includes(tag.toLowerCase())
        }) || 
        terms.includes(item.teacherName.toLowerCase()) ||
        terms.some((term) => { return item.videoTitle.toLowerCase().search(term) >= 0});

    });
    
}
