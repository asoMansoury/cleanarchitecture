import { apiRequest, getToken, graphRequest } from "../msalConfiguration";

export class AzurePortalService{
    private readonly baseUrl:string;
    constructor({baseUrl}:{baseUrl:string}){
        this.baseUrl = baseUrl;
    }

    async getProfileUser(){

        var token = await getToken(graphRequest);

        const response = await fetch(`${this.baseUrl}/v1.0/me/photo/$value`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        const pictureBlob = await response.blob();
        const reader = new FileReader();
        reader.readAsDataURL(pictureBlob);
        
        return new Promise((resolve, reject) => {
            reader.onload = () => {
                resolve(reader.result);
            };
        
            reader.onerror = error => {
                reject(error);
            };
        });
    }
}