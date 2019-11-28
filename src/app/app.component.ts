import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Swapnil';
constructor(public service: AuthService,
            public router:Router)
            {}
  logout()
  {
    this.service.signOut();
    this.router.navigate(['/login']);
  }
}
