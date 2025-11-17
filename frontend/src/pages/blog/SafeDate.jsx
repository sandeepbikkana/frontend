
"use client";

import { useEffect, useState } from "react";

export default function SafeDate({ isoString }) {
  const [formatted, setFormatted] = useState("");

  useEffect(() => {
    const date = new Date(isoString);
    setFormatted(
      date.toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    );
  }, [isoString]);

  return <span>{formatted}</span>;
}
