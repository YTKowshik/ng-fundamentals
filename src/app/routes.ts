import {  Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { CreateRoomComponent } from "src/room/create/create-room.component";

export const appRoutes:Routes=[
    {path: 'create-room',component: CreateRoomComponent}
]