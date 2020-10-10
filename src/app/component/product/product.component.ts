import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  title:any;
  books:any=[];
  constructor(
    public dialog:MatDialog,
    public api:ApiService) { }

  ngOnInit(): void {
    this.title= 'Product';
   this.getBooks();
  }
  getBooks(){
    this.api.get('books').subscribe(result => {
      this.books=result;
    })
  }
  productDetail(data, idx){
    let dialog = this.dialog.open(ProductDetailComponent, {
      width:'400px',
      data:data
    });
    dialog.afterClosed().subscribe(res => {
      if (res) {
        if (idx ==-1) {
          // jika idx = -1 maka datanya dipush/ditambahkan ke elemen terakhir
          this.books.push(res);
        } else {
          this.books[idx]=res;
        }
      }
    })
  }

  deleteProduct(idx){
    var conf = confirm('Delete item ? ');
    if (conf) {
      this.books.splice(idx, 1);
    }
  }
}
