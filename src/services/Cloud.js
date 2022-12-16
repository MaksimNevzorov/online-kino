import { initializeApp } from "firebase/app";
import { API_KEY, APP_ID } from "../constants/envValues";

export class CloudServices {
    constructor() {
        this.config = {
          apiKey: API_KEY,
          authDomain: "my-online-cinema-3.firebaseapp.com",
          projectId: "my-online-cinema-3",
          storageBucket: "my-online-cinema-3.appspot.com",
          messagingSenderId: "753537838822",
          appId: APP_ID
        };
        
        this.app = initializeApp(this.config)
    }
}

export  const cloudService = new CloudServices()