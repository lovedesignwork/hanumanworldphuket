import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase/client';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ type: string }> }
) {
  try {
    const { type } = await params;

    const { data, error } = await supabase
      .from('legal_content')
      .select('title, content, updated_at')
      .eq('type', type)
      .eq('is_active', true)
      .single();

    if (error || !data) {
      return NextResponse.json({ error: 'Content not found' }, { status: 404 });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching legal content:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
