import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/api/cart.service';
import Swal from 'sweetalert2';
// import { NgToastService } from 'ng-angular-popup';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public products!:any[];
  public grandtotal:number = 0;
  constructor(private cart:CartService) { }

  ngOnInit(): void {
    this.cart.getproduct().subscribe(res=>{
      this.products = res;
      this.grandtotal = this.cart.gettotalprice();
    })
  }

  emptycart(){
    // this.toast.warning({detail:'deleted all from cart',summary:'all item have been deleted', duration:1000})
    this.cart.removeallcart();
  }

  delete(item:any){
    // this.toast.warning({detail:'deleted to cart',summary:'item has been deleted', duration:1000})
    Swal.fire({
      title: 'Bạn có muosn xóa?',
      text: "săn phẩm đã xóa không thể khôi phục!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Xác nhận xóa!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.cart.removecartitem(item)
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
   
  }
}
