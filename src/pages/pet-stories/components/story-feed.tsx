import TooltipBtn from "@/components/custom_ui/tooltipBtn";
import { Progress } from "@/components/ui/progress";
import { useLocalStore } from "@/store/useLocalStore";
import { Pause, Play } from "lucide-react";
import { useRef, useState } from "react";
import CardActions from "./shared/card-actions";

export default function StoryFeedCard({
  item,
  items,
  i,
}: {
  item: any;
  items: any;
  i: number;
}) {
  const {
    petViewDialog,
    setPetViewDialog,
  } = useLocalStore();
  const videoRefs = useRef<HTMLVideoElement[]>([]);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const [progress, setProgress] = useState<number[]>(
    Array(items.length).fill(0)
  );

  const togglePlay = (i: number) => {
    const video = videoRefs.current[i];
    if (!video) return;

    // Pause all other videos
    videoRefs.current.forEach((v, idx) => {
      if (v && idx !== i) {
        v.pause();
      }
    });

    // Play/pause current
    if (video.paused) {
      video.play();
      setPlayingIndex(i);
    } else {
      video.pause();
      setPlayingIndex(null);
    }
  };

  const handleTimeUpdate = (
    i: number,
    e: React.SyntheticEvent<HTMLVideoElement>
  ) => {
    const video = e.currentTarget;
    const currentProgress = (video.currentTime / video.duration) * 100;
    setProgress((prev) => {
      const newProgress = [...prev];
      newProgress[i] = currentProgress;
      return newProgress;
    });
  };

  return (
    <>
      <div
        className="relative group cursor-pointer "
        onClick={() => setPetViewDialog(!petViewDialog)}
      >
        <video
          ref={(el) => {
            if (el) videoRefs.current[i] = el;
          }}
          src={item.src}
          className="w-full h-auto object-cover"
          playsInline
          onTimeUpdate={(e) => handleTimeUpdate(i, e)}
        />
        <div
          className={`hidden absolute top-0 w-full h-full p-5 group-hover:flex flex-col gap-1.5 items-center justify-end duration-200 ${
            playingIndex === i ? "hover:bg-secondary/35" : "bg-secondary/45"
          }`}
        >
          <div className="flex items-center gap-1">
            <TooltipBtn
              icon={playingIndex === i ? Pause : Play}
              label={playingIndex === i ? "Pause" : "Play"}
              action={() => togglePlay(i)}
            />
            <CardActions className="" isRow={true} side="top" />
          </div>
          <Progress value={progress[i]} className="w-11/12 h-0.5" />
        </div>
      </div>
    </>
  );
}
