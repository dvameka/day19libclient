import { TestBed, inject } from '@angular/core/testing';

import { GrocerDBService } from './grocerDB.service';

describe('GrocerDBService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GrocerDBService]
    });
  });

  it('should be created', inject([GrocerDBService], (service: GrocerDBService) => {
    expect(service).toBeTruthy();
  }));
});
