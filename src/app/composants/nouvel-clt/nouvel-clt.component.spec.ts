import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelCltComponent } from './nouvel-clt.component';

describe('NouvelCltComponent', () => {
  let component: NouvelCltComponent;
  let fixture: ComponentFixture<NouvelCltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouvelCltComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NouvelCltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
