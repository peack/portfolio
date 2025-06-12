import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        tech: "border-transparent bg-blue-50 text-blue-700 hover:bg-blue-100 shadow-sm",
        react: "border-transparent bg-cyan-50 text-cyan-700 hover:bg-cyan-100 shadow-sm",
        typescript: "border-transparent bg-blue-50 text-blue-800 hover:bg-blue-100 shadow-sm",
        swift: "border-transparent bg-orange-50 text-orange-700 hover:bg-orange-100 shadow-sm",
        node: "border-transparent bg-green-50 text-green-700 hover:bg-green-100 shadow-sm",
        javascript: "border-transparent bg-yellow-50 text-yellow-800 hover:bg-yellow-100 shadow-sm",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return <Comp data-slot="badge" className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
