"use strict";
class Product {
    constructor(id, title, price) {
        this.id = id;
        this.title = title;
        this.price = price;
    }
}
class Deliveru {
    constructor(date) {
        this.date = date;
    }
}
class HomeDelivery extends Deliveru {
    constructor(date, address) {
        super(date);
        this.address = address;
    }
}
class ShopDelivery extends Deliveru {
    constructor(shopId) {
        super(new Date);
        this.shopId = shopId;
    }
}
class Card {
    constructor() {
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    deleteProduct(productId) {
        this.products = this.products.filter((p) => p.id !== productId);
    }
    getSum() {
        return this.products.map((p) => p.price)
            .reduce((p1, p2) => p1 + p2);
    }
    setDelivery(delivey) {
        this.delivey = delivey;
    }
    checkOut() {
        if (this.products.length === 0) {
            throw new Error('Нет ни одного товара в корзине!');
        }
        if (!this.delivey) {
            throw new Error('Не указан способ доставки');
        }
        return this.delivey;
    }
}
const cart = new Card();
cart.addProduct(new Product(1, 'Вафли', 80));
cart.addProduct(new Product(2, 'Конфеты-Ромашка', 200));
cart.addProduct(new Product(3, 'Шоколад', 100));
cart.deleteProduct(1);
cart.setDelivery(new HomeDelivery(new Date(), 'г.Олешки, ул. Самарца 79'));
console.log(cart.getSum());
console.log(cart.checkOut());
