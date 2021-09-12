import { TestBed } from '@angular/core/testing';

import { GameItemResolver } from './game-item.resolver';

describe('GameItemResolver', () => {
  let resolver: GameItemResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(GameItemResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
