import { BarometricPressure } from './BarometricPressure';
import { UnitConversions } from '../Conversions';

import * as mocha from 'mocha';
import * as chai from 'chai';

const expect = chai.expect;
describe('Barometric Pressure Calculator', () => {

    it('should be able to calculate pressure correctly', () => {
        expect(BarometricPressure.GetPressure(101325, 288.15, 2500)).to.be.closeTo(74682.53, 0.01);
        expect(BarometricPressure.GetPressure(760, 288.15, 100)).to.be.closeTo(751.03, 0.01);
    });
});