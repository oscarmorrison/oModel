const uniqueArray = function(array) {
    return array.filter(function (item, pos) {
        return array.indexOf(item) == pos;
    })
}

module.exports = {
    uniqueArray: uniqueArray
}
