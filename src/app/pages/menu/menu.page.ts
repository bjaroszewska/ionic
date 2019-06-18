import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  pages = [{
    title: 'Main',
    url: '/menu/main',
    icon: 'home'
  }, {
    title: 'Text',
    children: [{
      itle: 'Ionic',
      url: '/menu/ionic',
      icon: 'logo-ionic'
    },
    {
      itle: 'Flutter',
      url: '/menu/flutter',
      icon: 'logo-google'
    }]
  }
  ]
  constructor() { }

  ngOnInit() {
  }

}
