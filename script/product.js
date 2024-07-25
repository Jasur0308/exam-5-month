const id = new URLSearchParams(location.search).get("product");
const $productImage = document.querySelector("#productImage");

const renderProduct = (product) => {
    $productImage.src = product.image[0]
}

function loadData() {
    axios(`https://blogpost-server-production-d92d.up.railway.app/api/v1/blogs/${id}`)
    .then(response => renderProduct(response.data))
}

console.log();