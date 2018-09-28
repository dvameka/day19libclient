import { TestBed, inject } from '@angular/core/testing';

import { BooklibDBService } from './booklibDB.service';

describe('BooklibDBService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BooklibDBService]
    });
  });

  it('should be created', inject([BooklibDBService], (service: BooklibDBService) => {
    expect(service).toBeTruthy();
  }));
});
