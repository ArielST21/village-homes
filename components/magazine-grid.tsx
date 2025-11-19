import MagazineCard from './magazine-card'

const magazines = [
  {
    id: 1,
    title: 'Tuscan Heritage',
    subtitle: 'The Warmth of Italian Stone',
    caption: 'Deep in the Tuscan countryside, centuries-old farmhouses stand as testaments to generations of rural life. These warm-hued stone dwellings, with their terracotta roofs and vine-covered facades, represent the enduring spirit of Italian agricultural tradition.',
    image: '/Italy.jpg',
    featured: true
  },
  {
    id: 2,
    title: 'Nomadic Traditions',
    subtitle: 'Mongolia\'s Timeless Yurts',
    caption: 'The ger, or yurt, is more than shelter in the Mongolian steppe—it\'s a philosophy of portable living perfected over millennia. These ingenious structures adapt to one of Earth\'s harshest climates with elegant simplicity.',
    image: '/yurtas.jpg',
  },
  {
    id: 3,
    title: 'Earth and Tradition',
    subtitle: 'African Mud Houses',
    caption: 'Built from the very earth beneath their feet, traditional African mud dwellings showcase extraordinary architectural knowledge. These structures provide thermal comfort and reflect deep connections to place and community.',
    image: '/Africa.webp',
  },
  {
    id: 4,
    title: 'English Countryside',
    subtitle: 'Cottages of Stone and Character',
    caption: 'English country cottages embody centuries of refined rural aesthetics. With their charming proportions, slate roofs, and intimate scale, these homes have inspired generations of artists, writers, and dreamers.',
    image: '/England.webp',
  },
  {
    id: 5,
    title: 'Island Elegance',
    subtitle: 'Santorini\'s Iconic White Homes',
    caption: 'Perched on volcanic cliffs above the Aegean Sea, Santorini\'s whitewashed homes with their distinctive blue doors represent Mediterranean beauty at its most sublime. Their design evolved to reflect sunlight and withstand coastal elements.',
    image: '/Santorini.jpg',
  }
]

export default function MagazineGrid() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {magazines.map((magazine, idx) => (
            <MagazineCard 
              key={magazine.id} 
              {...magazine}
              layout={idx === 0 ? 'featured' : 'default'}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
