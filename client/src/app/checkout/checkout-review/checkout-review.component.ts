import { Component, OnInit, Input } from '@angular/core';
import { CdkStepper } from '@angular/cdk/stepper';
import { IBasket } from 'src/app/shared/models/basket';
import { Observable } from 'rxjs';
import { BasketService } from 'src/app/basket/basket.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-checkout-review',
  templateUrl: './checkout-review.component.html',
  styleUrls: ['./checkout-review.component.scss'],
})
export class CheckoutReviewComponent implements OnInit {
  @Input() appStepper: CdkStepper;
  basket$: Observable<IBasket>;

  constructor(
    private basketService: BasketService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.basket$ = this.basketService.basket$;
  }
}
