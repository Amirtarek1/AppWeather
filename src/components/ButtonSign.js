import React from 'react';
import { Dimensions, Text, TouchableOpacity, View } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { COLORS, FONT, hp  } from '../constants/themes';

const ButtonSign = ({ButtonLabel , onPress}) => {
    const w = Dimensions.get('screen').width;
    return (
        <>

            <TouchableOpacity onPress={onPress} style={{
                marginTop:RFPercentage(2), 
                 alignSelf:"center",
                backgroundColor: COLORS.Button_sign_color, alignItems: "center",
                width:  "100%" , 
                height: w*0.16, 
                borderRadius: 8.34,
                justifyContent: "center", marginBottom: RFPercentage(3),
            }}>
                <Text style={{alignSelf:"center" , color:COLORS.white,fontFamily:FONT.Poppins_Bold
                 , textAlign:"center" , fontSize:RFPercentage(3) , fontWeight:"bold" }}>{ButtonLabel}</Text>

            </TouchableOpacity>
        </>
    );
};

export default ButtonSign;
