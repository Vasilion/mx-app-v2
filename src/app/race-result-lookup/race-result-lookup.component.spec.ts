import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceResultLookupComponent } from './race-result-lookup.component';

describe('RaceResultLookupComponent', () => {
  let component: RaceResultLookupComponent;
  let fixture: ComponentFixture<RaceResultLookupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaceResultLookupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceResultLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
