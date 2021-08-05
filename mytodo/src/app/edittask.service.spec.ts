import { TestBed } from '@angular/core/testing';

import { EdittaskService } from './edittask.service';

describe('EdittaskService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EdittaskService = TestBed.get(EdittaskService);
    expect(service).toBeTruthy();
  });
});
