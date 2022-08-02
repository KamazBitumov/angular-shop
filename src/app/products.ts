export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Большой телефон',
    price: 799,
    description: 'Охренеть большой экран'
  },
  {
    id: 2,
    name: 'Маленький телефон',
    price: 699,
    description: 'Маленький очень'
  },
  {
    id: 3,
    name: 'Обычный телефон',
    price: 299,
    description: 'Ни прекрасно, ни ужасно'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/