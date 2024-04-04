import React, { useState } from 'react';
import { Dimensions, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { COLORS, FONT } from '../../constants/themes';
import Header from '../../components/Header';
import EmailField from '../../components/EmailField';
import { RFPercentage } from 'react-native-responsive-fontsize';
import PasswordField from '../../components/PasswordField';
import ButtonSign from '../../components/ButtonSign';
import Google from "../../assets/Icons/Google.svg"
import Facebook from "../../assets/Icons/Facebook.svg"
import Twitter from "../../assets/Icons/Twitter.svg"
import { useNavigation } from '@react-navigation/native';
import { BackHandler, Platform } from 'react-native';
import { login_initial_values } from '../../Forms/Initial_values';
import { LoginSchema } from '../../Forms/Schema';
import { Formik } from 'formik';



const LoginPage = ({ ButtonLabel, placeholder, Top_word }) => {
    const w = Dimensions.get('screen').width;
    const navigation = useNavigation();

    const exitApp = () => {
        if (Platform.OS === 'android') {
            BackHandler.exitApp();
        }
    };


    return (


        <>
            <SafeAreaProvider>

                <View style={{
                    flex: 1,
                    backgroundColor: COLORS.white,
                }}>
                    <ScrollView>
                        <Header onPress={() => exitApp()} />
                        <Formik
                            initialValues={login_initial_values}
                            validateOnMount={true}
                            validationSchema={LoginSchema}
                            onSubmit={values => {
                                if (values.email && values.password) {
                                    navigation.navigate("WeatherPage")
                                }
                            }}
                        >
                            {({ handleChange, handleBlur, handleSubmit, values, isValid, errors, touched }) => (


                                <View style={{
                                    marginTop: RFPercentage(2),
                                    width: w * 0.87,
                                    alignItems: "center"
                                    , alignSelf: "center"
                                }}>


                                    <View style={{ marginBottom: RFPercentage(0.5) }}>
                                        <EmailField
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
                                        <PasswordField
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
                                    <TouchableOpacity style={{
                                        marginVertical: RFPercentage(0.5), alignSelf: "flex-end",
                                        marginLeft: RFPercentage(20)
                                    }}>
                                        <Text style={{
                                            marginRight: RFPercentage(2), fontSize: RFPercentage(1.95),
                                            color: COLORS.word_uper_textinputcolor, fontFamily: FONT.Poppins_Regular,
                                        }}>Forgot password?</Text>
                                    </TouchableOpacity>

                                    <ButtonSign ButtonLabel={"Sign in"}
                                        onPress={handleSubmit}
                                    />

                                    <View style={{
                                        width: "100%", flexDirection: "row", alignItems: "center",
                                        justifyContent: "space-around", alignSelf: "center"
                                    }}>
                                        <View style={{ height: 1, width: "40%", borderBottomWidth: 4, borderBottomColor: COLORS.textinput_border_color }} />
                                        <Text style={{ fontSize: RFPercentage(2.5), fontFamily: FONT.Poppins_SemiBold, fontWeight: "bold", color: COLORS.word_uper_textinputcolor }}>Or</Text>
                                        <View style={{ height: 1, width: "40%", borderBottomWidth: 4, borderBottomColor: COLORS.textinput_border_color }} />

                                    </View>



                                    <View style={{ flexDirection: "row", marginTop: RFPercentage(1.5), justifyContent: "space-around", width: "80%" }}>
                                        <TouchableOpacity >
                                            <Google height={w * 0.152} width={w * 0.152} />
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <Facebook height={w * 0.152} width={w * 0.152} />
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <Twitter height={w * 0.152} width={w * 0.152} />
                                        </TouchableOpacity>
                                    </View>

                                    <View style={{ marginTop: RFPercentage(1.5) }}>
                                        <Text style={{
                                            marginRight: RFPercentage(2), fontSize: RFPercentage(1.95),
                                            color: COLORS.word_uper_textinputcolor, fontFamily: FONT.Poppins_Regular,
                                        }}>Don't have an account ? <Text onPress={() => navigation.navigate("SignupPage")} style={{ color: COLORS.Button_sign_color, textDecorationLine: 'underline', }}>Sign up</Text></Text>
                                    </View>
                                </View>
                            )}
                        </Formik>
                    </ScrollView>
                </View>
            </SafeAreaProvider>
        </>


    );
};

export default LoginPage;
