import { Response, Request } from "express";
import { HairCutRepository } from "../../repositories/haircut/HairCutRepository";
import { CountHairCutService } from "../../services/haircut/CountHairCutService";

const hairCutRepository = new HairCutRepository();

class CountHairCutController {

  async handle(req: Request, res: Response){

    const user_id = req.user_id;

    const countHairCutService = new CountHairCutService(hairCutRepository);

    const count = await countHairCutService.execute({ user_id });

    return res.json(count);

  }

}

export { CountHairCutController };