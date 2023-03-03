import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Flower } from '../shared/Flower';
import { Tag } from '../shared/Tag';

@Injectable()
export class FlowerService {
  constructor() {}

  getFlowersId(id: number): Flower {
    return this.getAllFlowers().find((flower) => flower.id == id);
  }

  getTags(): Tag[] {
    return [
      { name: 'All', count: 9 },
      { name: 'white', count: 3 },
      { name: 'purple', count: 3 },
      { name: 'yellow', count: 3 },
    ];
  }

  getAllFlowersTag(tag: string): Flower[] {
    return tag === 'All'
      ? this.getAllFlowers()
      : this.getAllFlowers().filter((flower) => flower.tags?.includes(tag));
  }

  getAllFlowers(): Flower[] {
    return [
      {
        id: 1,
        name: 'Common Mallow',
        price: 5,
        tags: ['purple'],
        imageUrl: '/assets/Ivan/ljubicasti.jpg',
      },
      {
        id: 2,
        name: 'Oleander',
        price: 7,
        tags: ['white'],
        imageUrl: '/assets/Ivan/drugi bijeli.jpg',
      },
      {
        id: 3,
        name: 'Blue gem',
        price: 5,
        tags: ['purple'],
        imageUrl: '/assets/Ivan/ljubicasti2.jpg',
      },
      {
        id: 4,
        name: "St Bernard's lily",
        price: 7.5,
        tags: ['white'],
        imageUrl: '/assets/Ivan/bijeli cvijet.jpg',
      },
      {
        id: 5,
        name: 'Lantana',
        price: 6,
        tags: ['yellow'],
        imageUrl: '/assets/Ivan/zuti 2.jpg',
      },
      {
        id: 6,
        name: "Stork's bill",
        price: 6.5,
        tags: ['purple'],
        imageUrl: '/assets/Ivan/ljubicasti 3.jpg',
      },
      {
        id: 7,
        name: 'Bermuda Buttercup',
        price: 5,
        tags: ['yellow'],
        imageUrl: '/assets/Ivan/zuti.jpg',
      },
      {
        id: 8,
        name: 'Calla lily',
        price: 6.5,
        tags: ['white'],
        imageUrl: '/assets/Ivan/bijeli 3.jpg',
      },
      {
        id: 9,
        name: 'Verbascum',
        price: 5.5,
        tags: ['yellow'],
        imageUrl: '/assets/Ivan/zuti 3.jpg',
      },
    ];
  }
}
