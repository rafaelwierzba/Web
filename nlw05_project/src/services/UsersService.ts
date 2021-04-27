import {getCustomRepository, Repository} from "typeorm";
import { User } from "../entities/User";
import {UsersRepository} from "../repositories/UsersRepository"

class UsersService{
    [x: string]: any;
    private usersRepository: Repository<User>;

    constructor(){
        this.usersRepository = getCustomRepository(UsersRepository);
    }

    async create(email: string){
        //Verificar se o usuario existe
        const userExists = await this.usersRepository.findOne({
            email
        });
        //Se exixtir, retornar o usuario 
            if(userExists){
                return userExists;
            }
        //Se não existir, salvar no DB
            const user = this.usersRepository.create({
                email
            })
            await this.usersRepository.save(user);
            return user;
      
    }
}

export {UsersService}