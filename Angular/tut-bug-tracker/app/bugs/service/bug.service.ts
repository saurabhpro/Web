import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FirebaseConfigService } from '../../core/service/firebase-config.service';

@Injectable()
export class BugService {

    //_database was private, we added `get database()`
    private bugsDbRef = this.fireb.database.ref('/bugs');

    constructor(private fireb: FirebaseConfigService) { }

    getAddedBugs(): Observable<any> {
        return Observable.create(obs => {
            this.bugsDbRef.on('child_added', bug => {
                const newBug = bug.val();
                newBug.id = bug.key;
                obs.next(newBug);
            },
                err => {
                    obs.throw(err);
                });
        });
    }
}