import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMvtStkMaterielComponent } from './detail-mvt-stk-materiel.component';

describe('DetailMvtStkMaterielComponent', () => {
  let component: DetailMvtStkMaterielComponent;
  let fixture: ComponentFixture<DetailMvtStkMaterielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailMvtStkMaterielComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailMvtStkMaterielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
