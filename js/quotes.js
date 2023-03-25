const quotes = [
    {
        quote: "Success is not final. Failure is not Fatal. It is the courage to continue that counts.",
        author: "Winston S. Churchill",
    },
    {
        quote: "Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.",
        author: "Mark Twain",
    },
    {
        quote: "When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out.",
        author: "Eleanor Roosevelt",
    },
    {
        quote: "The worst loneliness is not to be comfortable with yourself.",
        author: "Mark Twain",
    },
    {
        quote: "Don't get confused with what people say you are, with who you know you are.",
        author: "Oprah Winfrey",
    },
    {
        quote: "Don't let yesterday take up too much of today.",
        author: "Will Rogers",
    },
    {
        quote: "If you are working on something that you really care about, you don't have to be pushed. The vision pulls you.",
        author: "Steve Jobs",
    },
    {
        quote: "The thing women have yet to learn is nobody gives you power. You just take it.",
        author: "Roseanne Barr",
    },
    {
        quote: "It took me quite a long time to develop a voice, and now that I have it, I am not going to be silent.",
        author: "Madeleine Albright",
    },
    {
        quote: "The most difficult thing is the decision to act, the rest is merely tenacity.",
        author: "Amelia Earhart",
    },

];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuotes.quote;
author.innerText = todaysQuotes.author;