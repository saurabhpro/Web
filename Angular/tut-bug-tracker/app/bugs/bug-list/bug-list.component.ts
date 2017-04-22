import { Component, OnInit } from '@angular/core';

import { BugService } from '../service/bug.service';

import { Bug } from '../model/bug'

@Component({
    moduleId: module.id,
    selector: 'bug-list',
    templateUrl: 'bug-list.component.html',
    styleUrls: ['bug-list.component.css']

})

export class BugListComponent implements OnInit {
    //private array to store the bugs array
    private bugs : Bug[] = [];

    constructor(private bugService: BugService) { }

    //override
    ngOnInit(): void {
        this.getAddedBugs();
    }
    getAddedBugs() {
        this.bugService.getAddedBugs()
            .subscribe(bug => {
                this.bugs.push(bug);    //add to the array
                console.log(this.bugs);
            },
            err => {
                console.error("Unable to get added bug - ", err);
            });
    }
}