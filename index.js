//Created by Mahenoor
alert('This is the updated version of code - shopping cart by @Mahenoor');
var f = [];
var food = ["French Fries 🍟", "Pizza🍕", "Burger🍔", "Noodles🍝", "Cake🍰", "Donut🍩", "Ice-cream🍦"];
var c = [];
var cloth = ["Shirt👔", "Pant👖", "T-shirt👕", "Jeans👖", "Gown💃", "Dress👗", "Sweater🧥"];
var a = [];
var acc = ["Bags🎒", "Purse👜", "Sunglasses🕶", "Spectacles👓", "Umbrella🌂☂", "Shoes👠", "Hat👒"];
var m = [];
var make = ["Perfume", "Sunscream", "Compact", "Kajal", "Eye-liner", "Nail-paint💅", "Lipstick💄"];
var value;

function createGuid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

function func() {
    value = item.value
    if (item.value == "food") {
        document.write("Food items:<br />");
        for (var i = 0; i < 7; i++) {
            f[i] = document.createElement("INPUT");
            f[i].setAttribute("type", "checkbox");
            document.body.appendChild(f[i]);
            document.write(food[i]);
            document.write("<br />");
        }
    } else if (item.value == "clothes") {
        document.write("Clothes:<br />");
        for (var i = 0; i < 7; i++) {
            c[i] = document.createElement("INPUT");
            c[i].setAttribute("type", "checkbox");
            document.body.appendChild(c[i]);
            document.write(cloth[i]);
            document.write("<br />");
        }
    } else if (item.value == "accessories") {
        document.write("Accessories:<br />");
        for (var i = 0; i < 7; i++) {
            a[i] = document.createElement("INPUT");
            a[i].setAttribute("type", "checkbox");
            document.body.appendChild(a[i]);
            document.write(acc[i]);
            document.write("<br />");
        }
    } else if (item.value == "makeup") {
        document.write("Makeup:<br />")
        for (var i = 0; i < 7; i++) {
            m[i] = document.createElement("INPUT");
            m[i].setAttribute("type", "checkbox");
            document.body.appendChild(m[i]);
            document.write(make[i]);
            document.write("<br />");
        }
    }
    document.write("<br />")
    var b = document.createElement("INPUT");
    b.setAttribute("type", "button");
    b.setAttribute("value", "Add");
    document.body.appendChild(b);
    b.addEventListener("click", function () {
        addtolist(value);
    });
    /*var b=document.createElement("INPUT");
    b.setAttribute("type", "button");
    b.setAttribute("value", "Back");
    b.setAttribute ("name","back")
    document.body.appendChild(b);
    b.addEventListener ("click", function() {
      
    });*/
    var b = document.createElement("INPUT");
    b.setAttribute("type", "button");
    b.setAttribute("value", "My Cart 🛒");
    b.setAttribute("name", "cart")
    document.body.appendChild(b);
    // checking everytime if cart is updated or not
    var new_l = 0;
    b.addEventListener("click", function () {
        if (new_l < l) {
            cart();
            new_l = l;
        }
        console.log("clicked");
    });
}
/*function back()
{
    
}*/
var list = [];
var j;
var l;

function addtolist(value) {

    j = 0;
    if (value == "food") {
        for (var i = 0; i < 7; i++) {
            if (f[i].checked) {
                lisItem = {};
                lisItem.id = createGuid();
                lisItem.name = food[i];
                lisItem.type = value;
                lisItem.count = 1;
                list.push(lisItem);
                j++;
            }
        }
    }
    if (value == "clothes") {
        for (var i = 0; i < 7; i++) {
            if (c[i].checked) {
                lisItem = {};
                lisItem.id = createGuid();
                lisItem.name = food[i];
                lisItem.type = value;
                lisItem.count = 1;
                list.push(lisItem);
                j++;
            }
        }
    }

    if (value == "accessories") {
        for (var i = 0; i < 7; i++) {
            if (a[i].checked) {
                lisItem = {};
                lisItem.id = createGuid();
                lisItem.name = food[i];
                lisItem.type = value;
                lisItem.count = 1;
                list.push(lisItem);
                j++;
            }
        }
    }
    if (value == "makeup") {
        for (var i = 0; i < 7; i++) {
            if (m[i].checked) {
                lisItem = {};
                lisItem.id = createGuid();
                lisItem.name = food[i];
                lisItem.type = value;
                lisItem.count = 1;
                list.push(lisItem);
                j++;
            }
        }
    }
    l = j;

}

function cart() {
    // delete old cart and add new updated cart only
    if (document.getElementById('cart')) {
        document.getElementById('cart').remove();
    }
    var cartDiv = document.createElement("div");
    cartDiv.id = 'cart';
    cartDiv.className = 'cart';
    document.body.appendChild(cartDiv);
    var cartHeading = document.createElement("h2");
    cartHeading.innerHTML = 'Cart Items:';
    cartDiv.appendChild(cartHeading);
    var cartItemsList = document.createElement("ul");
    for (j = 0; j < l; j++) {
        var li = document.createElement("li");
        li.setAttribute('id', list[j]);
        li.appendChild(document.createTextNode(list[j].name));
        cartItemsList.appendChild(li);
    }
    cartDiv.appendChild(cartItemsList);
}