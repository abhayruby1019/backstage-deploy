import { Test, TestingModule } from '@nestjs/testing';
import { ValuesNameController } from '../${{values.name}}.controller';
import { ValuesNameService } from '../${{values.name}}.service';

describe('UserController', () => {
  let userController: ValuesNameController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ValuesNameController],
      providers: [ValuesNameService],
    }).compile();

    userController = app.get<ValuesNameController>(ValuesNameController);
  });

  describe('root', () => {
    it('should return "ValuesName"', () => {
      const user = { email: 'abc@gmail.com', password: 'abc' };
      expect(userController.getUser()).toMatchObject(user);
    });
  });
});
