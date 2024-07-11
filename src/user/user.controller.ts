import {
    Body,
    Controller,
    Delete,
    Get,
    Patch,
    Post,
    Put,
    UseInterceptors,
} from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user.dto";
import { UpdatePutUserDTO } from "./dto/update-put-user.dto";
import { UpdatePatchUserDTO } from "./dto/update-patch-user.dto";
import { UserService } from "./user.service";
import { LogInterceptor } from "src/interceptors/log.interceptor";
import { ParamId } from "src/decorators/param-id.decorator";

@UseInterceptors(LogInterceptor) //Coloca o interceptor em todas as rotas
@Controller("users")
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    async list() {
        return this.userService.list();
    }

    @Get(":id")
    async listOne(@ParamId() id: number) {
        return this.userService.listOne(id);
    }

    @UseInterceptors(LogInterceptor) //Coloca o interceptor somente nessa rota
    @Post()
    async create(@Body() data: CreateUserDTO) {
        return this.userService.create(data);
    }

    @Patch(":id")
    async updatePartial(
        @Body() data: UpdatePatchUserDTO,
        @ParamId() id: number,
    ) {
        return this.userService.updatePartial(id, data);
    }

    @Put(":id")
    async update(@Body() data: UpdatePutUserDTO, @ParamId() id: number) {
        return this.userService.update(id, data);
    }

    @Delete(":id")
    async delete(@ParamId() id: number) {
        return this.userService.delete(id);
    }
}
