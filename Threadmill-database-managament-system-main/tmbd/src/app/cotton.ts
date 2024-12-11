export interface CottonDetails{
    ID:string,
    TOC:string,
    QIN:string,
    ETWC:string,
    LOC:string
}
export interface UniqueConstraintError{
    errorNum: Number;
    offset: Number;
}
export interface InsertedSuccess{
    lastRowid:String;
    rowsAffected:Number;
}
export interface Read{
    Result:[];
}