import Image from "next/image";
import React from "react";

export default function PageLoader() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex flex-col items-center gap-5 animate-pulse">
        <Image
          height={200}
          width={200}
          alt="Logo"
          className="rounded-full"
          src="/images/yoga.png"
        />
        <span className="text-3xl font-semibold text-primary-title">
          One minute of patience, ten years of peace.
        </span>
      </div>
    </div>
  );
}
