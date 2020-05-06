import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor() { }

  items = [
    {id: 1, location: 'Montreal', title: 'Amazing View of Downtown Montreal', room: 'Entire apartment', beds: 2, points: 4.5 },
    {id: 2, location: 'Montreal',  title: '1006 Dowtwon Montréal', room: 'Entire apartment', beds: 1, points: 3.5 },
    {id: 3, location: 'Montreal',  title: 'Modern Downtown Condo on Berri Street', room: 'Entire loft', beds: 3, points: 4.0 },
    {id: 4, location: 'Montreal',  title: 'Color of Montreal +1 free parking', room: 'Entire apartment', beds: 2, points: 4.8 },
    {id: 5, location: 'Montreal',  title: 'Stroll to the Old Port from this Enchanting Oasis!', room: 'Entire room', beds: 1, points: 3.5 },
    {id: 6, location: 'Montreal',  title: 'The light of Montreal (1 Free parking)', room: 'Entire apartment', beds: 1, points: 5.0 },
    {id: 7, location: 'Montreal',  title: 'North Pearl in Downtown Montreal', room: 'Entire loft', beds: 4, points: 3.5 },
    {id: 8, location: 'Montreal',  title: 'Skylit Loft in Old Montreal', room: 'Entire apartment', beds: 1, points: 2.5 }];

}
