import React from 'react';
import { Dimensions, TouchableOpacity, View } from 'react-native';
import BackkArrow from "../assets/Icons/Chevron_left.svg"
import { COLORS } from '../constants/themes';

const BackArrow = ({auth , onPress}) => {
    const w = Dimensions.get('screen').width;
    return (
        <>

            <TouchableOpacity onPress={onPress} style={{
                backgroundColor: auth =="yes" ? COLORS.background_arrow : COLORS.backarrow_color2  , alignItems: "center",
                width: w * 0.138 , height: w * 0.138, borderRadius: w*0.1,
                justifyContent: "center", 
            }}>
                <View style={{ alignSelf: "center", alignItems: "center" }}>
                    <BackkArrow height={w*0.085} width={w*0.085}  />
                </View>
            </TouchableOpacity>
        </>
    );
};

export default BackArrow;
