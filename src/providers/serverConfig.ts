import {HttpHeaders} from "@angular/common/http";

export const SERVICE_CONFIG = {
    headers: new HttpHeaders()
    .append("Content-Type", "application/json")
    .append("Access-Control-Allow-Origin", "*"),
    apiUrl: "http://localhost:3000"
}