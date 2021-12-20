import { TestBed } from '@angular/core/testing';

import { GetHomeDataUseCase } from './get-home-data.usecase';

describe('GetHomeDataService', () => {
  let service: GetHomeDataUseCase;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetHomeDataUseCase);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
