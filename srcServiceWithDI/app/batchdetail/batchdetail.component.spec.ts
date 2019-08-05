import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchdetailComponent } from './batchdetail.component';

describe('BatchdetailComponent', () => {
  let component: BatchdetailComponent;
  let fixture: ComponentFixture<BatchdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatchdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
