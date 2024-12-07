import { Injectable } from "@nestjs/common";
import { PassportStrategy} from "@nestjs/passport";
import {Strategy,VerifyCallback} from 'passport-google-oauth20'

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy,'google'){
    constructor(){
        super({
            clientID:process.env.GOOGLE_CLIENT_ID,
            clientSecret:process.env.GOOGLE_SECRET,
            callbackURL:"http://localhost:5000/auth/google/callback",
            // callbackURL:"https://tgbotadminpanel.netlify.app/dashboard",
            scope:['email','profile']
        })
    }

    async validate(acessToken:string,refreshToken:string,profile:any,done:VerifyCallback ):Promise<any>{
        const {name,emails}=profile
        const user={
            email:emails[0].value,
            firstName:name.givenName,
            lastName:name.familyName,
            acessToken
        }
        done(null,user)
    }

}