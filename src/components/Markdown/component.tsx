import React, { ReactElement, ReactNode } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Divider, List, Typography } from 'antd';
import { renderToString } from 'react-dom/server';
import { RightCircleFilled } from '@ant-design/icons';
import './styles.scss';

const { Title, Text, Link } = Typography;

const MarkdownComponent: React.FC<{
  children: string;
}> = ({ children }) => {
  const listToArray = (children: ReactNode) => {
    const htmlList =
      renderToString(children as ReactElement).match(/<li(.*?)>(.*?)<\/li>/g) ||
      [];
    const listArray = htmlList.map((item) =>
      item
        .replace(/<\/?li(.*?)>/g, '')
        .replace(/<input type="checkbox"(.*?)\/>/g, '')
        .replace(/<!-- -->/g, ''),
    );
    return listArray;
  };

  return (
    <Markdown
      components={{
        h1: ({ children }) => <Title level={1}>{children}</Title>,
        h2: ({ children }) => <Title level={2}>{children}</Title>,
        h3: ({ children }) => <Title level={3}>{children}</Title>,
        h4: ({ children }) => <Title level={4}>{children}</Title>,
        h5: ({ children }) => <Title level={5}>{children}</Title>,
        p: ({ children }) => (
          <p>
            <Text>{children}</Text>
          </p>
        ),
        em: ({ children }) => <Text italic>{children}</Text>,
        strong: ({ children }) => <Text strong>{children}</Text>,
        del: ({ children }) => <Text delete>{children}</Text>,
        a: ({ children, href }) => (
          <Link href={href} target="_blank">
            {children}
          </Link>
        ),
        ul: ({ children }) => {
          return (
            <List
              className="list"
              bordered
              dataSource={listToArray(children)}
              renderItem={(item: string) => (
                <List.Item>
                  <Text>
                    <RightCircleFilled />
                    {` ${item}`}
                  </Text>
                </List.Item>
              )}
            />
          );
        },
        ol: ({ children }) => (
          <List
            className="list"
            bordered
            dataSource={listToArray(children)}
            renderItem={(item: string, index: number) => (
              <List.Item>
                <Text>{`${index + 1}. ${item}`}</Text>
              </List.Item>
            )}
          />
        ),
        hr: () => <Divider />,
      }}
      remarkPlugins={[remarkGfm]}
    >
      {children}
    </Markdown>
  );
};

export default MarkdownComponent;
