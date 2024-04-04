import React from 'react';
import { Dimensions, ImageBackground, Text, View } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Images from '../constants/Images';
import { COLORS, FONT, hp } from '../constants/themes';
import BackArrow from './BackArrow';

const Header = ({auth , onPress}) => {
    const h = Dimensions.get('screen').height;
    const w = Dimensions.get('screen').width;
    return (
        <>


            <View style={{
                width: "100%", height: h*0.27, borderBottomLeftRadius: RFPercentage(5), overflow: 'hidden'
            }}>
                <ImageBackground source={Images.Sign_in} style={{ width: "100%", height: "100%" }}>

                    <View style={{ justifyContent: "center", marginLeft: RFPercentage(3), marginTop: RFPercentage(3) }}>

                        <BackArrow auth={"yes"} onPress={onPress}/>
                        <View style={{marginTop:RFPercentage(4)}} >
                            <Text style={{ fontSize: RFPercentage(5), color: COLORS.white,fontFamily :FONT.Poppins_Bold}}>Sign in to your
                                account</Text>
                        </View>
                    </View>

                </ImageBackground>
            </View>




        </>
    );
};

export default Header;
