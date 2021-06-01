import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
  {id: 6, name: 'syun' },
	{id: 2, name: 'yuko' },
	{id: 3, name: 'maru' },
	{id: 4, name: 'michel' },
	{id: 5, name: 'ayaka' }
  ];
  return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}