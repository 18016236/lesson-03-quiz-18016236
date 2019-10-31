class Vehicle {
    constructor(model,wheels){
        this.model = model;
        this.wheels = wheels;
    }


    makeSound(noise){
        console.log("Vroom Vroom")
    }

}
class Car extends Vehicle{
    constructor(model,wheels=4){
        super(model )
        this.wheels=wheels;

    }
}