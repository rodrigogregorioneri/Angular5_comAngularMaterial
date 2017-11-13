declare module User{
    
        export interface Ramo {
            id: string;
            tipo: string;
        }
    
        export interface Pesquisa {
            id: string;
            nome_pesquisa: string;
        }
    
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
    
        export interface Cargo {
            id: string;
            ocupacao: string;
            links: any[];
            $$hashKey: string;
        }
    
        export interface RootObject {
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
            iduser: string;
            celular: number;
            telefone: number;
            empresa: Empresa;
            cargo: Cargo;
        }
    
    }
    
    