"use client";

import imageCover from "@/public/assets/about/cover.jpg";
import { cn } from "@/utils/ui";
import Image from "next/image";
import { ComponentProps } from "react";
import { create } from "zustand";
import styles from "./index.module.css";

type Props = ComponentProps<"div">;

const store = create(() => ({ animated: false }));

export function Polaroid({ className, ...props }: Props) {
  return (
    <div
      className={cn(
        "relative max-w-sm",
        "rounded bg-zinc-50 p-4 pb-16",
        "shadow-lg shadow-zinc-300 dark:shadow-zinc-700",
        styles.polaroid,
        className,
      )}
      data-animated={store((state) => state.animated)}
      onAnimationEnd={() => store.setState({ animated: true })}
      {...props}
    >
      <div className="bg-zinc-500">
        <Image
          src="https://scontent.fsub8-1.fna.fbcdn.net/v/t39.30808-6/434852776_7287454478003871_2750240696643520139_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGenpXp3bZL6Tnh-gtKUpuAJdXxtEijiLQl1fG0SKOItOFgyq4eTzofU7Hoou93pm1zbrbBHDric-jAAV_WFHoF&_nc_ohc=csBIqLiyvDAAb5hxVLy&_nc_ht=scontent.fsub8-1.fna&cb_e2o_trans=t&oh=00_AfC0Dk3is18VqLo-3ozryu9nqzLSxH7Bsp9qtMXXNRGHqg&oe=661848BA"
          // src={imageCover}
          alt="cover"
          width={500}
          height={500}
          priority={true}
          onLoad={(event) => event.currentTarget.setAttribute("data-loaded", "true")}
          className={cn(
            "aspect-square rounded object-contain object-center",
            "opacity-0 transition-opacity duration-1000 data-[loaded=true]:opacity-100",
          )}
        />
      </div>
    </div>
  );
}