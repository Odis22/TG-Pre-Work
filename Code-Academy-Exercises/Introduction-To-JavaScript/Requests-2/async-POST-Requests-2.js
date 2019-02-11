/*
this was similar to the GET Requests except that fetch had two arguements.

*/
const getData = async () => {
  try {
    const response = await fetch('https://api-to-call.com/endpoint', {
  method: 'POST',
  headers: {
  'Content-type': 'application/json',
  'apikey': apiKey
},
  body: JSON.stringify({id: 200})
})
    if(response.ok){
      const jsonResponse = await response.json();
	  return jsonResponse; 
  }
    throw new Error('Request failed!');
  } catch (error) {
    console.log(error);
  }
};
