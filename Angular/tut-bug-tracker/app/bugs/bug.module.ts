// Modules
import { NgModule } from '@angular/core'
import { SharedModule } from '../shared/shared.module'
import { BugRoutingModule } from './bug-routing.module'

//import { CommonModule } from '@angular/common' for ngIf 

// Components
import { BugListComponent } from './bug-list/bug-list.component'

// Service
import { BugService } from './service/bug.service'

@NgModule({
    imports: [
        SharedModule,
        BugRoutingModule
    ],
    declarations: [BugListComponent],
    exports: [],
    providers: [BugService]
})
export class BugModule { }