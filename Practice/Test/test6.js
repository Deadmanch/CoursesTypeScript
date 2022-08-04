var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Product = /** @class */ (function () {
    function Product(id, title, price) {
        this.id = id;
        this.title = title;
        this.price = price;
    }
    return Product;
}());
var Deliveru = /** @class */ (function () {
    function Deliveru(date) {
        this.date = date;
    }
    return Deliveru;
}());
var HomeDelivery = /** @class */ (function (_super) {
    __extends(HomeDelivery, _super);
    function HomeDelivery(date, address) {
        var _this = _super.call(this, date) || this;
        _this.address = address;
        return _this;
    }
    return HomeDelivery;
}(Deliveru));
var ShopDelivery = /** @class */ (function (_super) {
    __extends(ShopDelivery, _super);
    function ShopDelivery(shopId) {
        var _this = _super.call(this, new Date) || this;
        _this.shopId = shopId;
        return _this;
    }
    return ShopDelivery;
}(Deliveru));
var Card = /** @class */ (function () {
    function Card() {
        this.products = [];
    }
    Card.prototype.addProduct = function (product) {
        this.products.push(product);
    };
    Card.prototype.deleteProduct = function (productId) {
        this.products = this.products.filter(function (p) { return p.id !== productId; });
    };
    Card.prototype.getSum = function () {
        return this.products.map(function (p) { return p.price; })
            .reduce(function (p1, p2) { return p1 + p2; });
    };
    Card.prototype.setDelivery = function (delivey) {
        this.delivey = delivey;
    };
    Card.prototype.checkOut = function () {
        if (this.products.length === 0) {
            throw new Error('Нет ни одного товара в корзине!');
        }
        if (!this.delivey) {
            throw new Error('Не указан способ доставки');
        }
        return this.delivey;
    };
    return Card;
}());
var cart = new Card();
cart.addProduct(new Product(1, 'Вафли', 80));
cart.addProduct(new Product(2, 'Конфеты-Ромашка', 200));
cart.addProduct(new Product(3, 'Шоколад', 100));
cart.deleteProduct(1);
cart.setDelivery(new HomeDelivery(new Date(), 'г.Олешки, ул. Самарца 79'));
console.log(cart.getSum());
console.log(cart.checkOut());
