export class Receita{
    private _nome: string;
    private _ingediente: string[];
    private _preparo!: string;
    private _criador!: string;
    private _historia!: string;
    private _tipo!: number;
    private _image!: string;
   
    constructor(nome: string, ingrediente: string[], preparo: string){
     this._nome = nome;
      this._ingediente = ingrediente;
     this._preparo = preparo;
    }
    
    //nome
    public get nome() : string{
     return this._nome;
    }
    public set nome(nome: string){
     this._nome = nome;
    }

    //criador
    public get criador() : string{
        return this._criador;
    }
    public set criador(criador: string){
        this._criador = criador;
    }

    //hitoria
    public get historia() : string{
        return this._historia;
    }
    public set historia(historia: string){
        this._historia = historia;
    }

    //preparo
    public get preparo() : string{
     return this._preparo;
    }
    public set preparo(preparo: string){
     this._preparo = preparo;
    }

    //ingredientes
    public get ingediente(): string[] {
        return this._ingediente;
    }
    public set ingediente(ingediente: string[]) {
        this._ingediente = ingediente;
    }

    //tipo
    public get tipo(): number {
        return this._tipo;
    }
    public set tipo(value: number) {
        this._tipo = value;
    }

    //tipo
    public get image(): string {
        return this._image;
    }
    public set image(image: string) {
        this._image = image;
    }
   
   
   
   }