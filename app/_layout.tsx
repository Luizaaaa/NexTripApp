import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, Layout } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { Slot } from 'expo-router';
import React from 'react';
export default function RootLayout() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <IconRegistry icons={EvaIconsPack} /> 
      <Layout>
        <Slot />
      </Layout>
    </ApplicationProvider>
  );
}
