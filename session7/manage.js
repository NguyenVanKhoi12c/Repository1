let Manage = function (product,id) {
    this.product = product;

    this.getProduct = function () {
        this.product = product;
    };

    this.getProduct = function () {
        return this.product.getListProduct();
    };

    this.buttonDelete = function (location) {
        this.product.deleteProduct(location.id)
    };


    this.buttonAdd = function (product) {
        this.product.reNameProduct(input.name(), location.id)
    };


};