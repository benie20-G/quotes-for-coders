function change(){
    let span = document.getElementById("mydiv");
    let quotes = [
         "\"Programs must be written for people to read, and only incidentally for machines to execute.\" - Harold Abelson",
         "\"Good code is its own best documentation. As you're about to add a comment, ask yourself, 'How can I improve the code so that this comment isn't needed?'\" - Steve McConnell",
         "\"Always code as if the person who ends up maintaining your code will be a violent psychopath who knows where you live.\" - Martin Golding",
          "\"It's not at all important to get it right the first time. It's vitally important to get it right the last time.\" - Andrew Hunt and David Thomas",
        "\"Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.\"- Brian W. Kernighan",
        "\"Any fool can write code that a computer can understand. Good programmers write code that humans can understand.\" - Martin Fowler",
        "\"A good programmer is someone who always looks both ways before crossing a one-way street.\"- Doug Linder",
        "\"Coding is not just about being a good programmer, it's also about being a good problem solver.\" - Unknown",
        "\"if you are a coder, don't compare your self to other coders follow your potential\"",
        "\"if you are a coder,have an end goal in your mind to be accomplished",
        "\"if you are a coder,build up with consistent and sustainable progress\"",
        "\"if you are a coder, don'tgo it alone work with others and ask more\"",
        "\"if you are a coder,focus on your code and do not waste your time but use every opportunity you get to write you codes\""
    ]
   
    let span1 =Math.floor(Math.random() * quotes.length) 
    span.innerHTML=quotes[span1];

}
