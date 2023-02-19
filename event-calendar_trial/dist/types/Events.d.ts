import type { IApi, TMethodsConfig } from "@xbs/lib-scheduler";
export declare class Events {
    private _api;
    constructor(api: IApi);
    on<K extends keyof TMethodsConfig>(event: K, callback: (config: TMethodsConfig[K]) => any): void;
    exec<K extends keyof TMethodsConfig>(event: K, data: TMethodsConfig[K]): void;
}
