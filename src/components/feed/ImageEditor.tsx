"use client";

import Image from "next/image";
import React, { useState } from "react";
import { CloseIcon } from "../icons";
import { editorActions } from "@/config/editor";

const ImageEditor = ({
  onClose,
  previewURL,
  settings,
  setSettings,
}: {
  onClose: () => void;
  previewURL: string;
  settings: {
    type: "original" | "wide" | "square";
    sensitive: boolean;
  };
  setSettings: React.Dispatch<
    React.SetStateAction<{
      type: "original" | "wide" | "square";
      sensitive: boolean;
    }>
  >;
}) => {
  const [loading, setLoading] = useState(true);

  const handleSize = (type: "original" | "wide" | "square") => {
    setLoading(true);
    setSettings((prev) => ({ ...prev, type }));
  };

  const handleSensitive = (sensitive: boolean) => {
    setLoading(true);
    setSettings((prev) => ({ ...prev, sensitive }));
  };
  return (
    <div className="bg-o fixed top-0 left-0 z-10 flex h-screen w-screen items-center justify-center bg-black/50">
      <div className="flex flex-col rounded-xl bg-black/95 p-8">
        {/* TOP */}
        <div className="flex justify-between">
          {/* GO BACK */}
          <CloseIcon onClick={onClose} />
          {/* SAVE */}
          <div
            className="cursor-pointer rounded-md bg-white px-2 py-1 font-bold text-black"
            onClick={onClose}
          >
            Save
          </div>
        </div>
        {/* IMG CONTAINER */}
        <div className="xs:h-[450px] xs:w-[400px] flex items-center md:h-[700px] md:w-[600px]">
          {/* LOADER */}
          {loading ? (
            <div className="flex h-full w-full items-center justify-center">
              <div className="border-primary size-12 animate-spin rounded-full border-4 border-t-transparent"></div>
            </div>
          ) : null}
          <Image
            src={previewURL}
            alt="Post Image"
            width={0}
            height={0}
            onLoad={() => setLoading(false)}
            className={`w-full ${settings.type === "original" ? "h-full object-contain" : settings.type === "square" ? "aspect-square object-cover" : "aspect-video object-cover"}`}
            style={loading ? { display: "none" } : {}}
          />
        </div>
        {/* SETTINGS */}
        <div className="flex justify-between">
          {/* OPTIONS */}
          <div className="flex items-center gap-[8%] text-sm md:gap-[15%]">
            {editorActions.map(({ id, Icon, key, label }) => (
              <div
                key={id}
                className="flex cursor-pointer gap-2 font-semibold"
                onClick={() => handleSize(key)}
              >
                <Icon
                  className={
                    settings.type === key ? "stroke-primary" : "stroke-white"
                  }
                />
                {label}
              </div>
            ))}
          </div>
          {/* SENSITIVE */}
          <div
            className={`cursor-pointer rounded-md px-2 py-1 font-bold ${settings.sensitive ? "bg-accent text-white" : "bg-white text-black"}`}
            onClick={() => handleSensitive(!settings.sensitive)}
          >
            Sensitive
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageEditor;
