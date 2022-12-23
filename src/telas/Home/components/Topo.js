import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import { carregaTopo  } from '../../../servicos/carregaDados';
import logo from '../../../assets/logo.png';

class Topo extends React.Component {

    state = {
        topo: { 
            boasVindas: '',
            legenda: '',
        }
    }

    atualizaTopo() {
        const retorno = carregaTopo();
        this.setState({topo: retorno});
    }

    componentDidMount() {
        this.atualizaTopo()
    }

    render() {
        return (
            <View style={styles.topo}>
                <Image source={logo} style={styles.imagem}/>
                <Text style={styles.boasVindas}>{this.state.topo.boasVindas}</Text>
                <Text style={styles.legenda}>{this.state.topo.legenda}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    topo: {
        backgroundColor: '#f6f6f6',
        padding: 16,
    },
    imagem: {
        width: 70,
        height: 28,
    },
    boasVindas: {
        marginTop: 24,
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold',
        color: '#464646',
    },
    legenda: {
        fontSize: 16,
        lineHeight: 26,
        color: '#a3a3a3',
    },
});

export default Topo;