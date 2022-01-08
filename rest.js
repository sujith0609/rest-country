const body = document.body
const con = document.createElement('div');
con.classList.add("container", "background");
const row = document.createElement('div');
row.classList.add("row", "mt-3");
con.append(row);

const count = "https://restcountries.com/v2/all";

fetch(count)
    .then((res) => {
        if (res.status === 200)
            return res.json();
        else throw new Error("something error occured")

    }).then(function(data) {
        console.log(data);
        for (let i = 0; i < data.length; i++) {
            row.innerHTML += `  
                <div class="col-lg-4 col-md-6 col-sm-12">       
                <div class="card border text-white mb-3" style="max-width: 18rem;">
                <div class="card-header text-center bg-dark h4" id="Name"> ${data[i].name}</div>
                <div class="pt-2 bg">
                <div class="card-body">
                <img src="${data[i].flag}" class="card-img-top flag" id="Flag" alt="Country_Flag">
                <div class="text-center p-3">
                <p id="Capital">Capital: ${data[i].capital}</p>
                <p id="Region">Region: ${data[i].region}</p>
                <p id="Country codes">Country Code: ${data[i].alpha3Code}</p>
                <p id="Latlng">Latng: ${data[i].latlng}</p>
                <div  class="border border-light btn btn-primary action" onclick='getweather("${data[i].capital}")' id="Weather">Click for Weather </div>
            </div>
           </div>
         </div>
       </div>`
            document.body.append(con);
        };
    }).catch(function(err) {
        console.log(err.message);
    });


function getweather(test) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + test + "&appid=20f1d579c1bed99d74eb9e667b6947cf")
        .then(function(val) {
            if (val.status === 200) return val.json();
            else throw new Error("something error occured 2");
        }).then(function(data) {
            console.log(data);
            alert(JSON.stringify(data.weather));

        }).catch(function(err) {
            console.log(err.message);
        });
};


//})();

//debugger

//(async function test() {
// try {
//    const response = await fetch(wapi);
//     if (response.status !== 200) throw new Error("something error occured");
//    const data = await response.json();
//    console.log(data);
//     for (let i = 0; i < data.length; i++) {
//        const row = document.createElement('div');
//        row.classList.add("row", "mt-3");
//        con.append(row);
//       row.innerHTML = `
//          <div class="col-lg-4 col-md-6 col-sm-12">       
//          <div class="card border text-white mb-3" style="max-width: 18rem;">
//         <div class="card-header text-center bg-dark h4" id="Name"> ${data[i].name}</div>
//          <div class="pt-2 bg">
//              <div class="card-body">
//             <img src="${data[i].flag}" class="card-img-top" id="Flag" alt="Country_Flag">
//              <div class="text-center p-3">
//              <p id="Capital">Capital: ${data[i].capital}</p>
//          <p id="Region">Region: ${data[i].region}</p>
//           <p id="Country codes">Country Code: ${data[i].alpha3Code}</p>
//           <p id="Latlng">Latng: ${data[i].latlng} </p>
//           <a href="#" class="border border-light btn btn-primary action" id="Weather">Click for Weather</a>
//          </div>
//        </div>
//       </div>
//     </div>
//    </div>`
//        document.body.append(con)

//     };
// } catch (err) {
//      console.log(err.message)
//  }

//})();

//const wea2 = "https://openweathermap.org/"
//const weather = "36d49822c08048c1f923181b29351107";

// const row = document.createElement('div');
// row.classList.add("row","mt-3");
// con.append(row);
// row.innerHTML = `<p>lorem</p>`
// const loop = document.createElement('div');
// loop.classList.add("weather");    
// row.append(loop);
// console.log(loop);