import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { CheckIcon, SecurityCheckIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export default function StudentShowcase() {
  return (
    <div className="flex- flex items-center justify-center gap-2 sm:flex-row sm:gap-4 lg:gap-6">
      {/* Col 1 */}
      <div className="space-y-2 sm:space-y-4 lg:space-y-6">
        <StudentCard
          name="Riya"
          role="Business Analyst"
          company="Deloitte"
          image="./students/student-1.png"
        />
        <StudentCard
          name="Riya"
          role="Business Analyst"
          company="Deloitte"
          image="./students/student-2.png"
        />
      </div>

      {/* Col 2 */}
      <div>
        <StudentCard
          name="Aarav"
          role="Business Analyst"
          company="Deloitte"
          image="./students/student-3.png"
          isLarge
        />
      </div>

      {/* Col 3 */}
      <div className="space-y-2 sm:space-y-4 lg:space-y-6">
        <StudentCard
          name="Riya"
          role="Business Analyst"
          company="Deloitte"
          image="./students/student-4.png"
        />
        <StudentCard
          name="Riya"
          role="Business Analyst"
          company="Deloitte"
          image="./students/student-5.png"
        />
      </div>
    </div>
  );
}

type StudentCardProps = {
  name: string;
  role: string;
  company: string;
  image: string;
  imageClassName?: string;
  cardClassName?: string;
  isLarge?: boolean;
};

export function StudentCard({
  name,
  role,
  company,
  image,
  imageClassName,
  cardClassName,
  isLarge = false,
}: StudentCardProps) {
  return (
    <Card
      className={cn(
        "relative shadow-xl",
        isLarge
          ? "p-2! [--card-spacing:--spacing(3)]"
          : "p-1.5! [--card-spacing:--spacing(2)]",
        cardClassName,
      )}
    >
      <img
        src={image}
        alt={`${name} - ${role}`}
        className={cn(
          "rounded-lg object-cover",
          isLarge
            ? "w-3xs sm:h-80"
            : "bg-accent aspect-square w-40 object-top sm:h-36",
          imageClassName,
        )}
      />
      {isLarge && (
        <div className="dark:text-background absolute top-3 right-3 flex size-10 flex-col items-center justify-center gap-1 rounded-full bg-white p-2 text-center text-[0.4rem]/[1] font-medium sm:top-4 sm:right-4 sm:size-14 sm:text-[0.5125rem]/[1]">
          <HugeiconsIcon
            icon={SecurityCheckIcon}
            className="text-background fill-cc-sage-900 dark:text-foreground size-3 shrink-0 sm:size-5"
          />
          Verified Result
        </div>
      )}
      <CardHeader>
        <CardTitle
          className={cn(
            "text-xs sm:text-base",
            isLarge && "text-lg sm:mt-2 sm:text-2xl",
          )}
        >
          {name}
        </CardTitle>
        <CardDescription
          className={cn(
            "text-cc-sage-900 font-medium",
            isLarge ? "text-xs" : "text-2xs sm:text-xs",
          )}
        >
          {role}
        </CardDescription>
      </CardHeader>
      <CardFooter
        className={cn(
          "border-none bg-transparent",
          isLarge ? "pt-0 sm:pt-2" : "pt-0",
        )}
      >
        <div className="flex items-center gap-2">
          <div className="bg-cc-sage-900 rounded-full p-1 max-sm:hidden">
            <HugeiconsIcon
              icon={CheckIcon}
              strokeWidth={isLarge ? 2 : 2.5}
              className={cn("text-background", isLarge ? "size-3" : "size-2")}
            />
          </div>
          <p className={cn(isLarge ? "text-xs" : "text-2xs sm:text-xs")}>
            Placed at <span className="font-semibold">{company}</span>
          </p>
        </div>
      </CardFooter>
    </Card>
  );
}
