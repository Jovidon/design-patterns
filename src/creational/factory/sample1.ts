interface ITransport {
    deliver(): void;
}

class Truck implements ITransport {
    deliver() {
        console.log('Delivering by road');
    }
}

class Ship implements ITransport {
    deliver() {
        console.log('Delivering by sea');
    }
}

abstract class Logistics {
    private _transport: ITransport;
    protected abstract createTransport(): ITransport;
    planDelivery() {
        this._transport = this.createTransport();
        this._transport.deliver();
    }
}

class RoadLogistics extends Logistics {
    protected createTransport(): ITransport {
        return new Truck();
    }
}

class SeaLogistics extends Logistics {
   protected createTransport(): ITransport {
        return new Ship();
    }
}

const seaLogistics = new SeaLogistics();
seaLogistics.planDelivery();

const roadLogistics = new RoadLogistics();
roadLogistics.planDelivery();
