import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KarlaRoutingModule } from './karla-routing.module';
import { KarlaComponent } from './karla.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [KarlaComponent],
  providers: [AuthService],
  imports: [CommonModule, KarlaRoutingModule, FormsModule, HttpClientModule],
})
export class KarlaModule {}
