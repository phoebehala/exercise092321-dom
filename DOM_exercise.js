/* JavaScript DOM Exercises 01 */

const paragraph = document.querySelector('p')


/*
  Exercise 01
  -----------
  Highlight all of the words over 8 characters long 
  in the paragraph text (with a yellow background 
  for example)
  
*/

// .split(' ')  >>> splits a string into an array of substrings, and returns the new array.
// .map() >>>  creates a new array with the results of calling a function for every array element.
// .join() >>> Combine elements of an array into a single string and return the string 

/* approach 1 */
// in order to iterate through paragraph.innerHTML, turn it into an array
let editedParagraph = paragraph.textContent.split(' ')

// editedParagraph is an array
let edited = editedParagraph.map((word) =>{
    
    if(word.length > 8){
        
        let wrapper = document.createElement('span') // <span></span>
            wrapper.style.backgroundColor = 'yellow' 
            wrapper.textContent = word   // <span>....word here....</span>

            // .outerHTML  >>> <span style="...." ...> ....word here....</span>
            return wrapper.outerHTML;
        } 
        
        return word;

}).join(' ');  // .join('') >>> convert back to a string

console.log(edited);
console.log(paragraph.innerHTML);

// to override the original paragraph.innerHTML
paragraph.innerHTML = edited;

/* approach 2 */
/*
paragraph.innerHTML = paragraph.innerHTML.split(' ').map((word) => {

    if(word.length > 8){
        return "<span style='background-color: yellow'>" + word + "</span>"
    }
    return word
}).join(' ')
*/



/*
  Exercise 02
  -----------
  Add a link back to the source of the text after 
  the paragraph tag.
  (http://officeipsum.com/)
*/


const link = document.createElement("a");

link.setAttribute("href", "http://officeipsum.com/");
link.innerText = "click me";

// parentNode.insertBefore(newNode, referenceNode)
const body = document.querySelector("body");
const mainP = document.querySelector("p");
const refNode = mainP.nextElementSibling;
body.insertBefore(link, refNode);

/* Francois'
const link = document.createElement('a')
link.href = "http://officeipsum.com/" //<a href=".."></a>
link.innerText = 'http://officeipsum.com'
document.body.appendChild(link)
*/



/*
  Exercise 03
  -----------
  Split each new sentence on to a separate line 
  in the paragraph text.
  A sentence can be assumed to be a string of 
  text terminated with a period (.)
*/

// .split(' ')  >>> splits a string into an array of substrings, and returns the new array.

let sentences = paragraph.innerHTML.split(".");
console.log(sentences);   // array
console.log(sentences[0])

let lines = [];
for (let i = 0; i < sentences.length; i++) {
  lines.push(sentences[i].trim());
}
console.log(lines);

let newText = lines.join(".<br/><br/>");
console.log(newText);

// to override the current paragraph.innerHTML
paragraph.innerHTML=newText;



/* Francois'
paragraph.innerHTML = paragraph.innerHTML.split('.').join('.<br/><br/>')
*/







/* 
  Exercise 04
  -----------
  Count the number of words in the paragraph tag 
  and display the count afer the heading.
  You can assume that all words are separated by 
  one singular whitespace.
*/

/* Phoebe's */
let count = mainP.innerText.split(" ").length;
console.log("total words is ", count);  //771



/*  Francois' */
const wordCount = paragraph.innerText.split(' ').length

// create an HTML element
const wordCountDiv = document.createElement('div')
wordCountDiv.innerText = wordCount + ' words'
document.body.insertBefore(wordCountDiv, paragraph)







/*
  Exercise 05
  -----------
  Replace all question marks (?) with thinking 
  faces (🤔) and exclamation marks (!) with 
  astonished faces (😲) 
*/

//.replace()
//.replaceAll()
paragraph.innerHTML = paragraph.innerHTML.replaceAll("?", "🤔").replaceAll("!", "😲")
