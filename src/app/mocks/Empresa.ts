import { Ramo } from '../mocks/Ramo';
import { Pesquisa } from '../mocks/Pesquisa';
export interface Empresa {
    id: string;
    razao: string;
    qtdFuncionarios: number;
    cnpj: number;
    segmento: string;
    ramo: Ramo;
    pesquisa: Pesquisa;
    links: any[];
    $$hashKey: string;
}