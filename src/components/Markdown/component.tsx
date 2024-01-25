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
      h1: (props) => <Title level={1}>{props.children}</Title>,
      h2: (props) => <Title level={2}>{props.children}</Title>,
      h3: (props) => <Title level={3}>{props.children}</Title>,
      h4: (props) => <Title level={4}>{props.children}</Title>,
      h5: (props) => <Title level={5}>{props.children}</Title>,
      p: (props) => (
        <p>
          <Text>{props.children}</Text>
        </p>
      ),
      em: (props) => <Text italic>{props.children}</Text>,
      strong: (props) => <Text strong>{props.children}</Text>,
      del: (props) => <Text delete>{props.children}</Text>,
    }}
    remarkPlugins={[remarkGfm]}
  >
    {children}
  </Markdown>
);

export default MarkdownComponent;
