import React from 'react';

const TestArticle: React.FC = () => {
  return (
    <article className="mx-8">
      <h1>测试文章标题</h1>
      <p>
        这是一篇用于测试的简单文章。它包含了一些基本的HTML元素,如段落、列表和强调文本。
      </p>
      <h2>文章小节</h2>
      <p>
        这里是文章的一个小节。我们可以在这里添加更多的内容,比如:
      </p>
      <ul>
        <li>列表项目1</li>
        <li>列表项目2</li>
        <li>列表项目3</li>
      </ul>
      <p>
        我们还可以添加一些<strong>强调文本</strong>或者<em>斜体文本</em>来增加文章的可读性。
      </p>
      <p>
        这篇测试文章到此结束。它应该足以测试基本的样式和布局。
      </p>
    </article>
  );
};

export default TestArticle;