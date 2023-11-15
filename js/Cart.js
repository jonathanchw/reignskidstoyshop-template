var cartData = [];
var subTotal = 0;

function updateCartData() {
  if ("cart-data" in localStorage) {
    let existingItems = JSON.parse(localStorage.getItem("cart-data"));
    if (!Array.isArray(existingItems)) {
      cartData = [existingItems];
    } else {
      cartData = existingItems;
    }
  }
}
function updateSubTotal() {
  subTotal = 0;
  cartData.forEach((prd) => {
    subTotal += prd.price * prd.quantity;
  });
  subTotal = Math.round(subTotal * 100) / 100;
  localStorage.setItem("cart-subtotal", subTotal);
  let totalLabel = document.getElementById("cart-subtotal");
  totalLabel.innerText = `$${subTotal}`;
  document.getElementById("cart-total").innerText = `$${subTotal}`;
  let cartDetailsSubTotalLabel = document.getElementById(
    "cartDetails-subtotal"
  );
  cartDetailsSubTotalLabel
    ? (cartDetailsSubTotalLabel.innerText = `$${subTotal}`)
    : null;
  document.getElementById("cartDetails-total")
    ? (document.getElementById("cartDetails-total").innerText = `$${subTotal}`)
    : null;
}

function addToCart(id) {
  updateCartData();

  let product = productData.find((obj) => obj.id === id);
  if (!product) {
    alert("Product not found");
    return;
  }

  let itemExists = cartData.find((prd) => prd.id === id);
  if (!itemExists) {
    product.quantity = 1;
    cartData.push(product);
    localStorage.setItem("cart-data", JSON.stringify(cartData));
  } else {
    console.log("Already added");
  }
}

function removeFromCart(id) {
  let itemIndex = cartData.findIndex((prd) => prd.id === id);
  if (itemIndex === -1) {
    return;
  } else {
    cartData.splice(itemIndex, 1);
    localStorage.setItem("cart-data", JSON.stringify(cartData));
    let cartTable = document.getElementById("cart-table");
    cartTable.querySelector(`#product-id-${id}`).remove();

    updateSubTotal();
  }
}

function handleCartItems() {
  let cartTable = document.getElementById("cart-table");
  cartTable.innerHTML += cartData
    .map(({ id, name, image, price, shipping }) => {
      return `
      <tr id="product-id-${id}" class="data_row product">
      <td class="product-removal">
        <a onclick="removeFromCart(${id})">
        <span class="material-icons close_button close-button" id="close-${id}">close</span>
         </a>
      </td>
      <td>
       <img src="../images/products/${image}"
            class="img-fluid cart-pdt-image" 
            id="image${id}"
            alt="${name}"
          />
      </td>
      <td colspan="3" id="singlepdt"><p>${name}</p></td>
      <td id="price-${id}" class="priceCol">$${price}</td>
      <td id="shipping-${id}" class="priceCol">$${shipping}</td>
      <td id="total-${id} class="priceCol">$${(price + shipping).toFixed(
        2
      )}</td>
      </tr>
      `;
    })
    .join("");
}

function handleQuantityInput(e, id) {
  if (e.value === "" || e.value < 1) {
    e.value = 1;
  }
  let productIndex = cartData.findIndex((prd) => prd.id === id);
  cartData[productIndex].quantity = e.value;
  localStorage.setItem("cart-data", JSON.stringify(cartData));

  updateSubTotal();
}

function removeAllItems() {
  cartData.forEach((prd) => {
    let product_El = document.getElementById(`product-id-${prd.id}`);
    product_El.remove();
  });
  cartData = [];
  localStorage.removeItem("cart-data");
  updateSubTotal();
}

updateCartData();
updateSubTotal();
handleCartItems();