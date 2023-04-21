import { ActionReducer, ActionReducerMap } from "@ngrx/store";
import { weatherReducer } from "./reducers/weather";

export const weatherRootReducsrs: ActionReducerMap<any> = {
    forecastPayload: weatherReducer
};
