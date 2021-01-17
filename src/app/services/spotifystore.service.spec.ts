import { TestBed } from '@angular/core/testing';

import { SpotifystoreService } from './spotifystore.service';

describe('SpotifystoreService', () => {
  let service: SpotifystoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpotifystoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
