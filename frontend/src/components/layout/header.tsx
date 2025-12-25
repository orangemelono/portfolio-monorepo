"use client";

import Link from "next/link";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { 
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle 
} from "@/components/ui/navigation-menu";
import { 
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger 
} from "@/components/ui/sheet";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { useRecoilState } from "recoil";
import { themeState, isMenuOpenState } from "@/store";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

export function Header() {
  const [theme, setTheme] = useRecoilState(themeState);
  const [isMenuOpen, setIsMenuOpen] = useRecoilState(isMenuOpenState);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const navItems = [
    { title: "Home", href: "/" },
    { title: "About", href: "/#about" },
    { title: "Projects", href: "/#projects" },
    { title: "Skills", href: "/#skills" },
    { title: "Contact", href: "/#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold">Alex Johnson</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {navItems.map((item) => (
              <NavigationMenuItem key={item.title}>
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {item.title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right side controls */}
        <div className="flex items-center space-x-4">
          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <SunIcon className="h-5 w-5" />
            ) : (
              <MoonIcon className="h-5 w-5" />
            )}
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Open menu"
                data-testid="mobile-menu-button"
              >
                <HamburgerMenuIcon className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Navigation</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-4 mt-6">
                {navItems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="text-lg font-medium hover:underline"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}