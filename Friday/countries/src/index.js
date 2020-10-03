document.getElementById("svg2").addEventListener("click", showInfo);

function showInfo() {
    let country = event.target.id; 
    console.log(country);
    url = "http://restcountries.eu/rest/v1/alpha?codes=" + country;
    fetch(url)
    .then(res => res.json())
    .then(data => {
        let info = "";
                data.forEach(x => {
                    info += "Country name: " + x.name + "<br>" + "Population: " + x.population + "<br>" + "Area: " + x.area + "<br>" + "Borders: " + x.borders;
                });
        document.getElementById("info").innerHTML = JSON.stringify(info);
        console.log(data);
    });
}

