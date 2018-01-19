import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements OnInit {
  start = false;

  constructor(private router: Router) { }

  ngOnInit() {
    if ((window.navigator as any).standalone) {
      this.start = true;

      if (localStorage.getItem('position') == null) {
        localStorage.setItem('position', '0');
      } else {
        this.router.navigateByUrl('/place');
      }

    }
  }

}
