function acreageSquare() {
    let leght = document.getElementById("lenght").value;
    let width = document.getElementById("width").value;
    let equal = leght * width;
    document.getElementById('equal').value = equal;
}

function STamgiac() {
    let edge_1 = document.getElementById('Edge_1').value;
    let edge_2 = document.getElementById('Edge_2').value;
    let dTamgiac = (1 / 2) * edge_1 * edge_2;
    document.getElementById('sTamgiac').value = dTamgiac;
}

function giaiPhuongTrinhBac1() {
    let numbers_a = document.getElementById('numbers_a').value;
    let numbers_b = document.getElementById('numbers_b').value;
    let numbers_c = document.getElementById('numbers_c').value;
    let x = (numbers_c - numbers_b) / numbers_a;
    document.getElementById('result_x').value = x;
}

function giaiPhuongTrinhBac2() {
    let numbers_a2 = document.getElementById('numbers_a2').value;
    let numbers_b2 = document.getElementById('numbers_b2').value;
    let numbers_c2 = document.getElementById('numbers_c2').value;
    let delta = (numbers_b2 * numbers_b2) - (4 * numbers_a2 * numbers_c2);
    let x2, y2;
    if (delta > 0) {
        x2 = ((-numbers_b2) + Math.sqrt(delta)) / numbers_a2;
        y2 = ((-numbers_b2) - Math.sqrt(delta)) / numbers_a2;
        document.getElementById('result_x2').value = x2;
        document.getElementById('result_y2').value = y2;
    } else if (delta == 0) {
        x2 = y2 = -(numbers_b2 / (2 * numbers_a2));
        document.getElementById('result_x2').value = x2;
        document.getElementById('result_y2').value = y2;
    } else {
        document.getElementById('result_x2').value = "Phương trình vô nghiệm";
    }
}

function checkOldHuman() {
    let old = document.getElementById('oldHuman').value;
    if (0 < old && old < 120) {
        document.getElementById('oldHuman').value = "đây là tuổi 1 người bình thường";
    } else {
        document.getElementById('oldHuman').value = "Bạn đã nhập nhầm số tuổi";
    }
}

function checkEdge() {
    let edge_a = document.getElementById('Edge_a').value;
    let edge_b = document.getElementById('Edge_b').value;
    let edge_c = document.getElementById('Edge_c').value;
    edge_a = Number(edge_a);
    edge_b = Number(edge_b);
    edge_c = Number(edge_c);
    if ((edge_a + edge_b + edge_c) > 0 && (edge_a + edge_b) > edge_c && (edge_c + edge_b) > edge_a && (edge_a + edge_c) > edge_b) {
        document.getElementById('CheckEdge').value = "đây là ba cạnh của hình tam giác";
    } else {
        document.getElementById('CheckEdge').value = "fail";
    }
}

function bill() {
    let powerNumber = document.getElementById('powerNumber').value;
    powerNumber = Number(powerNumber);
    let bill;
    let dongia_1 = 1500;
    let dongia_2 = 2500;
    if (powerNumber > 500) {
        bill = powerNumber * dongia_1;
    } else {
        bill = powerNumber * dongia_2;
    }
    document.getElementById('powerNumber').value = bill;
}

function BillTax() {
    let salary = document.getElementById('billTax').value;
    salary = Number(salary);
    let billSalary;
    let amout = document.getElementById('option_1').value;
    switch (amout) {
        case '0':
            billSalary = salary - ((salary * 5) / 100);
            break;
        case '1':
            billSalary = salary - ((salary * 10) / 100);
            break;
        case '2':
            billSalary = salary - ((salary * 20) / 100);
            break;
    }
    document.getElementById('billTax').value = billSalary;
}