import ProfileDropdown from "@/components/custom/profile-dropdown";
import GoBack from "@/components/custom_ui/goback";
import { Button } from "@/components/ui/button";
import { Image, Loader, Youtube } from "lucide-react";

import StoryFeedCard from "./components/story-feed";
import StoryImageCard from "./components/story-img";
import PetViewDialog from "./components/view-dialog";
import CommentsDialog from "./components/comments-dialog";
import ShareDialog from "./components/share-dialog";
import { useLocalStore } from "@/store/useLocalStore";
import CreatePostDialog from "./components/create-post-dialog";
import CreateFeedDialog from "./components/create-feed-dialog";

const items = [
  { id: 1, type: "image", src: "https://picsum.photos/400/600?random=1" },
  { id: 2, type: "image", src: "https://picsum.photos/600/400?random=2" },
  { id: 3, type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { id: 4, type: "image", src: "https://picsum.photos/500/700?random=4" },
  {
    id: 5,
    type: "video",
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  },
  { id: 6, type: "image", src: "https://picsum.photos/450/600?random=5" },
  { id: 7, type: "image", src: "https://picsum.photos/600/600?random=6" },
  { id: 8, type: "image", src: "https://picsum.photos/500/500?random=7" },
  {
    id: 9,
    type: "video",
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  },
  { id: 10, type: "image", src: "https://picsum.photos/400/700?random=8" },
  { id: 11, type: "image", src: "https://picsum.photos/700/500?random=9" },
  { id: 12, type: "image", src: "https://picsum.photos/600/400?random=10" },
  { id: 13, type: "image", src: "https://picsum.photos/500/650?random=11" },
  {
    id: 14,
    type: "video",
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  },
  { id: 15, type: "image", src: "https://picsum.photos/450/750?random=12" },
];

export default function PetStoriesPage() {
  const { petCreatePost, setPetCreatePost, petCreateFeed, setPetCreateFeed } =
    useLocalStore();
  return (
    <>
      <PetViewDialog />
      <CommentsDialog />
      <ShareDialog />
      <CreatePostDialog />
      <CreateFeedDialog/>
      {/* ------------------- */}
      <div className="p-7">
        <div className="flex items-center justify-between w-full">
          <GoBack />
          <div className="flex items-center gap-3">
            <Button
              variant="secondary"
              onClick={() => setPetCreatePost(!petCreatePost)}
            >
              <Image /> Post
            </Button>
            <Button
              variant="secondary"
              onClick={() => setPetCreateFeed(!petCreateFeed)}
            >
              <Youtube /> Feed
            </Button>
            <ProfileDropdown />
          </div>
        </div>

        <div className="mt-11">
          <div className="columns-2 md:columns-3 lg:columns-4 gap-3">
            {items.map((item, i) => (
              <div
                key={item.id}
                className="mb-3 break-inside-avoid overflow-hidden rounded-xl"
              >
                {item.type === "image" ? (
                  <StoryImageCard item={item} />
                ) : (
                  <StoryFeedCard item={item} items={items} i={i} />
                )}
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center p-3 bg-secondary w-fit h-fit rounded-full animate-spin mx-auto">
            <Loader size={29} />
          </div>
        </div>
      </div>
    </>
  );
}
