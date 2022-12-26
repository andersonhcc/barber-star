interface Subscription {
  id: string;
  status: string;
}

interface User {
  id: string;
  name: string;
  email: string;
  endereco?: string;
  stripe_customer_id?: string;
  token?: string;
  subscriptions?: Subscription;
  created_at?: Date;
  updated_at?: Date;
}


export { User };