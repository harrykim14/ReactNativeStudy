import React, { Fragment, useEffect, useState } from 'react';
import {FlatList, Alert} from 'react-native';

import Geolocation from 'react-native-geolocation-service';
// 위치정보를 가져오기 위한 모듈 추가

import Styled from 'styled-components/native';
import Header from './Header';

const Container = Styled.SafeAreaView`
flex: 1;
background-color: #EEE;
`;

const WeatherContainer = Styled(FlatList)``;
// FlatList를 사용하면 Pull to refresh 기능을 사용할 수 있다

const LoadingView = Styled.View`
flex:1;
justify-content: center;
align-items: center;`;

const Loading = Styled.ActivityIndicator`
margin-bottom: 16px;`;

const LoadingLabel = Styled.Text`
font-size:16px;`;

const WeatherItemContainer = Styled.View`
height: 100%;
justify-content: center;
align-items: center;`;

const Weather = Styled.Text`
margin-bottom: 16px;
font-size: 24px;
font-weight: bold;`;

const Temperature = Styled.Text`
font-size: 16px;`;

interface Props{}

const API_KEY = '7c7c4853e2c5e26e0014aa80e393c952';

interface IWeather {
    temperature?: number;
    weather?: string;
    isLoading: boolean;
}

const WeatherView = ({}:Props)=>{
    const [weatherInfo, setWeatherInfo] = useState<IWeather>({
        // useState에서 사용할 변수들을 IWeather 인터페이스에서 정의
        // setWeatherInfo를 통해 정의된 변수들을 변경 할 수 있다 
        temperature: undefined,
        weather: undefined,
        isLoading: false,
        // 초기값을 설정해주기
    })

    const getCurrentWeather = () => {
        setWeatherInfo({
            isLoading: false,
        });

        Geolocation.getCurrentPosition(
            position => {
                const { latitude, longitude } = position.coords;
                // getCurrentPosition을 사용해서 경도 위도를 가져오기
                fetch(
                    `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
                )
                // fetch는 Promise함수이므로 then과 catch를 사용해서 정상/에러 처리를 할 수 있다
                .then(response => response.json())
                .then(json=>{
                    setWeatherInfo({
                        temperature: json.main.temp,
                        weather: json.weather[0].main,
                        isLoading: true,
                    })
                })
                .catch(error => {
                    setWeatherInfo({
                        isLoading: true,
                    })
                    showError('날씨 정보를 가져오는데 실패하였습니다.')
                });
            },
            error => {
                setWeatherInfo({
                    isLoading: true,
                })
                showError("위치 정보를 가져오는데 실패하였습니다.")
            }
        )
    }
    const showError = (message:string):void =>{
        setTimeout(()=>{
            Alert.alert(message);
        }, 500);
    };

    useEffect(() =>{
        getCurrentWeather();
    }, []);

    let data = [];
    const { isLoading, weather, temperature } = weatherInfo;
    if(weather && temperature){
        data.push(weatherInfo);
    }
    return (
        <Fragment>
        <Header />
        <Container>
            <WeatherContainer
            onRefresh = { () => getCurrentWeather()}
            refreshing={!isLoading}
            data = {data}
            keyExtractor= {(item, index) => {
                return `Weather-${index}`;
            }}
            ListEmptyComponent={
                <LoadingView>
                    <Loading size = "large" color ="#1976D2"/>
                    <LoadingLabel>Loading...</LoadingLabel>
                </LoadingView>
            }
            renderItem={({ item, index})=> (
                <WeatherItemContainer>
                    <Weather>{(item as IWeather).weather}</Weather>
                    <Temperature>({(item as IWeather).temperature}℃)</Temperature>
                </WeatherItemContainer>
            )}
            contentContainerStyle={{ flex: 1 }}
            />
        </Container>
        </Fragment>
    )
}

export default WeatherView;