
import React from 'react';
import { View, Text, Dimensions, TextInput } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { COLORS, FONT, wp } from '../constants/themes';
import Email from "../assets/Icons/Email.svg"

const TextinputsSignupPage = ({ errors, touched, value, onChangeText, placeholder, Top_word }) => {
    const w = Dimensions.get('screen').width;

    return (
        <>

            <View style={{
                width: "100%"
                , alignSelf: "center",
                marginTop: RFPercentage(2),
                backgroundColor: COLORS.white,
                marginHorizontal: RFPercentage(2),
                alignItems: "center",
                justifyContent: "center"
                , paddingHorizontal: RFPercentage(2), flexDirection: "row",
                borderWidth: RFPercentage(0.25), borderRadius: 6.26,
                borderColor: COLORS.textinput_border_color
            }}>

                <View>
                    <View style={{
                        borderRadius: RFPercentage(0.5),
                        backgroundColor: COLORS.white,
                        maxWidth: w * 0.3,
                        width: Top_word == "Email" ?  w * 0.25 : w * 0.3,
                        marginTop: RFPercentage(-2),
                    }}>
                        <Text style={{
                            textAlign: "left",fontFamily:FONT.Poppins_Regular,
                            color: COLORS.word_uper_textinputcolor,
                            fontSize: RFPercentage(2.3),
                        }}>{Top_word}</Text>
                    </View>


                    <TextInput
                        placeholder={placeholder}
                        placeholderTextColor={COLORS.placeholdercolor_textinput}
                        style={{
                            fontFamily:FONT.Poppins_Regular,
                            fontSize: RFPercentage(2), color: COLORS.black,
                            width:  w * 0.8, height: w *  0.12, justifyContent: "center",
                            backgroundColor: COLORS.white
                        }}
                        value={value}
                        onChangeText={onChangeText}

                    />


                </View>


            </View>

            
        </>

    );
};

export default TextinputsSignupPage;
