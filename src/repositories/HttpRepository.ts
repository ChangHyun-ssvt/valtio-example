export default interface HttpRepository {
  get<T>(url: string): Promise<T>;
  post<T>(url: string): Promise<T>;
  delete<T>(url: string): Promise<T>;
  update<T>(url: string): Promise<T>;
}
