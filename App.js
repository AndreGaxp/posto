import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity } from 'react-native';

export default function posto() {
  return (
    <View style={styles.container}>
      <Image
        source={require('./src/img/logo.png')}

      />

      <Text style={styles.title}> Qual melhor opção?</Text>

      <View style={styles.areaInput}>
        <Text style={styles.subtitle}>Álcool (preço por litro):</Text>
        <TextInput
          style={styles.input}
          placeholder='Digite o preço do álcool (Ex: 4.50)'
        />
      </View>

      <View style={styles.areaInput}>
        <Text style={styles.subtitle}>Álcool (preço por litro):</Text>
        <TextInput
          style={styles.input}
          placeholder='Digite o preço da gasolina (Ex: 6.50)'
        />
      </View>

      <TouchableOpacity style={styles.btn}>
        <Text style={styles.txtBtn}>Calcular</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    paddingTop: 60,
  },

  title: {
    fontSize: 30,
    color: '#fff',
    marginTop: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  areaInput: {
    alignSelf: 'flex-start',
    marginStart: 20,
  },

  subtitle: {
    fontSize: 18,
    color: '#fff',
    marginTop: 30,
  },

  input: {
    marginTop: 5,
    width: 370,
    padding: 15,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 3,
  },

  btn: {
    marginTop: 20,
    backgroundColor: '#ff0000',
    height: 45,
    width: 370,
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center'
  },

  txtBtn:{
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
})