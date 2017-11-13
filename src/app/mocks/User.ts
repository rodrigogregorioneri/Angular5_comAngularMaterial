import { Cargo } from '../mocks/Cargo';
import { Empresa } from '../mocks/Empresa';

export interface User {
    email: string;
    name: string;
    login: string;
    password: string;
    theme: string;
    nome: string;
    sobrenome: string;
    idade: number;
    escolaridade: string;
    classificacao: string;
    curso: string;
    skype: string;
    whatsapp: string;
    facebook: string;
    instagram: string;
    linkedin: string;
    telefone: number;
    celular: number;
    iduser: string;
    empresa: Empresa;
    cargo: Cargo;
    picture: string;
}