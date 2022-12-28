import { Response, Request } from "express";
import { HairCutRepository } from "../../repositories/haircut/HairCutRepository";
import { VerifySignatureService } from "../../services/haircut/VerifySignatureService";

const hairCutRepository = new HairCutRepository();

class VerifySignatureController {
  
  async handle(req: Request, res: Response){

    const user_id = req.user_id;


    const verifySignatureService = new VerifySignatureService(hairCutRepository);

    const verify = await verifySignatureService.execute({ 
      user_id 
    });

    res.json(verify);


  }

}

export { VerifySignatureController };