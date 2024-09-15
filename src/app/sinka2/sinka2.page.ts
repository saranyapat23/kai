import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { bagHandleOutline } from 'ionicons/icons';
import { NavController } from '@ionic/angular'

@Component({
  selector: 'app-sinka2',
  templateUrl: './sinka2.page.html',
  styleUrls: ['./sinka2.page.scss'],
})
export class Sinka2Page implements OnInit {

  constructor(private navCtrl: NavController) { addIcons({ bagHandleOutline }); }

  ngOnInit() {
  }

  goToPraped() {
    this.navCtrl.navigateForward('/praped1')
  }

  sinka3 = [
    {
      id: 1,
      name: 'สาหร่ายมาชิตะ',
      price: 15,
      detail: 'Machita',
      imageURL: 'https://cdn.discordapp.com/attachments/1118669200836272149/1284190972862922782/Remove-bg.ai_1726245333876.png?ex=66e5bb8b&is=66e46a0b&hm=4805704a26d35a7a54810680305192a28a67782ea4cba4e6d1c4793ccc96eed5&'
    },
    {
      id: 3,
      name: 'เลย์รสออริจินอล',
      price: 7,
      detail: 'Lays',
      imageURL: 'https://media.discordapp.net/attachments/1118669200836272149/1284185083846066247/image.png?ex=66e5b60e&is=66e4648e&hm=4558742153d8b69a3ef028e2a947766a2868565878c66b5fb836810b509e04ea&=&format=webp&quality=lossless&width=482&height=497'
    },
    {
      id: 5,
      name: 'โดริโทส',
      price: 15,
      detail: 'Doritos',
      imageURL: 'https://media.discordapp.net/attachments/1118669200836272149/1284185233863868507/image.png?ex=66e5b632&is=66e464b2&hm=c6a4cc86d44e3dd3dc326a8d2b03291ce7b01443410bcced801a65bd215adb33&=&format=webp&quality=lossless&width=498&height=496'
    },
  ]
  sinka4 = [
    {
      id: 2,
      name: 'ปาร์ตี้',
      price: 8,
      detail: 'Party',
      imageURL: 'https://media.discordapp.net/attachments/1118669200836272149/1284191298999418941/image.png?ex=66e5bbd8&is=66e46a58&hm=aa7121b3cb5fa6578668594eb294efa0e544eaee4446e22357befd4daed07837&=&format=webp&quality=lossless&width=427&height=437'
    }, {
      id: 4,
      name: 'โทโร่',
      price: 20,
      detail: 'Toro',
      imageURL: 'https://media.discordapp.net/attachments/1118669200836272149/1284185387463344211/image.png?ex=66e5b657&is=66e464d7&hm=3c9978c904bb436145d643d58828b4ad97b6262d9d08b7f5e147bddeca273368&=&format=webp&quality=lossless&width=461&height=437'
    }, {
      id: 6,
      name: 'แสน็คแจ็ค',
      price: 15,
      detail: 'SnackJack',
      imageURL: 'https://media.discordapp.net/attachments/1118669200836272149/1284191196536770570/Remove-bg.ai_1726245432880.png?ex=66e5bbc0&is=66e46a40&hm=ec3c6d85fb9f2dfc89048623111b8cc732f005f05372dc84cc6a4b071246bab3&=&format=webp&quality=lossless&width=573&height=670'
    },
  ]
}
