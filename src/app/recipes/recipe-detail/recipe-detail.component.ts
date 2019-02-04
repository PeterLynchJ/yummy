import { Component, Injectable, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute} from '@angular/router';

@Injectable()
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  // @Input() recipe: Recipe;
  recipe: Recipe;
  isOpen: boolean;
  constructor(
    private shoppingListService: ShoppingListService,
    private rs: RecipeService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.isOpen = false;
    this.route.params.subscribe((params) => {
      this.recipe = this.rs.getRecipe(+params.id);
    });

  }

  onAddToShoppingList() {
    this.shoppingListService.addIngredients(this.recipe.ingredients);
  }
}
