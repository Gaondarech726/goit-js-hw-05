class Car {
    static getSpecs(car) {
      console.log(`maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`);
    }
  
    constructor(settings) {
      this.speed = 0;
      this.price = settings.price || 0;
      this.maxSpeed = settings.maxSpeed || 0;
      this.isOn = false;
      this.distance = 0;
    }
  
    get price() {
      return this._price;
    }
  
    set price(value) {
      this._price = value;
    }
  
    turnOn() {
      this.isOn = true;
    }
  
    turnOff() {
      this.isOn = false;
      this.speed = 0;
    }
  
    accelerate(value) {
      if (this.isOn) {
        this.speed = Math.min(this.maxSpeed, this.speed + value);
      }
    }
  
    decelerate(value) {
      if (this.speed >= value) {
        this.speed -= value;
      } else {
        this.speed = 0;
      }
    }
  
    drive(hours) {
      if (this.isOn) {
        this.distance += this.speed * hours;
      }
    }
  }
  
  const mustang = new Car({ maxSpeed: 200, price: 2000 });
  
  mustang.turnOn();
  mustang.accelerate(50);
  mustang.drive(2);
  
  Car.getSpecs(mustang);
  
  mustang.decelerate(20);
  mustang.drive(1);
  mustang.turnOff();
  
  Car.getSpecs(mustang);
  
  console.log(mustang.price);
  mustang.price = 4000;
  console.log(mustang.price);