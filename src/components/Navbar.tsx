"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { BookCopy, Headset } from "lucide-react";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Ambulan",
    href: "/docs/primitives/alert-dialog",
    description:
      "Lormet consectetur adipisicing elit. Animi, ad ipsum dolore voluptas ipsam quis, expedita quidem quaerat velit minus voluptatum accusantium tempore. At, delectus totam! Placea",
  },
  {
    title: "Temukan Dokter",
    href: "/docs/primitives/hover-card",
    description:
      "Lormet consectetur adipisicing elit. Animi, ad ipsum dolore voluptas ipsam quis, expedita quidem quaerat velit minus voluptatum accusantium tempore. At, delectus totam! Placea",
  },
  {
    title: "Masuk",
    href: "/docs/primitives/progress",
    description:
      "Lormet consectetur adipisicing elit. Animi, ad ipsum dolore voluptas ipsam quis, expedita quidem quaerat velit minus voluptatum accusantium tempore. At, delectus totam! Placea",
  },
  {
    title: "Login",
    href: "/docs/primitives/progress",
    description:
      "Lormet consectetur adipisicing elit. Animi, ad ipsum dolore voluptas ipsam quis, expedita quidem quaerat velit minus voluptatum accusantium tempore. At, delectus totam! Placea",
  },
  {
    title: "FAQ",
    href: "/docs/primitives/progress",
    description:
      "Lormet consectetur adipisicing elit. Animi, ad ipsum dolore voluptas ipsam quis, expedita quidem quaerat velit minus voluptatum accusantium tempore. At, delectus totam! Placea",
  },
];

export function Navbar() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Fasilitas</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Rumah Sakit A21
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Lormlor sitieniti repellendus enim similique amet ex atque
                      voluptatem quasi. Saepe praesentium nostrum ipsum, ea eius
                      deleni
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Laboratorium">
                Loret consectetur adipisicing elit. Aut culpa, suscipit, magnam
                repellat facere doloribus nam voluptas adipisci molestiae
                corrupti laudantium quis provi
              </ListItem>
              <ListItem href="/docs/installation" title="Radiologi">
                Loret consectetur adipisicing elit. Aut culpa, suscipit, magnam
                repellat facere doloribus nam voluptas adipisci molestiae
                corrupti laudantium quis provi
              </ListItem>
              <ListItem
                href="/docs/primitives/typography"
                title="Lihat Selengkapnya"
              >
                Loret consectetur adipisicing elit. Aut culpa, suscipit, magnam
                repellat facere doloribus nam voluptas adipisci molestiae
                corrupti laudantium quis provi
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Pelayanan</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/panggilan-darurat" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Panggilan Darurat
              <Headset />
            </NavigationMenuLink>
          </Link>
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Tentang Kami
              <BookCopy />
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
