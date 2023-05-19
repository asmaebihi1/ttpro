import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelProjetComponent } from './nouvel-projet.component';

describe('NouvelProjetComponent', () => {
  let component: NouvelProjetComponent;
  let fixture: ComponentFixture<NouvelProjetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouvelProjetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NouvelProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
