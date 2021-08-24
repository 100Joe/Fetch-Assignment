import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('accounts')
export class accountsController {
  // Getting the data from Server.
  @Get()
  // findAll is a dynamic name. You can add to it to be more specific.
  findAll(): string {
    return 'This action returns all accounts!';
  }

  @Get(':id') //accounts/id
  // findOne is a dynamic name. You can add to it to be more specific.
  findOne(@Param('id') id: string) {
    return `Acount associated with account number ${id}`;
  }

  // This is creating an entirely new thing on the server.
  @Post()
  create(@Body() Body: string) {
    return `points used 5000`;
  }

  // This will update the server with the new information from post.
  @Patch(':id') //accounts/id
  update(@Param('id') id: string, @Body() Body: string) {
    return `Thank you payer, you have points to use next time.`;
  }

  // This will remove certain data from the server
  @Delete(':id')
  remove(@Param('id') id: string) {
    return `These points have been used`;
  }
}
