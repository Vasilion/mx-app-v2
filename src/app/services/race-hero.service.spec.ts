import { TestBed } from '@angular/core/testing';

import { RaceHeroService } from './race-hero.service';

describe('RaceHeroServiceService', () => {
  let service: RaceHeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RaceHeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
