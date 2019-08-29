import { Component, OnInit } from '@angular/core';
import {Recipe} from'./recipes.model';
import {RecipesService} from './recipes.service';
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

recipes: Recipe[];

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
   this.getAll();
  }

getAll(){
  this.recipes= this.recipesService.getAllRecipes();
}

 getConsole(id: string){
  this.recipesService.getRecipe(id);
 }

 delete(id: string){
   this.recipesService.deleteRecipe(id);
  this.getAll();
 }

 ionViewWillEnter(){
   this.getAll();
 }
}
