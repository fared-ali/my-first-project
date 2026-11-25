let cart = [];
let total = 0;

function showSection(sectionId) {
    let sections = document.querySelectorAll(".section");
    sections.forEach(section => {
        section.style.display = "none";
    });

    document.getElementById(sectionId).style.display = "flex";
}

function addToCart(name, price) {
    cart.push({name, price});
    total += price;
    displayCart();
}

function displayCart() {
    let cartList = document.getElementById("cart");
    cartList.innerHTML = "";

    cart.forEach((item, index) => {
        let li = document.createElement("li");
        li.innerHTML = `
            ${item.name} - ${item.price}$ 
            <button onclick="removeItem(${index})">حذف</button>
        `;
        cartList.appendChild(li);
    });

    document.getElementById("total").textContent = "المجموع: " + total + "$";
}

function removeItem(index) {
    total -= cart[index].price;
    cart.splice(index, 1);
    displayCart();
}
