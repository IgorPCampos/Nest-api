import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    Put,
} from "@nestjs/common";

@Controller("users")
export class UserController {
    @Get()
    async read() {
        return { users: [] };
    }

    @Get(":id")
    async readOne(@Param() params) {
        return { user: [], params };
    }

    @Post()
    async create(@Body() body) {
        return { body };
    }

    @Patch(":id")
    async updatePartial(@Body() body, @Param() params) {
        return {
            body,
            params,
        };
    }

    @Put(":id")
    async update(@Body() body, @Param() params) {
        return {
            body,
            params,
        };
    }

    @Delete(":id")
    async delete(@Param() params) {
        return { params };
    }
}
