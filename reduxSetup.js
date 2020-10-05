const INITIAL_STATE = { emoji: "ㅇㅅㅇ"};
const emojiReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "HAPPY":
            return { ...state, emoji: "(＾▽＾)"}
        case "CUTE":
            return { ...state, emoji: "(◕‿◕✿)"}
        case "LAUGHING":
            return { ...state, emoji: "（≧ｙ≦＊）"}
        case "TIRED":
            return { ...state, emoji: "（；￣д￣）"}
        default:
            return state
    }
}

const store = Redux.createStore(emojiReducer);