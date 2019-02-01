import { MolarMassEarthAir, GravitationalAccelarationOnEarth, UniversalGasConstantForAir } from "../Constants";

export abstract class BarometricPressure {
    private static _temperatureLapseRate = -0.0065;
    private static _heightOfBottomLayer = 0;

    /**
     * Get the air pressure at a certain altitude
     * 
     * @param pressureAtSeaLevel Pressure at sea level in Pascals
     * @param temperature Temperature of air in Kelvin
     * @param altitude Altitude to calculate in meters
     */
    public static GetPressure(pressureAtSeaLevel: number, temperature: number, altitude: number): number {
        if (altitude < 11000) {
            return this.GetPressureLapseRateNotZero(pressureAtSeaLevel, temperature, altitude);
        }

        if (altitude <= 20000) {
            return this.GetPressureLapseRateZero(pressureAtSeaLevel, temperature, altitude);
        }

        return NaN;
    }

    private static GetPressureLapseRateNotZero(pressureAtSeaLevel: number, temperature: number, altitude: number) {
        return pressureAtSeaLevel * Math.pow(temperature / (temperature + (this._temperatureLapseRate * (altitude - this._heightOfBottomLayer))), (GravitationalAccelarationOnEarth * MolarMassEarthAir) / (UniversalGasConstantForAir * this._temperatureLapseRate));
    }

    private static GetPressureLapseRateZero(pressureAtSeaLevel: number, temperature: number, altitude: number) {
        var heightOfBottomLayer = 11000;
        var pressureAtLapseRateNotZero = this.GetPressureLapseRateNotZero(pressureAtSeaLevel, temperature, heightOfBottomLayer);
        var temperatureLapseRate = temperature + (11000 * (this._temperatureLapseRate));

        return pressureAtLapseRateNotZero * Math.exp(((-GravitationalAccelarationOnEarth) * MolarMassEarthAir * (altitude - heightOfBottomLayer)) / (UniversalGasConstantForAir * temperatureLapseRate))
    }
}