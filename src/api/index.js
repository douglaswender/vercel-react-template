import axios from 'axios';

const url = "http://covid19.sesau.ro.gov.br/Indicadores/mapaConfirmadosObitos";

export const fetchData = async () => {
    try{
        const response = await axios.get(url);
        return response;
    }catch(e){
        console.log(e);
    }
}