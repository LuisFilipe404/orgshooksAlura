import React, { useReducer, useMemo } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Estrelas from '../../../components/Estrelas';

const distanciaEmMetros = (distancia) => {
    return `${distancia}m`;
}

export default function Cards({ nome, imagem, distancia, estrelas }) {

    const [selecionado, inverterSelecionado] = useReducer(
        (selecionado) => !selecionado,
        false
    )

    const distanciaTexto = useMemo(() => distanciaEmMetros(distancia), [distancia]);

    return (
        <TouchableOpacity style={styles.cartao} onPress={inverterSelecionado}>
            <Image source={imagem} accessibilityLabel={nome} style={styles.imagem}/>
            <View style={styles.info}>
                <View>
                    <Text style={styles.nome}>{nome}</Text>
                    <Estrelas 
                        quantidade={estrelas} 
                        editavel={selecionado} 
                        grande={selecionado}
                    />
                </View>
                <Text style={styles.distancia}>{distanciaTexto}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cartao: {
        backgroundColor: "#f6f6f6",
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 6,
        flexDirection: "row",
        // Sombra IOS
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        // Sombra android
        elevation: 4,
    },
    imagem: {
        width: 48,
        height: 48,
        borderRadius: 6,
        marginVertical: 16,
        marginLeft: 16,
    },
    info: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: 8,
        marginVertical: 16,
        marginRight: 16,
    },
    nome: {
        fontSize: 14,
        lineHeight: 22,
        fontWeight: "bold",
    },
    distancia: {
        fonteSize: 12,
        lineHeight: 19,
    }
});