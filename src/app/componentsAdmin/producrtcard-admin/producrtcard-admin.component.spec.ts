import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducrtcardAdminComponent } from './producrtcard-admin.component';

describe('ProducrtcardAdminComponent', () => {
  let component: ProducrtcardAdminComponent;
  let fixture: ComponentFixture<ProducrtcardAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProducrtcardAdminComponent]
    });
    fixture = TestBed.createComponent(ProducrtcardAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
