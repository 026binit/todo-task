/* eslint-disable prettier/prettier */
import React from 'react';
import {View,StyleSheet,Modal,KeyboardAvoidingView,TouchableOpacity,Text} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { connect } from 'react-redux';

import Input from '../Components/Input';
import Button from '../Components/Button';
import Divider from '../Components/Divider';

import { handleAddItem,handleUpdateItem,
    loading,
    handleDeleteItem,onNameChange,onCountryChange,onFavMobBrandChange,onPhoneNumberChange } from '../redux/actionCreators/index';

class PopupModal extends React.Component{

    handleOnChangeText(value,inputType){

        const { onNameChange,onCountryChange,onFavMobBrandChange,onPhoneNumberChange } = this.props;
      
        if(inputType == 'name'){
            onNameChange(value);
        }
        else if(inputType == 'country'){
            onCountryChange(value);
        }
        else if(inputType == 'favBrand'){
            onFavMobBrandChange(value);
        }
        else if(inputType == 'phoneNum'){
            onPhoneNumberChange(value);
        }
    }
    handleOnPressEvent = (eventType) => {
        console.log('eventType =>',eventType);
        const { 
            handleAddItem,
            handleUpdateItem,
            name,country,favMobBrand,phoneNumber,
            data,id,handleDeleteItem,handleLoading } = this.props;
            
        // form validtation
        if((name && country && favMobBrand && phoneNumber) || eventType === 'delete'){
            handleLoading(true);
            if(eventType === 'add'){
                let item = {
                    name,
                    country,
                    favMobBrand,
                    phoneNumber,
                 //   id:data.length+1
                }
                console.log(item)
                handleAddItem(data,item);
                this.clearFormData();
            }
            else if(eventType === 'edit'){
                let item = {
                    name,
                    country,
                    favMobBrand,
                    phoneNumber,
                    id
                }
                handleUpdateItem(data,item);
                this.clearFormData();
            }
            else if(eventType === 'delete'){
               handleDeleteItem(data,id);
               this.props.closeModal();
            }
        }
        else{
            alert('All input feilds are required')
        }
    }
    /* clear form value and close modal after add or update */
    clearFormData(){
        this.props.onNameChange('');
        this.props.onPhoneNumberChange('');
        this.props.onCountryChange('');
        this.props.onFavMobBrandChange('');
        this.props.closeModal();
    }
    render(){
        const { popupModalVisible,closeModal,name,country,favMobBrand,phoneNumber,modalType } = this.props;
        return(
           <View style={styles.modalContainer}>
             <Modal
                 transparent={true}
                 visible={popupModalVisible}
                 onRequestClose={() => closeModal()}
             >
              <KeyboardAvoidingView 
               behavior="height"
               enabled
               style={styles.container}>
                <View style={styles.boxContainer}>  
                        <TouchableOpacity onPress={() => closeModal()} style={{position:'absolute',right:20,top:10,width:30}}>
                           <FontAwesome5 style={{alignSelf:'center'}} name={'times'} size={20} solid />
                        </TouchableOpacity>
                        {(modalType === 'add' || modalType === 'edit') && (
                            <React.Fragment>
                                <Input
                                    placeholder="Enter your name"
                                    style={styles.input}
                                    value={name}
                                    onChangeText={(value) => this.handleOnChangeText(value,'name')}
                                />
                                <Divider />
                                <Input
                                    placeholder="Enter your Country name"
                                    style={styles.input}
                                    value={country}
                                    onChangeText={(value) => this.handleOnChangeText(value,'country')}
                                />
                                <Divider />
                                <Input
                                    placeholder="Enter your Favorite Phone Brand:"
                                    style={styles.input}
                                    value={favMobBrand}
                                    onChangeText={(value) => this.handleOnChangeText(value,'favBrand')}
                                />
                                <Divider />
                                <Input
                                    placeholder="Enter your Favorite Phone Number:"
                                    style={styles.input}
                                    value={phoneNumber}
                                    keyboardType={'phone-pad'}
                                    onChangeText={(value) => this.handleOnChangeText(value,'phoneNum')}
                                />
                            </React.Fragment>
                        )}
                        {modalType === 'delete' && (
                            <Text>Are you sure want to delete ?</Text>
                        )}
                        <Divider />
                        <Button 
                            title={modalType === 'add' ? 'ADD' : (modalType === 'edit' ? 'UPDATE' : 'DELETE')}
                            btnBgColor={modalType === 'add' ? 'green' : (modalType === 'edit' ? '#0F3E6E' : 'red')}
                            onPress={() => this.handleOnPressEvent(modalType)}
                            btnTextStyle={styles.btnTextStyle}
                            btnStyle={styles.btnStyle}
                        /> 
                   </View>  
              </KeyboardAvoidingView>
           </Modal>
           </View>
        )
    }
}

const mapStateToProps = state => {
    let { name,country,favMobBrand,phoneNumber } = state.listItemReducer;
    let { data } = state.listReducer;
    return{
      name,
      country,
      favMobBrand,
      phoneNumber,
      data
    }
}
const mapDispatchToProps = dispatch => {
    return {
      onNameChange: (name) => dispatch(onNameChange(name)),
      onCountryChange: (country) => dispatch(onCountryChange(country)),
      onFavMobBrandChange : (favMobBrand) => dispatch(onFavMobBrandChange(favMobBrand)),
      onPhoneNumberChange: (phoneNumber) => dispatch(onPhoneNumberChange(phoneNumber)),
      handleAddItem : (data,item) => dispatch(handleAddItem(data,item)),
      handleUpdateItem:(data,item) => dispatch(handleUpdateItem(data,item)),
      handleDeleteItem:(data,id) => dispatch(handleDeleteItem(data,id)),
      handleLoading: (payload) => dispatch(loading(payload))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(PopupModal);

const styles = StyleSheet.create({
    modalContainer:{
        flex:1,
        justifyContent:'center',
        padding:15,  
    },
    container:{
      flex:1,
      justifyContent:'center'
    },
    boxContainer:{
      //  flex:1,
      // justifyContent:'center',
        margin: 20,
        backgroundColor: "#fff",
        borderRadius: 20,
        padding: 35,
        elevation: 5,
    //    position:'relative'
    },
    input:{
       borderColor:'gray',
       borderWidth:1,
       borderRadius:5,
       paddingLeft:10
    },
    btnStyle:{
      padding:10,
      borderRadius:5
    },
    btnTextStyle:{
      fontSize:18,
      color:'#fff',
      textAlign:'center'
    }
})