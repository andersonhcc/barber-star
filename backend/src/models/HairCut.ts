interface HairCut {
  id: string;
  name: string;
  price: number;
  status: boolean;

  created_at?: Date;
  updated_at?: Date;

}

export { HairCut };