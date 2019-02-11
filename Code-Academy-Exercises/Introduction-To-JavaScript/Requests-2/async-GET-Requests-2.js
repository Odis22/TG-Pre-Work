const getData = async () => {
  try {
    const response = await fetch('https://api-to-call.com/endpoint')
    if(response.ok){
      const jsonResponse = await response.json();
	  return jsonResponse; 
  }
    throw new Error('Request failed!');
  } catch (error) {
    console.log(error);
  }
};

/* the try block will send a request and handle the reponse. the catch statement is responsible for taking care 
of an error if its thrown
*/