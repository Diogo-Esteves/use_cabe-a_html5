
var fido = {
    name:"Fido",
    wight: 40,
    breed: "Mixed",
    loves: ["walks", "fetching balls"]
};

// acessing properties
if (fido.wight > 25){
    alert("WOOF")
} else {
    alert("yip")
}

// Acessing property using string notation
var breed = fido["breed"];
if (breed == "mixed"){
    alert("Best in show");
}

// Changing property values
fido.wight = 27;
fido.breed = "Chawalla/ Great Dane mix";
fido.loves.push("chewing bones");

// Enumerating all properties of a object
var prop;
for (prop in fido){
    alert("Fido has a "+ prop+" property");
    if (prop == "name"){
        alert("This is"+fido[prop]);
    }
}

//
var likes = fido.loves;
var likesString = "Fido likes";
for (var i = 0; i < likes.length; i++){
    likesString += " "+likes[i];
}
alert(likesString)

//
// Sending object to a function
function bark(dog) {
    if (dog.weight > 25){
        alert("WOOF");
    } else {
        alert("yip");
    }
}

bark(fido);

// Add and deleting new properties
fido.age = 5;
delete fido.age;