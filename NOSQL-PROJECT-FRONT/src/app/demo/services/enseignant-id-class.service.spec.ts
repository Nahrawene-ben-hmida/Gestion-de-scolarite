import { TestBed } from '@angular/core/testing';

import { EnseignantIdClassService } from './enseignant-id-class.service';

describe('EnseignantIdClassService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnseignantIdClassService = TestBed.get(EnseignantIdClassService);
    expect(service).toBeTruthy();
  });
});
