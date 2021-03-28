function showPlus(a,b,c,d) {
alert(a*b*c+d)	
}
function fulltime() {
	var time = new Date();
	document.clock.full.value = time.toLocaleString();
	setTimeout('fulltime()',1000 ) 
}
function msbutton() {
	var messageInput = document.getElementById('message').value;
	alert(messageInput)
}
function search(eee) {
	if(event.key === 'Enter') {
		alert(eee.value) 
			if (eee.value === 'down'){ 
				alert ('Сам такой!')
				document.getElementById('content').style.backgroundImage = "url('img/back2.jpg')"
			}
	}
}