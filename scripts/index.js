var hotel = {
    rooms: [
        {
            name: "Double Bed",
            price: "$75.00",
            available: 40
        },
        {
            name: "King Bed",
            price: "$120.00",
            available: 20
        },
        {
            name: "Luxery Suite",
            price: "$250.00",
            available: 5
        },
        {
            name: "Penthouse",
            price: "$5000.00",
            available: 2
        }
    ],
    name: "CareerDevs Innt"
}

function displayDetails(room){
    console.log("hello");
    console.log(room);
    document.getElementById("price").innerHTML = hotel.rooms[room].price;
    document.getElementById("available").innerHTML = hotel.rooms[room].available;
}
//display rooms as radio options 
//console.log(document.getElementById("label").nodeName);
for(var i =0; i<hotel.rooms.length; i++){
    console.log("start");
    var radioBtn = document.createElement("INPUT");
    var radioLbl = document.createElement("LABEL");
    radioBtn.setAttribute("type", "radio");
    radioBtn.setAttribute("name", "rooms");
    radioBtn.setAttribute("value", i);
    radioBtn.setAttribute("id","room" + i);
    //radioBtn.setAttribute("onclick", `displayDetails(${i})`);
    radioBtn.setAttribute("onclick", "displayDetails(" + i + ")");
    //radioBtn.onclick = displayDetails(i);
    radioLbl.innerHTML = hotel.rooms[i].name;
    console.log("stop");
    
    document.getElementById("radialSection").appendChild(radioBtn);
    document.getElementById("radialSection").appendChild(radioLbl);
}

document.getElementById("reservationForm").onsubmit = function(event){
    event.preventDefault();
    
    // check if terms are agreed to 
    if(!document.getElementById("confirmation").checked){
        alert("Please agree to conditions");
        return;
    }
    
    var radios = document.getElementsByName("rooms");
    var roomSelection = "";
    for(var i =0; i < radios.length; i++){
        //console.log(radios[i]);
        if(radios[i].checked){
            roomSelection = radios[i].value;
            break;
        }
    }
    if(!roomSelection){
        alert("No Selection made");
        return;
    }
    alert("Thank you for reserving the room" + hotel.rooms[parseInt(roomSelection)].name + ".");
}



// on form submission confirm radio was selected 
// and checkbox checked 
