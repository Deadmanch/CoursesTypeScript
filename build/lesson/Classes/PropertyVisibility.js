"use strict";
class Vehicle {
    set model(m) {
        this._model = m;
    }
    get model() {
        this.run;
        return this._model;
    }
    addDamage(damage) {
        this.damages.push(damage);
    }
}
class EuroTrack extends Vehicle {
    setRun(km) {
        this.run = km / 0.62;
        //!  this.damage = error
    }
}
