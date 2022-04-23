
function findMatching(arr,str) {
    return arr.filter(element => element.toLowerCase() === str.toLowerCase())
}

function fuzzyMatch(arr,str) {
    return arr.filter(element => element.indexOf(str) === 0)
}

function matchName(arr, str) {
    return arr.filter(element => element.name === str)

}