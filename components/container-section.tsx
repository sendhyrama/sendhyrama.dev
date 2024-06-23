import { cn } from "@/utils/ui";
import { ComponentProps } from "react";

type Props = ComponentProps<"section"> & {
  enableNavShadow?: boolean;
};

export function ContainerSection({ enableNavShadow = false, className, ...props }: Props) {
  return (
    <section
      className={cn(
        "pt-3",
        enableNavShadow,
        className)}
      {...props}
    />
  );
}
