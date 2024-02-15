const http = require('http');
const url = require('url');


const cities = [
    { name: 'New York', lat: 40.7128, lng: -74.0060 },
    { name: 'London', lat: 51.5074, lng: -0.1278 },
    { name: 'Paris', lat: 48.8566, lng: 2.3522 },
    { name: 'Tokyo', lat: 35.6895, lng: 139.6917 },
    { name: 'Sydney', lat: -33.8651, lng: 151.2099 },
    { name: 'Rome', lat: 41.9028, lng: 12.4964 },
    { name: 'Cairo', lat: 30.0444, lng: 31.2357 },
    { name: 'Rio de Janeiro', lat: -22.9068, lng: -43.1729 },
    { name: 'Dubai', lat: 25.2048, lng: 55.2708 },
    { name: 'Rabat', lat: 34.0209, lng: -6.8416 }
  ];

function fet(query){
    
  return new Promise((resolve , reject) => {
     const citie = cities.find( c => c.name === query);
     if(!citie){
      reject(new Error("City not found"));
     }
     else{
     fetch(`https://api.open-meteo.com/v1/forecast?latitude=${citie.lat}&longitude=${citie.lng}&current_weather=true`)
     .then(response => response.json())
     .then(data => {
      const Temperature = data.current_weather.temperature + data.current_weather_units.temperature ;
     resolve( `Temperature of ${citie.name} is: ${Temperature}`) 
     })
     .catch(err => {
      console.log("Error fetching data :" , err);
      reject(err);
     });   
     }
  })   
    
}


const server =  http.createServer((req,res) =>{
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const query = parsedUrl.query;

    if(path === '/weather'){
       if(query){
        fet(query.q.toString())
        .then(result => {
          res.writeHead(200, { 'Content-Type': 'text/plain' });
          res.end(result);
        })  
        .catch(err => {
          res.writeHead(500, {'Content-Type': 'text/plain'});
          res.end(err.message);
        });
        }
    }
    else if (path === '/users') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('I am a list of users :p' ,);

  } else if (path === '/products') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('I am a list of products :p');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page not found :p');
  }
});

// to prevent server from stoping whenever we return an error
server.on('error', err => {
  console.error('server error :', err);
})

server.listen(8000, () =>{
    console.log("Listening to port : ",8000);
   
})



