function ex_1() {
    let inputNumber = Number(prompt("Nhập vào số cần tính: "));
    let square = inputNumber * inputNumber;
    alert("Bình phương của " + inputNumber + " là: " + square);
}


function acreage() {
    let radius = Number(prompt("Nhập vào bán kính: "));
    let perimeter = Math.PI * radius * 2;
    let acreage = Math.PI * radius * radius;
    alert("Chu vi hình tròn là: " + perimeter);
    alert("Diện tích hình tròn là: " + acreage);
}

function factorial() {
    let inputNumber = Number(prompt("Nhập vào số cần tính: "));
    let factorial = 1;
    for (let i = inputNumber; i > 0; i--) {
        factorial = factorial * i;
    }
    alert("giai thừa của " + inputNumber + " là: " + factorial);
}

function isNumbers() {
    let inputNumbers = Number(prompt("Nhập vào ký tự: "));
    for (let i = 0; i < 9; i++) {
        if (inputNumbers == i) {
            alert("ký tự bạn vừa nhập là số");
            break;
        }
    }
}

function findMinNumber() {
    let inputNumber_1 = Number(prompt("nhập vào số thứ nhất: "));
    let inputNumber_2 = Number(prompt("nhập vào số thứ hai: "));
    let inputNumber_3 = Number(prompt("nhập vào số thứ ba: "));
    let arr = [];
    arr.push(inputNumber_1, inputNumber_2, inputNumber_3);
    let Min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (Min >= arr[i]) {
            Min = arr[i];
        }
    }
    alert("Số nhỏ nhất là: " + Min);
}

function swap() {
    let inputNumber_1 = Number(prompt("nhập vào số thứ nhất: "));
    let inputNumber_2 = Number(prompt("nhập vào số thứ hai: "));
    let temp;
    temp = inputNumber_1;
    inputNumber_1 = inputNumber_2;
    inputNumber_2 = temp;
    alert("sô 1 là: " + inputNumber_1);
    alert("số 2 là: " + inputNumber_2);
}