import { Image, StyleSheet, Text, Button, Alert, Pressable, } from 'react-native';
import { CheckBox, } from 'react-native-elements';
import { ThemedView } from '@/components/ThemedView';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';

export default function HomeScreen() {
    const navigation = useNavigation();
    const [isSelected, setSelected] = useState(false)
    const [password, setPassword] = useState('');     
    return (
        <ThemedView style={styles.body}>
            <ThemedView style={styles.container}>
                <ThemedView style={styles.block}>
                    <Image source={require('../assets/images/G.svg')} style={styles.image} />
                    <Text style={styles.loginText}>
                        Olá!
                    </Text>
                </ThemedView>
                <ThemedView style={styles.block}>
                <TextInput
                style={styles.input}
                placeholder="Digite sua senha"
                secureTextEntry={!isSelected}  // Altera a visibilidade da senha
                value={password}
                onChangeText={setPassword}
            />
                <CheckBox
                    title="Mostrar senha"
                    checked={isSelected}
                    onPress={() => setSelected(!isSelected)}  // Alterna o estado do checkbox
                />
                    <ThemedView style={styles.actionsContainer}>
                        <Pressable>
                            <Text style={styles.linkText}>
                                Esqueceu a senha?
                            </Text>
                        </Pressable>
                        <Pressable style={styles.btn}
                        onPress={() => {navigation.navigate('index')}}>
                            <Text style={styles.btnText}>
                                Próxima
                            </Text>
                        </Pressable>
                    </ThemedView>
                </ThemedView>
            </ThemedView>
            <ThemedView style={styles.footer}>
                <Text style={styles.footerText}>
                    Português (Brasil)
                </Text>
                <ThemedView style={styles.footerLinks}>
                    <Pressable>
                        <Text style={styles.footerLinkText}>
                            Ajuda
                        </Text>
                    </Pressable>
                    <Pressable>
                        <Text style={styles.footerLinkText}>
                            Privacidade
                        </Text>
                    </Pressable>
                    <Pressable>
                        <Text style={styles.footerLinkText}>
                            Termos
                        </Text>
                    </Pressable>
                </ThemedView>
            </ThemedView>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: 'lightgray',
        alignItems: 'center',
        justifyContent: "center",
    },

    container: {
        display: "flex",
        flexDirection: "row",
        width: "70%",
        height: "auto",
        backgroundColor: "white",
        borderRadius: 32,
        justifyContent: "space-between",
    },

    block: {
        margin: 30,
        backgroundColor: "white"
    },

    image: {
        width: 45,
        height: 45,
    },

    loginText: {
        fontSize: 38,
        fontWeight: "400",
        marginTop: 30,
    },

    googleText: {
        fontSize: 16,
        marginTop: 20,
    },

    input: {
        width: 400,
        height: 50,
        marginRight: 20,
        padding: 15,
        marginTop: "25%",
        fontSize: 20,
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 4,
        color: "darkGray",
    },

    forgotEmail: {
        marginTop: 10,
    },

    linkText: {
        color: "blue",
        fontSize: 14,
    },

    infoContainer: {
        backgroundColor: "white",
        marginBottom: 40,
    },

    infoText: {
        fontSize: 14,
        width: 400,
        marginTop: 40,
    },

    actionsContainer: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: "white",
        justifyContent: "flex-end",
        alignItems: 'center',
        paddingTop: '15%',
    },

    btn: {
        marginVertical: 12,
        marginHorizontal: 30,
        width: "23%",
        height: "80%",
        backgroundColor: "#0b57d0",
        borderRadius: 100,
        justifyContent: "center",
    },

    btnText: {
        color: "white",
        fontSize: 14,
        fontWeight: "600",
        textAlign: "center",
    },

    footer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        width: "70%",
        backgroundColor: "lightgray",
    },

    footerText: {
        backgroundColor: "lightgray",
        fontSize: 12,
        margin: 12,
    },

    footerLinks: {
        backgroundColor: "lightgray",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 10,
        margin: 15,
    },

    footerLinkText: {
        fontSize: 12,
        margin: 12,
    },
});
