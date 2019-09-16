function showMessage() {
    alert("xin chao!");
}

function free(x) {

    for (let i = 0; i < 10; i++) {
        x++;
        alert(x);
    }
}

function compare() {
    let number_1 = Number(prompt("Nhập vào số thứ nhất: "));
    let number_2 = Number(prompt("Nhập vào số thứ hai: "));
    if (number_1 > number_2) {
        alert("hihi");
    } else {
        let total = number_1 + number_2;
        alert("tổng hai số là: " + total);
    }
}

function addNumbers(result) {

    let firstNum = 4;
    let secondNum = 8;
    result = firstNum + secondNum;
    alert(result);
    return result;
}

function findStart() {
    let inputString = prompt("Nhập vào tên ngôi sao: ");
    let arr_1 = ["Polaris", "Aldebaran", "Deneb", "Vega", "Altair", "Dubhe", "Regulus"];
    let arr_2 = ["Ursa Minor", "Taurus", "Cygnus", "Lyra", "Aquila", "Ursa Majo", "Leo"];

    for (let i = 0; i < arr_1.length; i++) {
        if (arr_1[i] === inputString) {
            alert("ngôi sao: " + arr_1[i] + " thuộc chòm sao: " + arr_2[i]);
            break;
        }
    }
}
