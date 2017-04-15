import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'temperatureUnit'
})
export class TemperatureUnitPipe implements PipeTransform {
    //@override
    transform(temperature: number, unitType: string) {
        if (unitType === "celsius") {
            const celsius = (temperature - 32) * 0.5556;
            return celsius;
        } else {
            return temperature;
        }
    }
}