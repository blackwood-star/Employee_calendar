import { Events } from "./Events";
import { IApi, TMethodsConfig } from "@xbs/lib-scheduler";
import type { en } from "@xbs/lib-scheduler";
import type { ICalendar, IDataConfig, IEventData, TID } from "@xbs/lib-scheduler/dist/types";
export declare type IEventTemplate = (event: IEventData, calendar: ICalendar) => string;
declare type ITheme = "willow" | "material" | "willowDark";
export interface ISchedulerConfig extends Partial<IDataConfig> {
    locale?: typeof en;
    theme?: ITheme;
    templates?: {
        monthEvent?: IEventTemplate;
        weekEvent?: IEventTemplate;
        multievent?: IEventTemplate;
        popup?: IEventTemplate;
        header?: (date: Date, dateFormat: string) => string;
    };
}
export default class EventCalendar {
    api: IApi;
    events: Events;
    config: ISchedulerConfig;
    container: HTMLElement;
    private _widget;
    constructor(container: HTMLElement, config: ISchedulerConfig);
    destructor(): void;
    setConfig(config: Partial<ISchedulerConfig>): void;
    parse(data: IEventData[] | {
        events: IEventData[];
        calendars: ICalendar[];
    }): void;
    serialize(): {
        events: IEventData[];
        calendars: ICalendar[];
    };
    addEvent(config: TMethodsConfig["add-event"]): void;
    deleteEvent(config: TMethodsConfig["delete-event"]): void;
    updateEvent(config: TMethodsConfig["update-event"]): void;
    updateCalendar(config: TMethodsConfig["update-calendar"]): void;
    addCalendar(config: TMethodsConfig["add-calendar"]): void;
    deleteCalendar(config: TMethodsConfig["delete-calendar"]): void;
    getCalendar(config: {
        id: TID;
    }): any;
    toggleSidebar(config?: TMethodsConfig["toggle-sidebar"]): void;
    setMode(config: TMethodsConfig["set-mode"]): void;
    setDate(config: TMethodsConfig["set-date"]): void;
    showEventInfo(config: {
        id: TID;
    }): void;
    hideEventInfo(): void;
    createEvent(): void;
    openEditor(config: {
        id: TID;
    }): void;
    closeEditor(): void;
    getState(): any;
    getEvent(config: {
        id: TID;
    }): any;
    setLocale(locale: typeof en): void;
    setTheme(theme: ITheme): void;
    private _init;
    private _configToProps;
}
export declare function injectTemplate(Component: any, template: any): any;
export {};
