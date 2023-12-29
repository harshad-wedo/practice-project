import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from './recipe.modal';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simple test.',
      'https://media.istockphoto.com/id/1809996596/photo/delicious-crispy-croutons-in-bowl-on-white-background-top-view.jpg?s=2048x2048&w=is&k=20&c=NaIA2Qm8CpPyXaHE3LG6gpdDssIFt394igKjE4xd660='
    ),
    new Recipe(
      'A Test Recipe2',
      'This is simple test 2.',
      'https://media.istockphoto.com/id/1809996596/photo/delicious-crispy-croutons-in-bowl-on-white-background-top-view.jpg?s=2048x2048&w=is&k=20&c=NaIA2Qm8CpPyXaHE3LG6gpdDssIFt394igKjE4xd660='
    ),
  ];

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
