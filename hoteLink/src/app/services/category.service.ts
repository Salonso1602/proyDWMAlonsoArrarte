import { Injectable } from '@angular/core';
import { map, Observable, of, throwError } from 'rxjs';
import { ICategory } from '@interfaces/category';
import { categoryTypes } from '@enums/categoryTypes';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  url = `${environment.apiBaseUrl}/categories`

  constructor(private http : HttpClient) { }

  getCategories() : Observable<ICategory[]>{
    //return this.http.get<ICategory[]>(this.url);
    return of(allCategories);
  }

  getFoodCategories() : ICategory[]{
    //return this.http.get<ICategory[]>(this.url + '/food');
    let foodcategories: ICategory[] = [];
    this.getCategories().subscribe(categories =>
      categories.forEach(category => {
        if (category.type === categoryTypes.Food) {
          foodcategories.push(category);
        }
      }))
    return foodcategories;
  }

  getActivityCategories() : ICategory[]{
        //return this.http.get<ICategory[]>(this.url + '/activity');
    let actcategories: ICategory[] = [];
    this.getCategories().subscribe(categories =>
      categories.forEach(category => {
        if (category.type === categoryTypes.Activity) {
          actcategories.push(category);
        }
      }));
    return actcategories;
  }
}

const allCategories : ICategory[] = [
{
  id: 1,
  name: 'Amanecer',
  type: categoryTypes.Activity,
  imageId: '0001'
},
{
  id: 2,
  name: 'Deporte',
  type: categoryTypes.Activity,
  imageId: '0002'
},
{
  id: 3,
  name: 'Noche',
  type: categoryTypes.Activity,
  imageId: '0003'
},
{
  id: 4,
  name: 'Vegana',
  type: categoryTypes.Food,
  imageId: '0004'
},
{
  id: 5,
  name: 'Postre',
  type: categoryTypes.Food,
  imageId: '0005'
}
];