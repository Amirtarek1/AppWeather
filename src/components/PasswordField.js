
import React from 'react';
import { View, Text, Dimensions, TextInput } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { COLORS, FONT, wp } from '../constants/themes';
import PasswordIcon from "../assets/Icons/PasswordIcon.svg"

const PasswordField = ({  error, touched, value, onChangeText, placeholder, Top_word }) => {
    const w = Dimensions.get('screen').width;

    return (
        <>

            <View style={{
                width: "100%"
                , alignSelf: "center",
                marginTop: RFPercentage(3.5),
                backgroundColor: COLORS.white,
                marginHorizontal: RFPercentage(2),
                alignItems: "center",
                justifyContent: "center"
                , paddingHorizontal: RFPercentage(2),
                flexDirection: "row",
                borderWidth: RFPercentage(0.25),
                borderRadius: 6.26,
                borderColor: COLORS.textinput_border_color
            }}>

                <View style={{
                    alignSelf: "center", marginTop: RFPercentage(1),
                    marginRight: RFPercentage(0.5)
                }}>
                    <PasswordIcon height={w * 0.075} width={w * 0.075} />
                </View>


                <View>
                    <View style={{
                        borderRadius: RFPercentage(0.5),
                        backgroundColor: COLORS.white,
                        maxWidth: w * 0.5,
                        width: Top_word == "Confirm password" ? w * 0.5 : w * 0.25,
                        marginTop: RFPercentage(-2),
                        marginLeft: RFPercentage(-2.5),
                    }}>
                        <Text style={{
                            textAlign: "left", fontFamily: FONT.Poppins_Regular,
                            color: COLORS.word_uper_textinputcolor,
                            fontSize: RFPercentage(2.3),
                        }}>{Top_word}</Text>
                    </View>
                    <TextInput
                        placeholder={placeholder}
                        placeholderTextColor={COLORS.placeholdercolor_textinput}
                        style={{
                            fontSize: RFPercentage(2), color: COLORS.black,
                            width: w * 0.71, fontFamily: FONT.Poppins_Regular,
                            height: w * 0.15, justifyContent: "center",
                            backgroundColor: COLORS.white
                        }}

                        value={value}
                        onChangeText={onChangeText}
                        secureTextEntry
                    />


                </View>


            </View>
          
        </>

    );
};

export default PasswordField;
