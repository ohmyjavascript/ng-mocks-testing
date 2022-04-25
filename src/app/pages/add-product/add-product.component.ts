import { ProductService } from './../../services/product.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  isAdded = false;
  @ViewChild('f') addForm: NgForm;

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const product = form.value;
    this.productService.addProductToDB(product).subscribe(
      _data => {
        this.isAdded = true;
        this.addForm.resetForm();
      }
    )
  }

}
