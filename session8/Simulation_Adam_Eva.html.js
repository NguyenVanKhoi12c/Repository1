let Apple = function (weight) {
    this.weight = weight;

    this.getWeight = function () {
        return this.weight;
    };
    this.setWeight = function (value) {
        this.weight = value;
    };
    this.DecreaseWeight = function () {
        this.weight--;
    }
};


let Human = function (name, gender, weight, isString) {
    this.name = name;
    this.gender = gender;
    this.isString = isString;

    this.getName = function () {
        return this.name;
    };
    this.setName = function (value) {
        this.name = value;
    };
    this.getGender = function () {
        return this.gender;
    };
    this.setGender = function (value) {
        this.gender = value;
    };
    this.getWeight = function () {
        return this.weight;
    };
    this.setWeight = function (value) {
        this.weight = value;
    };
    this.getIsString = function () {
        return this.isString;
    };
    this.setIsString = function (value) {
        this.isString = value;
    };
    this.IncreaseWeight = function () {
        this.weight++;
    }


};

let adam = new Human("adam", "Male", 60, "Tôi là adam");
let eva = new Human("eva", "female", 50, "Tôi là eva");
let apple = new Apple(10);
console.log(adam.getIsString());
console.log(eva.getIsString());
let showApple = document.getElementById('showApple');
let showWeightAdam = document.getElementById('ShowWeightAdam');
let showWeightEva = document.getElementById(`ShowWeightEva`);

display();

function display() {
    showApple.innerHTML = `Số táo còn lại là: ${apple.getWeight()}`;
    showWeightAdam.innerHTML = `Weight Adam: ${adam.getWeight()}`;
    showWeightEva.innerHTML = `Weight eva: ${eva.getWeight()}`;


}


function EatAnApple(name) {
    if (apple.getWeight() > 0) {
        name.IncreaseWeight();
        apple.DecreaseWeight();
    }else if (apple.getWeight() == 0) {
        apple("Bạn đẵ ăn táo cuối cùng");
        apple.setWeight(name.getWeight());
    }else if (apple.getWeight() < 0) {
        alert("đã hết táo để ăn");
    }
    console.log(name.getWeight());
    console.log(apple.getWeight());
    display();
}