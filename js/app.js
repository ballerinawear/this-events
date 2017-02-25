//Secret Menu Challenge
/*Add event listeners to each restaurant name that will show and hide (toggle) the secret menu item for that particular restaurant.*/

var shop = document.getElementsByClassName("name");

for(var i=0; i<shop.length; i++){
	shop[i].addEventListener("click", showMenu);
}

function showMenu(){
	var secret = 
		this.querySelectorAll(".menu")[0];
		if(secret.style.display === "none"){
			secret.style.display = "block";
		}else{
			secret.style.display = "none";
		}
}