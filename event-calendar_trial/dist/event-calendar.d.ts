declare type TDataBlock = {
    in: string[];
    out: string[];
    exec: any;
    length?: number;
};
declare type TDataConfig = TDataBlock[];
declare type TID$1 = number | string;
declare type TDispatch$1<T> = <A extends keyof T>(action: A, data: T[A]) => void;
interface DataHash {
    [key: string]: any;
}
interface IWritable<T> {
    subscribe: (fn: (v: T) => any) => any;
    update: (fn: (v: T) => any) => any;
    set: (val: T) => any;
}
declare type TWritableCreator = (val: any) => IWritable<typeof val>;

declare type TState<Type> = {
    [Property in keyof Type]: IWritable<Type[Property]>;
};
declare class Store<T extends DataHash> {
    private _state;
    private _values;
    private _writable;
    constructor(writable: TWritableCreator);
    setState(data: Partial<T>): void;
    getState(): T;
    getReactive(): TState<T>;
    private _wrapWritable;
}

declare class EventBus<T> {
    private _handlers;
    protected _nextHandler: TDispatch$1<T>;
    constructor();
    on(name: string, handler: any): void;
    exec(name: string, ev: any): void;
    setNext(next: TDispatch$1<T>): void;
}

declare type TMethodsConfig = IDataMethodsConfig;
declare type TDispatch = <A extends keyof TMethodsConfig>(action: A, data: TMethodsConfig[A]) => void;
interface IDataConfig {
    events: IEventData[];
    selected: IEventData;
    popupInfo: boolean;
    edit: "add" | "update" | boolean;
    mode: string;
    date: Date;
    dateRange?: Date[];
    sidebar: {
        show: boolean;
    } | false;
    bounds: [Date, Date];
    editorShape?: TEditorShape[];
    calendars?: ICalendar[];
    config: ISchedulerConfig$1;
    datepicker: TDatepickerConfig;
    colors?: IColorSchema[];
}
interface IViewConfig {
    cellClass?: (date: Date) => string;
    template?: (event: IEventData) => string;
    [key: string]: any;
}
interface IReadonlyConfig {
    dragResize?: boolean;
    readonly?: boolean;
    dragMove?: boolean;
}
interface ISchedulerConfig$1 extends IReadonlyConfig {
    tableHeaderHeight?: number;
    autoSave?: boolean;
    timeStep?: number;
    dragCreate?: boolean;
    eventInfoOnClick?: boolean;
    eventsOverlay?: boolean;
    eventHeight?: number;
    timeRange?: [number, number];
    editorOnDblClick?: boolean;
    createEventOnDbClick?: boolean;
    defaultEventDuration?: number;
    views?: {
        [key: string]: IViewConfig;
    };
    weekStartsOn?: number;
}
interface IData {
    events: IEventData[];
    selected: IEventData;
    popupInfo: boolean;
    edit: "add" | "update" | boolean;
    mode: string;
    date: Date;
    bounds: [Date, Date];
    viewSize: {
        width: number;
        height: number;
    };
    viewData: any[];
    viewModel: any;
    editorShape?: TEditorShape[];
    calendars?: ICalendar[];
    config: ISchedulerConfig$1;
    datepicker: TDatepickerConfig;
    sidebar: {
        show: boolean;
    } | false;
    colors: IColorSchema[];
}
interface IApi {
    exec: any;
    on: any;
    getState: any;
    getReactiveState: any;
    setNext: (ev: IEventBus) => void;
    getStores: () => {
        state: DataStore;
    };
    intercept: any;
}
interface IEventBus {
    exec(name: string, ev: any): void;
    setNext(next: TDispatch): void;
}
declare type IOption = {
    id: TID;
    label?: string;
    [key: string]: any;
};
declare type TCommonShape = {
    key: string | any;
    label?: string;
    id?: TID;
};
declare type ICommonConfig = {
    disabled?: boolean;
    placeholder?: string;
    [key: string]: any;
};
declare type TTextFieldShape = TCommonShape & {
    type: "text" | "textarea";
    config?: ICommonConfig & {
        readonly?: boolean;
        focus?: boolean;
        type?: string;
        inputStyle?: string;
    };
};
declare type TCheckboxShape = TCommonShape & {
    type: "checkbox";
    text?: string;
};
declare type TRadioShape = TCommonShape & {
    type: "radio";
    options: {
        id: TID;
        label?: string;
    }[];
};
declare type TComboFieldShape = TCommonShape & {
    type: "combo" | "select" | "multiselect";
    options?: IOption[];
    template?: (opt: IOption) => string;
    config?: ICommonConfig;
};
declare type TColorFieldShape = TCommonShape & {
    type: "color";
    colors?: string[];
    config?: ICommonConfig & {
        clear?: boolean;
    };
};
declare type TColorSchemaFieldShape = TCommonShape & {
    type: "colorSchema";
    colors?: IColorSchema[];
    config?: ICommonConfig & {
        clear?: boolean;
    };
};
declare type TDateFieldShape = TCommonShape & {
    type: "date";
    time?: boolean;
    config?: ICommonConfig;
};
declare type TFilesFieldShape = TCommonShape & {
    type: "files";
    uploadURL?: string;
    config?: IUploaderConfig;
};
interface IUploaderConfig {
    accept?: string;
    disabled?: boolean;
    multiple?: boolean;
    folder?: boolean;
}
declare type TEditorShape = TTextFieldShape | TComboFieldShape | TColorFieldShape | TDateFieldShape | TCheckboxShape | TRadioShape | TColorSchemaFieldShape | TFilesFieldShape;
declare type TID = string | number;
interface IColorSchema {
    background?: string;
    border?: string;
    textColor?: string;
    colorpicker?: string;
}
interface IEventData extends IReadonlyConfig {
    start_date: Date;
    end_date: Date;
    id?: TID;
    type?: TID;
    text?: string;
    details?: string;
    allDay?: boolean;
    color?: IColorSchema;
    [key: string]: any;
}
interface ICalendar {
    id: TID;
    label: string;
    active: boolean;
    color?: IColorSchema;
    readonly?: boolean;
}
declare type TDatepickerConfig = {
    current: Date;
    markers: (d: Date) => string;
};

declare class DataStore extends Store<IData> {
    in: EventBus<TMethodsConfig>;
    private _router;
    constructor(w: TWritableCreator);
    init(state: Partial<IDataConfig>): void;
    setState(state: Partial<IData>, ctx?: TDataConfig): void;
    normalizeState(): void;
}
interface IDataMethodsConfig {
    ["set-date"]: {
        value: Date;
    };
    ["set-mode"]: {
        value: string;
    };
    ["set-bound"]: {
        step: number;
    };
    ["add-event"]: {
        event: IEventData;
    };
    ["delete-event"]: {
        id: TID$1;
    };
    ["update-event"]: {
        event: IEventData;
        id: TID$1;
    };
    ["update-calendar"]: {
        calendar: ICalendar;
        id: TID$1;
    };
    ["add-calendar"]: {
        calendar: ICalendar;
    };
    ["delete-calendar"]: {
        id: TID$1;
    };
    ["toggle-sidebar"]: {
        show: boolean;
    } | null;
    ["select-event"]: {
        id: TID$1;
        popup?: boolean;
    };
    ["edit-event"]: {
        id?: TID$1;
        add?: IEventData | Record<string, never>;
    } | null;
    ["close-event-info"]: null;
}

declare const defaultColors: IColorSchema[];
declare const defaultCalendars: ICalendar[];
declare const defaultEditorShape: TEditorShape[];

declare const en: any;

declare const de: any;

declare const ru: any;

declare function uid(): string;

declare class Events {
    private _api;
    constructor(api: IApi);
    on<K extends keyof TMethodsConfig>(event: K, callback: (config: TMethodsConfig[K]) => any): void;
    exec<K extends keyof TMethodsConfig>(event: K, data: TMethodsConfig[K]): void;
}

declare type IEventTemplate = (event: IEventData, calendar: ICalendar) => string;
declare type ITheme = "willow" | "material" | "willowDark";
interface ISchedulerConfig extends Partial<IDataConfig> {
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
declare class EventCalendar {
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

declare class RestDataProvider extends EventBus<TMethodsConfig> {
    private _url;
    private _queue;
    constructor(url?: string);
    getEvents(): Promise<IEventData[]>;
    getCalendars(): Promise<IEventData[]>;
    protected getHandlers(handlers: Partial<Record<keyof TMethodsConfig, any>>): Partial<Record<keyof TMethodsConfig, any>>;
    protected send<T>(url: string, method: string, data?: any, customHeaders?: any): Promise<T>;
    protected parseEvents(data: any[]): any[];
}

export { EventCalendar, RestDataProvider, de, defaultCalendars, defaultColors, defaultEditorShape, en, ru, uid };
