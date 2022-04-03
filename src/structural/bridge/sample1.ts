/**
 *  Implementation of Bridge design pattern in typescript
 */

interface MediaDevice {
    isEnabled(): boolean;
    enable(): void;
    disable(): void
    getVolume(): number;
    setVolume(_v: number): void;
    getChannel(): number;
    setChannel(_c: number): void;
}

class RemoteControl {
    protected device: MediaDevice;
    constructor(_device: MediaDevice) {
        this.device = _device;
    }

    public togglePower() {
        if (this.device.isEnabled()) {
            this.device.disable();
        } else {
            console.log('Powered!!!')
            this.device.enable();
        }
    }

    public volumeUp() {
        this.device.setVolume(this.device.getVolume() + 10);
    }

    public volumeDown() {
        this.device.setVolume(this.device.getVolume() - 10);
    }

    public channelUp() {
        this.device.setChannel(this.device.getChannel() + 1);
    }

    public channelDown() {
        this.device.setChannel(this.device.getChannel() - 1);
    }

}

class TV implements MediaDevice {
    private _volume: number = 10;
    private _channel: number = 5;
    private _enabled: boolean = false;

    enable() {
        this._enabled = true;
    }

    disable() {
        this._enabled = false;
    }

    getChannel(): number {
        return this._channel
    }

    getVolume(): number {
        return this._volume;
    }

    isEnabled(): boolean {
        return this._enabled;
    }

    setChannel(_c: number): void {
        this._channel = _c;
    }

    setVolume(_v: number): void {
        this._volume = _v;
    }

}

class Radio implements MediaDevice {
    private _volume: number = 102.5;
    private _channel: number = 8;
    private _enabled: boolean = false;

    enable() {
        this._enabled = true;
    }

    disable() {
        this._enabled = false;
    }

    getChannel(): number {
        return this._channel
    }

    getVolume(): number {
        return this._volume;
    }

    isEnabled(): boolean {
        return this._enabled;
    }

    setChannel(_c: number): void {
        this._channel = _c;
    }

    setVolume(_v: number): void {
        this._volume = _v;
    }

}

const tvRemoteControl = new RemoteControl(new TV());

tvRemoteControl.togglePower();
tvRemoteControl.volumeUp();
tvRemoteControl.volumeDown();

const radioRemoteControl = new RemoteControl(new Radio());

radioRemoteControl.togglePower();
radioRemoteControl.volumeUp();
radioRemoteControl.togglePower();


