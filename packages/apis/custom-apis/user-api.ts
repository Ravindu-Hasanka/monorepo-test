class UserAPIsWithoutAuth<T = any> extends BaseAPIsWithoutAuth<T> {
  contorller: string = 'users';
  constructor() {
      super();
  }

  private getURL(path: string = ''): string {
      return `${this.baseURL}/${this.contorller}${path}`;
  }

  async getUserById(userId: number): Promise<T> {
      return this.get(`${this.getURL()}/${userId}`);
  }

  async createUser<U>(userData: U): Promise<T> {
      return this.post(this.getURL(), userData);
  }
}