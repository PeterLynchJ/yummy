import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Pad Thai',
      'This is pad thai',
      'https://cdn.shopify.com/s/files/1/1563/5449/files/paoched_salmon_curry.jpg?v=1486695431',
      [
        new Ingredient('apple', 1),
        new Ingredient('chips', 20)
      ]),
    new Recipe(
      'Thai noodles',
      'Thai noodles',
      'https://cdn.shopify.com/s/files/1/1563/5449/files/paoched_salmon_curry.jpg?v=1486695431',
      [new Ingredient('pear', 2)])
  ];
  getRecipes() {
    // get a copy
    return this.recipes.slice();
  }
}
