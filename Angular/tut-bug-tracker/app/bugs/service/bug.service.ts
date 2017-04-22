import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FirebaseConfigService } from '../../core/service/firebase-config.service';

import { Bug } from '../model/bug'

@Injectable()
export class BugService {

    //_database was private, we added `get database()`
    private bugsDbRef = this.fireb.database.ref('/bugs');

    constructor(private fireb: FirebaseConfigService) { }

    getAddedBugs(): Observable<any> {
        return Observable.create(obs => {
            this.bugsDbRef.on('child_added', bug => {
                const newBug = bug.val() as Bug;   //.val() creates a js object
                //adding the key of the fetched object - since Bug model didnt hav it
                newBug.id = bug.key;
                obs.next(newBug);
            },
                err => {
                    obs.throw(err);
                });
        });
    }


    addBug(bug: Bug) {
        const newBugRef = this.bugsDbRef.push();
        newBugRef.set({
            title: bug.title,
            status: bug.status,
            severity: bug.severity,
            description: bug.description,
            createdBy: 'Saurabh',
            createdDate: Date.now()
        }).catch(err => console.error("Unable to add bug to Firebase - ", err));
    }

    updateBug(bug: Bug) {
        const currentBugRef = this.bugsDbRef.child(bug.id);
        bug.id = null;
        bug.updatedBy = "Tom";
        bug.updatedDate = Date.now();
        currentBugRef.update(bug);
    }

    changedListener(): Observable<any> {
        return Observable.create(obs => {
            this.bugsDbRef.on('child_changed', bug => {
                const updatedBug = bug.val() as Bug;
                updatedBug.id = bug.key;
                obs.next(updatedBug);
            },
                err => {
                    obs.throw(err);
                });
        });
    }
}