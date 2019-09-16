function ex_1() {
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j <= 5; j++) {

        }
    }
}

function ex_2() {

    let array = [];
    for (let i = 0; i < 10; i++) {
        let element = prompt("Nhập vào 10 phần tử của mảng: ");
        array.push(element);
    }
    let arrayReverse = array.reverse();
    arrayReverse = arrayReverse.join("");
    document.write(arrayReverse);
}

function ex_3() {
    let array = [];
    for (let i = 0; i < 10; i++) {
        let element = prompt("Nhập vào 10 phần tử của mảng: ");
        array.push(element);
    }
    let str = array.join("");
    let elementCount = str.length;
    document.write("Số ký tự trong chuỗi là: " + elementCount);
}

function ex_4() {

    let str = prompt("Nhập vào chuỗi ký tự: ");
    let array = str.split(" ");
    document.write("Số từ trong chuỗi là: " + array.length);
}

function ex_5() {
    let str_1 = prompt("Nhập vào chuỗi ký tự thứ nhất: ");
    let str_2 = prompt("Nhập vào chuỗi ký tự thứ hai: ");
    let array_1 = str_1.split("");
    let array_2 = str_2.split("");
    let newArray = [];
    for (let i = 0; i < array_1.length; i++) {
        if (array_1[i] === array_2[i]) {
            newArray.push(array_1[i]);
        }
    }
    let str_3 = newArray.join("");
    if (str_3 === str_2) {
        document.write("2 chuỗi giống nhau!")
    }
}

function ex_6() {
    let str = prompt("Nhập vào chuỗi ký tự: ");
    let array = str.split("");
    for (let i = 0; i < array.length; i++) {
        if (array[i] === "-") {
            array[i] = "_";
        }
    }
    let strConvert = array.join("")
    document.write("Dãy sau chuyển đổi là: "+strConvert);
}