import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinechartWithValueComponent } from './linechart-with-value.component';

describe('LinechartWithValueComponent', () => {
  let component: LinechartWithValueComponent;
  let fixture: ComponentFixture<LinechartWithValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinechartWithValueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinechartWithValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
