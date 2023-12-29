import { Component } from '@angular/core';
import { Ingredients } from '../shared/ingredient.modal';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
})
export class ShoppingListComponent {
  ingredients: Ingredients[] = [];

  onIngredientAdd(ingredient: Ingredients) {
    this.ingredients.push(ingredient);
  }
}
