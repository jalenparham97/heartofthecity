"use client";

import { useState } from "react";
import Image from "next/image";
import type Hls from "hls.js";
import { HugeiconsIcon } from "@hugeicons/react";
import { PlayIcon } from "@hugeicons/core-free-icons";

type EventFilmProps = {
  title: string;
  streamUrl: string;
  posterUrl: string;
  runtime: string;
  spokenRuntime: string;
  isFeatured?: boolean;
};

/* Loads hls.js only once someone presses play, falling back to the browser's own HLS support. */
function attachStream(streamUrl: string) {
  return (video: HTMLVideoElement | null) => {
    if (!video) return;
    let hls: Hls | undefined;
    let isDetached = false;
    import("hls.js").then(({ default: HlsPlayer }) => {
      if (isDetached) return;
      if (HlsPlayer.isSupported()) {
        hls = new HlsPlayer();
        hls.loadSource(streamUrl);
        hls.attachMedia(video);
      } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = streamUrl;
      }
      video.play();
    });
    return () => {
      isDetached = true;
      hls?.destroy();
    };
  };
}

export function EventFilm({
  title,
  streamUrl,
  posterUrl,
  runtime,
  spokenRuntime,
  isFeatured = false,
}: EventFilmProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative aspect-video overflow-hidden bg-foreground">
      {isPlaying ? (
        // oxlint-disable-next-line jsx-a11y/media-has-caption -- these videos have no caption files yet
        <video
          ref={attachStream(streamUrl)}
          title={`${title} highlights`}
          controls
          playsInline
          poster={posterUrl}
          className="size-full"
        />
      ) : (
        <>
          <Image
            src={posterUrl}
            alt=""
            fill
            sizes={
              isFeatured ? "(max-width: 1023px) 100vw, 58vw" : "(max-width: 1023px) 100vw, 42vw"
            }
            className="object-cover"
          />
          <button
            type="button"
            onClick={() => setIsPlaying(true)}
            aria-label={`Play ${title} highlights, ${spokenRuntime}`}
            className={`group absolute inset-0 flex p-3 outline-none sm:p-5 ${isFeatured ? "items-end" : "items-start"}`}
          >
            <span className="flex items-center gap-3 bg-primary text-primary-foreground transition-colors group-hover:bg-foreground group-focus-visible:ring-4 group-focus-visible:ring-ring">
              <span className="flex size-14 items-center justify-center bg-foreground/15 sm:size-16">
                <HugeiconsIcon
                  icon={PlayIcon}
                  fill="currentColor"
                  className="size-6"
                  aria-hidden="true"
                />
              </span>
              {isFeatured && (
                <span className="pr-6 text-lg font-bold">
                  Watch <span className="font-medium tabular-nums opacity-80">{runtime}</span>
                </span>
              )}
            </span>
          </button>
        </>
      )}
    </div>
  );
}
