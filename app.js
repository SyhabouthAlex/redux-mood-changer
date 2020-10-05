const emoji = document.querySelector("#emoji");
const happy = document.querySelector("#happy");
const cute = document.querySelector("#cute");
const laughing = document.querySelector("#laughing");
const tired = document.querySelector("#tired");

happy.addEventListener("click", (e) => {
    store.dispatch({ type: "HAPPY"});
    const state = store.getState();
    emoji.innerText = state.emoji;
})

cute.addEventListener("click", (e) => {
    store.dispatch({ type: "CUTE"});
    const state = store.getState();
    emoji.innerText = state.emoji;
})

laughing.addEventListener("click", (e) => {
    store.dispatch({ type: "LAUGHING"});
    const state = store.getState();
    emoji.innerText = state.emoji;
})

tired.addEventListener("click", (e) => {
    store.dispatch({ type: "TIRED"});
    const state = store.getState();
    emoji.innerText = state.emoji;
})