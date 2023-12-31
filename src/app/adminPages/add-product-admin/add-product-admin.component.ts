import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { carModel_Interface } from 'src/app/models/carResponse';
import { ProductStateService } from 'src/app/productService/product-state.service';

@Component({
  selector: 'app-add-product-admin',
  templateUrl: './add-product-admin.component.html',
  styleUrls: ['./add-product-admin.component.scss'],
})
export class AddProductAdminComponent {
  addForms!: FormGroup;
  disabledButton: boolean = false;
  textButton: string = 'Agregar';
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private productService: ProductStateService
  ) {
    this.addForms = fb.group({
      model: ['', Validators.required],
      year: [0, Validators.required],
      price: [0, Validators.required],
      km: [0, Validators.required],
      color: ['', Validators.required],
      description: [''],
    });
  }
  @ViewChild('image', { static: false }) fileInput!: ElementRef;
  submit() {
    if (this.addForms.valid) {
      const formResult = this.addForms.value;
      const image = this.fileInput.nativeElement.files[0];
      const newCarPacket: carModel_Interface = {
        description: formResult.description,
        model: formResult.model,
        year: formResult.year,
        price: formResult.price,
        km: formResult.km,
        color: formResult.color,
        currentClientId: 0,
      };
      this.disabledButton = true;
      this.textButton = 'Agregando...';
      this.productService
        .addCar(newCarPacket, image)
        .pipe(
          catchError((error) => {
            this.disabledButton = false;
            this.textButton = 'Agregar';
            console.error('Error:', error);
            alert('Error al agregar vehiculo');
            return [];
          })
        )
        .subscribe((result) => {
          this.disabledButton = false;
          this.textButton = 'Agregar';

          alert('El vehiculo está en la base de datos!');
          this.addForms.reset();
        });
    }
  }
}
