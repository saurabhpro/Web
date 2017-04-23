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
    private bugs: Bug[] = [];

    //Inject Bug Service
    constructor(private bugService: BugService) { }

    //override
    ngOnInit(): void {
        this.getAddedBugs();
        this.getUpdatedBugs();
        this.removeDeletedBugs();
    }

    private getAddedBugs() {
        this.bugService.getAddedBugs()
            .subscribe(bug => {
                this.bugs.push(bug);    //add to the array
                //console.log(this.bugs);
            },
            err => {
                console.error("Unable to get added bug - ", err);
            });
    }

    private getUpdatedBugs() {
        this.bugService.changedListener()
            .subscribe(updatedBug => {
                //map iterates through all bugs and returns array of ids, then indexof checks for 'id'
                const bugIndex =
                    this.bugs.map(index => index.id)
                        .indexOf(updatedBug['id']);

                this.bugs[bugIndex] = updatedBug;
            },
            err => {
                console.error("Unable to get updated bug - ", err);
            });
    }

    private removeDeletedBugs() {
        this.bugService.deletedListener()
            .subscribe(deletedBug => {
                //map iterates through all bugs and returns array of ids, then indexof checks for 'id'
                const bugIndex =
                    this.bugs.map(index => index.id)
                        .indexOf(deletedBug['id']);

                if (bugIndex > -1) {
                    this.bugs.splice(bugIndex, 1);
                }

                //delete this.bugs[bugIndex];
            },
            err => {
                console.error("Unable to delete bug - ", err);
            });
    }
}