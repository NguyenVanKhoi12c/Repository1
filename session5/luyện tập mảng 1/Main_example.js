function ex1() {
    let array = [1, 3, 4, 22, 54, 23, 2, 77, 9, 10];
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 10) {
            document.write(array[i] + "-");
        }
    }
}



function ex2() {
    let array = [1, 3, 4, 22, 54, 23, 2, 77, 9, 10];
    let maxNumber = array[0];
    let length;

    for (let i = 0; i < array.length; i++) {
        if (maxNumber < array[i]) {
            maxNumber = array[i];
            length = i;
        }
    }
    document.write("max number: " + maxNumber + " " + "length: " + length);
}




function ex3() {
    let array = [1, 3, 4, 22, 54, 23, 2, 77, 9, 10];
    let maxNumber = array[0];
    let trungbinh = 0;
    for (let i = 0; i < array.length; i++) {
        if (maxNumber < array[i]) {
            maxNumber = array[i];
        }
        trungbinh = trungbinh + array[i]
    }
    trungbinh = trungbinh / array.length;
    document.write("số lớn nhất là: " + maxNumber + " " + "trung bình của mảng là: " + trungbinh);
}




function ex4() {
    let array = [];
    for (let i = 0; i < 10; i++) {
        let n = Number(prompt("Nhập vào 10 phần tử của mảng: "));
        array.push(n);
    }
    array = array.reverse();
    document.write("array = [" + array + "]");
}




function ex5() {
    let array = [1, 3, 4, -22, 54, -23, 2, 77, -9, -10];
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            count++;
        }
    }
    document.write("có " + count + " số nguyên âm trong dãy");
}




function ex6() {
    let array = [];
    for (let i = 0; i < 10; i++) {
        let n = Number(prompt("Nhập vào 10 phần tử của mảng: "));
        array.push(n);
    }
    let vNumber = Number(prompt("Nhập vào số nguyên v: "));
    for (let i = 0; i < array.length; i++) {
        if (array.includes(vNumber)) {
            document.write(vNumber + " is in array");
            break;
        } else {
            document.write(vNumber + " is not in array");
            break;
        }
    }
}




function ex7() {
    let array = [];
    for (let i = 0; i < 10; i++) {
        let n = Number(prompt("Nhập vào 10 phần tử của mảng: "));
        array.push(n);
    }
    let vNumber = Number(prompt("Nhập vào số nguyên v: "));
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] === vNumber) {
            let temp = array[i];
            array[i] = array[i + 1];
            array[i + 1] = temp;
        }
    }
    array.pop();
    array.push("0");
    document.write("array = [" + array + "]");
}




function ex8() {
    let array = [];
    for (let i = 0; i < 5; i++) {
        let n = Number(prompt("Nhập vào 10 phần tử của mảng: "));
        array.push(n);
    }
    let n = array.length;
    for (let i = 0; i < n; i++) {
        for (let j = n - 1; j >= 1; j--) {
            if (array[j] > [j - 1]) {
                let temp = array[j - 1];
                array[j - 1] = array[j];
                array[j] = temp;
            }
        }
    }
    document.write("array = [" + array + "]");
}




function ex9() {
    let array_1 = [];
    for (let i = 0; i < 5; i++) {
        let n = Number(prompt("Nhập vào 10 phần tử của mảng thứ nhất: "));
        array_1.push(n);
    }
    let array_2 = [];
    for (let i = 0; i < 5; i++) {
        let n = Number(prompt("Nhập vào 10 phần tử của mảng thứ hai: "));
        array_2.push(n);
    }

    let array_total = array_1.concat(array_2);
    document.write("array = [" + array_total + "]");}