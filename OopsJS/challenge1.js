// challenge 1

const Vechicle = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

const car1 = new Vechicle('BMW', 120);
const car2 = new Vechicle('Mercedes', 95);

Vechicle.prototype.accelerate = function () {
  this.speed += this.speed * (10 / 100);
  console.log(this.speed);
};

car1.accelerate();
car2.accelerate();

Vechicle.prototype.brake = function () {
  this.speed -= this.speed * (10 / 100);
  console.log(this.speed);
};

car1.brake();
car2.brake();
  
