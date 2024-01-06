function randomQuote (){
    let quotes = {
        "-Nelson Mandela" : " The greatest glory in living lies not in never falling, but in rising every time we fall.",
        "-Walt Disney" : "The way to get started is to quit talking and begin doing.",
        "-Steve Jobs" : "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
        "-Eleanor Roosevelt" : "The future belongs to those who believe in the beauty of their dreams.",
        "-Oprah Winfrey" : "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
        "-James Cameron" : "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. "
    }
    let authors = Object.keys(quotes);
    let author = authors[Math.floor(Math.random() * authors.length)];
    let authText = quotes[author];

    let authorName = document.querySelector(".author");
    let authorText = document.querySelector(".quote-text");

    authorName.innerHTML = author;
    authorText.innerHTML = authText;
    
    console.log(quotes[author]);
};