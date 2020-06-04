/* eslint-disable prettier/prettier */
import React from 'react';
import { View,Text,FlatList,TouchableOpacity,StyleSheet } from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

class Listing extends React.Component{
    _renderItem(item){
        return(
            <View style={styles.listItemRowContainer}>
               <View style={styles.listItemRow}>
                   <Text>{item.name}</Text>
                </View>
                <View style={styles.listItemRow}>
                    <Text>{item.country}</Text>
                </View>
                <View style={styles.listItemRow}>
                    <Text>{item.favMobBrand}</Text>
                </View>
                <View style={styles.listItemRow}>
                    <Text>{item.phoneNumber}</Text>
                </View>
                <View style={[styles.listItemRow,{flexDirection:'row',justifyContent:'space-between'}]}>
                  <TouchableOpacity onPress={() => this.props.editItem(item.id)}>
                     <FontAwesome5 name={'edit'} size={20} solid />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.props.deleteItem(item.id)}>
                     <FontAwesome5 name={'trash'} size={20} solid /> 
                  </TouchableOpacity>     
                </View>
            </View>
        )
    }
    _renderHeader(){
        return(
            <View style={styles.headerContainer}>
               <View style={styles.headerItem}>
                   <Text>Name</Text>
               </View>
               <View style={styles.headerItem}>
                   <Text>Country</Text>
               </View>
               <View style={styles.headerItem}>
                   <Text>FavMobBrand</Text>
               </View>
               <View style={styles.headerItem}>
                   <Text>PhoneNum</Text>
               </View>
               <View style={styles.headerItem}>
                   <Text>Action</Text>
               </View>
            </View>
        )
    }
    _renderEmptyContent(){
        return(
            <View style={{paddingVertical:10}}>
              <Text style={{textAlign:'center',fontSize:18}}>You have no records</Text>
            </View>
        )
    }
    render(){
        const { data } = this.props;
        return( 
            <FlatList 
                ListEmptyComponent={this._renderEmptyContent()}
                data={data}
                keyExtractor={item => item.id.toString()}
                renderItem={({item}) => this._renderItem(item)}
                ListHeaderComponent={this._renderHeader()}
            />
        )
    }
}

const styles = StyleSheet.create({
    headerContainer:{
        flex: 1,
        flexDirection:'row',
        borderWidth:1
    },
    headerItem:{
        flex: 1,
        borderRightWidth:1,
        justifyContent:'center',
        alignItems:'center',
        padding:10
    },
    listItemRowContainer:{
        flex: 1,
        flexDirection:'row',
        borderWidth:1 
    },
    listItemRow:{
        flex: 1,
        borderRightWidth:1,
        justifyContent:'space-around',
        alignItems:'center',
        padding:10
    }
})

export default Listing;