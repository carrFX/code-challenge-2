"use client";
import { CardStack } from "./ui/card-stack";
import { cn } from "@/lib/utils";
export function CardStackDemo() {
  return (
    <div className="mt-7 flex items-center justify-center w-full">
      <CardStack items={CARDS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-amber-600 dark:bg-emerald-700/[0.2] dark:text-amber-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Manu Arora",
    designation: "Driver of the Year",
    content: (
      <p>
        Mansory car workshop is <Highlight>the best place</Highlight> for your car maintenance. They are very <Highlight>professional</Highlight> and offer outstanding service!
      </p>
    ),
  },
  {
    id: 1,
    name: "Elon Musk",
    designation: "Senior Shitposter",
    content: (
      <p>
        I am <Highlight>very satisfied</Highlight> with the car maintenance I received at Mansory. They <Highlight>truly know</Highlight> what they are doing!
      </p>
    ),
  },
  {
    id: 2,
    name: "Tyler Durden",
    designation: "Manager JDM Car",
    content: (
      <p>
        Mansory car workshop <Highlight>is the best</Highlight> choice for all your car maintenance needs. They are <Highlight>very friendly and professional!</Highlight>
      </p>
    ),
  },
];
