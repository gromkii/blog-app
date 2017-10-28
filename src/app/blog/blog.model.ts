export class Blog {
  public id:number;
  public post_text:string;
  public user_id:number;
  public created_at:string;

  constructor(
    id:number,
    post_text:string,
    user_id:number,
    created_at:string
  ) { }
}
