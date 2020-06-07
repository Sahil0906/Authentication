import React, {useState} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';
import trackerApi from '../api/tracker';

const VerifyScreen = ({ route,navigation }) => {
    const [state, setState] = useState('')
    const { email } = route.params;
    const [errorMessage, setErrorMessage] = useState(null);

    // const VerifyEmail = () => {
    //     return async (state) => {
    //         const response = await trackerApi.post('/verify', { token:state })
    //         console.log('working!!');
    //     }
    // }

    const VerifyEmail = async (state) => {
        try{
            console.log('hii')
            const response = await trackerApi.post('/verify', { email, token: state });
            console.log('working');
            navigation.navigate('Signin');
            // setResults(response.data.businesses)
        }catch(err){
            setErrorMessage(err.response.data.error);
        }
        
    }


    return(
        <View>
            <Input placeholder="Enter code" value={state} onChangeText={setState} onEndEditing={()=>VerifyEmail(state)}/>
            {errorMessage ? <Text style={styles.text}>{errorMessage}</Text> : null}
        </View>
    )
}

const styles = StyleSheet.create({
    text:{
        fontSize:20
    }
});

export default VerifyScreen;