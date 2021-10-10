import './alias/index.js';
import axios from 'axios';
import vtex from '@/repository/VtexApi';


const google = axios.get('https://google.com/');

function chama(param: string): string {
    return 'chamaaaaa';
}

export {
    google,
    chama,
    vtex,
}
