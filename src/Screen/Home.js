/* eslint-disable prettier/prettier */
import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

import Button from '../Components/Button';
import PopUpModal from '../Components/PopUpModal';
import Listing from '../Components/Listing';
import SearchableCompoent from '../Components/SearchableCompoent';
import Divider from '../Components/Divider';
import Loading from '../Components/Loading';

import { handleNewData,getFirebaseItems,
  loading,
  onNameChange,onCountryChange,onFavMobBrandChange,onPhoneNumberChange } from '../redux/actionCreators/index';
import { connect } from 'react-redux';
import { LOADING } from '../redux/actionCreators/loadingAction';

class Home extends React.Component{
    state = {
        popupModalVisible:false,
        id:null,
        modalType:undefined,
        searchText:''
    }
    componentDidMount(){
      this.props.getFirebaseData();
      this.props.handleLoading(true)
    }
    /* open popup modal when pressing ADD button */
    addItem(){
        const { onNameChange,onCountryChange,onFavMobBrandChange,onPhoneNumberChange } = this.props;
        /* clear input value  */
        onNameChange(''); 
        onPhoneNumberChange('');
        onCountryChange('');
        onFavMobBrandChange('');
        this.setState({popupModalVisible:true,modalType:'add'})
    }
    editItem(id){
      const { data,onNameChange,onCountryChange,onFavMobBrandChange,onPhoneNumberChange } = this.props;
      let getItem = data.filter(item => item.id === id); // using filter function to get item using id
      this.setState({id,modalType:'edit',popupModalVisible:true});
      if(getItem){
        onNameChange(getItem[0].name);
        onPhoneNumberChange(getItem[0].phoneNumber);
        onCountryChange(getItem[0].country);
        onFavMobBrandChange(getItem[0].favMobBrand);
      }
    }
    deleteItem(id){
       this.setState({id,modalType:'delete',popupModalVisible:true})
    }
    /* for searchFilter */
    handleSearchText(text){
      const newData = this.props.data.filter(item => {
        const itemCountry = item.country.toUpperCase();
        const itemFavMobBrand = item.favMobBrand.toUpperCase();
        const textData = text.toUpperCase();
        let itemCountryIndex = itemCountry.indexOf(textData);
        let itemFavMobBrandIndex = itemFavMobBrand.indexOf(textData);
        
        if(itemFavMobBrandIndex > -1 || itemCountryIndex > -1){ // to check whether item is found or not 
          return true;
        }
      });
      this.props.handleNewData(newData); // update newData state for render data accroding to search text
      this.setState({
        searchText:text
      })
    }
    render(){
        const { popupModalVisible,id,modalType,searchText } = this.state;
        const { newData,loading } = this.props;
        return(
            <View style={styles.container}>
               {loading ? <Loading /> : (
                 <React.Fragment>
                    <Text style={{fontSize:18,fontFamily:'bold'}}>Total Items : {newData.length}</Text>
                    <Button 
                        title="ADD TODO"
                        btnBgColor="green"
                        btnTextStyle={styles.btnTextStyle}
                        btnStyle={styles.btnStyle}
                        onPress={() => this.addItem()}
                      /> 
                    <Divider />
                    <SearchableCompoent  
                        handleSearchText={(value) => this.handleSearchText(value)}
                        searchText={searchText}
                        inputStyles={styles.input}
                        placeholder={'Filter records by Country and Favorite Phone Brand'}
                    />
                    <Divider />  
                    <Listing 
                      deleteItem={(id) => this.deleteItem(id)}
                      editItem={(id) => this.editItem(id)}
                      data={newData} />  
                    <PopUpModal 
                      modalType={modalType}
                      id={id}
                      popupModalVisible={popupModalVisible}
                      closeModal={() => this.setState({popupModalVisible:false})}
                    />
                 </React.Fragment>
               )}
            </View>
        )
    }
}

const mapStateToProps = state => {
    let { data,newData } = state.listReducer;;
    const { loading } = state.loadingReducer
    return{
        data,
        newData,
        loading
    }
}
const mapDispatchToProps = dispatch => {
    return {
      onNameChange: (name) => dispatch(onNameChange(name)),
      onCountryChange: (country) => dispatch(onCountryChange(country)),
      onFavMobBrandChange : (favMobBrand) => dispatch(onFavMobBrandChange(favMobBrand)),
      onPhoneNumberChange: (phoneNumber) => dispatch(onPhoneNumberChange(phoneNumber)),
      handleNewData:(data) => dispatch(handleNewData(data)),
      getFirebaseData:() => dispatch(getFirebaseItems()),
      handleLoading: (payload) => dispatch(loading(payload))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f5f5f5',
        padding:15
    },
    btnStyle:{
        padding:10,
        borderRadius:5,
        width:120,
        alignSelf:'flex-end'
      },
    btnTextStyle:{
        fontSize:18,
        color:'#fff',
        textAlign:'center'
    },
    input:{
      borderColor:'gray',
      borderWidth:1,
      borderRadius:5,
      paddingLeft:10
   }
})