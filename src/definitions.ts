export interface mixdemoPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
  unlock(options: any):Promise<any>;
}
