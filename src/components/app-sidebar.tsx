import { BookIcon, BookImage, BotIcon, Home, PaperclipIcon } from "lucide-react"
import { IconBrandGithub, IconBrandX } from '@tabler/icons-react'

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Separator } from "./ui/separator"
import Link from "next/link"

const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
    target: "_self"
  },
  {
    title: "Whitepaper",
    url: "/whitepaper.pdf",
    icon: BookIcon,
    target: "_blank"
  },
  {
    title: "Docs",
    url: "https://niche-1.gitbook.io/niche",
    icon: PaperclipIcon,
    target: "_blank"
  },
  {
    title: "Gallery",
    url: "/gallery",
    icon: BookImage,
    target: "_self"
  },
  {
    title: "AI Agents",
    url: "/ai-agents",
    icon: BotIcon,
    target: "_self"
  },
  {
    title: "Github",
    url: "https://github.com/Niche-Aii/Niche",
    icon: IconBrandGithub,
    target: "_blank"
  },
  {
    title: "X",
    url: "https://x.com/nichedotfun",
    icon: IconBrandX,
    target: "_blank"
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <div className="w-full flex justify-center items-center">
              <span className="font-semibold text-lg">Niche</span>
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
        <Separator />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url} target={item.target}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
