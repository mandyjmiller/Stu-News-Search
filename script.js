
// Get all relevant DOM elements
const term = $('#search-term')
const articleCount = $('#article-count')
const startYear = $('#start-year')
const endYear = $('#end-year')
const submitBtn = $('#submit-button')
const clearBtn = $('#clear-all')

// Add event listener to submit button
submitBtn.on('click', postQuery)

// Function to build URL 
function buildQuery() {
  // 1. Get all required values (search term and article count)
  const termVal = term.val();
  const articleCountVal = 0 // TODO
  // 2. Get all optional values (start year and end year)
  const startYearVal = 0  // Todo
  const endYearVal = 0 // Todo
  // 3. Build URL 

}


// Function to handle submit button click
function postQuery(event) {
  event.preventDefault()
  let queryURL = buildQuery()

  // Fetch request
  return
  fetch(queryURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    // data.title
    // data.author
    // data.section
    // data.date
    // data.articleURL
  }
  );
}

