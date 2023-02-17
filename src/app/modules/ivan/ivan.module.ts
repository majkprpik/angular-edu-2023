import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IvanRoutingModule } from './ivan-routing.module';
import { IvanComponent } from '../ivan/ivan.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../services/auth.service';

@NgModule({
  declarations: [IvanComponent],
  imports: [CommonModule, IvanRoutingModule, FormsModule, HttpClientModule],
  providers: [AuthService],
})
export class IvanModule {}
