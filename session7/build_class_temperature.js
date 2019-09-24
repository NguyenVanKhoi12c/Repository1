let temperature = function (celsius) {
    this.celsius = celsius;

    this.getCelsius = function () {
        return this.celsius;
    };
    this.getConvertToF = function () {
        return this.celsius * 2 + 50;
    };
    this.getConvertToK = function () {
        return this.celsius + 275 + 5;
    };
};
let temp = new temperature(25);
let F = temp.getConvertToF();
let K = temp.getConvertToK();
alert(`${temp.getCelsius()} độ C = ${F} độ F`);
alert(`${temp.getCelsius()} độ K = ${K} độ K`);