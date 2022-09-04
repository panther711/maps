// Las interfaces del objeto para llamar y obtener los datos del buscador para poder encontrar la ubicacion del mapa

export interface PlacesResponse {
    type: string;
    query: string[];
    features: Feature[];
    attribution: string;
}

export interface Feature {
    id: string;
    type: string;
    place_type: string[];
    relevance: number;
    properties: Properties;
    text_es: string;
    place_name_es: string;
    text: string;
    place_name: string;
    center: number[];
    geometry: Geometry;
    context: Context[];
    bbox?: number[];
    language_es?: Language;
    language?: Language;
    matching_text?: string;
    matching_place_name?: string;
}

export interface Context {
    id: string;
    text_es: string;
    text: string;
    wikidata?: string;
    language_es?: Language;
    language?: Language;
    short_code?: string;
}

export enum Language {
    Es = "es",
}

export interface Geometry {
    coordinates: number[];
    type: string;
}

export interface Properties {
    foursquare?: string;
    landmark?: boolean;
    address?: string;
    category?: string;
    accuracy?: string;
    wikidata?: string;
}