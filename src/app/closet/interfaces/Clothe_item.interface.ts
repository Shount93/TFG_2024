
export interface Clothe_item {
    id:        string;
    Talla:     number;
    Color:     string;
    IdMarca:     string;
    IdTipo:    string;
    IdUsuario: string;
    alt_image?:string;
    Estacion: Estacion;
    Estilo:   Estilo;
}

export enum Color{
    Blanco = "Blanco",
    Negro = "Negro",
    Azul = "Azul",
    Rojo = "Rojo",
    Verde = "Verde",
    Amarillo = "Amarillo",
    Naranja = "Naranja",
    Marron = "Marron",
    Gris = "Gris",
    Rosa = "Rosa",
    Morado = "Morado",
}

export enum Estacion{
    Primavera = "Primavera",
    Verano = "Verano",
    Otoño = "Otoño",
    Invierno = "Invierno"
}

export enum Estilo{
    Casual = "Casual",
    Formal = "Formal",
    Deportivo = "Deportivo",
    Bohemio = "Bohemio",
    Urbano = "Urbano",
    Minimalista = "Minimalista",
    Playero = "Playero",
    Gótico = "Gótico",
    Hipster = "Hipster",
    Militar = "Militar",
    Vintage = "Vintage",
    Chic = "Chic",
    Punk = "Punk",
    Glamuroso = "Glamuroso",
    Retro = "Retro",
    Étnico = "Étnico",
    Ecuestre = "Ecuestre",
    Romántico = "Romántico",
    RetroFuturista = "Retro-futurista",
    Otro = "Otro",
}