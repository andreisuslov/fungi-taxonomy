"use client"

import { useState } from "react"
import { ChevronRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Taxon {
  name: string
  rank: string
  description?: string
  attributes?: Record<string, any>
  children?: Record<string, Taxon>
}

interface TaxonomyLevelProps {
  data: Taxon
  level: number
}

export default function TaxonomyLevel({ data, level }: TaxonomyLevelProps) {
  const [expanded, setExpanded] = useState(false)
  const [showDescription, setShowDescription] = useState(false)

  const getRandomColor = () => {
    const hue = Math.floor(Math.random() * 360)
    return `hsl(${hue}, 70%, 80%)`
  }

  const bgColor = getRandomColor()

  return (
    <div className="ml-4">
      <div
        className="mb-4 rounded-lg overflow-hidden shadow-lg"
        style={{
          background: `linear-gradient(135deg, ${bgColor}55, ${bgColor}22)`,
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.18)",
        }}
      >
        <div className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {data.children && Object.keys(data.children).length > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="mr-2 text-white hover:text-gray-200"
                  onClick={() => setExpanded(!expanded)}
                >
                  {expanded ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                </Button>
              )}
              <span className="font-semibold text-white text-lg">
                {data.name.replace(/_/g, " ")} <span className="text-sm">({data.rank})</span>
              </span>
            </div>
            {data.description && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowDescription(!showDescription)}
                className="bg-white bg-opacity-20 text-white border-white border-opacity-40 hover:bg-opacity-30"
              >
                {showDescription ? "Hide" : "Show"} Description
              </Button>
            )}
          </div>
          {showDescription && data.description && (
            <div className="mt-2 text-sm text-white bg-black bg-opacity-10 p-3 rounded-md">
              {data.description}
            </div>
          )}
          {expanded && data.children && (
            <div className="mt-2">
              {Object.entries(data.children).map(([childKey, childTaxon]) => (
                <TaxonomyLevel key={childKey} data={childTaxon} level={level + 1} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

