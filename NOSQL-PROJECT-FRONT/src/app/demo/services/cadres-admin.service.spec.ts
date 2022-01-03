import { TestBed } from '@angular/core/testing';

import { CadresAdminService } from './cadres-admin.service';

describe('CadresAdminService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CadresAdminService = TestBed.get(CadresAdminService);
    expect(service).toBeTruthy();
  });
});
