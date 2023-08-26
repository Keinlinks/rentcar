import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdProductComponent } from './id-product.component';

describe('IdProductComponent', () => {
  let component: IdProductComponent;
  let fixture: ComponentFixture<IdProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IdProductComponent]
    });
    fixture = TestBed.createComponent(IdProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
