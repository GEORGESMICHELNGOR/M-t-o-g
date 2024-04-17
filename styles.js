document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'YOUR_API_KEY'; // Remplacez par votre clé API
    const apiUrl = 'https://a  pi.openweathermap.org/energy/1.0/solar/data?lat=60.45&lon=-38.67&date=2023-03-30&tz=+03:00&appid={API key}'

    fetch('https://api.openweathermap.org/energy/1.0/solar/data?lat=60.45&lon=-38.67&date=2023-03-30&tz=+03:00&appid={API key}')
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Erreur de récupération des données météorologiques');
            }
        })
        .then(data => {
            console.log( <weatherdata>
                <location>
                <name>Zocca</name>
                <type/>
                <country>France</country>
                <timezone>7200</timezone>
                <location altitude="0" latitude="44.34" longitude="10.99" geobase="geonames" geobaseid="3163858"/>
                </location>
                
                <sun rise="2022-08-30T04:36:27" set="2022-08-30T17:57:28"/>
                <forecast>
                <time from="2022-08-30T15:00:00" to="2022-08-30T16:00:00">
                <symbol number="500" name="light rain" var="10d"/>
                
                <temperature unit="kelvin" value="296.34" min="296.34" max="298.24"/>
                <feels_like value="296.02" unit="kelvin"/>
                <pressure unit="hPa" value="1015"/>
                <humidity value="50" unit="%"/>
                <clouds value="overcast clouds" all="97" unit="%"/>
                <visibility value="10000"/>
                </time>
               ...
                </forecast>
                </weatherdata>
                                 
                              );

            const DAKAR = data.name;
            const temperature = data.main.temp;
            const description = data.weather[0].description;

            document.querySelector('.location h2').textContent = city;
            document.getElementById('temperature').textContent = temperature;
            document.getElementById('description').textContent = description;
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des données:', error.message);
        });
});
function performSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.trim();

    // Exemple : effectuez ici une action avec le terme de recherche (ex. requête Ajax)

    if (searchTerm !== '') {
        const searchResultsContainer = document.getElementById('searchResults');
        searchResultsContainer.innerHTML = `<p>Résultats de recherche pour : <strong>${searchTerm}</strong></p>`;
    } else {
        alert('Veuillez entrer un terme de recherche.');
    }
}
