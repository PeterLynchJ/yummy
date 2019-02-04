import {Ingredient} from '../shared/ingredient.model';
import {EventEmitter, Output} from '@angular/core';
import {Subject} from 'rxjs';

export class ShoppingListService {
  /*@Output() newIngredientAvailable = new EventEmitter<Ingredient[]>();*/
  newIngredientAvailable = new Subject<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 10),
    new Ingredient('Pear', 5)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.newIngredientAvailable.next(this.getIngredients());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.newIngredientAvailable.next(this.getIngredients());
  }
}
