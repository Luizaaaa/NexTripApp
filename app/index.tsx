import CardComp from "@/components/Card";
import { generatorExecuse } from "@/services/ia/gerador";
import { styles } from '@/styles';
import { Button, Icon, Input, Text } from '@ui-kitten/components';
import * as Clipboard from 'expo-clipboard';
import { MotiView } from 'moti';
import React, { useState } from "react";
import { Alert, ScrollView, TouchableOpacity } from "react-native";

export default function Index() {
  const [value, setValue] = useState('');
  const [answer, setAnswer] = useState('');
  const [isLoading, setLoading] = useState(false);

  //função para copiar as sugestões dadas pela IA 
  const copyToClipboard = async (content: string) => {
    await Clipboard.setStringAsync(content);
    Alert.alert('Copiado!', 'O roteiro foi copiado para a área de transferência.');
  };

  //chama a IA para gerar o resultado
  const onButtonPress = async () => {
    if (value.length < 3) {
      alert("Caracteres insuficientes!");
      return;
    }
    setLoading(true);
    setAnswer('');
    const result = await generatorExecuse(value);
    setAnswer(result || "...");
    setLoading(false);
  };

  //botão com ícone para apagar o que o usuário digitou junto com a resposta anterior
  const ClearIcon = (props: any) => (
    <TouchableOpacity onPress={() => {setValue(""); setAnswer("")}}>
      <Icon {...props} name="close-circle-outline" />
    </TouchableOpacity>
  );


  return (
      <ScrollView 
        contentContainerStyle={{ flexGrow: 1, alignItems: "center", padding: 30, paddingTop:50 }}
        keyboardShouldPersistTaps="handled"
      >
        <Text category='h1' style={styles.title}>NexTrip</Text>
        <Text category='h3' style={styles.subtitle}>O seu guia de viagens incríveis!</Text>

        <Input  style={styles.input} placeholder="Para onde você vai?"  value={value} onChangeText={setValue}
                accessoryRight={value ? (props) => <ClearIcon {...props} /> : undefined}/>

        <Button style={styles.button} status='success' onPress={onButtonPress}>
          {isLoading ? "Carregando ..." : "Gerar roteiro perfeito!"}
        </Button>

        {answer ? (
          <MotiView
            from={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            style={{ width: "100%", alignItems: "center", marginTop: 20 }}
          >
            <CardComp title={value} onPress={() => copyToClipboard(answer)} content={answer} />
          </MotiView>
        ) : null}
      </ScrollView>
  );
}
