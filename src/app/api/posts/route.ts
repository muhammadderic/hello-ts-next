// app/api/posts/route.ts
import prisma from '@/lib/db';
import { NextResponse } from 'next/server';

// POST request handler for creating a new post
export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log(body);
    const { title, content, published } = body;

    const newPost = await prisma.post.create({
      data: {
        title,
        content,
        published: published || false,
      },
    });

    return NextResponse.json(newPost, { status: 200 });
  } catch (error) {
    console.error('Error creating post:', error);
    return NextResponse.json({ error: 'Failed to create post' }, { status: 500 });
  }
}
