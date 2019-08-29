import { Injectable } from '@angular/core';
import { Recipe } from './recipes.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Gado-gado',
      imageUrl:
      'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/05/gado-gado-salad.jpg?itok=MTTSric8',
      ingredients: ['Lontong','Sawi','Bumbu Kecap','Tauge']
  
    },
    {
      id: 'r2',
      title: 'Gado-gado',
      imageUrl:
      'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/05/gado-gado-salad.jpg?itok=MTTSric8',
      ingredients: ['Lontong','Sawi','Bumbu Kecap','Tauge']
  
    },

  ]

  constructor() { }

  getAllRecipes() {
    return [...this.recipes]
  }

  getRecipe(recipeId: string)
{
  return {
    ...this.recipes.find(recipe => {
      return recipe.id === recipeId
    })
  }
}

deleteRecipe(recipeId: string){

  this.recipes= this.recipes.filter(recipe => {
    return recipe.id !== recipeId;
  })

}

}
