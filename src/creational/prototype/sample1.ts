/**
 *   Implementation of Prototype design pattern in typescript.
 *
 *   Prototype is a creational design pattern that lets you copy existing objects
 *   without making your code dependent on their classes.
 */


abstract class Human {
    name: string;
    address: string;
    job: string;

    protected constructor(_human: Human) {
        this.name = _human?.name;
        this.job = _human?.job;
        this.address = _human?.address;
    }

    abstract clone(): Human
}

class Doctor extends Human {
    direction: string;
    constructor(_doctor?: Doctor) {
        super(_doctor);
        this.direction = 'Healthcare';
    }

    clone(): Human {
        return new Doctor(this);
    }
}

const doctor = new Doctor();
doctor.name = 'Ali';
doctor.job = 'Health specialist';
doctor.address = 'Samarkand';

const newDoctor = doctor.clone();
newDoctor.name = 'Vali';