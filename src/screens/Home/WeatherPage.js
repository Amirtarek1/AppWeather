import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Dimensions, Image, ImageBackground, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { COLORS, FONT } from '../../constants/themes';
import BackArrow from '../../components/BackArrow';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Map_pin from "../../assets/Icons/Map_pin.svg"
import Calendar from "../../assets/Icons/Calendar.svg"
import { useDispatch, useSelector } from 'react-redux';
import { GET_find_places } from '../../Redux/Reducers/WeatherSlice';
import { useNavigation ,useFocusEffect } from '@react-navigation/native';
import Weather from "../../assets/Icons/weather.svg"
import { format } from 'date-fns';
import Images from '../../constants/Images';
import { useCallback } from 'react';



const WeatherPage = () => {




    const dispatch = useDispatch();


    useFocusEffect(
        useCallback(() => {
            dispatch(GET_find_places());
        }, [dispatch])
    );
    const navigation = useNavigation();

    const { weatherDate, loading } = useSelector((state) => state.Weather);

    const [currentDate, setCurrentDate] = useState('');




    useEffect(() => {
        const date = new Date();
        const formattedDate = format(date, 'yyyy-MM-dd');
        setCurrentDate(formattedDate);
      }, []);


    const city = weatherDate?.data?.city?.split(" ")
    const lastWord = city && city.length > 0 ? city[city.length - 1] : '';

    const w = Dimensions.get('screen').width;



  

    return (


        <>
            <SafeAreaProvider>

                <View style={{
                    flex: 1,
                    backgroundColor: COLORS.white,
                }}>

                    <View style={{
                        flexDirection: "row", padding: RFPercentage(5),
                        backgroundColor: COLORS.header_of_Homepagecolor,
                        alignItems: "center", borderBottomRightRadius: RFPercentage(3.5),
                        borderBottomLeftRadius: RFPercentage(3.5)
                    }}>
                        <BackArrow />
                        <View style={{
                            width: "60%", margin: RFPercentage(2),
                            alignSelf: "center", justifyContent: "center"
                        }}>
                            <Text style={{
                                color: COLORS.white, textAlign: "center"
                                , fontSize: RFPercentage(3), fontFamily: FONT.Poppins_SemiBold
                            }}>
                                App Weather
                            </Text>
                        </View>
                    </View>

                    {loading == true ? <>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <ActivityIndicator size="large" color={COLORS.red} />
                        </View>
                    </> :
                        <>
                            <View style={{
                                width: w * 0.9, height: w * 0.6, alignSelf: "center", alignItems: "center",
                                marginTop: RFPercentage(3), backgroundColor: COLORS.white,

                                // to add shadow to show every element alone 
                                // shadowColor: COLORS.black,
                                // elevation: 2,
                                // shadowOpacity: .5,



                                borderBottomColor: "#00d",
                                borderTopLeftRadius: RFPercentage(3), borderTopRightRadius: RFPercentage(3)
                            }} >
                                <View style={{
                                    overflow: 'hidden', borderTopLeftRadius: RFPercentage(3),
                                    borderTopRightRadius: RFPercentage(3),
                                }}>
                                    <ImageBackground 
                                    source={weatherDate?.data?.bg_image ? { uri: weatherDate.data.bg_image } : Images.Placephoto}
                                        style={{
                                            width: w * 0.9, height: w * 0.5
                                        }} >
                                        <View style={{ margin: RFPercentage(3), flexDirection: "row", alignItems: "center" }}>
                                            <Weather width={30} height={30} />
                                            <Text style={{
                                                fontSize: RFPercentage(2.5), marginLeft: RFPercentage(1),
                                                color: "#FF8862"
                                            }}>{weatherDate?.data?.temp ? weatherDate.data.temp :23 }</Text>
                                        </View>
                                    </ImageBackground>
                                </View>


                                <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%" }}>

                                    <View style={{ padding: RFPercentage(0.5), flexDirection: "row", marginLeft: RFPercentage(0.5), alignItems: "center" }}>
                                        <Map_pin height={w * 0.07} width={w * 0.075} />
                                        <Text style={{
                                            color: COLORS.text_Address_and_date_color, fontSize: RFPercentage(1.9)
                                            , textAlign: "center", fontWeight: "bold"
                                        }}>{lastWord ? lastWord : "France" }</Text>
                                    </View>

                                    <View style={{ padding: RFPercentage(0.5), flexDirection: "row", marginRight: RFPercentage(0.5), alignItems: "center" }}>
                                        <Calendar height={w * 0.08} width={w * 0.08} />
                                        <Text style={{
                                            color: COLORS.text_Address_and_date_color, fontSize: RFPercentage(1.95)
                                            , textAlign: "center", fontWeight: "bold"
                                        }}>{currentDate}</Text>
                                    </View>
                                </View>
                            </View>
                        </>}



                </View>
            </SafeAreaProvider>
        </>


    );
};

export default WeatherPage;
