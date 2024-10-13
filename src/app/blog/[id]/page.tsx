import { useRouter } from 'next/router';

export default function BlogPost({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>博客文章: {params.id}</h1>
      {/* 这里可以根据 id 加载具体的博客内容 */}
    </div>
  );
}