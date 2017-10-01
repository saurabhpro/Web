import { Component, OnInit } from '@angular/core';

import { Baby } from '../baby';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { RandomPickerService } from '../random-picker.service';

@Component({
  selector: 'app-babies',
  templateUrl: './babies.component.html',
  styleUrls: ['./babies.component.scss']
})
export class BabiesComponent implements OnInit {

  // test array
  // babies: Baby[] = [new Baby('Radha'), new Baby('Krishna'), new Baby('Sita')];

  // STEP 3 ->
  // We also expose the babies observable to our template.
  babies: FirebaseListObservable<Baby[]>;

  // STEP 1 ->
  // inject the AngularFirebaseDatabase using dependency injection
  // (that’s how we inject dependencies in Angular)
  constructor(private db: AngularFireDatabase,
    private randomService: RandomPickerService) { }

  // STEP 2 ->
  // We then use it during our components initialization (which happens inside ngOnInit)
  // to retrieve a list of babies from our yet-not-existing database using the '/babies' url as identifier
  ngOnInit() {
    this.babies = this.db.list('/babies');
  }


  // create new baby!
  giveBirth() {
    const newBaby = new Baby(this.pickRandomName());
    const babies = this.db.list('/babies');

    // this saves the baby & since we have async in our array so, we will see live updates
    babies.push(newBaby);
  }

  pickRandomName() {
    const names = ['Carlos', 'Laura', 'John', 'Augustina', 'Manuel', 'Lola', 'Isaac', 'Georgina', 'Paolo', 'Maria', 'Ronaldo', 'Ronalda'];
    // its services job to return the selected baby
    return this.randomService.pickAtRandom(names);
  }
}
