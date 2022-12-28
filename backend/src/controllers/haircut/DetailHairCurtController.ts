import { Response, Request } from "express";
import { HairCutRepository } from "../../repositories/haircut/HairCutRepository";
import { DetailHairCutService } from "../../services/haircut/DetailHairCutService";

const hairCutRepository = new HairCutRepository();

class DetailHairCurtController {
  async handle(request: Request, response: Response){

    const haircut_id = request.query.haircut_id as string;

    const detailHairCutService = new DetailHairCutService(hairCutRepository);

    const haircut = await detailHairCutService.execute({ haircut_id });

    return response.json(haircut);
  }
}

export { DetailHairCurtController };