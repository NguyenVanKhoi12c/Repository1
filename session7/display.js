let product = new product("tai nghe", "dây sạc", "ốp lưng", "kính cường lực", "vân vân và mây mây",);


console.log(product);
let manage = new Manage(product);
console.log(manage);

let displayListProduct = function (manager) {
    let html = "";
    let array = manager.product.listProduct;
    for (let i = 0; i < array.length; i++) {
        html += '<li id="' + 1 + '">';
        html += array[i];
        html += '</li>';
        html += '<span id = "' + i + '">';
        html += "<button id='"+ i +"' onclick='manage.buttonRename(this)'>Edit</button>";
        html += '</span id = "' + i + '">';
        html += "<button id='"+ i +"' onclick='manage.buttonDelete(this)'>DELETE</button>";
        html += '</span>';

    }
    return html;
};

function displayProduct() {
       document.getElementById("listProduct").innerHTML = displayListProduct(manage);
    }

    displayListProduct();
    window.addEventListener("click", function () {
        displayListProduct();
    });
