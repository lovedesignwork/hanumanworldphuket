import { Metadata } from 'next';
import Link from 'next/link';
import { Container, Section, SectionHeader, Badge, Button, Card } from '@/components/ui';
import { getPackageById } from '@/lib/data/packages';
import { formatPrice } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Roller Zipline',
  description: "Experience Thailand's first and only roller zipline at Hanuman World Phuket - an 800m track combining roller coaster thrills with ziplining.",
};

export default function RollerZiplinePage() {
  const pkg = getPackageById('roller-zipline');

  if (!pkg) return null;

  return (
    <main className="min-h-screen pt-20">
      <Section className="bg-gradient-to-b from-primary-dark to-background-dark">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${pkg.image})`, backgroundColor: '#1a237e' }}
              />
            </div>
            
            <div>
              <Badge variant="accent" className="mb-4">UNIQUE IN THAILAND</Badge>
              <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-oswald)] font-light text-white mb-4">
                {pkg.name}
              </h1>
              <p className="text-xl text-foreground-muted mb-6">{pkg.description}</p>
              
              <div className="flex items-center gap-4 mb-6">
                <Badge>{pkg.duration}</Badge>
              </div>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white mb-3">What&apos;s Included:</h3>
                <ul className="space-y-2">
                  {pkg.included.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-foreground-muted">
                      <span className="w-2 h-2 bg-accent rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex items-center gap-6">
                <div>
                  <span className="text-foreground-muted">Price</span>
                  <p className="text-3xl font-bold text-accent">{formatPrice(pkg.price)}</p>
                </div>
                <Link href="/packages/roller">
                  <Button size="lg">Book Now</Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
