import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuToSidebarComponent } from './menu-to-sidebar.component';

describe('MenuToSidebarComponent', () => {
  let component: MenuToSidebarComponent;
  let fixture: ComponentFixture<MenuToSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuToSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuToSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
