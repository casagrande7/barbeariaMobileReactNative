import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView } from "react-native";

function ClienteScreen(): JSX.Element {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [celular, setCelular] = useState("");
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");
    const [pais, setPais] = useState("");
    const [rua, setRua] = useState("");
    const [numero, setNumero] = useState("");
    const [bairro, setBairro] = useState("");
    const [cep, setCep] = useState("");
    const [complemento, setComplemento] = useState("");

    function CadastroClientes() {
        const dados = {
            email: email,
            senha: senha,
            celular: celular,
            nome: nome,
            cpf: cpf,
            dataNascimento: dataNascimento,
            cidade: cidade,
            estado: estado,
            pais: pais,
            rua: rua,
            numero: numero,
            bairro: bairro,
            cep: cep,
            complemento: complemento
        }
        console.log(dados);
    }

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                <View style={styles.card}>
                    <Image style={styles.logo} resizeMode="contain" source={require('../assets/imagens/user.png.png')}></Image>
                    <Text style={styles.title}>Cadastro Clientes</Text>

                    <TextInput style={styles.input} placeholder="Nome" placeholderTextColor={"#151413"} onChangeText={(textNome) => setNome(textNome)} secureTextEntry></TextInput>
                    <TextInput style={styles.input} placeholder="E-mail" placeholderTextColor={"#151413"} onChangeText={(textEmail) => setEmail(textEmail)} secureTextEntry></TextInput>
                    <TextInput style={styles.input} placeholder="Cpf" placeholderTextColor={"#151413"} onChangeText={(textCpf) => setCpf(textCpf)} secureTextEntry></TextInput>
                    <TextInput style={styles.input} placeholder="Data de Nascimento" placeholderTextColor={"#151413"} onChangeText={(textNascimento) => setDataNascimento(textNascimento)} secureTextEntry></TextInput>
                    <TextInput style={styles.input} placeholder="Celular" placeholderTextColor={"#151413"} onChangeText={(textCelular) => setCelular(textCelular)} secureTextEntry></TextInput>
                    <TextInput style={styles.input} placeholder="País" placeholderTextColor={"#151413"} onChangeText={(textPais) => setPais(textPais)} secureTextEntry></TextInput>
                    <TextInput style={styles.input} placeholder="Estado" placeholderTextColor={"#151413"} onChangeText={(textEstado) => setEstado(textEstado)} secureTextEntry></TextInput>
                    <TextInput style={styles.input} placeholder="Cep" placeholderTextColor={"#151413"} onChangeText={(textCep) => setCep(textCep)} secureTextEntry></TextInput>
                    <TextInput style={styles.input} placeholder="Cidade" placeholderTextColor={"#151413"} onChangeText={(textCidade) => setCidade(textCidade)} secureTextEntry></TextInput>
                    <TextInput style={styles.input} placeholder="Bairro" placeholderTextColor={"#151413"} onChangeText={(textBairro) => setBairro(textBairro)} secureTextEntry></TextInput>
                    <TextInput style={styles.input} placeholder="Rua" placeholderTextColor={"#151413"} onChangeText={(textRua) => setRua(textRua)} secureTextEntry></TextInput>
                    <TextInput style={styles.input} placeholder="Número" placeholderTextColor={"#151413"} onChangeText={(textNumero) => setNumero(textNumero)} secureTextEntry></TextInput>
                    <TextInput style={styles.input} placeholder="Complemento" placeholderTextColor={"#151413"} onChangeText={(textComplemento) => setComplemento(textComplemento)} secureTextEntry></TextInput>
                    <TextInput style={styles.input} placeholder="Senha" placeholderTextColor={"#151413"} onChangeText={(textSenha) => setSenha(textSenha)} secureTextEntry></TextInput>

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText} onPress={() => { CadastroClientes() }}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4d663a'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 80,
        height: 80,
        left: 90,

    },
    card: {
        backgroundColor: '#D2B48C',
        width: 300,
        borderRadius: 20,
        padding: 20,
        elevation: 3,
        shadowColor: 'rgba(0,0,0,0.3)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#151413',
        marginBottom: 20,
        textAlign: 'center'
    },
    input:{
      backgroundColor:'#D7D4D1',
      height :40 ,
      marginBottom :20 ,
      paddingHorizontal :10 ,
      borderRadius :8 ,
      borderWidth :1 ,
      borderColor :'#1e90ff'
      
     },
     button:{
       backgroundColor:'#4d663a',
       height :40 ,
       borderRadius :15 ,
       marginBottom :20 ,
       justifyContent :'center'
     },
     buttonText:{
       color :'#FFFFFF',
       textAlign :'center',
       fontSize :16 ,
       lineHeight :40
     },
     forgotPassword:{
       color :'#1e90ff',
       textAlign :'center',
       marginTop :10
     }
});

export default ClienteScreen;