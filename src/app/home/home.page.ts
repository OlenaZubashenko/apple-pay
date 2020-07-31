import { Component } from '@angular/core';
import { ApplePay } from '@ionic-native/apple-pay/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private applePay: ApplePay) { }

}
