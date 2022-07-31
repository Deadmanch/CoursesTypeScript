class Product {

	constructor(
		public id: number,
		public title: string,
		public price: number
	) {}
}

class Deliveru {
	constructor(
		public date: Date
	) {}
}

class HomeDelivery extends Deliveru {
	constructor(date: Date, public address: string) {
		super(date);
	}
}

class ShopDelivery extends Deliveru {
	constructor(public shopId: number) {
		super(new Date);
	}
}

type DeliveyOptions = HomeDelivery |ShopDelivery

class Card {
	private products: Product[] = [];
	private delivey: HomeDelivery | ShopDelivery;

	addProduct(product: Product): void {
		this.products.push(product);
	}

	deleteProduct(productId: number): void {
		this.products = this.products.filter((p: Product ) => p.id !== productId);
	}

	getSum(): number {
		return this.products.map((p: Product) => p.price)
		.reduce((p1: number, p2:number) => p1 + p2);
	}

	setDelivery(delivey: DeliveyOptions):void {
		this.delivey = delivey;
	}

	checkOut() {
		if(this.products.length === 0) {
			throw new Error('Нет ни одного товара в корзине!')
		}
		if(!this.delivey) {
			throw new Error('Не указан способ доставки')
		}
		return 	{success: true};
	}
}