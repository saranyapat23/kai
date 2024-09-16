import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { bagHandleOutline } from 'ionicons/icons';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-sinka3',
  templateUrl: './sinka3.page.html',
  styleUrls: ['./sinka3.page.scss'],
})
export class Sinka3Page implements OnInit {

  constructor(private navCtrl : NavController) { addIcons({ bagHandleOutline }); }

  ngOnInit() {
  }

  goToPraped(){
    this.navCtrl.navigateForward('/praped1')
  }

  goToTakra(){
    this.navCtrl.navigateForward('/takra')
  }

  sinka5 = [
    {
      id: 1,
      name: 'ชินรามยอน',
      price: 27,
      detail: 'Chinramyon',
      imageURL: '../../assets/ramyoung.webp'
    },
    {
      id: 3,
      name: 'มาม่าต้มยำกุ้ง',
      price: 8,
      detail: 'Mama Shrimp Tom Yum Flavor',
      imageURL: '../../assets/mamakung.webp'
    },
    {
      id: 5,
      name: 'คนอร์คัพโจ๊ก รสปลา',
      price: 15,
      detail: 'Knorr Cup Joke Fish Flavor',
      imageURL: 'https://media.discordapp.net/attachments/1118669200836272149/1284191799010918531/Remove-bg.ai_1726245578763.png?ex=66e5bc50&is=66e46ad0&hm=29472a2da28d81476155099f9195f4a0ac7ddc262e0d83f9f4ca1940fb9aaf6e&=&format=webp&quality=lossless&width=437&height=437'
    },
  ]
  sinka6 = [
    {
      id: 2,
      name: 'โจ๊กคัพ รสไข่เค็ม',
      price: 16,
      detail: 'Joke Cup Salted Egg Flavor',
      imageURL: 'https://media.discordapp.net/attachments/1118669200836272149/1284192007954104341/Remove-bg.ai_1726245627025.png?ex=66e5bc81&is=66e46b01&hm=cef0e1425ed4f3b190f5b494c7d914e20823c34afa759a8b82d63a056cb83597&=&format=webp&quality=lossless&width=437&height=437'
    }, {
      id: 4,
      name: 'มาม่าต้มยำกุ้งน้ำข้น',
      price: 7,
      detail: 'Mama Tom Yum Shrimp Creamy Soup',
      imageURL: 'https://media.discordapp.net/attachments/1118669200836272149/1284192190800855090/Remove-bg.ai_1726245670459.png?ex=66e5bcad&is=66e46b2d&hm=0673f4e6543ca955a0e451f0c2cc760d5c2c02f523a2dc315c5a1e29ad9193b6&=&format=webp&quality=lossless&width=437&height=437'
    },{
      id: 6,
      name: 'มาม่ารสหมูสับ',
      price: 15,
      detail: 'Mama Minced Pork Flavor',
      imageURL: 'https://media.discordapp.net/attachments/1118669200836272149/1284192908601331774/Remove-bg.ai_1726245841636.png?ex=66e5bd58&is=66e46bd8&hm=a70b7d37db39db8774b5e181d1a986b9bec7f51e1cc0a3d11160079013c99df7&=&format=webp&quality=lossless&width=562&height=658'
    },
  ]
}
