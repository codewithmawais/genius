"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("1af69584-9127-41f8-bee0-0abe1f7f8fdc");
    }, []);        

    return null;
};