import { PlacesService } from './../../places.service';
import { Place } from './../../places.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalController, ActionSheetController } from '@ionic/angular';
import { CreateBookingComponent } from 'src/app/bookings/create-booking/create-booking.component';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  loadedPlaces: Place;
  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private placesService: PlacesService,
    private modalCtrl: ModalController,
    private actionSheetCtrl: ActionSheetController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      paramMap=>{
        if(!paramMap.has('placeId')){return;}
        this.loadedPlaces = this.placesService.getPlaces(paramMap.get('placesId'));
      }
    )
  }
  goBack(){
    this.router.navigateByUrl('/places/tabs/discover');
  }

  async bookPlace(){
    
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Book Place',
      buttons: [{
        text:'Book w/ Random Date',
        handler: () => {
          this.modalCtrl.create({ component: CreateBookingComponent,
          componentProps: { selectedPlace: this.loadedPlaces }})
          .then(modalElement => {
            modalElement.present();
            return modalElement.onDidDismiss();
          })
          .then(resulData => {
            console.log("result data -->",resulData);
          });
        }
      },{
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('cancel clicked');
        }
      }]
    })
    await actionSheet.present();


 /*    this.modalCtrl.create({component: CreateBookingComponent})
    .then(modalElement => {
      modalElement.present();
    }) */
  }

}
