function showNumbers() {
    for (let i = 1; i < 100; i++) {
    }
    alert("Done");
}


function convertTemplate() {
    let inputTemplate = prompt("nhập vào nhiệt độ");
    while (inputTemplate > 100) {
        alert("Hãy giảm nhiệt độ");
        break;
    }
}



function showFibonacci() {
    let numbers_1 = 1;
    let numbers_2 = 0;
    let result = 1;
    for (let i = 1; i <= 20; i++) {
        result = numbers_1 + numbers_2;
        numbers_1 = numbers_2;
        numbers_2 = result;
        document.write(result + " ");
    }
}



function findNumber() {
    let numbers_1 = 1;
    let numbers_2 = 0;
    let result = 1;
    for (let i = 1; i <= 20; i++){
        result = numbers_1 + numbers_2;
        numbers_1 = numbers_2;
        numbers_2 = result;
        if ((result % 5) === 0)
            document.write(result);
        break;
    }
}



function findTotal() {
    let countNumbers = 0;
    let dem = 1;
    let  total = 0;

    while (countNumbers <10) {
        dem++;
        if (dem % 7 == 0) {
            total += dem;
            countNumbers++;
        }
    }
    document.write(total);
}



function GameEZ() {
    let inputValue_1 = Numberprompt("Nhập giá trị muốn đoán khoảng từ");
    let inputValue_2 = numberprompt("Nhập giá trị muốn đoán khoảng đến");
    let inputValue_3;
    let n = Math.floor(math.random() * (inputValue_2 - inputValue_1) + inputValue_1);
    for (let i = 0; i < 3; i++) {
        inputValue_3 = +prompt("nhập giá trị muốn đoán");
        if (inputValue_3 ==n) {
            alert("Done");
        }else if (inputValue_3 > n) {
            alert("Số này lớn hơn giá trị")
        }else {
            alert("số này nhỏ hơn giá trị");
        }
    }
}