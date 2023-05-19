import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMaterielComponent } from './detail-materiel.component';

describe('DetailMaterielComponent', () => {
  let component: DetailMaterielComponent;
  let fixture: ComponentFixture<DetailMaterielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailMaterielComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailMaterielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
