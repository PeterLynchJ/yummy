import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  /*  @ViewChild('nameInput') nameInputRef: ElementRef;
    @ViewChild('amountInput') amountInputRef: ElementRef;*/


  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
  }

  /*  onAddShoppingList() {
      const name = this.nameInputRef.nativeElement.value;
      const amount = this.amountInputRef.nativeElement.value;
      const newIngredient = new Ingredient(name, amount);
      this.shoppingListService.addIngredient(newIngredient);
    }*/

  onAddItem(form: NgForm) {
    const val = form.value;
    const newIngredient = new Ingredient(val.name, val.amount);
    this.shoppingListService.addIngredient(newIngredient);
  }

  onClearShoppingList() {

  }

  onDeleteShoppingList() {

  }
}
