import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(
    
   ){ }

   googleLogin(req){
    if(!req.user){
      return "No user from google"
    }
    return {
      message:"user info recieeved",
      user:req.user
    }
   }

   getUser(req){
    return req.user;
   }

  // async create(data:any){
  //   return this.adminModel.create(data);
  // }

  // async findOne(data:any){
  //     return this.adminModel.findOne(data);
    
  // }

}
