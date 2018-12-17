import {Ingredient} from '../shared/ingredient.model';
import {EventEmitter, Output} from '@angular/core';

export class ShoppingListService {
  @Output() newIngredientAvailable = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 10),
    new Ingredient('Pear', 5)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.newIngredientAvailable.emit(this.getIngredients());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.newIngredientAvailable.emit(this.getIngredients());
  }
}
