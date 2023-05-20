import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelFrsComponent } from './nouvel-frs.component';

describe('NouvelFrsComponent', () => {
  let component: NouvelFrsComponent;
  let fixture: ComponentFixture<NouvelFrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouvelFrsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NouvelFrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
