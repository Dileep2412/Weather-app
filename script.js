async function getWeather(){
    const city = document.getElementById("cityInput").value
    const apiKey ="b10396a421b6184f50e6c63fc1d9d704"
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try{
        const response = await fetch(url);

         if(!response.ok){
             throw new Error("City not found");
        }
    
        const data= await response.json();
        console.log(data);

        
        // const currentDate = new Date();
        // const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        // const formattedDate = currentDate.toLocaleDateString('en-IN', options); // Indian style 

        // document.getElementById("date").textContent = formattedDate;


        const iconCode =data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
 
        const countryCode = data.sys.country.toLowerCase();
        const flagUrl = `https://flagcdn.com/48x36/${countryCode}.png`;

        const result=`
        <h2>${data.name} <img src="${flagUrl}" alt="flag" style="width: 30px; vertical-align: middle;" /></h2>
        <img src="${iconUrl}" alt="weather icon" />
         <p><i class="fas fa-temperature-half"></i> Temperature: ${data.main.temp} °C</p>
         <p><i class="fas fa-cloud-sun"></i> Weather: ${data.weather[0].description}</p>
         <p><i class="fas fa-wind"></i> Wind Speed :${data.wind.speed}</p>
          `;

        document.getElementById("weatherResult").innerHTML =result;

     }catch(error){
          document.getElementById("weatherResult").innerHTML=`
         <p style="color : red;">${error.message}</p>`;
         
   }
 }