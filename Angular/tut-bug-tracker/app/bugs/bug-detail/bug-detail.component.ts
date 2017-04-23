import { Component, OnInit, Input } from '@angular/core'
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";

import { forbiddenStringValidator } from '../../shared/validation/forbidden-string.validator';


import { BugService } from '../service/bug.service';

import { Bug } from '../model/bug';
import { STATUS, SEVERITY } from '../../shared/constant/constants';


@Component({
    moduleId: module.id,
    selector: 'bug-detail',
    templateUrl: 'bug-detail.component.html',
    styleUrls: ['bug-detail.component.css']
})
export class BugDetailComponent implements OnInit {
    private modalId = "bugModal";   //no use
    private bugForm: FormGroup;

    private statuses = STATUS;
    private severities = SEVERITY;

    private statusArr: string[] = [];
    private severityArr: string[] = [];

    @Input() private currentBug: Bug = new Bug(null, null, this.statuses.Logged, this.severities.Severe, null, null, null);

    //Inject Bug Service and form builder
    constructor(private formBuilder: FormBuilder, private bugService: BugService) { }

    ngOnInit() {

        //console.log(this.statuses);

        this.statusArr = Object.keys(this.statuses).filter(Number);
        this.severityArr = Object.keys(this.severities).filter(Number);

        this.configureForm();
    }

    configureForm(bug?: Bug) {
        //creating a reactive form - needs a modal - add it to the actual html form
        // this.bugForm = new FormGroup({
        //     //param1 - initalvalue, param2 - single or array of validators
        //     title: new FormControl(null, [Validators.required, forbiddenStringValidator(/puppy/i)]),   //true if title != *puppy*, i ignore case
        //     status: new FormControl(1, Validators.required),     //pass 1 will pick option 1 from status dropdown
        //     severity: new FormControl(2, Validators.required),   //pass 2 which will pick option 2
        //     description: new FormControl(null, Validators.required)
        // });

        if (bug) {
            this.currentBug = new Bug(
                bug.id,
                bug.title,
                bug.status,
                bug.severity,
                bug.description,
                bug.createdBy,
                bug.createdDate,
                bug.updatedBy,
                bug.updatedDate
            );
        }

        this.bugForm = this.formBuilder.group({
            title: [this.currentBug.title, [Validators.required, forbiddenStringValidator(/puppy/i)]],
            status: [this.currentBug.status, Validators.required],
            severity: [this.currentBug.severity, Validators.required],
            description: [this.currentBug.description, Validators.required]
        })
    }

    // on click of save
    submitForm() {
        this.currentBug.title = this.bugForm.value["title"];
        this.currentBug.status = this.bugForm.value["status"];
        this.currentBug.severity = this.bugForm.value["severity"];
        this.currentBug.description = this.bugForm.value["description"];

        //console.log('Hi', this.bugForm.value);
        if (this.currentBug.id) {
            this.updateBug();
        } else {
            this.addBug();
        }

        //this.freshForm(); commented to spearate the reset from not closing the modal
    }

    private addBug() {
        //pass to the service
        this.bugService.addBug(this.currentBug);
        //this.freshForm();
    }

    private updateBug() {
        this.bugService.updateBug(this.currentBug);
        //this.freshForm();
    }


    //on click of Delete
    deleteItem() {
        this.deleteBug();
    }

    private deleteBug() {
        this.bugService.deleteBug(this.currentBug);
        //this.freshForm();
    }

    freshForm() {
        this.bugForm.reset({ status: this.statuses.Logged, severity: this.severities.Severe });
        this.cleanBug();
    }

    private cleanBug() {
        this.currentBug = new Bug(null, null, this.statuses.Logged, this.severities.Severe, null, null, null, null, null);
    }
}