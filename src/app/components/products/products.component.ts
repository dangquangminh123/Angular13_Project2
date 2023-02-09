import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/api/products.service';
import { CartService } from 'src/app/api/cart.service';
// import { NgToastService } from 'ng-angular-popup';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public productlist:any;
  constructor(private api:ProductsService, private cart:CartService) { }

  ngOnInit(): void {
      this.api.getproduct().subscribe(res=> {
        this.productlist= res;
        this.productlist.forEach((a:any) => {
          Object.assign(a,{quantity:1,total:a.price})
        });
      });
  }

  //add to cart
  addtocart(item:any) {
    // this.toast.success({detail:'Added to cart',summary:'item has been added', duration:1000})
    this.cart.addtocart(item);
    Swal.fire(
      'Good job!',
      'You clicked the button!',
      'success'
    )
    console.log(item)
  }
  // oke anh để em cài lại thử 
  // chạy thử chức năng cái web đó a xem thử

}
