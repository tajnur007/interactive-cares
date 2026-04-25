// 'use client'

async function getPosts() {
  // By default, fetch uses { cache: 'force-cache' } in SSG mode
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    // cache: 'force-cache', // SSG
    // cache: 'no-store', // SSR
    // next: { 
    //   revalidate: 60
    // }, // ISR
  });
  return res.json();
}

export default async function BlogPage() {
  const posts = await getPosts();
  
  return (
    <main>
      <h1>Our Blog</h1>
      {posts.map((post) => (
        <article key={post.id}>{post.title}</article>
      ))}
    </main>
  );
}
