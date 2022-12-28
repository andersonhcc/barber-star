import { IHairCutRepository } from '../../repositories/haircut/IHairCutRepository';

interface IResponse {
  user_id: string;
}

class VerifySignatureService {
  constructor(private hairCutRepository: IHairCutRepository) {}
  
  async execute({ user_id } : IResponse){

    const verify = await this.hairCutRepository.verifySignature({ user_id });

    return verify;


  }


}

export { VerifySignatureService } ; 