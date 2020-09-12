import React, { useState } from 'react';
import { SnapshotViewIOS, SnapshotViewIOSComponent } from 'react-native';
import Styled from 'styled-components/native';
import Button from '~/Components/Button';

const Contatiner = Styled.SafeAreaView`
flex:1;`;

const TitleContainer = Styled.View`
flex:1;
justify-content: center;
align-items: center;`;

const TitleLabel = Styled.Text`
font-size: 24px;`;

const CounterContainer = Styled.View`
flex:2;
justify-content: center;
align-items: center;`;

const CountLabel = Styled.Text`
font-size: 24px;
font-weight: bold;`;

const ButtonContainer = Styled.View`
flex:1;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;`;

interface Props{
    title?: string;
    initValue: number;
}

// 함수형 컴포넌트와는 다르게 State의 타입을 미리 정의
// 타입도 지정해주어야 함
interface State{
    count: number;
    error: Boolean;
}

// React.Component를 상속
class Counter extends React.Component<Props,State>{
//     const[count, setCount] = useState<number>(0);
//     함수형 컴포넌트에서는 useState를 안에서 지정해주었지만 클래스 컴포넌트는 바깥에서 지정해줌
    constructor(props:Props){
        super(props);
        //부모 객체에서 props를 같이 상속
        console.log('constructor');

        this.state = {
            count:props.initValue,
            error : false,
        }
    }

    render(){
        console.log('render')
        const { title } = this.props;
        const { count, error } = this.state;
        return (
            <Contatiner>
            {!error && (
                <>
                {title && (
                    <TitleContainer>
                        <TitleLabel>{title}</TitleLabel>
                    </TitleContainer>
                )}
            
            <CounterContainer>
                <CountLabel>{count}</CountLabel>
            </CounterContainer>
            <ButtonContainer>
                <Button iconName = "plus" onPress={()=> this.setState({count:count+1})}/>
                <Button iconName = "minus" onPress={()=> this.setState({count:count-1})}/>
            </ButtonContainer>
            </>
            )}
        </Contatiner>
        )
        // setState는 React.Component에서 상속받은 메서드
        // state가 {}로 이루어진 오브젝트 이므로 {key}값을 메서드의 변수로 사용
    }
    
    /*
        호출 순서
        컴포넌트가 생성될 때 : constructor → getDerivedStateFromProps → render → componentDidMount
        컴포넌트의 Props가 변경될 때 : getDerivedStateFromProps → shouldComponentUpdate 
                                      → render → getSnapshotBeforeUpdate → componentDidUpdate
        컴포넌트의 State가 변경될 때 : shouldComponentUpdate → render → getSnapshotBeforeUpdate
                                      → componentDidUpdate
        렌더 중 에러가 발생될 때 : componentDidCatch
        컴포넌트가 제거될 때 : componentWillUnmount
    */

    static getDerivedStateFromProps(nextProps: Props, prevState: State){
        console.log('getDerivedStateFromProps')
        return null;
    }

    componentDidMount(){
        console.log('componentDidMount');
    }

    getSnapshotBeforeUpdate(prevProps:Props,prevState:State){
        console.log('getSnapshotBeforeUpdate');
        return {
            testData: true,
        };
    }

    componentDidUpdate(prevProps:Props,prevState:State,snapshot:SnapshotViewIOSComponent){
        console.log('componentDidUpdate');
    }

    shouldComponentUpdate(nextProps:Props,nextState:State){
        console.log('shoudComponentUpdate');
        return true
    }

    componentWillUnmount(){
        console.log('componentWillUnmount')
    }

    componentDidCatch(error: Error, info: React.ErrorInfo){
        this.setState({
            error: true,
        })
    }

}



// const Counter = ({title, initValue}: Props) =>{
//     const[count, setCount] = useState<number>(0);

//     return (
//         <Contatiner>
//             {title && (
//                 <TitleContainer>
//                     <TitleLabel>{title}</TitleLabel>
//                 </TitleContainer>
//             )} 
//             <CounterContainer>
//                 <CountLabel>{initValue + count}</CountLabel>
//             </CounterContainer>
//             <ButtonContainer>
//                 <Button iconName = "plus" onPress={()=> setCount(count+1)}/>
//                 <Button iconName = "minus" onPress={()=> setCount(count-1)}/>
//             </ButtonContainer>
//         </Contatiner>

//     )
// }

export default Counter;