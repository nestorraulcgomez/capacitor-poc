import { Component, OnInit } from '@angular/core';
import * as Smartlook from 'cordova-plugin-smartlook';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    Smartlook.setProjectKey({key: '9b73e83febd539d3b3e7f2cec80c1f7ff8706e75'});
    Smartlook.setWebViewSensitivity({ isSensitive: true });
    Smartlook.start();
  }
}
