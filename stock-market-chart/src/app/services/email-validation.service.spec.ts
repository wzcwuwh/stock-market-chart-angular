import { TestBed } from '@angular/core/testing';

import { EmailValidationService } from './email-validation.service';

describe('EmailValidationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmailValidationService = TestBed.get(EmailValidationService);
    expect(service).toBeTruthy();
  });
});
