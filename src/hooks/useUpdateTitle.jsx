import { useEffect } from "react";

export function useUpdateTitle (title) {
    useEffect(() => {
        document.title = title;
    }, [title])
}