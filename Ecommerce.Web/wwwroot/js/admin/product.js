function AllProducts() {
    $.ajax({
        type: "GET",
        url: `${BASE_API_URI}/api/Product/all-products`,
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: function (response) {
            if (response.success) {
                var html = '<table class="table table-hover">' +
                           '<tr><th style="width:50px">Id</th><th>Rol Adı</th><th></th></tr>';

                var arr = response.data;

                for (var i = 0; i < arr.length; i++) {
                    html += '<tr>';
                    html += `<td>${arr[i].id}</td><td>${arr[i].title}</td><td>${arr[i].product_description}</td><td>${arr[i].price}</td><td>${arr[i].quantity}</td><td>${arr[i].category_id}</td><td> ${arr[i].id}</td > <td>${arr[i].img}</td>`;
                    html += `<td><i class="bi bi-trash text-danger" onclick=AddProduct(${arr[i].id}) ></i > <i class="bi bi-pencil-square" onclick=UpdateProduct(${arr[i]})></i></td>`;
                    html += '</tr>';
                }
                    html += '</table>';

                $("#allProducts").html(html);
            } else {
                alert(response.message);
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(XMLHttpRequest + "-" + textStatus + "-" + errorThrown);
        }
    });
}

function AddProduct() {

}

function DeleteProduct() {

}

function UpdateProduct() {

}

$(document).ready(function () {
    AllProducts();
})