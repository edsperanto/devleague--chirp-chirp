function chirp(n){
	return (n > 1) ? ("chirp " + chirp(--n)) : "chirp";
}

$(document).ready(function(){
  $("#result").html(chirp(3));
});
