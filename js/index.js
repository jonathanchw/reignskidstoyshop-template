/*Add products to products section*/
const productsSection = document.getElementById("productData");
productsSection.innerHTML += productData
  .map((product) => {
    return `
    <div class="product-section product-section6 col-lg-3 col-12"
    data-product="${product.id}"
    data-prod-id="${product.id}"
    data-product-category="Garden"
    data-product-title="${product.name}"
    data-product-alias=""
    data-product-description="${product.description}"
    data-product-price="${product.price}"
    data-product-shipping="${product.shipping}"
    data-product-billmodel="1"
    data-product-MultiPrice="yes"
    data-product-id="${product.id}"
    data-product-size-option="no"
    data-product-image-link="./config/data/img/${product.image}">
    <div class="product-block">
        <div class="pdtImageWrapper position-relative">
            <img class="prod_img6" src="./images/products/${product.image}">
            <div class="pdt-overlay"></div>
        </div>
        <div class="product-details">
            <!-- <p class="prod_category6">Garden</p> -->
            <h5 class="product-title product-name6">${product.name}</h5>
            <div class="pdt-price-wrapper">
                <p class="prod_price6">
                    <span> $${product.price} </span>
                </p>
            </div>
            <!-- <p class="prod_category8">
                <span>
                    One Time Sale </span>
            </p> -->
        </div>
        <div class="bottom-btn">
            <!-- <a class="cart-text" href="#">Add To Cart</a> -->
            <a href="${product.href}" class="btn_shop btn_shop6 cart-text" id="btn_shop">Select
                Product</a>
            <i class="fal fa-plus"></i>
        </div>
    </div>
    </div>`;
  })
  .join("");


