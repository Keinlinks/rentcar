import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRentVisitComponent } from './page-rent-visit.component';

describe('PageRentVisitComponent', () => {
  let component: PageRentVisitComponent;
  let fixture: ComponentFixture<PageRentVisitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageRentVisitComponent]
    });
    fixture = TestBed.createComponent(PageRentVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
