import { Component, OnInit } from '@angular/core';
import { RecipesService} from '../recipes.service'
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController, ToastController} from '@ionic/angular'
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  loadedRecipe: any = [];
  constructor(private rs:RecipesService,public toastController: ToastController,private route:ActivatedRoute,private router:Router,private alertController: AlertController) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
     // let id = params['id']

     this.loadedRecipe = this.rs.getRecipe(paramMap.get('recipeId'));
     console.log("asdsad",this.loadedRecipe)
    });
  }

  deleteRecipe(){
    this.rs.deleteRecipe(this.loadedRecipe.id)
    
    console.log("recipe delete")
    this.router.navigate(['recipes']);
    this.presentToast();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Recipes has been deleted',
      duration: 2000
    });
    toast.present();
  }

  async presentAlert(){
    const alert = await this.alertController.create({
      header: "Delete Recipe",
      message: "Are you sure you want to delete this recipe?",
      buttons:[
        {
          text: 'YES',
          handler: () => this.deleteRecipe()
        },
        {
          text:"Cancel",
          role: 'cancel'
        }
      ]

    });
    await alert.present();
  }

}
