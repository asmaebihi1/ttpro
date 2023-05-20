import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailColFrsComponent } from './detail-col-frs.component';

describe('DetailColFrsComponent', () => {
  let component: DetailColFrsComponent;
  let fixture: ComponentFixture<DetailColFrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailColFrsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailColFrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
