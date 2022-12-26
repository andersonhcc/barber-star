import { Response, Request } from "express";
import { ListHairCutService } from "../../services/haircut/ListHairCutService";
import { HairCutRepository } from "../../repositories/haircut/HairCutRepository";

const hairCurtRepository = new HairCutRepository();

class ListHairCutController {
  async handle(request: Request, response: Response){
    const user_id = request.user_id;
    const status = request.query.status as string;


    const listHairCutService = new ListHairCutService(hairCurtRepository);

    const hairCurt = await listHairCutService.execute({ user_id, status });

    return response.json(hairCurt);

  }

}

export { ListHairCutController };