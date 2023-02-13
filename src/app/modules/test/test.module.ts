import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { TestComponent } from './test.component';
import { IvanRoutingModule } from '../ivan/ivan-routing.module';

@NgModule({
  declarations: [TestComponent],
  imports: [CommonModule, TestRoutingModule, IvanRoutingModule],
})
export class TestModule {}
