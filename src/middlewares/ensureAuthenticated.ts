import { Request, Response, NextFunction } from "express"
import { verify } from "jsonwebtoken"

interface  IPayLoad {
    sub: string;

}

export function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction,
){
    //Receber token
    const authtoken = request.headers.authorization
    
    //Validar se token está preenchido
    if(!authtoken){
        return response.status(401).end();
    }
    const [,token] = authtoken.split(" ")

    //Validar se token é válido
    try {
    const { sub } = verify( token ,"bda04bba66ea267907030fc2ed7b37e4" ) as IPayLoad
    
    //Recuperar informaçoes do usuário
    request.user_id = sub;

    return next();
    } catch (error) {
        return response.status(401).end()   
    }


}