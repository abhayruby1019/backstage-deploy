import { Test, TestingModule } from '@nestjs/testing';
import { UserModule } from '../user.module';

describe('UserModule', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [UserModule],
    }).compile();
  });

  it('should be defined', () => {
    expect(app).toBeDefined();
  });
});

