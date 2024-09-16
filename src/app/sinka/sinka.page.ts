import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { bagHandleOutline } from 'ionicons/icons';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-sinka',
  templateUrl: './sinka.page.html',
  styleUrls: ['./sinka.page.scss'],
})
export class SinkaPage implements OnInit {

  constructor(private navCtrl : NavController) { addIcons({ bagHandleOutline }); }

  ngOnInit() {
  }

  goToPraped(){
    this.navCtrl.navigateForward('/praped1')
  }
  goToTakra(){
    this.navCtrl.navigateForward('/takra')
  }

  sinka = [
    {
      id: 1,
      name: 'โค้ก',
      price: 15,
      detail: 'Coke',
      imageURL: '../../assets/coke-full-red-325-ml-hires.png'
    },
    {
      id: 3,
      name: 'น้ำเปล่า',
      price: 7,
      detail: 'Water',
      imageURL: '../../assets/mongfer.png'
    },
    {
      id: 5,
      name: 'สปอนเซอร์',
      price: 15,
      detail: 'Sponser',
      imageURL: '../../assets/sponsor-1.png'
    },
  ]
  sinka2 = [
    {
      id: 2,
      name: 'แป๊ปซี่',
      price: 13,
      detail: 'Pepsi',
      imageURL: '../../assets/pepsi01.png'
    }, {
      id: 4,
      name: 'โออิชิ',
      price: 20,
      detail: 'Pepsi',
      imageURL: '../../assets/yellowoishi.png'
    },{
      id: 6,
      name: 'ลิปตัน',
      price: 15,
      detail: 'Liptin',
      imageURL: '../../assets/lipton__lemon__slider-product.png'
    },
  ]

}
