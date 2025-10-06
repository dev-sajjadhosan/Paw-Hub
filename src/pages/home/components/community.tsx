import { Card, CardContent } from "@/components/ui/card";

import dog from "../../../assets/dog.png";
import { Link } from "react-router";
import TooltipBtn from "@/components/custom_ui/tooltipBtn";
import { BookmarkPlus, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Post } from "@/types/types";

export default function PetCommunity({ posts }: { posts: any }) {
  return (
    <>
      <section className="mt-24 w-11/12 mx-auto">
        <h3 className="text-2xl text-center">Pet Community</h3>
        <div className="mt-7 grid grid-cols-2 gap-5">
          <Card className="">
            <CardContent>
              <img src={dog} alt="" />
              <p className="">Meet Bella, the most playful pup!</p>
            </CardContent>
          </Card>
          <div className="flex flex-col gap-7">
            <h3 className="text-xl flex items-center gap-2 text-muted-foreground">
              <span className="text-primary">Today</span> ... Trending Posts
            </h3>

            <ul className="space-y-3">
              {posts.slice(0, 5)?.map((post: Post, index: number) => (
                <li key={post.id}>
                  <Link
                    to={`/post/${post.id}`}
                    className="flex items-center gap-3 rounded-lg p-3 hover:bg-stone-700 transition"
                  >
                    <div className="w-15 h-15 flex items-center justify-center bg-secondary text-primary rounded-lg font-normal">
                      #{index + 1}
                    </div>
                    <div>
                      <p className="text-muted-foreground font-medium">
                        {post.title}
                      </p>
                      <span className="text-gray-500 text-sm">
                        {post.views.toLocaleString()} views · {post.likes} likes
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 ml-auto">
                      <TooltipBtn
                        label="Save"
                        icon={BookmarkPlus}
                        size="icon"
                      />
                      <TooltipBtn label="Share" icon={Share2} size="icon" />
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
            <Button className="mx-auto">View all</Button>
          </div>
        </div>
      </section>
    </>
  );
}
