import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderDetailedComponent } from './order-detailed/order-detailed.component';
import { OrdersRoutingModule } from './orders-routing.module';

@NgModule({
  declarations: [OrderDetailedComponent],
  imports: [CommonModule, OrdersRoutingModule],
})
export class OrdersModule {}
