const rp = require("request-promise");

async function getTitles(term) {
  const endpoint = 'https://jsonmock.hackerrank.com/api/movies/search/?Title=';
  let titles = [];

  let totalPages = 1
  let page = 1;

  while(page <= totalPages) {
    body = await rp(endpoint + term + '&page=' + page);
    parsed = JSON.parse(body);

    for(var i = 0; i < parsed.data.length; i++) {
      titles.push(parsed.data[i].Title);
    }

    totalPages = parsed.total_pages;
    page++;
  }

  return titles.sort();
}


async function main() {
  if (process.argv.length >= 3) {
    let terms = process.argv.slice(2);

    let unionTitles = [];
    for(let i = 0; i < terms.length; i++){
      let term = terms[i];

      let titles = await getTitles(term);

      if(terms.length > 1) {
        for(j = 0; j < titles.length; j++) {
          let checkTitle = titles[j];
          for(z = 0; z != i && z < terms.length; z++) {
              let checkTerm = terms[z].toLowerCase();
              if(checkTitle.toLowerCase().indexOf(checkTerm) != -1) {
                unionTitles.push(checkTitle);
              }
          }
        }
      } else {
        unionTitles = unionTitles.concat(titles);
      }

    }

    console.log(unionTitles);
  } else {
    console.error('No argument passed');
  }
}
main();
