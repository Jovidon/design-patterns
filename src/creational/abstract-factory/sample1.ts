/**
 *   Implementation of abstract-factory design pattern in typescript.
 *
 *   Abstract Factory is a creational design pattern that lets you
 *   produce families of related objects without specifying their
 *   concrete classes.
 */

interface IButton {}
interface ICheckbox {}

class WinButton implements IButton {}
class MacButton implements IButton {}
class UnixButton implements IButton {}

class WinCheckBox implements ICheckbox {}
class MacCheckbox implements ICheckbox {}
class UnixCheckbox implements ICheckbox {}

abstract class AbstractFactory {
    abstract createButton(): IButton;
    abstract createCheckbox(): ICheckbox;
}

class WinUIFactory extends AbstractFactory {
    createButton(): IButton {
        return new WinButton();
    }

    createCheckbox(): ICheckbox {
        return new WinCheckBox();
    }
}

class MacUIFactory extends AbstractFactory {
    createButton(): IButton {
        return new MacButton();
    }

    createCheckbox(): ICheckbox {
        return new MacCheckbox();
    }
}

class UnixUIFactory extends AbstractFactory {
    createButton(): IButton {
        return new UnixButton();
    }

    createCheckbox(): ICheckbox {
        return new UnixCheckbox();
    }
}

class UI {
    button: IButton;
    checkbox: ICheckbox;
    constructor(factory: AbstractFactory) {
        this.button = factory.createButton();
        this.checkbox = factory.createCheckbox();
    }
}

enum OS {
    WINDOWS = "Windows OS",
    MAC = "Mac OS",
    UNIX = "Unix OS",
}

function getUI(currentOS): UI {
    let ui: UI;
    switch (currentOS) {
        case OS.WINDOWS:
            ui = new UI(new WinUIFactory());
            break;
        case OS.MAC:
            ui = new UI(new MacUIFactory());
            break;
        case OS.UNIX:
            ui = new UI(new UnixUIFactory());
            break;
        default:
            throw new Error("Unknown OS!");
    }
    return ui;
}

const ui = getUI(OS.UNIX);