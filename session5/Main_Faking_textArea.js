let arrayString = ["H", "a", "y", " ", "L", "à", " ", "M", "ì", "n", "h", " ", "C", "ứ", " ", "B", "ấ", "t", " ", "C", "h", "ấ", " ", "H", "ế", "t", "!", "!"];
let n = "";

function faking() {

    let stringInput = document.getElementById('inputText').value;
    let stringLength = stringInput.length;
    if (stringLength > 0) {
        for (let i = 0; i <= stringLength; i++) {
            n = n + arrayString[i];
            if (i === 24) {
                document.getElementById('inputText').value = "";
                n = "";
            }
        }
    }
    document.getElementById('inputText').value = n;
    n = "";

}