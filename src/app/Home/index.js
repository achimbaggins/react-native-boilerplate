import React, {useState} from 'react';
import {
  SafeAreaView,StyleSheet,TouchableOpacity,
  ScrollView,View,Text,StatusBar,
} from 'react-native';
import Angka from '../Angka'

const Home = (props) => {
  console.log('=====================props Home', props)
  const [count, setCount] = useState(0)

  const TesMethod = (operator) => {
    let newCount = operator == '+' ? count+1 : count-1
    setCount(newCount)
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Angka props={{count,setCount}}/>
          <View style={{justifyContent:'center', alignItems:'center', marginBottom: 20,}}>
            <Text style={{color:'black', fontWeight:'bold', fontSize: 34,}}>{count}</Text>
          </View>
          <View style={{flexDirection:'row',flex:1,}}>
            <TouchableOpacity style={{flex:1,}} onPress={()=>TesMethod('1')}>
              <View style={{flex: 1, padding: 20, backgroundColor:'blue', margin: 5,}}>
                <Text style={{color:'white', fontWeight:'bold'}}>Kurang 1</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{flex:1,}} onPress={()=>TesMethod('+')}>
              <View style={{flex: 1, padding: 20, backgroundColor:'green', margin: 5,}}>
                <Text style={{color:'white', fontWeight:'bold'}}>Tambah 1</Text>
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={()=>setCount(0)}>
            <View style={{padding: 20, backgroundColor:'black', margin: 5,}}>
              <Text style={{color:'white', fontWeight:'bold'}}>Reset</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>props.navigation.navigate('NewsHome',{item: {name:'Achim'}})}>
            <View style={{padding: 20, backgroundColor:'orange', margin: 5,}}>
              <Text style={{color:'white', fontWeight:'bold'}}>Go News</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    // backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    // backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    // color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    // color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    // color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default Home;
