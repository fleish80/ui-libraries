import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Item {
  name: string;
  id: number;
  linkName: string;
  link: string;
  bataryPercent: number;
}

export interface Information {
  columns: string[];
  items: Item[];
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: Item[] = [
  { id: 1, name: 'Hydrogen', linkName: 'ynet', link: 'https://www.ynet.co.il/home/0,7340,L-8,00.html', bataryPercent: 39 },
  { id: 2, name: 'Helium', linkName: 'ynet', link: 'https://www.ynet.co.il/home/0,7340,L-8,00.html', bataryPercent: 100 },
  { id: 3, name: 'Lithium', linkName: 'ynet', link: 'https://www.ynet.co.il/home/0,7340,L-8,00.html', bataryPercent: 39 },
  { id: 4, name: 'Beryllium', linkName: 'ynet', link: 'https://www.ynet.co.il/home/0,7340,L-8,00.html', bataryPercent: 11 },
  { id: 5, name: 'Boron', linkName: 'ynet', link: 'https://www.ynet.co.il/home/0,7340,L-8,00.html', bataryPercent: 53 },
  { id: 6, name: 'Carbon', linkName: 'ynet', link: 'https://www.ynet.co.il/home/0,7340,L-8,00.html', bataryPercent: 61 },
  { id: 7, name: 'Nitrogen', linkName: 'ynet', link: 'https://www.ynet.co.il/home/0,7340,L-8,00.html', bataryPercent: 8 },
  { id: 8, name: 'Oxygen', linkName: 'ynet', link: 'https://www.ynet.co.il/home/0,7340,L-8,00.html', bataryPercent: 39 },
  { id: 9, name: 'Fluorine', linkName: 'ynet', link: 'https://www.ynet.co.il/home/0,7340,L-8,00.html', bataryPercent: 39 },
  { id: 10, name: 'Neon', linkName: 'ynet', link: 'https://www.ynet.co.il/home/0,7340,L-8,00.html', bataryPercent: 39 },
  { id: 11, name: 'Sodium', linkName: 'facebook', link: 'https://www.facebook.com/', bataryPercent: 39 },
  { id: 12, name: 'Magnesium', linkName: 'ynet', link: 'https://www.ynet.co.il/home/0,7340,L-8,00.html', bataryPercent: 65 },
  { id: 13, name: 'Aluminum', linkName: 'ynet', link: 'https://www.ynet.co.il/home/0,7340,L-8,00.html', bataryPercent: 0 },
  { id: 14, name: 'Silicon', linkName: 'ynet', link: 'https://www.ynet.co.il/home/0,7340,L-8,00.html', bataryPercent: 39 },
  { id: 15, name: 'Phosphorus', linkName: 'ynet', link: 'https://www.ynet.co.il/home/0,7340,L-8,00.html', bataryPercent: 99 },
  { id: 16, name: 'Sulfur', linkName: 'ynet', link: 'https://www.ynet.co.il/home/0,7340,L-8,00.html', bataryPercent: 98 },
  { id: 17, name: 'Chlorine', linkName: 'walla', link: 'https://www.walla.co.il/', bataryPercent: 39 },
  { id: 18, name: 'Argon', linkName: 'ynet', link: 'https://www.ynet.co.il/home/0,7340,L-8,00.html', bataryPercent: 39 },
  { id: 19, name: 'Potassium', linkName: 'ynet', link: 'https://www.ynet.co.il/home/0,7340,L-8,00.html', bataryPercent: 100 },
  { id: 20, name: 'Calcium', linkName: 'ynet', link: 'https://www.ynet.co.il/home/0,7340,L-8,00.html', bataryPercent: 39 },
];




@Injectable({
  providedIn: 'root'
})
export class InformationService {

  constructor() { }

  get(): Observable<Information> {
    return of(
      {
        columns: ['id', 'name', 'linkName', 'bataryPercent'],
        items: EXAMPLE_DATA
      });
  }
}
