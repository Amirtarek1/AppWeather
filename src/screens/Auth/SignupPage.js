import React, { useState } from 'react';
import { Dimensions, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { COLORS, FONT } from '../../constants/themes';
import Header from '../../components/Header';
import { RFPercentage } from 'react-native-responsive-fontsize';
import ButtonSign from '../../components/ButtonSign';
import TextinputsSignupPage from '../../components/TextinputsSignupPage';
import PasswordsSignuppage from '../../components/PasswordsSignuppage';
import Checkbox from "../../assets/Icons/Checkbox.svg"
import CheckCheckbox from "../../assets/Icons/CheckCheckbox.svg"
import { Formik } from 'formik';
import { Signup_initial_values } from '../../Forms/Initial_values';
import { SignupSchema } from '../../Forms/Schema';
import { useNavigation } from '@react-navigation/native';



const SignupPage = ({ ButtonLabel, onChangeText, placeholder, Top_word }) => {

    const navigation = useNavigation();

    const [password, setPassword] = useState('');



    const Checkcheckboxfun = () => {
        setSelection(!isSelected);
    };
    const w = Dimensions.get('screen').width;

    const [isSelected, setSelection] = useState(false);



    return (
        <>
            <SafeAreaProvider>

                <View style={{
                    flex: 1,
                    backgroundColor: COLORS.white,
                }}>
                    <ScrollView>
                        <Header onPress={() => navigation.navigate("LoginPage")} />


                        <Formik
                            initialValues={Signup_initial_values}
                            validateOnMount={true}
                            validationSchema={SignupSchema}
                            onSubmit={values => {
                                if (values.email && values.username && values.password && values.passwordConfirmation && isSelected == true) {
                                    navigation.navigate("WeatherPage")
                                }
                            }}
                        >
                            {({ handleChange, handleSubmit, values, isValid, errors, touched }) => (

                                <View style={{
                                    width: w * 0.87,
                                    alignItems: "center"
                                    , alignSelf: "center"
                                }}>


                                    <View style={{ marginTop: RFPercentage(3) ,marginBottom:RFPercentage(1) }}>
                                        <TextinputsSignupPage
                                            placeholder={'Enter your name'}
                                            Top_word={"User name"}
                                            value={values.username}
                                            onChangeText={handleChange('username')}
                                            error={touched.username && errors.username}
                                        />

                                        {!(errors.username && touched.username) ? <></>
                                            : <>
                                                <Text style={{
                                                    width: w * 0.8, textAlign: "left", fontSize: RFPercentage(1.8),
                                                    color: COLORS.red, justifyContent: "center",
                                                    marginLeft: RFPercentage(5), fontFamily: FONT.Poppins_Regular,
                                                }} >{errors.username}</Text></>}
                                    </View>

                                    <View style={{ marginBottom: RFPercentage(0.5) }}>
                                        <TextinputsSignupPage
                                            placeholder={'Enter your Email'}
                                            Top_word={"Email"}
                                            value={values.email}
                                            onChangeText={handleChange('email')}
                                            error={touched.email && errors.email}
                                        />
                                        {!(errors.email && touched.email) ? <></>
                                            : <>
                                                <Text style={{
                                                    width: w * 0.8, textAlign: "left", fontSize: RFPercentage(1.8),
                                                    color: COLORS.red, justifyContent: "center",
                                                    marginLeft: RFPercentage(5), fontFamily: FONT.Poppins_Regular,
                                                }} >{errors.email}</Text></>}
                                    </View>


                                    <View style={{ marginBottom: RFPercentage(0.5) }}>
                                        <PasswordsSignuppage
                                            placeholder={'Enter your Password'}
                                            Top_word={"password"}
                                            value={values.password}
                                            onChangeText={handleChange('password')}
                                            error={touched.password && errors.password}

                                        />
                                        {!(errors.password && touched.password) ? <></>
                                            : <>
                                                <Text style={{
                                                    width: w * 0.8, textAlign: "left", fontSize: RFPercentage(1.8),
                                                    color: COLORS.red, justifyContent: "center",
                                                    marginLeft: RFPercentage(5), fontFamily: FONT.Poppins_Regular,
                                                }} >{errors.password}</Text></>}
                                    </View>

                                    <View style={{ marginBottom: RFPercentage(0.5) }}>
                                        <PasswordsSignuppage
                                            placeholder={'Enter your Password'}
                                            Top_word={"Confirm password"}
                                            value={values.passwordConfirmation}
                                            onChangeText={handleChange('passwordConfirmation')}
                                            error={touched.passwordConfirmation && errors.passwordConfirmation}

                                        />

                                        {!(errors.passwordConfirmation && touched.passwordConfirmation) ? <></>
                                            : <>
                                                <Text style={{
                                                    width: w * 0.8, textAlign: "left", fontSize: RFPercentage(1.8),
                                                    color: COLORS.red, justifyContent: "center",
                                                    marginLeft: RFPercentage(5), fontFamily: FONT.Poppins_Regular,
                                                }} >{errors.passwordConfirmation}</Text></>}
                                    </View>



                                    <View style={{
                                        flexDirection: "row", marginVertical: RFPercentage(1), width: "80%"
                                        , alignItems: "center",
                                        alignSelf: "flex-start"
                                    }}>
                                        <TouchableOpacity onPress={Checkcheckboxfun}
                                            style={{ paddingHorizontal: RFPercentage(2) }}>
                                            {isSelected ?  <CheckCheckbox width={30} height={30} />: <Checkbox width={30} height={30} />}
                                        </TouchableOpacity>

                                        <Text style={{ fontSize: RFPercentage(2.2),color:COLORS.word_uper_textinputcolor ,fontFamily: FONT.Poppins_Regular, textAlign: "justify" }}>I accept & agree
                                            terms conditions & privacy policy</Text>
                                    </View>


                                    <ButtonSign ButtonLabel={"Sign Up"}
                                    onPress={handleSubmit}
                                    />
                                   
                                </View>
                            )}
                        </Formik>
                    </ScrollView>
                </View>
            </SafeAreaProvider>
        </>
    );
};

export default SignupPage;
