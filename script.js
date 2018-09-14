
// Uzmi nasumičan - random broj od 1 do 10
var num = Math.ceil(Math.random(1) * 10);  
 
 var broj = prompt("Unesi broj");
 
 if (broj == num){
	 
	 alert("Bravo pogodio si broj!");
	 
 }
 
 else{
	 
	alert ("Netočno, traženi broj je: " + num); 
 }