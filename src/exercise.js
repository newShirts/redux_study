import {createStore} from 'redux';

// 리덕스에서의 관리할 상태 정의(초기값 세팅)
const initialState={
    counter:0,
    text:'',
    list:[]
}

// 액션 타입 정의(액션 타입은 주로 대문자로 작성)
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';

function increase(){
    return{
        type: INCREASE
    }
}

const decrease =()=>({
    type: DECREASE
});

const changeText = text => ({
    type: CHANGE_TEXT,text
})

const addToList = item => ({
    type: ADD_TO_LIST, item
})

// 리듀서 만들기
// 위 액션 생성함수들을 통해 만들어진 객체들을 참조하여
// 새로운 상태를 만드는 함수를 생성함.
//  리듀서에서는 불변성을 꼭 지켜주어야 함!

function reducer(state=initialState, action){

    switch(action.type){
        case INCREASE:
            return {
                ...state,
                counter:state.counter + 1
            }
        case DECREASE:
            return {
                ...state,
                counter:state.counter - 1
            }
        case CHANGE_TEXT:
            return {
                ...state,
                text: action.text
            }
        case ADD_TO_LIST:
            return {
                ...state,
                list: state.list.concat(action.item) //직접 입력하는 값
            }
            default:
                return state;
    }
}

// 스토어 만들기

const store = createStore(reducer);

console.log(store.getState()) //현재 store 안에 들어있는 상태를 조회

//스토어 안에 들어 있는 상태가 바뀔 때마다 호출되는 listener 함수
const listener =()=>{
    const state =store.getState();
    console.log(state);
}

const unsubscribe= store.subscribe(listener);
//구독을 해제하고 싶을 때는 unsubscribe()을 호출하면 됨.

// 액션들을 디스패치 하기
store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText('4월 입니다.'));
store.dispatch(addToList({id:1, text:'First'}));

window.store = store;
//window.unsubscribe = unsubscribe;
