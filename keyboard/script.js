var output_text = "";
var caps = true;

function button_clicked(character) {
    if (caps) {
        output_text = output_text + character;
    } else {
        var lower_character = character.toLowerCase();
        output_text = output_text + lower_character;
    }
    
    var output = document.getElementById("keys_output");
    output.textContent = output_text;
}

function caps_clicked(){
    var caps_btn = document.getElementById("caps_btn");
    if (caps) {
        caps_btn.textContent = "Caps Lock OFF";
        caps = false;
    } else {
        caps_btn.textContent = "Caps Lock ON";
        caps = true;
    }
}
function text_clear(){
    output_text = " ";
    var output = document.getElementById("keys_output");
    output.textContent = output_text;
    }