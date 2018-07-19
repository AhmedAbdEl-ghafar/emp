import { TestBed, inject } from '@angular/core/testing';

import { EmpserviceService } from './empservice.service';

describe('EmpserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmpserviceService]
    });
  });

  it('should be created', inject([EmpserviceService], (service: EmpserviceService) => {
    expect(service).toBeTruthy();
  }));
});
