import React from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Typography } from 'antd';
import './styles.scss';

const { Title, Text } = Typography;

const MarkdownComponent: React.FC<{
  children: string;
}> = ({ children }) => (
  <Markdown
    components={{
      h1: Title,
      h2: (props) => <Title level={2} {...props} />,
      h3: (props) => <Title level={3} {...props} />,
      h4: (props) => <Title level={4} {...props} />,
      h5: (props) => <Title level={5} {...props} />,
      p: (props) => (
        <p>
          <Text {...props} />
        </p>
      ),
      em: (props) => <Text italic {...props} />,
      strong: (props) => <Text strong {...props} />,
      del: (props) => <Text delete {...props} />,
    }}
    remarkPlugins={[remarkGfm]}
  >
    {children}
  </Markdown>
);

export default MarkdownComponent;
