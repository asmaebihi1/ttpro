import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCmdColFrsComponent } from './page-cmd-col-frs.component';

describe('PageCmdColFrsComponent', () => {
  let component: PageCmdColFrsComponent;
  let fixture: ComponentFixture<PageCmdColFrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCmdColFrsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageCmdColFrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
