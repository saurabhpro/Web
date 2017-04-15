import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: "speedUnit"
})
export class SpeedUnitPipe implements PipeTransform {
    //@override
    transform(speed: number, unitType: string) {
        switch (unitType) {
            case "kmph":
                const miles = Number(speed * 1.6).toFixed(1);   //toFixed(X) for decimal roundoff
                return miles + " kmph";
            default:
                const kilo = Number(speed).toFixed(1);
                return kilo + " mph";
        }
    }
}