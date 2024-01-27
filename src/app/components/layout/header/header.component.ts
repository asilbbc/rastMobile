import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  router: any;

  //navigation bar route list . random route names added
  headerElements: any = [
    { pageName: 'Hakkımızda', route: '/about-us' },
    { pageName: 'Jüri - Yarışma Yazılımı', route: '/jury-competition-software' },
    { pageName: 'Word Ninja', route: '/word-ninja' },
    { pageName: 'Word Pyramids', route: '/word-pyramids' },
  ];

  //to change component
  changeRoute(route: any) {
    console.log(route)
    //this.router.navigate([route])
  }
}
