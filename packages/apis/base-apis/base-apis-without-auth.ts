class BaseAPIsWithoutAuth<T = any> {
    baseURL: string;
    
    constructor() {
        this.baseURL = 'https://api.example.com';
    }

    async get(path: string): Promise<T> {
        const response = await fetch(`${this.baseURL}${path}`);
        return response.json() as Promise<T>;
    }

    async post<U>(path: string, data: U): Promise<T> {
        const response = await fetch(`${this.baseURL}${path}`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.json() as Promise<T>;
    }
}
