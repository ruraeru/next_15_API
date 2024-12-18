"use client"

import { IDummyData } from "app/api/getDummy/route";
import { useEffect } from "react";

export async function getDummy(): Promise<IDummyData[]> {
    const res = await fetch("/api/getDummy");
    if (!res.ok) {
        throw new Error("Network response was not ok");
    }
    return res.json();
}

export default function CallApi() {
    const getApi = async () => {
        const result = await getDummy();
    }
    useEffect(() => {
        getApi();
    }, []);
    return (
        <div>
            Call API
        </div>
    )
}