export interface RegisDetails {
    name:string,
    email:string,
    pass:string,
    rpass:string
  }
export interface UniqueConstraintError {
    errorNum: Number;
    offset: Number;
  }
export interface InsertedSuccess {
    lastRowid: String;
    rowsAffected: Number;
  }
export interface Read {
      Result: [];
  }
export interface LoginDetails{
  name:string;
  pass:string;
}