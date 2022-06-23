// Step 1: Download the template and open it with VS Code
// Step 2: Explore the HTML and the data
// Step 3: Read the instructions carefully
// Step 4: Query the elements that we will need to use from the page
// Step 5: Create a function for every action we will need to perform (i.e. addDogListItem, displayDog)
// Step 6: Start writing one function at a time, testing along the way to make sure things work the way we expect them to
// Step 7: Call the functions when we need to (i.e. call addDogListItem for each dog available whent he app starts, call displayDog when we click a dog list item, etc)

let dogList = document.querySelector('.dogs-list');
let dogSection = document.querySelector('.main__dog-section');

function addDogItem(dog){
    let dogListItem = document.createElement('li');
    dogListItem.className='dogs-list__button'
    dogListItem.textContent = dog.name;
    dogList.append(dogListItem)
    dogListItem.addEventListener('click', () =>displayDog(dog)) 
}
for (let dog of data) {
    addDogItem(dog)
  }


function displayDog(dog){
    dogSection.textContent='';

    let dogName = document.createElement('h2');
    dogName.textContent = dog.name;

    let dogImage = document.createElement('img');
    dogImage.src = dog.image;
    dogImage.alt='';

    let dogCard = document.createElement('div');
    dogCard.className='"main__dog-section__desc';

    let title = document.createElement('h3');
    title.textContent='Bio'

    let dogDescription = document.createElement('p');
    dogDescription.textContent = dog.bio;

    let isGoodDog = document.createElement('p');
    dog.isGoodDog===true? isGoodDog.textContent='Is naughty?  Yes': isGoodDog.textContent='Is naughty? No';

    let dogButton = document.createElement('button');
    dog.isGoodDog===true? dogButton.textContent='Good dog': dogButton.textContent='Bad dog';
    dogButton.addEventListener('click', () => {
        if(dog.isGoodDog===true){
            dog.isGoodDog=false;
            isGoodDog.textContent='Is naughty? No';
            dogButton.textContent='Good dog';
        }else {
            dog.isGoodDog=true;
            isGoodDog.textContent='Is naughty? Yes';
            dogButton.textContent='Bad dog';
        }})

    dogSection.append(dogName, dogImage, dogCard, isGoodDog, dogButton);
    dogCard.append(title, dogDescription);
}

 