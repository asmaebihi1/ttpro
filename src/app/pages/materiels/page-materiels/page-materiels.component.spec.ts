import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMaterielsComponent } from './page-materiels.component';

describe('PageMaterielsComponent', () => {
  let component: PageMaterielsComponent;
  let fixture: ComponentFixture<PageMaterielsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageMaterielsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageMaterielsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
