import axios from 'axios';
import {CreateClientDto} from "./dto/create-client.dto";
import {ClientGot} from "./dto/get-client.dto";

export default class ClientsApiService {
    private API_URL = 'http://localhost:3000/api/v1/clients';

    public getClients(): Promise<ClientGot[]> {
        return new Promise(async (resolve, reject) => {
            try {
                const {data, status} = await axios.get<ClientGot[]>(this.API_URL);

                resolve(data);
            } catch (error: any) {
                reject({
                    error
                });
            }
        })
    }

    public createClient(createClientDto: CreateClientDto) {
        return new Promise(async (resolve, reject) => {
            try {
                const { data, status } =  await axios.post(this.API_URL, createClientDto, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                resolve({
                   data,
                   status
                });
            } catch (error: any) {
                reject(error);
            }
        });
    }
}
