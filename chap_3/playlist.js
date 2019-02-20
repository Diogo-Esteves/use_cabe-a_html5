window.onload = init;

function init() {
    var button = document.getElementById("addButton");
    button.onclick = handleButtonClick;
    loadPlaylist();
}



function handleButtonClick() {
    // alert("Button was clicked");
    var textInput = document.getElementById("songTextInput");
    var songName = textInput.value;
    if (songName == ""){
        alert("Add a song please!");
    } else {
        var li = document.createElement("li");
        li.innerHTML = songName;
        var ul = document.getElementById("playlist");
        ul.appendChild(li);
        save(songName);
    }

}