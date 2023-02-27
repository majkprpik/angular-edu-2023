import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStorageService {
  tokens: any;
  accessToken: any;
  refreshToken: any;

  constructor(private authService: AuthService) {}
}
