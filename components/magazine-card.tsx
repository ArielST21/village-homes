'use client'

import Image from 'next/image'

interface MagazineCardProps {
  title: string
  subtitle: string
  caption: string
  image: string
  layout?: 'featured' | 'default'
}

export default function MagazineCard({
  title,
  subtitle,
  caption,
  image,
  layout = 'default'
}: MagazineCardProps) {
  if (layout === 'featured') {
    return (
      <div className="md:col-span-2">
        <div className="image-card">
          <div className="relative h-96 md:h-[500px] w-full overflow-hidden bg-muted">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>
          <div className="p-8 md:p-12 bg-background">
            <div className="mb-3">
              <span className="text-xs md:text-sm font-semibold text-primary tracking-widest uppercase">
                Featured
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-accent mb-3 text-balance">
              {title}
            </h2>
            <h3 className="font-serif text-xl md:text-2xl text-primary mb-6 font-light">
              {subtitle}
            </h3>
            <p className="magazine-caption leading-relaxed">
              {caption}
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="image-card">
      <div className="relative h-80 w-full overflow-hidden bg-muted">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6 md:p-8 bg-background">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-accent mb-2">
          {title}
        </h2>
        <h3 className="font-serif text-lg md:text-xl text-primary mb-4 font-light">
          {subtitle}
        </h3>
        <p className="magazine-caption line-clamp-3">
          {caption}
        </p>
      </div>
    </div>
  )
}
