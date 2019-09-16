function printFinonaci() {
    let numbers_1 = 1;
    let numbers_2 = 0;
    let result = 1;
    for (let i = 1; i <= 20; i++) {
        result = numbers_1 + numbers_2;
        numbers_1 = numbers_2;
        numbers_2 = result;
        document.write(result + "  ");
    }
}

function tinhGiaiThua() {
    let int = prompt("Nhập vào số nguyên dương cần tính");
    let ketqua = 1;
    for (let i = 1; i <= int; i++) {
        ketqua = ketqua * i;
    }
    document.write(int + "! = " + ketqua);
}

function PrintTriangular() {
    let n = 5;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= i; j++) {
            document.write("* ");
        }
        document.write("<br>");
    }
    document.write("<br>");

    for (let i = 0; i < n; i++) {
        for (let j = n; j > i; j--) {
            document.write("* ");
        }
        document.write("<br>");
    }
    document.write("<br>");
}


function tamGiacNguoc() {
    for (let i = 0; i < 5; i++) {
        for (let j = 4; j > i; j--) {


        }
    }
}