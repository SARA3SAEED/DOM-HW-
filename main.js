
let container = document.createElement('div');
container.style.width = '100%';



//1- Create a element
let head1 = document.createElement('div');
let image = document.createElement('img');




head1.style.display = 'inline-block';
head1.style.backgroundColor = 'rgb(34, 78, 174)';
head1.style.width = '300px';
head1.style.paddingLeft= '10px';
head1.style.margin='0';
head1.style.color = 'white';

image.style.width = '200px';
image.style.borderRadius = '50%';
image.style.margin = '70px';
image.style.padding = '15px';
image.style.position = 'relative';
image.style.right= '35px';




let div1 = document.createElement('div');
let topic1 = document.createElement('h2');
let pragraph1 = document.createElement('p');
let pragraph2 = document.createElement('p');
let pragraph3 = document.createElement('p');
let pragraph4 = document.createElement('p');

div1.style.paddingLeft = '30px';
div1.style.paddingTop = '10px';


/*----------------------------------------------------------------*/

let div2 = document.createElement('div');
let topic11 = document.createElement('h2');
let pragraph11 = document.createElement('p');
let pragraph22 = document.createElement('p');
let pragraph33 = document.createElement('p');
let pragraph44 = document.createElement('p');
let pragraph55 = document.createElement('p');

div2.style.paddingLeft = '30px';
div2.style.paddingTop = '10px';

/*----------------------------------------------------------------*/

let div3 = document.createElement('div');
let topic111 = document.createElement('h2');
let pragraph111 = document.createElement('p');
let pragraph222 = document.createElement('p');
let pragraph333 = document.createElement('p');
let pragraph444 = document.createElement('p');
let pragraph555 = document.createElement('p');
let pragraph666 = document.createElement('p');
let pragraph777 = document.createElement('p');

div3.style.paddingLeft = '30px';
div3.style.paddingTop = '10px';

/*----------------------------------------------------------------*/

let div4 = document.createElement('div');
let topic1111 = document.createElement('h2');
let pragraph1111 = document.createElement('p');
let pragraph2222 = document.createElement('p');
let pragraph3333 = document.createElement('p');
let pragraph4444 = document.createElement('p');

div4.style.paddingLeft = '30px';
div4.style.paddingTop = '10px';




















//2- Add content
image.src ='https://images.pexels.com/photos/157661/young-woman-shooting-model-157661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
let contentTopic1 = document.createTextNode('CONTACT');
let contentParagraph1 = document.createTextNode('+966-500-962-587');
let contentParagraph2 = document.createTextNode('sara3.saeed33@gmail.com');
let contentParagraph3 = document.createTextNode('Saudi Arabia , Riyadh');
let contentParagraph4 = document.createTextNode('https://www.linkedin.com/in/sara-almutairi33/');


/*---------------------------------------------------------------*/

let contentTopic11 = document.createTextNode('EDUCATION');
let contentParagraph11 = document.createTextNode('2029-2030 WARDIERE UNIVERSITY');
let contentParagraph22 = document.createTextNode('Master of Business Management');
let contentParagraph33 = document.createTextNode('2025-2029 WARDIERE UNIVERSITY');
let contentParagraph44 = document.createTextNode('Bachelor of Business');
let contentParagraph55 = document.createTextNode('GDA: 3.8/4.0');


/*----------------------------------------------------------------*/


let contentTopic111 = document.createTextNode('SKILLS');
let contentParagraph111 = document.createTextNode('Project Management');
let contentParagraph222 = document.createTextNode('Public Relations');
let contentParagraph333 = document.createTextNode('Teamwork');
let contentParagraph444 = document.createTextNode('Time Management');
let contentParagraph555 = document.createTextNode('Leadership');
let contentParagraph666 = document.createTextNode('Effective Communication');
let contentParagraph777 = document.createTextNode('Critical Thinking');


/*---------------------------------------------------------------*/

let contentTopic1111 = document.createTextNode('LANGUAGES');
let contentParagraph1111 = document.createTextNode('English(Fluent)');
let contentParagraph2222 = document.createTextNode('French(Fluent)');
let contentParagraph3333 = document.createTextNode('German(Basic)');
let contentParagraph4444 = document.createTextNode('Spanish(Intermediate)');























//3- Load content to the element
topic1.appendChild(contentTopic1);
pragraph1.appendChild(contentParagraph1);
pragraph2.appendChild(contentParagraph2);
pragraph3.appendChild(contentParagraph3);
pragraph4.appendChild(contentParagraph4);

/*----------------------------------------------------------------*/

topic11.appendChild(contentTopic11);
pragraph11.appendChild(contentParagraph11);
pragraph22.appendChild(contentParagraph22);
pragraph33.appendChild(contentParagraph33);
pragraph44.appendChild(contentParagraph44);
pragraph55.appendChild(contentParagraph55);


/*----------------------------------------------------------------*/

topic111.appendChild(contentTopic111);
pragraph111.appendChild(contentParagraph111);
pragraph222.appendChild(contentParagraph222);
pragraph333.appendChild(contentParagraph333);
pragraph444.appendChild(contentParagraph444);
pragraph555.appendChild(contentParagraph555);
pragraph666.appendChild(contentParagraph666);
pragraph777.appendChild(contentParagraph777);

/*---------------------------------------------------------------*/

topic1111.appendChild(contentTopic1111);
pragraph1111.appendChild(contentParagraph1111);
pragraph2222.appendChild(contentParagraph2222);
pragraph3333.appendChild(contentParagraph3333);
pragraph4444.appendChild(contentParagraph4444);
















//4- Add element to the parent
head1.appendChild(image);
div1.appendChild(topic1);
div1.appendChild(pragraph1);
div1.appendChild(pragraph2);
div1.appendChild(pragraph3);
div1.appendChild(pragraph4);

/*----------------------------------------------------------------*/
div2.appendChild(topic11);
div2.appendChild(pragraph11);
div2.appendChild(pragraph22);
div2.appendChild(pragraph33);
div2.appendChild(pragraph44);
div2.appendChild(pragraph55);

/*----------------------------------------------------------------*/
div3.appendChild(topic111);
div3.appendChild(pragraph111);
div3.appendChild(pragraph222);
div3.appendChild(pragraph333);
div3.appendChild(pragraph444);
div3.appendChild(pragraph555);
div3.appendChild(pragraph666);
div3.appendChild(pragraph777);


/*----------------------------------------------------------------*/

div4.appendChild(topic1111);
div4.appendChild(pragraph1111);
div4.appendChild(pragraph2222);
div4.appendChild(pragraph3333);
div4.appendChild(pragraph4444);


head1.appendChild(div1);
head1.appendChild(div2);
head1.appendChild(div3);
head1.appendChild(div4);


container.appendChild(head1);

document.body.appendChild(container);







///////////////////////////////////////////////////////////////////////////////////////////////////////////////








//1- Create a element

let head2 = document.createElement('div');
let divTitle2 = document.createElement('div');
let Title2 = document.createElement('h1');

head2.style.display = 'inline-block';
head2.style.width = '700px';
head2.style.paddingLeft = '50px';


divTitle2.style.position = 'relative';
divTitle2.style.bottom = '200px';
divTitle2.style.left = '250px';



let divProfile = document.createElement('div');

let topicT1 = document.createElement('h2');
let pragraphT1 = document.createElement('p');

/*---------------------------------------------------------------*/


let divT1 = document.createElement('div');
let topicT11 = document.createElement('h2');

divT1.style.paddingTop = '10px';

let pragraphT11 = document.createElement('h4');
let pragraphT22 = document.createElement('p');
let pragraphT33 = document.createElement('ul');
let pragraphT44 = document.createElement('li');
let pragraphT55 = document.createElement('li');
let pragraphT66 = document.createElement('li');

/*---------------------------------------------------------------*/

let pragraphT111 = document.createElement('h4');
let pragraphT222 = document.createElement('p');
let pragraphT333 = document.createElement('ul');
let pragraphT444 = document.createElement('li');
let pragraphT555 = document.createElement('li');
let pragraphT666 = document.createElement('li');

/*---------------------------------------------------------------*/
let pragraphT1111 = document.createElement('h4');
let pragraphT2222 = document.createElement('p');
let pragraphT3333 = document.createElement('ul');
let pragraphT4444 = document.createElement('li');
let pragraphT5555 = document.createElement('li');
let pragraphT6666 = document.createElement('li');


/*---------------------------------------------------------------*/


let divT2 = document.createElement('div');
let pragraphT11111 = document.createElement('h2');


let divTP1 = document.createElement('div');
let pragraphT22222 = document.createElement('H4');
let pragraphT33333 = document.createElement('P');
let pragraphT44444 = document.createElement('P');
let pragraphT55555 = document.createElement('P');

divTP1.style.display = 'inline-block';
/*---------------------------------------------------------------*/

let divTP2 = document.createElement('div');
let pragraphT222222 = document.createElement('H4');
let pragraphT333333 = document.createElement('P');
let pragraphT444444 = document.createElement('P');
let pragraphT555555 = document.createElement('P');

divTP2.style.display = 'inline-block';
divTP2.style.margin = '20px';
divTP2.style.position ='Relative';
divTP2.style.left = '200px';







//2- Add content

/*---------------------------------------------------------------*/
let Title22 = document.createTextNode('RICHARD SANCHEZ');
let contentT1 = document.createTextNode('PROFILE');
let contentPT1 = document.createTextNode('lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna'
   + 'aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');



/*---------------------------------------------------------------*/

let contentT11 = document.createTextNode('WORK EXPERIENCE');

let contentPT11 = document.createTextNode('Bocelle Studio');
let contentPT22 = document.createTextNode('Marketing Manager & Specialist');
let contentPT33 = document.createTextNode('lorem ipsum dolor sit amet et dolor sit amet et dolor sit amet et dolor sit amet et dolor sit amet et dolor sit amet et dolor');
let contentPT44 = document.createTextNode('lorem ipsum dolor sit amet et dolor sit amet et dolor sit amet et dolor sit amet et dolor sit');
let contentPT55 = document.createTextNode('lorem ipsum d Lorem ipsum dolor sit amet et dolor sit amet et dolor sit amet et dolor');


/*---------------------------------------------------------------*/

let contentPT111 = document.createTextNode('Bocelle Studio');
let contentPT222 = document.createTextNode('Marketing Manager & Specialist');
let contentPT333 = document.createTextNode('lorem ipsum dolor sit amet et dolor sit amet et dolor sit amet et dolor sit amet et dolor sit amet et dolor sit amet et dolor');
let contentPT444 = document.createTextNode('lorem ipsum dolor sit amet et dolor sit amet et dolor sit amet et dolor sit amet et dolor sit');
let contentPT555 = document.createTextNode('lorem ipsum d Lorem ipsum dolor sit amet et dolor sit amet et dolor sit amet et dolor');


/*---------------------------------------------------------------*/
let contentPT1111 = document.createTextNode('Bocelle Studio');
let contentPT2222 = document.createTextNode('Marketing Manager & Specialist');
let contentPT3333 = document.createTextNode('lorem ipsum dolor sit amet et dolor sit amet et dolor sit amet et dolor sit amet et dolor sit amet et dolor sit amet et dolor');
let contentPT4444 = document.createTextNode('lorem ipsum dolor sit amet et dolor sit amet et dolor sit amet et dolor sit amet et dolor sit');
let contentPT5555 = document.createTextNode('lorem ipsum d Lorem ipsum dolor sit amet et dolor sit amet et dolor sit amet et dolor');

/*---------------------------------------------------------------*/

let contentPT11111 = document.createTextNode('REFERENCES');
let contentPT22222 = document.createTextNode('Estelle Darcy');
let contentPT33333 = document.createTextNode('Wardiere Inc. /CTO');
let contentPT44444 = document.createTextNode('Phone: +33 1 23 45 67 89');
let contentPT55555 = document.createTextNode('Email: hello@example.com'); 

/* ----------------------------------------------------------------*/

let contentPT222222 = document.createTextNode('Estelle Darcy');
let contentPT333333 = document.createTextNode('Wardiere Inc. /CTO');
let contentPT444444 = document.createTextNode('Phone: +33 1 23 45 67 89');
let contentPT555555 = document.createTextNode('Email: hello@example.com'); 










//3- Load content to the element
/*----------------------------------------------------------------*/
Title2.appendChild(Title22);
topicT1.appendChild(contentT1);
pragraphT1.appendChild(contentPT1);


/*---------------------------------------------------------------*/

topicT11.appendChild(contentT11);
pragraphT11.appendChild(contentPT11);
pragraphT22.appendChild(contentPT22);
pragraphT44.appendChild(contentPT33);
pragraphT55.appendChild(contentPT44);
pragraphT66.appendChild(contentPT55);


/* ----------------------------------------------------------------*/

pragraphT111.appendChild(contentPT111);
pragraphT222.appendChild(contentPT222);
pragraphT444.appendChild(contentPT333);
pragraphT555.appendChild(contentPT444);
pragraphT666.appendChild(contentPT555);


/* ----------------------------------------------------------------*/

pragraphT1111.appendChild(contentPT1111);
pragraphT2222.appendChild(contentPT2222);
pragraphT4444.appendChild(contentPT3333);
pragraphT5555.appendChild(contentPT4444);
pragraphT6666.appendChild(contentPT5555);


/*----------------------------------------------------------------*/

pragraphT11111.appendChild(contentPT11111);
pragraphT22222.appendChild(contentPT22222);
pragraphT33333.appendChild(contentPT33333);
pragraphT44444.appendChild(contentPT44444);
pragraphT55555.appendChild(contentPT55555);


/*----------------------------------------------------------------*/

pragraphT222222.appendChild(contentPT222222);
pragraphT333333.appendChild(contentPT333333);
pragraphT444444.appendChild(contentPT444444);
pragraphT555555.appendChild(contentPT555555);






//4- Add element to the parent
/*----------------------------------------------------------------*/
divTitle2.appendChild(Title2);
head2.appendChild(divTitle2);

divProfile.appendChild(topicT1);
divProfile.appendChild(pragraphT1);
head2.appendChild(divProfile);


/*----------------------------------------------------------------*/

divT1.appendChild(topicT11);
divT1.appendChild(pragraphT11);
divT1.appendChild(pragraphT22);
divT1.appendChild(pragraphT44);
divT1.appendChild(pragraphT55);
divT1.appendChild(pragraphT66);



/*----------------------------------------------------------------*/

divT1.appendChild(pragraphT111);
divT1.appendChild(pragraphT222);
divT1.appendChild(pragraphT444);
divT1.appendChild(pragraphT555);
divT1.appendChild(pragraphT666);




/*----------------------------------------------------------------*/




divT1.appendChild(pragraphT1111);
divT1.appendChild(pragraphT2222);
divT1.appendChild(pragraphT4444);
divT1.appendChild(pragraphT5555);
divT1.appendChild(pragraphT6666);



/*----------------------------------------------------------------*/

divT2.appendChild(pragraphT11111);

divTP1.appendChild(pragraphT22222);
divTP1.appendChild(pragraphT33333);
divTP1.appendChild(pragraphT44444);
divTP1.appendChild(pragraphT55555);

divT2.appendChild(divTP1);
/*---------------------------------------------------------------*/

divTP2.appendChild(pragraphT222222);
divTP2.appendChild(pragraphT333333);
divTP2.appendChild(pragraphT444444);
divTP2.appendChild(pragraphT555555);

divT2.appendChild(divTP2);

/*---------------------------------------------------------------*/


head2.appendChild(divT1);
head2.appendChild(divT2);


container.appendChild(head2);

document.body.appendChild(container);



/*---------------------------------------------------------------*/





