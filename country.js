class Country {
    constructor(name, lang, greeting, colors) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
    }

    displayColors(){
        document.getElementById("CountryName").innerText = this.name;
    document.getElementById("OfficialLanguage").innerText = this.lang;
    document.getElementById("HelloWorld").innerText = this.greeting;
    document.getElementById("Color1").style.backgroundColor = this.colors[0];
    document.getElementById("Color2").style.backgroundColor = this.colors[1];
    document.getElementById("Color3").style.backgroundColor = this.colors[2];
    console.log(this.colors)
    }
}
let usa = new Country("USA", "Murican", "Why Hello there world! Have some McDonalds", ["red", "white", "blue"]);
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"]);
let algeria = new Country("Algeria", "Arabic and Berber", "Sup", ["blue", "yellow", "red"])
let canada = new Country("Canada", "English and French", "Soory", ["red", "white", "white"])
let germany = new Country("Germany", "German", "Weinersnitchel", ["black", "red", "gold"])


function SwitchCountry() {
    let countryinput = document.querySelector("#Countrylist");
    let input = countryinput.value;
    let country;

    if (input === "USA") {
        //set country to usa 
        country = usa;
        country.displayColors();
    }
    else if (input === "Mexico") {
        country = mexico;
        country.displayColors();
    }
    else if (input === "Algeria") {
        country = algeria;
        country.displayColors();
    }
    else if (input === "Canada") {
        country = canada;
        country.displayColors();
    }
    else if (input === "Germany") {
        country = germany;
        country.displayColors();
    }

    console.log(input)

}


