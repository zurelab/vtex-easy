import axios from 'axios';

const google = axios.get('https://google.com/');

function chama(param: string): string {
    return 'chamaaaaa';
}

export {
    google,
    chama,
}
