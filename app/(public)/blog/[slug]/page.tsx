import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { Container, Section, Badge, Button } from '@/components/ui';
import { getBlogPostBySlug, blogPosts } from '@/lib/data/blog';
import { formatDate } from '@/lib/utils';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  
  if (!post) {
    return { title: 'Post Not Found' };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-20">
      <Section className="bg-gradient-to-b from-primary-dark to-background-dark">
        <Container size="md">
          <Link href="/blog" className="inline-flex items-center gap-2 text-foreground-muted hover:text-accent mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          
          <div className="relative h-[400px] rounded-2xl overflow-hidden mb-8">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${post.image})`, backgroundColor: '#1a237e' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <Badge>{post.category}</Badge>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-oswald)] font-light text-white mb-6">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-foreground-muted mb-8 pb-8 border-b border-white/10">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              {post.author}
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {formatDate(post.publishedAt)}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readTime} min read
            </div>
          </div>
          
          <div className="prose prose-invert prose-lg max-w-none">
            <div 
              className="text-foreground-muted leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }}
            />
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-white/10 rounded-full text-sm text-foreground-muted">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
