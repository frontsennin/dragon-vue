import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://dragonball-api.com/api',
    headers: {
        'Content-Type': 'application/json',
    }
});

apiClient.interceptors.response.use(
    response => response,
    error => {
        // Tratamento de erros
        console.error('API Error:', error.response);
        return Promise.reject(error);
    }
);

const dragonballService = {
    getAllCharacters() {
        return apiClient.get(`/characters?limit=2000`)
    },
    getCharacterById(id) {
        return apiClient.get(`/characters/${id}`)
    },
};

export default dragonballService;