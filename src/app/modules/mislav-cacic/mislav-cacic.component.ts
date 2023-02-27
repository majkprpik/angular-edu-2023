import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { LocalStorageService } from './services/local-storage.service';

@Component({
  selector: 'app-mislav-cacic',
  templateUrl: './mislav-cacic.component.html',
  styleUrls: ['./mislav-cacic.component.scss'],
})
export class MislavCacicComponent {
  constructor(
    private authService: AuthService,
    private localStorage: LocalStorageService
  ) {}
}
