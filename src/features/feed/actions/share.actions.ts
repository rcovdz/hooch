"use server";

import { imagekit } from "@/shared/lib/utils";

export const shareAction = async (
  formData: FormData,
  settings: { type: "original" | "wide" | "square"; sensitive: boolean },
) => {
  const file = formData.get("file") as File;

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const transformation = `w-600 ${settings.type === "square" ? "ar-1-1" : settings.type === "wide" ? "ar-16-9" : ""}`;

  imagekit.upload(
    {
      file: buffer,
      fileName: file.name,
      folder: "/uploads",
      ...(file.type.includes("image") && {
        transformation: {
          pre: transformation,
        },
      }),
      customMetadata: {
        sensitive: settings.sensitive,
      },
    },
    function (err, res) {
      if (err) console.log(err);
      else console.log(res);
    },
  );
};
