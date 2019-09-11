import { Component, OnInit,Input } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {

  @Input() selectedPlace

  constructor(private modalCtrl: ModalController, private loadingCtrl: LoadingController) { }

  ngOnInit() {
    console.log("value passed",this.selectedPlace)
  }

  bookThisPlace(){
    this.loadingCtrl.create({
      keyboardClose: true,
      message: 
      'Booking the place ...'
    })
    .then(loadingEL => {
      loadingEL.present();
      setTimeout(() => {
        loadingEL.dismiss();
        this.modalCtrl.dismiss({
          message: 'booked'
        },'confirm');
      },2000)
    })
  }

  cancel(){
    this.modalCtrl.dismiss();
  }

}
