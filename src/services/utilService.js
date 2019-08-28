function saveToStorage(key, value) {
    var str = JSON.stringify(value);
    localStorage.setItem(key, str);
}
function loadFromStorage(key) {
    // debugger
    var str = localStorage.getItem(key)
    return JSON.parse(str)
}

var imges = {
    "Attack of the Clones": "https://vignette.wikia.nocookie.net/starwars/images/9/98/Aotctpb.jpg/revision/latest?cb=20110206033257",
    "A New Hope": "https://starwarsblog.starwars.com/wp-content/uploads/2014/05/a-new-hope.jpg",
    "The Phantom Menace": "https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
    "Revenge of the Sith": "https://images-na.ssl-images-amazon.com/images/I/81cUuRhZw%2BL._SL1500_.jpg",
    "Return of the Jedi": "https://images-na.ssl-images-amazon.com/images/I/81g8vEs4ixL.jpg",
    "The Empire Strikes Back":"https://images-na.ssl-images-amazon.com/images/I/91eOgodm4nL.jpg",
    "The Force Awakens": "https://images-na.ssl-images-amazon.com/images/I/91xZGOnCFSL._SL1500_.jpg"
}

function getImg(title){
return imges[title]
}

export default {
    saveToStorage,
    loadFromStorage,
    getImg

}