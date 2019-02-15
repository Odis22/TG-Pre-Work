const xhr = new XMLHttpRequest();//the XMLHttpRequest objects is used in javascript to create and send request
const url = 'https://api-to-call.com/endpoint';
const data = JSON.stringify({id: '200'});

xhr.responseType = 'json';
xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE) {
return xhr.response;
}
};

xhr.open('POST', url);
xhr.send(data);
//JSON.stringify() converts a value to a JSON string so we can send the data to a server