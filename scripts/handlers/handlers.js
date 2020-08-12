'use strict';
console.log('--- loading handler: _');

const displayMatches = (event) => {

    const searchQuery = event.target.value;
    console.log(`search query: ${searchQuery}`)

    const matchArray = findMatches(searchQuery, cities);
    console.log('matching results: ', matchArray);


    const html = matchArray.map(city => {
        const regex = new RegExp(searchQuery, 'gi')

        const cityName = city.city.replace(regex, `<span class="hl">${searchQuery}</span>`);
        const stateName = city.state.replace(regex, `<span class="hl">${searchQuery}</span>`)

        return `<li>
        <span class="name"> ${cityName},  ${stateName}</span> 
        <span class="population"> ${numberWithCommas(city.population)}</span>
         </li>`
    }).join('')

    document.querySelector('.suggestions').innerHTML = html;
};



/* handlers define user interactions

  they read user input
    from events or from the DOM

  they process user data using program logic functions

  they communicate results to the user

  they log any important information for developers

*/