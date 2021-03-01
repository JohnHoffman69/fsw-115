var luke = {
    "name": "Luke Skywalker",
    "height": "172",
    "mass": "77",
    "hair_color": "blond",
    "skin_color": "fair",
    "eye_color": "blue",
    "birth_year": "19BBY",
    "gender": "male"
}


const values = Object.values(luke);
const entries = Object.entries(luke);
const starWars = document.getElementById('starWars');

starWars.innerHTML = '<ul>' + entries.map(function(item) {  
    return `<li> ${item[0]}${item[1]} </li>`;         
}).join('') + '</ul>'