import { Component } from '@angular/core';
import { FirebaseAuthService } from './components/auth/firebase-auth.service';
import { FirebaseDbService } from './service/firebase-db.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bw3';

  constructor(private fbs: FirebaseAuthService, private fbDb: FirebaseDbService){
    this.fbs.user$.subscribe(user => console.log(user));
  }
}
