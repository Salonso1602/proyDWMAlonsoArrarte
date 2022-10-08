import { Injectable } from '@angular/core';
import { map, Observable, of, throwError } from 'rxjs';
import { ICategory } from '@interfaces/category';
import { categoryTypes } from '@enums/categoryTypes';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  getCategories() : Observable<ICategory[]>{
    return of(allCategories);
  }

  getFoodCategories() : ICategory[]{
    let foodcategories: ICategory[] = [];
    this.getCategories().subscribe(categories =>
      categories.forEach(category => {
        if (category.type === categoryTypes.Food) {
          foodcategories.push(category);
        }
      }))
    return foodcategories;
  }
}

const allCategories : ICategory[] = [
{
  name: 'Amanecer',
  type: categoryTypes.Activity,
  imageId: '0001'
},
{
  name: 'Deporte',
  type: categoryTypes.Activity,
  imageId: '0002'
},
{
  name: 'Noche',
  type: categoryTypes.Activity,
  imageId: '0003'
},
{
  name: 'Vegana',
  type: categoryTypes.Food,
  imageId: '0004'
},
{
  name: 'Postre',
  type: categoryTypes.Food,
  imageId: '0005'
}
];