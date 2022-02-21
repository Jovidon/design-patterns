/**
 *   Implementation of Builder design pattern in typescript.
 *
 *   Builder is a creational design pattern that lets you construct
 *   complex objects step by step.
 */

enum Gender {
   MALE = 'M',
   FEMALE = 'F'
}

class User {
    public id: string;
    public name: string;
    public gender: Gender;
    public address: string;
}

class UserBuilder {
    protected _id: string;
    protected _name: string;
    protected _gender: Gender;
    protected _address: string;

    buildId(id: string): UserBuilder {
        this._id = id;
        return this;
    }

    buildName(name: string): UserBuilder {
        this._name = name;
        return this;
    }

    buildGender(gender: Gender): UserBuilder {
        this._gender = gender;
        return this;
    }

    buildAddress(address: string): UserBuilder {
        this._address = address;
        return this;
    }

    build(): User {
        return {
            id: this._id,
            name: this._name,
            gender: this._gender,
            address: this._address
        }
    }
}

const user = new UserBuilder()
            .buildName('Ali')
            .buildAddress('Samarkand')
            .buildGender(Gender.MALE)
            .buildId('1')
            .build();



