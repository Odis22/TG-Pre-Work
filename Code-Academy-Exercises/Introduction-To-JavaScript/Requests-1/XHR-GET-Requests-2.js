const xhr = new XMLHttpRequest();//the XMLHttpRequest objects is used in javascript to create and send request
const url = 'https://api-to-call.com/endpoint';
xhr.responseType = 'json';
xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE) {
return xhr.response;
}
};

xhr.open('GET', url);
xhr.send();
