import { Metadata } from 'next';
import Link from 'next/link';
import { Container, Section, SectionHeader, Card, Badge } from '@/components/ui';
import { formatDate } from '@/lib/utils';
import { generatePageMetadata } from '@/lib/seo/config';
import { supabaseAdmin } from '@/lib/supabase/server';

export const metadata: Metadata = generatePageMetadata(
  'Blog - Adventure Tips & Stories',
  'Read the latest news, adventure tips, safety guides, and stories from Hanuman World Phuket. Discover zipline experiences, travel tips, and rainforest insights.',
  '/blog'
);

export const revalidate = 60;

async function getBlogPosts() {
  const { data: posts, error } = await supabaseAdmin
    .from('blog_posts')
    .select('id, title, slug, excerpt, featured_image, category, published_at, content')
    .eq('status', 'published')
    .order('published_at', { ascending: false });

  if (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }

  return posts.map(post => ({
    ...post,
    readTime: Math.ceil((post.content?.replace(/<[^>]*>/g, '').split(/\s+/).length || 0) / 200) || 5,
  }));
}

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <main className="min-h-screen pt-20">
      <Section className="bg-gradient-to-b from-primary-dark to-background-dark">
        <Container>
          <SectionHeader
            title="Our Blog"
            subtitle="Tips, stories, and news from Thailand's biggest zipline adventure"
          />
          
          {posts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-foreground-muted text-lg">No blog posts yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <Card padding="none" className="overflow-hidden group h-full hover:border-accent/30 transition-colors">
                    <div className="relative h-48 overflow-hidden">
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                        style={{ 
                          backgroundImage: post.featured_image ? `url(${post.featured_image})` : undefined, 
                          backgroundColor: '#1a237e' 
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark to-transparent" />
                      {post.category && (
                        <div className="absolute top-4 left-4">
                          <Badge>{post.category}</Badge>
                        </div>
                      )}
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-[family-name:var(--font-oswald)] font-normal text-white mb-2 group-hover:text-accent transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-foreground-muted text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                      
                      <div className="flex items-center justify-between text-sm text-foreground-muted">
                        <span>{post.published_at ? formatDate(post.published_at) : ''}</span>
                        <span>{post.readTime} min read</span>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </Container>
      </Section>
    </main>
  );
}
