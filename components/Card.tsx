import { styles } from '@/styles';
import { Button, Card, Layout, Text } from '@ui-kitten/components';
import React from 'react';
import { View } from 'react-native';

interface IListItem {
  title: string;
  description: string;
}

interface ICard {
  title: string;
  onPress: () => void;
  content: string;
}
function parseAnswer(answer: string): IListItem[] {
  if (!answer) return [];

  const lines = answer
    .split('\n')
    .map(l => l.trim())
    .filter(l => l.length > 0);

  return lines
    .filter(line => line.startsWith('*'))
    .map(line => {
      const regexBold = /^\*\s*\*\*(.*?)\*\*\s*:?\s*(.*)$/;
      const match = line.match(regexBold);
      if (match) {
        return { title: match[1].trim(), description: match[2].trim() };
      }
      return { title: 'Sugestão', description: line.replace(/^\*\s*/, '').trim() };
    });
}


const Header = ({ title, ...props }: any): React.ReactElement => (
  <Layout {...props} style={styles.headerCard}>
    <Text category='h6' style={styles.title_card}>Viagem para: {title}</Text>
  </Layout>
);

const Footer = ({ onPress, ...props }: any): React.ReactElement => (
  <Layout {...props} style={styles.footerContainer}>
    <Button
      style={styles.button_copy}
      appearance='ghost'
      status='info'
      onPress={onPress}
    >
      Copiar
    </Button>
  </Layout>
);

export default function CardComp({ title, onPress, content }: ICard) {
  const items = parseAnswer(content);

  return (
    <Layout style={styles.container_card}>
      <Card
        style={styles.card}
        header={(props) => <Header {...props} title={title} />}
        footer={(props) => <Footer {...props} onPress={onPress} />}
      >
          {items.map((item, idx) => (
            <View key={idx} style={styles.listItem}>
              <Text style={styles.listTitle}>{item.title}</Text>
              <Text style={styles.listDesc}>{item.description}</Text>
            </View>
          ))}
      </Card>
    </Layout>
  );
}

