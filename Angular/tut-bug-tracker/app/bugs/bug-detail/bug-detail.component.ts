import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl } from "@angular/forms";

@Component({
    moduleId: module.id,
    selector: 'bug-detail',
    templateUrl: 'bug-detail.component.html',
    styleUrls: ['bug-detail.component.css']
})
export class BugDetailComponent implements OnInit {
    private modalId = "bugModal";
    private bugForm: FormGroup;

    ngOnInit() {
        this.configureForm();
    }

    configureForm() {
        //creating a reactive form - needs a modal - add it to the actual html form
        this.bugForm = new FormGroup({
            title: new FormControl(),
            status: new FormControl(1),     //pass 1 will pick option 1 from status dropdown
            severity: new FormControl(2),   //pass 2 which will pick option 2
            description: new FormControl()
        });
    }
}