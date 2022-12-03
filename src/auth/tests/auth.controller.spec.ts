import { Test, TestingModule } from "@nestjs/testing";
import { AuthController } from "../auth.controller";
import { AuthService } from "../auth.service";
import { PrismaModule } from "../../prisma/prisma.module";
import { JwtModule } from "@nestjs/jwt";
import { UsersModule } from "../../users/users.module";
import { PassportModule } from "@nestjs/passport";
import { LocalStrategy } from "../strategies/local.strategy";
import { JwtStrategy } from "../strategies/jwt.strategy";

describe('AuthController', () => {
  let controller: AuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      imports: [
        UsersModule,
        PassportModule,
        PrismaModule,
        JwtModule.register({
          secret: process.env.JWT_SECRET,
          signOptions: { expiresIn: '1 day' },
        }),
      ],
      providers: [AuthService, LocalStrategy, JwtStrategy],
    }).compile();

    controller = module.get<AuthController>(AuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
