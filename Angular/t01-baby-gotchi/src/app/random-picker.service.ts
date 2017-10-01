import { Injectable } from '@angular/core';

@Injectable()
export class RandomPickerService {

  constructor() { }

  pickAtRandom(items: any[]) {
    const randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
  }

}
