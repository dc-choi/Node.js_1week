class Car {
	constructor(modelName, modelYear, type, price) {
		this.modelName = modelName;
		this.modelYear = modelYear;
		this.type = type;
		this.price = price;
	}

	// getter
	getModelName() { return this.modelName; }
	getModelYear() { return this.modelYear; }
	getType() { return this.type; }
	getPrice() { return this.price; }

	// setter
	setModelName(modelName) { this.modelName = modelName; }
	setModelYear(modelYear) { this.modelYear = modelYear; }
	setType(type) { this.type = type; }
	setPrice(price) { this.price = price; }
}

class ElectricCar extends Car {
	constructor(modelName, modelYear, price, chargeTime) {
		super(modelName, modelYear, 'Electric', price);
		this.chargeTime = chargeTime;
	}

	// getter
	getChargeTime() { return this.chargeTime }

	// setter
	setChargeTime(chargeTime) { this.chargeTime = chargeTime }
}

const car = new Car('아이오닉', '2021', 'Electric', '4000');
console.log(car.getModelName());
console.log(car.getModelYear());
console.log(car.getType());
console.log(car.getPrice());

const electricCar = new ElectricCar('아이오닉', '2021', '4000', '40');
console.log(electricCar.getModelName());
console.log(electricCar.getModelYear());
console.log(electricCar.getType());
console.log(electricCar.getPrice());
console.log(electricCar.getChargeTime());