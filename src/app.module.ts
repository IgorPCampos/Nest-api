import { forwardRef, Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from "./user/user.module";
import { AuthModule } from "./auth/auth.module";
import { ThrottlerGuard, ThrottlerModule } from "@nestjs/throttler";
import { APP_GUARD } from "@nestjs/core";
import { ConfigModule } from "@nestjs/config";
import { MailerModule } from "@nestjs-modules/mailer";
import { PugAdapter } from "@nestjs-modules/mailer/dist/adapters/pug.adapter";

@Module({
    imports: [
        ConfigModule.forRoot(),
        ThrottlerModule.forRoot(),
        forwardRef(() => UserModule),
        forwardRef(() => AuthModule),
        MailerModule.forRoot({
            transport: {
                host: "smtp.ethereal.email",
                port: 587,
                auth: {
                    user: "whitney73@ethereal.email",
                    pass: "MMeyE7rCUzQwnq1G9D"
                }
            },
            defaults: {
                from: '"nest-modules" <whitney73@ethereal.email>'
            },
            template: {
                dir: __dirname + "/templates",
                adapter: new PugAdapter(),
                options: {
                    strict: true
                }
            }
        })
    ],
    controllers: [AppController],
    providers: [
        AppService,
        {
            provide: APP_GUARD,
            useClass: ThrottlerGuard
        }
    ],
    exports: [AppService]
})
export class AppModule {}
