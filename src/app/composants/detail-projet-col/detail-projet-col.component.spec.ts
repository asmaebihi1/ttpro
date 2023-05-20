import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailProjetColComponent } from './detail-projet-col.component';

describe('DetailProjetColComponent', () => {
  let component: DetailProjetColComponent;
  let fixture: ComponentFixture<DetailProjetColComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailProjetColComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailProjetColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
