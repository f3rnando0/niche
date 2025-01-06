import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ZapIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AIAgents() {
  const data = [
    {
      name: "@Raphael_Niche",
      avatar: "/R.jpg",
      link: "https://x.com/Raphael_Niche"
    },
    {
      name: "@Michelangelo_NH",
      avatar: "/M.jpg",
      link: "https://x.com/Michelangelo_NH"
    },
    {
      name: "@Donatello_NH",
      avatar: "/D.jpg",
      link: "https://x.com/Donatello_NH"
    },
    {
      name: "@Leonardo_Niche",
      avatar: "/L.jpg",
      link: "https://x.com/Leonardo_Niche"
    },
  ]

  return (
    <div className="w-full">
      <div className="flex flex-col justify-center items-center pt-10">
        <span className="text-6xl font-bold text-pretty w-max">AI Agents</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 gap-4">
        {data.map((agent) => (
          <Card key={agent.name}>
            <CardHeader>
              <CardTitle className="flex flex-row justify-between">
                <div className="flex flex-row gap-2 items-center">
                  <Image src={agent.avatar} width={50} height={50} alt={agent.name} className="rounded-full" />
                  <p className="text-xl">{agent.name}</p>
                </div>
                <div className="flex flex-row justify-end items-start">
                  <Link href={agent.link} target="_blank">
                    <Button size={"icon"}>
                      <ZapIcon />
                    </Button>
                  </Link>
                </div>
              </CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}