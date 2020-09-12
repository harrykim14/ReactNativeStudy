import React from 'react';
import Styled from'styled-components/native';

import Header from './Header';
// src/Screens/Todo/TodoListView/Header
import TodoList from './TodoList';
// src/Screens/Todo/TodoListView/TodoList

const Container = Styled.SafeAreaView`
flex:;`

interface Props{};

const TodoListView = ({}:Props) => {
    return (
        <Container>
            <Header/>
            <TodoList/>
        </Container>
    );
};

export default TodoListView;