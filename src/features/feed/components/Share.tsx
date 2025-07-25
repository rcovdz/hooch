"use client";

import { shareAction } from "../actions/share.actions";
import { ImgComp, TextareaComp } from "@/shared/components/ui";
import { shareActions } from "../config/share";
import Image from "next/image";
import React, { useRef, useState } from "react";
import ImageEditor from "./ImageEditor";

const Share = () => {
  const [acceptType, setAcceptType] = useState<string>("image/*,video/*");
  const [media, setMedia] = useState<File | null>(null);
  const [isEditorOpen, setEditorOpen] = useState(false);
  const [settings, setSettings] = useState<{
    type: "original" | "wide" | "square";
    sensitive: boolean;
  }>({
    type: "original",
    sensitive: false,
  });
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoInputRef = useRef<HTMLInputElement>(null);

  const handleMedia = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setMedia(e.target.files[0]);
    }
  };

  const handleClearMedia = () => {
    setMedia(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
    if (videoInputRef.current) videoInputRef.current.value = "";
  };

  const previewURL = media ? URL.createObjectURL(media) : null;

  return (
    <form
      className="my-3 flex gap-3 rounded-xl border-2 p-4"
      action={(formData) => shareAction(formData, settings)}
    >
      {/* PROFILE IMG */}
      <div className="relative size-12 overflow-hidden rounded-full">
        <ImgComp w={100} h={100} alt="Profile Picture" src="/imgs/pp.jpg" />
      </div>
      {/* CONTENT */}
      <div className="flex flex-1 flex-col gap-3">
        {/* INPUT */}
        <div className="relative">
          <TextareaComp
            className="bg-post w-full rounded-xl p-3 outline-none"
            placeholder="Hoo.ch about it..."
            name="desc"
          />
        </div>
        {/* IMG PREVIEW */}
        {media?.type.includes("image") && previewURL && (
          <div className="relative overflow-hidden rounded-xl">
            <Image
              src={previewURL}
              alt="Preview Image"
              width={600}
              height={600}
              className={`w-full ${settings.type === "original" ? "h-full object-contain" : settings.type === "square" ? "aspect-square object-cover" : "aspect-video object-cover"}`}
            />
            <div
              className="absolute top-2 left-2 cursor-pointer rounded-full bg-[var(--background)] px-2 py-1 text-sm font-bold opacity-70 transition ease-in hover:opacity-100"
              onClick={() => setEditorOpen(true)}
            >
              Edit
            </div>
            <div
              className="absolute top-2 right-2 cursor-pointer rounded-full bg-[var(--background)] px-3 py-1 text-sm font-bold opacity-80 transition ease-in hover:opacity-100"
              onClick={handleClearMedia}
            >
              X
            </div>
          </div>
        )}
        {media?.type.includes("video") && previewURL && (
          <div className="relative overflow-hidden rounded-xl">
            <video src={previewURL} controls></video>
            <div
              className="absolute top-2 right-2 cursor-pointer rounded-full bg-[var(--background)] px-3 py-1 text-sm font-bold opacity-80 transition ease-in hover:opacity-100"
              onClick={handleClearMedia}
            >
              X
            </div>
          </div>
        )}
        {/* IMG EDITOR */}
        {isEditorOpen && previewURL && (
          <ImageEditor
            onClose={() => setEditorOpen(false)}
            previewURL={previewURL}
            settings={settings}
            setSettings={setSettings}
          />
        )}
        {/* ACTIONS */}
        <input
          type="file"
          name="file"
          onChange={handleMedia}
          className="hidden"
          id="file"
          ref={fileInputRef}
          accept={acceptType}
        />
        <div className="flex gap-2 rounded-xl">
          {shareActions.map(({ id, icon, label }) =>
            id === 1 ? (
              <label
                key={id}
                htmlFor="file"
                onClick={() => setAcceptType("image/*")}
                className="bg-post flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl p-2"
              >
                {icon}
                <span className="hidden font-semibold md:flex">{label}</span>
              </label>
            ) : id === 2 ? (
              <label
                key={id}
                htmlFor="file"
                onClick={() => setAcceptType("video/*")}
                className="bg-post flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl p-2"
              >
                {icon}
                <span className="hidden font-semibold md:flex">{label}</span>
              </label>
            ) : (
              <div
                key={id}
                className="bg-post flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl p-2"
              >
                {icon}
                <span className="hidden font-semibold md:flex">{label}</span>
              </div>
            ),
          )}
          <button
            type="submit"
            className="text-font flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl bg-white p-2"
          >
            <span className="font-bold">Post</span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default Share;
