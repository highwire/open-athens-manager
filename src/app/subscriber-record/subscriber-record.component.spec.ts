import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriberRecordComponent } from './subscriber-record.component';

describe('SubscriberRecordComponent', () => {
  let component: SubscriberRecordComponent;
  let fixture: ComponentFixture<SubscriberRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscriberRecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriberRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
