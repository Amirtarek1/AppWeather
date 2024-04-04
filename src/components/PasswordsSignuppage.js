import React, { useState } from 'react';
import { View, Text, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { COLORS, FONT, hp } from '../constants/themes';
import Eye from "../assets/Icons/Eye.svg"
import Eyeoff from "../assets/Icons/Eyeoff.svg"


const PasswordsSignuppage = ({ errors, touched, value, onChangeText, placeholder, Top_word }) => {
    const w = Dimensions.get('screen').width;
    const [secureTextEntry, setSecureTextEntry] = useState(true);

    const toggleSecureEntry = () => {
        setSecureTextEntry(!secureTextEntry);
    };

    return (
        <>
            <View style={{
                width: "100%",
                alignSelf: "center",
                marginTop: RFPercentage(2),
                backgroundColor: COLORS.white,
                marginHorizontal: RFPercentage(2),
                alignItems: "center",
                justifyContent: "center",
                paddingHorizontal: RFPercentage(2),
                flexDirection: "row",
                borderWidth: RFPercentage(0.25),
                borderRadius: 6.26,
                borderColor: COLORS.textinput_border_color
            }}>
                <View>
                    <View style={{
                        borderRadius: RFPercentage(0.5),
                        backgroundColor: COLORS.white,
                        maxWidth: w * 0.5,
                        width: Top_word == "Confirm password" ? w * 0.5 : w * 0.25,
                        marginTop: RFPercentage(-2),
                        marginLeft: RFPercentage(1),
                    }}>
                        <Text style={{
                            textAlign: "left",fontFamily:FONT.Poppins_Regular,
                            color: COLORS.word_uper_textinputcolor,
                            fontSize: RFPercentage(1.8),
                        }}>{Top_word}</Text>
                    </View>

                    <TextInput

                        
                        style={{
                            fontSize: RFPercentage(2.5),
                            color: COLORS.black,
                            width: w * 0.72,
                            height: w * 0.12,
                            justifyContent: "center",
                            backgroundColor: COLORS.white,
                            fontFamily:FONT.Poppins_Regular,
                        }}
                        value={value}
                        onChangeText={onChangeText}
                        secureTextEntry={secureTextEntry}
                        placeholder={placeholder}
                        placeholderTextColor={COLORS.placeholdercolor_textinput}
                    />
                
                </View>
                <TouchableOpacity onPress={toggleSecureEntry}>
                {secureTextEntry ? <Eye width={30} height={30} /> : <Eyeoff width={30} height={30} />}
            </TouchableOpacity>
               
                
            </View>
        </>
    );
};

export default PasswordsSignuppage;
