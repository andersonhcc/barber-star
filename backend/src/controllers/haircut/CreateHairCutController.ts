import { Response, Request } from "express";
import { CreateHairCutService } from "../../services/haircut/CreateHairCutService";
import { HairCutRepository } from "../../repositories/haircut/HairCutRepository";

const hairCutRepository = new HairCutRepository();

class CreateHairCutController {
  async handle(req: Request, res: Response){

    const { name, price } = req.body;
    
    const user_id = req.user_id;

    if(!name || !price){
      throw new Error("Error")
    }

    const createHairCutService = new CreateHairCutService(hairCutRepository);

    const user = await createHairCutService.execute({  user_id, name, price });

    return res.json(user);


  }
}

export { CreateHairCutController };