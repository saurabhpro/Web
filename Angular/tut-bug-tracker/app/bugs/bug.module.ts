//Modules
import { NgModule } from '@angular/core'
import { SharedModule } from '../shared/shared.module'
//import { CommonModule } from '@angular/common' for ngIf 

//Components
import { BugListComponent } from './bug-list/bug-list.component'

import { BugRoutingModule } from './bug-routing.module'


@NgModule({
    imports: [SharedModule, BugRoutingModule],
    declarations: [BugListComponent],
    exports: [],
    providers: []
})
export class BugModule { }