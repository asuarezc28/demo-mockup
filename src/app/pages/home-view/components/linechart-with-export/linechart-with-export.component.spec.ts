import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinechartWithExportComponent } from './linechart-with-export.component';

describe('LinechartWithExportComponent', () => {
  let component: LinechartWithExportComponent;
  let fixture: ComponentFixture<LinechartWithExportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinechartWithExportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinechartWithExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
