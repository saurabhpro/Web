import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'


import { StatusPipe } from './pipe/status.pipe';
import { SeverityPipe } from './pipe/severity.pipe';


@NgModule({
    imports: [CommonModule],    //so that it can be used in the shared module as well
    declarations: [
        StatusPipe,
        SeverityPipe
    ],
    exports: [
        CommonModule,
        StatusPipe,
        SeverityPipe
    ]     //so that any deendent module already gets CommonModule
})
export class SharedModule { }