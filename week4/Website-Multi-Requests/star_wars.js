var SW = document.getElementById("StarWarsButton");
SW.addEventListener("click", star_wars);

function star_wars() {
  axios.get("https://swapi.dev/api/people/", ).then((response) => {
    for (let i = 0; i < response.data.results.length; i++) {
      const name = document.createElement("h2");
      const height = document.createElement("li");
      const birthdate = document.createElement("li");
      const hair = document.createElement("li");
      const gender = document.createElement("li");
      const skincolor = document.createElement("li");

      name.textContent = response.data.results[i].name;
      height.textContent = "Height: " +response.data.results[i].height;
      birthdate.textContent = "Birth Year: " + response.data.results[i].birth_year;
      hair.textContent = "Hair Color: " + response.data.results[i].hair_color;
      gender.textContent = "Gender: " + response.data.results[i].gender;
      skincolor.textContent = "Skin Color: " + response.data.results[i].skin_color;

      document.getElementById("starwars").appendChild(name);
      document.getElementById("starwars").appendChild(height);
      document.getElementById("starwars").appendChild(birthdate);
      document.getElementById("starwars").appendChild(hair);
      document.getElementById("starwars").appendChild(gender);
      document.getElementById("starwars").appendChild(skincolor);

      name.style.textDecorationLine = "underline"  
    }
})
.catch(error => console.log(error))
}
