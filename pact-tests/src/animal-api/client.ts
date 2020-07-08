import axios, {AxiosPromise} from "axios";

export enum Animal {
    Dog="dog",
    Cat="cat",
    Horse="horse",
    Human="human"
}

export class AnimalAPIClient {
    private readonly url: string;
    private readonly port: number;

    constructor(url: string, port: number) {
        this.url = url;
        this.port = port;
    }

    public getDefinition = (animal: Animal): AxiosPromise => {
        return axios.request({
            baseURL: `${this.url}:${this.port}`,
            headers: {Accept: "application/json"},
            method: "GET",
            url: `${animal.toString()}`,
        })
    };

    public getManipulatedObject = (): AxiosPromise => {
        return axios.request({
            baseURL: `${this.url}:${this.port}`,
            headers: {Accept: "application/json"},
            method: "GET",
            url: `manipObject`,
        })
    }
}
