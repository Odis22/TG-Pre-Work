// Information to reach API
const apiKey = '33786050424045699e114b9b975a6093';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
const shortenUrl = () => {
  const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten});

  fetch(url, {
  method: 'POST',
  headers: {
  'Content-type': 'application/json',
  'apikey': apiKey
},
  body: data
}).then(response => {
  if(response.ok){
	  return response.json();  
  }
	throw new Error('Request failed!');
}, networkError => {
  console.log(networkError.message);
  
}).then(jsonResponse => {
  console.log(jsonResponse);
})
  
}

// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild)
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);
 /* this callback saves us from when the network
   returns an error
   */