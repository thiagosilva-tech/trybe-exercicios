
function techList(array, name) {
    if (array.length === 0) {
        return 'Vazio!';
    } else {
        const techList = [];
        array.sort();
        for (let index = 0; index < array.length; index += 1) {
            techList.push({
                tech: array[index],
                name: name
            })        
        }
        return techList;  
    }    
}

module.exports = techList;