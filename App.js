import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {Text, View,FlatList,TouchableOpacity,Image, ScrollView,ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function App() {

  const [kategori,setKategori] = useState([
    {
      nama : 'Ayam',
    },
    {
      nama : 'Sayur',
    },
    {
      nama : 'Minuman',
    },
    {
      nama : 'Salad',
    },
    {
      nama : 'Gorengan',
    },
    {
      nama : 'Rebus',
    },
    {
      nama : 'Telur',
    },
  ]);

  const [kategoriSeleksi,setKategoriSeleksi]= useState({
    nama: 'Ayam',
  });
  
  const [dataTrending,setDataTrending]= useState([
    {namaResep: 'Ayam Goreng Mantap', 
      autor: 'Dian',
      image:
        require('./src/images/1.jpg')
    },
    {namaResep: 'Ayam Goreng Rica Rica', 
      autor: 'Risa',
      image: 
        require('./src/images/2.jpg')
    },
    {namaResep: 'Ayam Goreng Telur.jpg', 
      autor: 'Dwi',
      image: 
        require('./src/images/3.jpg')
      },
    {namaResep: 'Mie Goreng Ayam', 
      autor: 'Budi',
      image: 
        require('./src/images/4.jpg')
    },
  ]);

  const [dataVideo,setDataVideo]= useState([
    {namaResep: 'Ayam Goreng Mantap', 
      autor: 'Dian',
      image:require('./src/images/3.jpg'),
      length:'10:10',
    },
    {namaResep: 'Ayam Goreng Rica Rica', 
      autor: 'Risa',
      image: require('./src/images/4.jpg'),
      length: '09:10',
    },
    {namaResep: 'Ayam Goreng Telur.jpg', 
      autor: 'Dwi',
      image: require('./src/images/1.jpg'),
      length: '12:14',
      },
    {namaResep: 'Mie Goreng Ayam', 
      autor: 'Budi',
      image: require('./src/images/2.jpg'),
      length:'09:05',
    },
  ]);


  return (
    <View style={{flex: 1, backgroundColor: '#f5f5f5'}}>
      <ScrollView>
      <StatusBar backgroundColor="#f5f5f5" barStyle="dark-content"/>
      <View style={{marginHorizontal: 20,marginBottom: 20,marginTop: 20}}>
        <Text style={{fontSize: 28, fontWeight: 'bold', color: '#212121'}}>
          resep<Text style={{color: '#4169e1'}}>ku</Text>
        </Text>
      </View>
      <View>
        <FlatList
          data={kategori}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{marginLeft: 10}}
          renderItem={({item})=>
            <TouchableOpacity
              style={{
              marginRight: 5,
              backgroundColor:
               kategoriSeleksi.nama == item.nama ? '#4169e1' : '#fff',
              elevation: 3,
              paddingHorizontal: 15,
              paddingVertical: 8,
              marginBottom: 10,
              borderRadius: 15,
              marginLeft: 5,
            }}
            onPress={()=> setKategoriSeleksi(item)}>
            <Text
              style={{
                color: kategoriSeleksi.nama == item.nama ? '#fff' : '#212121',
              }}>
              {item.nama}
            </Text>
          </TouchableOpacity>
          }
        /> 
      </View>  
      <View style={{
        marginHorizontal: 20,
        marginBottom: 20,
        marginTop: 10,
        flexDirection: 'row',
        }}>
        <View 
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: '#212121'}}>
            Trending
          </Text>
        </View>
        
        <TouchableOpacity
          style={{
            justifyContent: 'flex-end',
            alignItems: 'center',
            flex: 1,
            flexDirection: 'row',
            marginTop: 10,
          }}>
          <Text style={{fontSize: 14}}>Lihat semua</Text>
          <Icon name="chevron-forward" size={20} color="#bdbdbd" />
        </TouchableOpacity>
      </View>

      <View>
        <FlatList
          data={dataTrending}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{marginLeft: 10}}
          renderItem={({item})=>
            <TouchableOpacity
              style={{
              marginRight: 5,
              backgroundColor:'#fff',
              elevation: 3,
              paddingHorizontal: 15,
              paddingVertical: 8,
              marginBottom: 10,
              borderRadius: 15,
              marginLeft: 5,
            }}>
            <Image 
              source={ item.image}
              style={{
                width: 200, 
                height: 150,
                marginTop: 10,
                marginBottom: 10,
                borderRadius: 3,
              }}
              resizeMode={'cover'}
            />
            <Text
              style={{
                color: '#212121',
                fontSize: 18,
                fontWeight: 'bold',
              }}>
              {item.namaResep}
            </Text>
            <Text>{item.autor}</Text>
          </TouchableOpacity>
          }
        /> 
      </View> 
      <View style={{
        marginHorizontal: 20,
        marginBottom: 20,
        marginTop: 10,
        flexDirection: 'row',
        }}>
        <View 
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: '#212121'}}>
            Video Masak
          </Text>
        </View>
        
        <TouchableOpacity
          style={{
            justifyContent: 'flex-end',
            alignItems: 'center',
            flex: 1,
            flexDirection: 'row',
            marginTop: 10,
          }}>
          <Text style={{fontSize: 14}}>Lihat semua</Text>
          <Icon name="chevron-forward" size={20} color="#bdbdbd" />
        </TouchableOpacity>
      </View>

      <View>
        <FlatList
          data={dataVideo}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{marginLeft: 10}}
          renderItem={({item})=>
            <TouchableOpacity
              style={{
              marginRight: 5,
              backgroundColor:'#fff',
              elevation: 3,
              paddingHorizontal: 15,
              paddingVertical: 8,
              marginBottom: 10,
              borderRadius: 15,
              marginLeft: 5,
            }}>
            <ImageBackground
              source={ item.image}
              style={{
                width: 200, 
                height: 150,
                marginTop: 10,
                marginBottom: 10,
                borderRadius: 3,
              }}
              resizeMode={'cover'}>
              <View style={{flex: 1}}>
              <View style={{flex: 1}}></View>
                <View 
                  style={{
                    
                    flexDirection: 'row'
                  }}>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: 'rgba(0,0,0,0.7)',                    
                      paddingTop: 2,
                      paddingBottom: 2,
                    }}>
                    <Icon 
                      style={{marginLeft: 5}}
                      name="play-circle" 
                      size={15} 
                      color="#bdbdbd" 
                      />
                  </View>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: 'rgba(0,0,0,0.7)',
                      paddingRight: 10,
                      paddingTop: 2,
                      paddingBottom: 2,
                    }}>                    
                  </View>
                  <Text style={{color: '#FFFFFF'}}>{item.length}</Text>
                </View>
              </View>
            </ImageBackground>
            <Text
              style={{
                color: '#212121',
                fontSize: 18,
                fontWeight: 'bold',
              }}>
              {item.namaResep}
            </Text>
            <Text>{item.autor}</Text>
          </TouchableOpacity>
          }
        /> 
      </View> 
      
    <StatusBar style="auto" />
      </ScrollView>
      <View style={{flexDirection: 'row',paddingTop: 5}}>
      <TouchableOpacity 
        style={{justifyContent: 'center',alignItems: 'center',flex: 1}}>
      <Icon 
        name="home" 
        size={25} 
        color="#4169e1" 
        />
        <Text style={{color: '#4169e1'}}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={{justifyContent: 'center',alignItems: 'center',flex: 1}}>
      <Icon 
        name="search" 
        size={25} 
        color="#bdbdbd" 
        />
        <Text style={{color: '#bdbdbd'}}>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={{justifyContent: 'center',alignItems: 'center',flex: 1}}>
      <Icon
        name="file-tray-full" 
        size={25} 
        color="#bdbdbd" 
        />
        <Text style={{color: '#bdbdbd'}}>kategori</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={{justifyContent: 'center',alignItems: 'center',flex: 1}}>
      <Icon
        name="person" 
        size={25} 
        color="#bdbdbd" 
        />
        <Text style={{color: '#bdbdbd'}}>User</Text>
      </TouchableOpacity>
      </View>  
  </View>
  );
}

