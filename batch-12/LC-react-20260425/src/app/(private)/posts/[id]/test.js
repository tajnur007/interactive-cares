// 1. Tell Next.js which IDs to pre-render at build time
export async function generateStaticParams() {
  const posts = await fetch('https://api.example.com/posts').then(res => res.json());
  return posts.map((post) => ({ id: post.id.toString() }));
}

export default async function PostPage({ params } ) {
  const { id } = params;
  // This fetch is cached (SSG) by default
  const res = await fetch(`https://api.example.com/posts/${id}`);
  const post = await res.json();

  return <article><h1>{post.title}</h1></article>;
}