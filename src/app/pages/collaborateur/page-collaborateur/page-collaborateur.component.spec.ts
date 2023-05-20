import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCollaborateurComponent } from './page-collaborateur.component';

describe('PageCollaborateurComponent', () => {
  let component: PageCollaborateurComponent;
  let fixture: ComponentFixture<PageCollaborateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCollaborateurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageCollaborateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
