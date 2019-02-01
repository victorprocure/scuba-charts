import { UnitConversions } from "./Conversions";
import { DistanceUnit } from "./DistanceUnit";
import { PressureUnit } from "./PressureUnit";
import { TemperatureUnit } from "./TemperatureUnit";

import * as chai from "chai";
import * as mocha from "mocha";

const expect = chai.expect;
describe("Unit Converter", () => {

    it("Should be able to convert temperatures correctly", () => {
        expect(UnitConversions.celsius(15, TemperatureUnit.Kelvin)).to.be.closeTo(288.15, 0.1);
        expect(UnitConversions.fahrenheit(55, TemperatureUnit.Celsius)).to.be.closeTo(12.8, 0.1);
        expect(UnitConversions.kelvin(288.15, TemperatureUnit.Celsius)).to.be.closeTo(15, 0.1);
    });

    it("Should be able to convert distance correctly", () => {
        expect(UnitConversions.feet(20, DistanceUnit.Meters)).to.be.closeTo(6, 0.1);
        expect(UnitConversions.meters(1.8, DistanceUnit.Feet)).to.be.closeTo(6, 0.1);
    });

    it("Should be able to convert pressure units correctly", () => {
        expect(UnitConversions.pascal(760, PressureUnit.atm)).to.be.closeTo(0.07, 0.1);
        expect(UnitConversions.psi(103, PressureUnit.Pascal)).to.be.closeTo(710160, 0.1);
        expect(UnitConversions.atm(1, PressureUnit.psi)).to.be.closeTo(14.7, 0.1);
    });
});