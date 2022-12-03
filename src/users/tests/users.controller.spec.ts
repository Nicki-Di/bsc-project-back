import { Test, TestingModule } from "@nestjs/testing";
import { UsersController } from "../users.controller";
import { UsersService } from "../users.service";
import { PrismaModule } from "../../prisma/prisma.module";

describe('UsersController', () => {
  let usersController: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
      imports: [PrismaModule],
    }).compile();
    usersController = module.get<UsersController>(UsersController);
  });

  describe('POST /users/findByUsername', () => {
    it('should return an array of cats', async () => {
      const result = await usersController.findByUsername({
        username: 'test@gmail.com',
      });
      expect(result.username).toBe('test@gmail.com');
    });
  });
});
