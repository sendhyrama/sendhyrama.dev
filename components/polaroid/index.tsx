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
          src="https://lh3.googleusercontent.com/pw/AP1GczMTs6W_BP6cOgBnmILz3ZIYKvHs35c8BZJuQ8J4azYDkwWWVs22aZ3QbLrAVj24EaRY00BkjNJGVZmojS9wfwlOW7V11pvFto0yXzrJKVtN36Jc1fQYzgirvwN_QYLZmb5bryMlPhhXe1jgvCnOF8JYQbeThsjjOREvVo2FINID1F5j5F0noDVxm4QQk-uageYZkBX_PEqVYdscsCBGsbDw0WphauOsbb7WST4P__haDZiWOUyRUJx33yk0TgtesQ6pYMWTbH7dbS-UkHkcF98RWOKqvtaGTqmzleN3GykaQ8v8y2SE04PthbkFYTrd79pXHmHiiS023jpVMIHM5Bs6to1pp98SITWOIYadn8pwQRBfP06jWbLVYG8FAe4JHbWJJmfbfd_MEZGfAELXEmWM0vS_ZUXxDmAlYKOUDbOA6PdUIzAE9XfZT6DyQjXCbDeOPQ4YThOTOYecj2nlhecTtXadhMYpqn9DDzPPM5yczbmuq-zgEiTr4v5JqGjB3MnniEG8UrblapjVsB8DSm59hn-Eilgfn5s0qlmMFHDtg0K-YmTQLeQYn233S51Xiv1YetTj0_1HmxfIhowhqds5LSy4t-3kUxpCdgeJbXXDtofV0z0X6PYqeGitFOhicbVqtcHZRh4CFFBq_u40p-mN4MmvKBWC8RoqrzbnkWCM_xrhP03DMQ6HT-IA63yY3J98eZrtDlPpYm1f7tgvYTH2YNvG6B1ygWDXR5FWmco62BxqQ7De4WRFobJfvN0iRAY1DGD4scCOmMyz5CDzZYgKLeReKpUq2urSwETMmI8xqjHKNxxvsO1YJsFuXz0CXMLBY9hVipa7u_yEsOVaBJGQr9Dpbi3yZ01laPBvMsHXTmpeRodhp6yyoyiE12xvqXJvYEdSErpiPeP-iz3pmrvc=w974-h974-s-no-gm?authuser=0"
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