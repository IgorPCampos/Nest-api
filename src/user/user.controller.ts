import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Patch,
    Post,
    Put,
} from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user.dto";
import { UpdatePutUserDTO } from "./dto/update-put-user.dto";
import { UpdatePatchUserDTO } from "./dto/update-patch-user.dto";

@Controller("users")
export class UserController {
    @Get()
    async read() {
        return { users: [] };
    }

    @Get(":id")
    async readOne(@Param("id", ParseIntPipe) id: number) {
        return { user: [], id };
    }

    @Post()
    async create(@Body() { email, name, password }: CreateUserDTO) {
        return { email, name, password };
    }

    @Patch(":id")
    async updatePartial(
        @Body() { email, name, password }: UpdatePatchUserDTO,
        @Param("id", ParseIntPipe) id: number,
    ) {
        return {
            email,
            name,
            password,
            id,
        };
    }

    @Put(":id")
    async update(
        @Body() { email, name, password }: UpdatePutUserDTO,
        @Param("id", ParseIntPipe) id: number,
    ) {
        return {
            email,
            name,
            password,
            id,
        };
    }

    @Delete(":id")
    async delete(@Param("id", ParseIntPipe) id: number) {
        return { id };
    }
}
