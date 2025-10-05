import { useLocalStore } from "@/store/useLocalStore";
import CardActions from "./shared/card-actions";

export default function StoryImageCard({ item }: { item: any }) {
  const { petViewDialog, setPetViewDialog } = useLocalStore();

  return (
    <>
      <div
        className="relative hover:bg-secondary cursor-pointer"
        onClick={() => setPetViewDialog(!petViewDialog)}
      >
        <img src={item.src} alt="" className="w-full h-auto object-cover" />
        <div className="w-full h-full hover:bg-secondary/35 absolute top-0">
          <CardActions className="absolute bottom-2 right-2" />
        </div>
      </div>
    </>
  );
}
