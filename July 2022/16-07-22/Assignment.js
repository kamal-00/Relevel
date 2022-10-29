//"1. Write a function astroguru that:
//A. Takes four arguments: number of children, spouses name, location and job
//B. Output the following string: “You will be a ‘job’ in ‘location’ and married to ‘partner’ with ‘numkids’."


function astroGuru(jobTitle, geolocation, partner, numKids) {
    var future = 'You will be a ' + jobTitle + ' in ' + geolocation + ' and married to ' +
    partner + ' with ' + numKids + ' kids.';
    console.log(future);
  }
  
  astroGuru('astronaut', 'Spain', 'Shaq', 3);
  astroGuru('stunt double', 'Japan', 'Bruce Wayne', 9);
  astroGuru('Elvis impersonator', 'Russia', 'Elon Musk', 0);