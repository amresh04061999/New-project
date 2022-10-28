import { TestBed } from '@angular/core/testing';

import { CanDectiveGuard } from './can-dective.guard';

describe('CanDectiveGuard', () => {
  let guard: CanDectiveGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanDectiveGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
