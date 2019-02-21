function dogsAge(age) {
    return age * 7;
}

var myDogsAge = dogsAge(4);

function rectangleArea(width, height) {
    var area = width * height;
    return area;
}

var rectArea = rectangleArea(3,4);

function addUp(numArray) {
    var total = 0;
    for (var i=0; i<numArray.length; i++){
        total += numArray[i];
    }
    return total;
}

var theTotal = addUp([1,3,5,9]);

function getAvatar(points) {
    var avatar;
    if (points < 100){
        avatar = "Mouse";
    } else if(points > 100 && points < 1000){
        avatar = "Cat"
    } else {
        avatar = "Ape"
    }
    return avatar
}

var myAvatar = getAvatar(335);