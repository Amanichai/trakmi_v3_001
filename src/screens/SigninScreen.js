import React, {useContext} from 'react';
import { NavigationEvents } from 'react-navigation';
import { View, StyleSheet } from 'react-native';
import AuthForm from '../components/AuthForm';
import NavLinks from '../components/NavLinks';
import { Context } from '../context/authContext';

const SigninScreen = ({navigation})=>{
    const {state, signin, clrErrMsg } = useContext(Context);
    return <View style={styles.container}>

                <NavigationEvents
                    onWillFocus={clrErrMsg}
                ></NavigationEvents>

               <AuthForm
                    headerText="Sign In To Trakmi"
                    errorMsg={state.errorMsg}
                    onSubmit={signin}
                    submitButtonText="Signin"
               ></AuthForm>

               <NavLinks
                    routeName="Signup"
                    text='Dont have an account? Signup'
               ></NavLinks>

           </View>
}

SigninScreen.navigationOptions = ()=>{
    return {
        headerShown: false
    }
}

const styles = StyleSheet.create({
    container: {
        textAlign: "center",
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200
    }
});

export default SigninScreen;