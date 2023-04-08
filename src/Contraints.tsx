export function fn(route: string, token?: string, body?: any, method: "POST" | "GET" = "POST") {
    return fetch(API_URL + route, {
        method: method,
        headers: {
            ... token ? { Authorization:  "Bearer " + token } : {},
            "Content-Type": "application/json",
        },
        body: body ? JSON.stringify(body) : undefined,
    }).then((res) => res.json());
}

export const API_URL = "http://10.68.44.26:8080/api";
export const ME = "/me";
export const DELIVERY_STATUS = "/status"
export const WAITING_TRUCKS = "/storekeeper/waiting"
export const ACCEPT = "/storekeeper/accept"
export const AUTH = "/auth/login";
export const DELIVERY = "/security/checking";
export const SECURITY = "/security/";
export const QUEUE = "/security/queued"