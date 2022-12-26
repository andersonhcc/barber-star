import { Response, Request } from "express";
import { HairCutRepository } from "../../repositories/haircut/HairCutRepository";
import { UpdateHairService } from "../../services/haircut/UpdateHairCutService";

const hairCutRepository = new HairCutRepository();

class UpdateHairController {
  async handle(req: Request, res: Response){
    const user_id = req.user_id;
    const { name, price, status, haircut_id } = req.body;

    const updateHairService = new UpdateHairService(hairCutRepository);

    const haircut = await updateHairService.execute({ name, price, status, haircut_id, user_id });

    return res.json(haircut);

  }
}

export { UpdateHairController };