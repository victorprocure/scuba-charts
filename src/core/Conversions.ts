import { TemperatureUnit } from "./TemperatureUnit";
import { DistanceUnit } from './DistanceUnit';
import { PressureUnit } from "./PressureUnit";

export abstract class UnitConversions {
    public static fahrenheit(value: number, unit = TemperatureUnit.Kelvin) {
        switch (unit) {
            case TemperatureUnit.Fahrenheit:
                return value;
            case TemperatureUnit.Celsius:
                return ((value - 32) * 5) / 9;
            case TemperatureUnit.Kelvin:
                return (value - 32) / 1.8 + 273.15;
        }
    }

    public static celsius(value: number, unit = TemperatureUnit.Kelvin) {
        switch (unit) {
            case TemperatureUnit.Fahrenheit:
                return (value * 1.8) + 32;
            case TemperatureUnit.Celsius:
                return value;
            case TemperatureUnit.Kelvin:
                return value + 273.15
        }
    }

    public static kelvin(value: number, unit = TemperatureUnit.Kelvin) {
        switch (unit) {
            case TemperatureUnit.Fahrenheit:
                return (value * 1.8) - 459.67;
            case TemperatureUnit.Celsius:
                return value - 273.15;
            case TemperatureUnit.Kelvin:
                return value;
        }
    }

    public static feet(value: number, unit = DistanceUnit.Meters) {
        switch (unit) {
            case DistanceUnit.Feet:
                return value;
            case DistanceUnit.Meters:
                return value * 0.3048;
        }
    }

    public static meters(value: number, unit = DistanceUnit.Meters) {
        switch (unit) {
            case DistanceUnit.Feet:
                return value * 3.2808;
            case DistanceUnit.Meters:
                return value;
        }
    }

    public static pascal(value: number, unit = PressureUnit.Pascal){
        switch(unit){
            case PressureUnit.Pascal:
                return value;
            case PressureUnit.psi:
                return value / 6894.75729;
            case PressureUnit.atm:
                return value / 101325;
        }
    }

    public static psi(value: number, unit = PressureUnit.Pascal){
        switch(unit){
            case PressureUnit.Pascal:
                return value * 6894.75729;
            case PressureUnit.psi:
                return value;
            case PressureUnit.atm:
                return value * 6894.75729;
        }
    }

    public static atm(value: number, unit = PressureUnit.Pascal){
        switch(unit){
            case PressureUnit.Pascal:
                return value * 101325;
            case PressureUnit.psi:
                return value * 14.6959488;
            case PressureUnit.atm:
                return value;
        }
    }
}