import Image from 'next/image'

export default function AboutContent() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-8 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 items-start">
          {/* Headshot */}
          <div className="md:col-span-1">
            <div className="image-card sticky top-32">
              <div className="relative h-96 w-full overflow-hidden bg-muted">
                <Image
                  src="/Me.jpg"
                  alt="Editor Headshot"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="md:col-span-2">
            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-accent mb-4">
                  Editor, National Geographic
                </h2>
                <p className="text-lg text-primary font-light">
                  Documentary Production & Cultural Documentation
                </p>
              </div>

              <div className="space-y-6">
                <p className="text-base md:text-lg text-foreground leading-relaxed">
                  As Editor at National Geographic, I am dedicated to refining documentaries to ensure they are ready for public broadcast and meet the highest standards of storytelling excellence. My role involves nurturing narratives that honor their subjects while captivating global audiences.
                </p>

                <div className="bg-muted p-8 border border-border">
                  <h3 className="font-serif text-2xl font-bold text-accent mb-4">
                    My Passion
                  </h3>
                  <p className="text-base text-foreground leading-relaxed">
                    I am driven by an unwavering commitment to storytelling and cultural preservation. Every documentary that passes through my desk represents countless stories—of communities, traditions, and human resilience. My mission is to ensure these narratives reach the world in their truest, most compelling form, fostering understanding and appreciation for the diverse cultures that enrich our planet.
                  </p>
                </div>

                <p className="text-base md:text-lg text-foreground leading-relaxed">
                  Through meticulous editorial work, I help ensure that documentaries not only captivate viewers but also authentically represent the people and places they chronicle. Whether it's preserving endangered traditions, celebrating architectural heritage, or exploring human connections across borders, I believe in the transformative power of visual storytelling.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-8 border-t border-border">
                <div>
                  <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">
                    Focus Areas
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Documentary Production</li>
                    <li>• Cultural Heritage</li>
                    <li>• Editorial Excellence</li>
                    <li>• Broadcast Standards</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">
                    Specializations
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Narrative Refinement</li>
                    <li>• Quality Assurance</li>
                    <li>• Story Development</li>
                    <li>• Cultural Authenticity</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
