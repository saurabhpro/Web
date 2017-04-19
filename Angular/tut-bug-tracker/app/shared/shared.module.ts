import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

@NgModule({
    imports: [CommonModule],    //so that it can be used in the shared module as well
    declarations: [],
    exports: [CommonModule]     //so that any deendent module already gets CommonModule
})
export class SharedModule { }