const products = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : [];
function vnd(price) {
    return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
}
function showProduct(products) {
    let productHTML = '';
    console.log(products.length);
    if(products.length == 0)
        document.getElementById('home-title').style.display = 'none';
    else {
        document.getElementById('home-title').style.display = 'flex';
        products.forEach((product) => {
            productHTML += `<div class="col-product">
            <article class="card-product" >
                <div class="card-header">
                    <a href="#" class="card-image-link" onclick="detailProduct(${product.id})">
                    <img class="card-image" src="${product.img}" alt="${product.title}">
                    </a>
                </div>
                <div class="food-info">
                    <div class="card-content">
                        <div class="card-title">
                            <a href="#" class="card-title-link" onclick="detailProduct(${product.id})">${product.title}</a>
                        </div>
                    </div>
                    <div class="card-footer">
                        <div class="product-price">
                            <span class="current-price">${vnd(product.price)}</span>
                        </div>
                    <div class="product-buy">
                        <button onclick="detailProduct(${product.id})" class="card-button order-item"><i class="fa-regular fa-cart-shopping-fast"></i> Đặt món</button>
                    </div> 
                </div>
                </div>
            </article>
        </div>`;
        });
        document.getElementById('home-products').innerHTML = productHTML;
    }
}

showProduct(products);

let thisPage = 1;
let limit = 12;
let list = document.querySelectorAll(".card-product");
function loadItem(){
    let beginGet = limit * (thisPage -1);
    let endGet = limit *thisPage -1;
    list.forEach((product, key)=>{
        if(key >= beginGet && key <=endGet)
            product.style.display = 'block';
        else
            product.style.display = 'none';
    });
    listPage();
}
loadItem();
function listPage(){
    let count = Math.ceil(list.length / limit);
    document.querySelector(".page-nav-list").innerHTML= '';
    
    for(let i=1 ;i<= count; i++){
        let newPage = document.createElement('li');
        newPage.innerText = i;
        if(i == thisPage){
            newPage.classList.add('active');
        }    
        newPage.setAttribute('onclick', "changePage("+ i +")");
        document.querySelector(".page-nav-list").appendChild(newPage);
    }

}
function changePage(i){
    thisPage = i;
    loadItem();
}