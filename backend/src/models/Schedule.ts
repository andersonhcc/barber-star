interface Schedule {

  id: string;
  customer: string;

  created_at?: Date;
  updated_at?: Date;
  
  haircut_id: string;
  user_id: string;

}

export { Schedule };