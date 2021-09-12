import { TestBed } from '@angular/core/testing';

import { FriendRelationsService } from './friend-relations.service';

describe('FriendRelationsService', () => {
  let service: FriendRelationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FriendRelationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
