import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    // GERAL
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    
    titulo: {
        fontSize: 20,
        fontWeight: '900',
        color: '#3ea4cdff',
        marginBottom: 20
    },

    botao: {
        backgroundColor: '#3ea4cdff',
        marginTop: 25,
        padding: 8,
        borderWidth: 1,
        borderColor: '#8f9ea5ff',
        borderRadius: 15,
        width: '60%',
        alignItems: 'center',
    },

    botaoTexto: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 700
    },

    input: {
        backgroundColor: '#ffffff',
        width: '80%',
        borderRadius: 10,
        borderColor: '#3ea4cdff',
        borderWidth: 1,
        marginTop: 20,
        padding: 10,
        fontSize: 14
    },

    viewItem: {
        backgroundColor: '#ffffffd8',
        padding: 10,
        borderWidth: 2,
        flexDirection: 'column',
        borderColor: '#3ea4cdff',
        borderRadius: 50,
        alignItems: 'center',
        marginBottom: 15,
    },

    textoItem: {
        fontSize: 16,
        color: '#060101ff'
    },

    textoBold: {
        fontWeight: 900,
        color: '#3ea4cdff'
    },

    icone: {
        width: 100,
        height: 100,
        marginBottom: 10,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: '#3ea4cdff'
    },

    mapa: {
        width: '100%',
        height: '100%',
        borderRadius: 15,
    },

    Logo: {
        width: 160,
        height: 160,
        marginBottom: 20,
    },

    sobreTitulo: {
        fontSize: 20,
        fontWeight: '900',
        color: '#3ea4cdff',
        marginBottom: 10,
        textAlign: 'center'
    },

    sobreTexto: {
        fontSize: 16,
        color: '#333',
        textAlign: 'justify',
        marginHorizontal: 20,
        marginBottom: 10
    },

    sobreTextoDestaqueAzul: {
        fontWeight: 'bold',
        color: '#3ea4cdff'
    },

    sobreTextoDestaqueVerde: {
        fontWeight: 'bold',
        color: '#9FCBAB'
    },

    sobreRodape: {
        fontSize: 15,
        color: '#666',
        textAlign: 'center',
        marginTop: 30,
        fontStyle: 'italic'
    },

    homeContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 25,
        paddingVertical: 40
    },

    homeTitulo: {
        fontSize: 20,
        fontWeight: '900',
        color: '#3ea4cdff',
        textAlign: 'center',
        marginBottom: 15
    },

    homeDescricao: {
        fontSize: 16,
        color: '#333',
        textAlign: 'center',
        lineHeight: 22,
        marginBottom: 25,
        marginHorizontal: 10
    },

});
