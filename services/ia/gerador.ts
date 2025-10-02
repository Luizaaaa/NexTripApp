import {
    GoogleGenAI,
} from '@google/genai';

export async function generatorExecuse(execuse: string) {
    const ai = new GoogleGenAI({
        apiKey: process.env.EXPO_PUBLIC_GEMINI_API_KEY,
    });
    const config = {
        thinkingConfig: {
            thinkingBudget: 0,
        },
        systemInstruction: [
            {
                text: `Estou fazendo um app onde o usuario irá entrar com um lugar que ele deseja viajar e quero responder com uma lista de pontos turísticos que ele pode visitar, com uma breve descrição de cada lugar.

                    Responda em forma de tópicos. Sem links. Até 6 opções`,
            }
        ],
    };
    const model = 'gemini-2.5-flash-lite';
    const contents = [
        {
            role: 'user',
            parts: [
                {
                    text: execuse,
                },
            ],
        },
    ];

    try {
        const response = await ai.models.generateContent({
            model,
            config,
            contents,
        });

        const result = response?.candidates?.[0]?.content?.parts?.[0]?.text;
        return result;
    } catch (error) {
        return "Vai estar chovendo! Melhor cancelar a viagem e ficar embaixo das cobertas."
    }
}
