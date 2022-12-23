import React, { useEffect, useState } from "react";
import { FlatList, Text, StyleSheet } from "react-native";

import useProdutores from "../../../hooks/useProdutores";
import Cards from "./Cards";

export default function Produtores ({ topo: Topo }) {

    const [titulo, lista] = useProdutores();

    const topoLista = () => {
        return <>
            <Topo />
            <Text style={styles.titulo}>{titulo}</Text>
        </>
    }

    return (
        <FlatList 
            data={lista} 
            ListHeaderComponent={topoLista} 
            renderItem={({ item }) => <Cards {...item}/>}
            keyExtractor={({nome}) => nome}
        />
    )
}

const styles = StyleSheet.create({
    titulo: {
        fontSize: 20,
        lineHeight: 32,
        marginHorizontal: 16,
        marginTop: 16,
        fontWeight: 'bold',
        color: "#464646",
    }
});