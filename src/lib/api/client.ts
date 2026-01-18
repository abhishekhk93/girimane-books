import { ApiError } from "./errors";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "";

/**
 * Simple fetch wrapper with session-based auth support
 */
export async function api(endpoint: string, options: RequestInit = {}) {
    const url = endpoint.startsWith("http") ? endpoint : `${BASE_URL}${endpoint}`;

    const res = await fetch(url, {
        ...options,
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            ...options.headers,
        },
    });

    const data = res.headers.get("content-type")?.includes("application/json")
        ? await res.json()
        : null;

    if (!res.ok) {
        throw new ApiError(data?.message || res.statusText, res.status, data);
    }

    return data;
}
