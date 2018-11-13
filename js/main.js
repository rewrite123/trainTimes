function addLocation(){
	var ol = document.getElementById("addTo");
	
	var li = document.createElement("li");
	var locationP = document.createElement("p");
	var locationInput = document.createElement("input");
	var travelTime = document.createElement("p");
	var timeInput = document.createElement("input");
	
	locationP.textContent = "Location: ";
	locationInput.type = "text";
	locationInput.
}

var Location = function(id){
	
	this.locationIndicator = document.createElement("p");
	this.locationIndicator.textContent = "Location: ";
	this.location = document.createElement("input");
	this.location.type = "text";
	this.location.id = "location" + id;
	this.location.value = "Location Name";
	this.travelTimeIndicator = document.createElement("p");
	this.travelTimeIndicator.textContent = "Travel Time";
	this.travelTime = document.createElement("input");
	this.travelTime.type = "number";
	this.travelTime.id = "time" + id;
	this.travelTime.min = 1;
	this.travelTime.
}