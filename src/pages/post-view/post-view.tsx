import GoBack from "@/components/custom_ui/goback";
import { Button } from "@/components/ui/button";
import {
  BookmarkPlus,
  BrainCog,
  Eye,
  MessageCircle,
  MessageCirclePlus,
  PenLine,
  Share2,
  Smile,
  ThumbsUp,
  Trash2,
} from "lucide-react";

import Recomanded from "./components/recomanded";
import Footer from "../home/components/footer";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { usePetStore } from "@/store/usePetStore";
import { useLocalStore } from "@/store/useLocalStore";
import PetReviewDialog from "./components/ai-review-dialog";
import ReactDialog from "@/components/custom_ui/react-dialog";

export default function PostViewPage() {
  const { isUser } = usePetStore();
  const { petShareDialog, setPetShareDialog } = useLocalStore();
  return (
    <>
      <div className="p-9 flex flex-col">
        <div className="flex items-center justify-between w-full">
          <GoBack />
        </div>
        <div className="mt-7 w-5xl h-[25rem] bg-secondary rounded-lg mx-auto"></div>
        <div className="mt-14 flex flex-col gap-3">
          <div className="flex items-center justify-between w-full">
            <h1 className="text-2xl">Lorem ipsum dolor sit amet</h1>
            <div className="flex items-center gap-3">
             <ReactDialog/>
              <PetReviewDialog/>
              <Button variant={"secondary"}>
                <BookmarkPlus /> Save
              </Button>
              <Button
                variant={"secondary"}
                onClick={() => setPetShareDialog(!petShareDialog)}
              >
                <Share2 /> Share
              </Button>
            </div>
          </div>
          <p className="mt-7 tracking-wide text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            maxime nesciunt dolor ipsam. Magnam, consequuntur cupiditate enim
            ratione temporibus eum quia suscipit. Quae ratione, animi a
            explicabo eius sequi aut voluptates fuga qui in blanditiis velit
            perferendis, vero inventore iusto ipsam iste non nam atque numquam
            illum aliquid ex ab? Voluptatum tempora non facilis nobis nam,
            aspernatur tempore tenetur quod adipisci repudiandae? Sapiente totam
            consequuntur perspiciatis vero quibusdam ad vitae placeat aliquid
            ipsum debitis, illum soluta consequatur laborum molestiae asperiores
            fugit dolor ex incidunt quas. Suscipit neque aspernatur quo eos
            quas, ipsum eaque aperiam nam est sunt incidunt laudantium delectus?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
            ut! Odit vel quos omnis, quidem laboriosam amet obcaecati molestiae
            excepturi adipisci tempora quia ipsam blanditiis cumque, pariatur
            hic a placeat perferendis labore. Recusandae quidem repellat, totam
            provident sint doloribus sequi voluptatum adipisci porro, unde ipsam
            rerum obcaecati atque ex sapiente incidunt illo esse consequuntur
            labore. Laudantium nihil illum, quasi similique nisi vitae quam
            libero consectetur eos minus, explicabo veritatis facere beatae esse
            deserunt magnam eaque autem obcaecati velit laboriosam sunt
            perferendis est aliquid accusantium! Iure perspiciatis quia facere
            aliquam voluptate animi sapiente excepturi laudantium. Debitis ad
            blanditiis expedita ipsa numquam aperiam eveniet. Vel, eligendi et
            dolor ab, cum laudantium eum debitis voluptatem repellendus eaque
            nemo assumenda esse provident laboriosam! Voluptates illo, officia
            pariatur totam recusandae eveniet hic assumenda est maxime molestiae
            inventore nihil error quaerat ipsa, doloremque dolores facere nemo
            vero aliquam sed porro harum. Excepturi soluta quas rem ea voluptas
            tempora. Facere accusamus nesciunt fuga deleniti, tempore temporibus
            laboriosam nobis repudiandae non minus iusto tempora illo ad qui
            quia id inventore itaque fugit unde reiciendis iure deserunt?
            Corporis atque architecto ea error eveniet, in numquam facere
            repellat vitae sed enim tempora beatae! Dolorum quia qui est amet
            odit similique, placeat accusantium minima tempore harum quos? Odit,
            ipsam labore? Non a ipsum autem similique! Odio adipisci maxime
            mollitia asperiores quas excepturi cum eligendi sapiente aliquid
            error, soluta itaque commodi aliquam laboriosam nemo, ullam ab eum
            ipsam repudiandae. Error cupiditate amet suscipit iste impedit
            itaque, dolore deleniti tenetur eaque modi, ipsam, ut placeat
            repellat similique inventore dolor velit dicta quisquam asperiores
            numquam rem illum accusantium maiores reiciendis. Dolor corporis,
            obcaecati voluptatibus itaque modi velit dolore consequuntur id
            nobis omnis quidem pariatur vel dolores expedita doloremque, ratione
            quasi aspernatur natus dolorum earum. Modi aliquid, impedit, libero
            enim unde earum excepturi expedita aspernatur quos eveniet cumque
            natus repellendus culpa doloribus possimus fuga. Incidunt architecto
            optio laborum dignissimos quidem aspernatur inventore quo. Assumenda
            quam ducimus beatae reiciendis error, natus, a expedita rerum
            voluptas sunt, et minima veniam aspernatur impedit nemo autem maxime
            ipsa ipsam blanditiis dolore eum nam. Tenetur, officiis enim!
            Blanditiis molestias dicta magnam, dolore mollitia earum cupiditate
            omnis corporis, fugit quo minus porro maiores doloribus et totam
            quidem explicabo molestiae esse. Accusamus eligendi et mollitia vel
            unde quia neque vitae quod iure commodi aliquam sed rem, excepturi
            ducimus. At laudantium, nemo, perspiciatis quod fugiat sequi
            explicabo delectus totam architecto nisi quisquam ipsam?
          </p>
          <div className="flex items-center justify-between gap-9 w-11/12 h-[21rem] mx-auto mt-20">
            <div className="flex-1 h-full p-5 bg-secondary rounded-lg flex flex-col items-center justify-center text-xl">
              Card 01
            </div>
            <div className="flex-1 h-full p-5 bg-secondary rounded-lg flex flex-col items-center justify-center text-xl">
              Card 02
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3 mt-7">
            {Array.from({ length: 11 }).map((_, i) => (
              <span
                key={i}
                className="hover:bg-secondary py-1 px-3.5 rounded-sm cursor-pointer active:scale-95"
              >
                #pet_vet
              </span>
            ))}
          </div>
          <Recomanded />
          <div className="mt-12 flex items-center justify-between w-full">
            <div className="bg-secondary flex items-center gap-2 px-5 py-1 w-full md:w-xl rounded-lg">
              <Input
                placeholder="Write a comment..."
                className="bg-transparent! border-0"
              />
              <Button variant={"ghost"}>
                <MessageCirclePlus /> Post
              </Button>
            </div>
            <div className="flex items-center gap-5">
              <span className="text-sm bg-secondary px-5 py-3 rounded-md flex items-center gap-1.5 [&_svg]:size-4 [&_svg]:text-muted-foreground">
                <MessageCircle />
                Comments 100+
              </span>
              <span className="text-sm bg-secondary px-5 py-3 rounded-md flex items-center gap-1.5 [&_svg]:size-4 [&_svg]:text-muted-foreground">
                <ThumbsUp />
                Likes 100+
              </span>
              <span className="text-sm bg-secondary px-5 py-3 rounded-md flex items-center gap-1.5 [&_svg]:size-4 [&_svg]:text-muted-foreground">
                <Eye />
                Views 100+
              </span>
            </div>
          </div>
          <div className="mt-5">
            <h3 className="text-lg">All Commnets</h3>
            <div className="mt-5">
              <ul className="flex flex-col gap-2.5">
                {Array.from({ length: 10 }).map((_, i) => (
                  <li
                    key={i}
                    className="flex items-center justify-between gap-2.5 hover:bg-secondary/55 py-3 px-5 rounded-md cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <Avatar className="w-9 h-9">
                        <AvatarFallback>MS</AvatarFallback>
                      </Avatar>
                      <p className="text-xs">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Dolor obcaecati, voluptate velit quae nihil quia?
                      </p>
                    </div>
                    {isUser ? (
                      <div className="flex items-center gap-2">
                        <Button size={"sm"} variant={"ghost"}>
                          <PenLine /> Edit
                        </Button>
                        <Button size={"sm"} variant={"ghost"}>
                          <Trash2 /> Trash
                        </Button>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Button size={"sm"} variant={"ghost"}>
                          <MessageCirclePlus />
                          Replay
                        </Button>
                        <Button size={"sm"} variant={"ghost"}>
                          <Smile /> Like
                        </Button>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-center mt-7">
                <Button size={"sm"}>Show More</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
