const addTwoNumbersAsync = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //resolve case in case of success
      if (typeof a === 'number' && typeof b === 'number') resolve(a + b);
      else {
        reject('this is bad');
      }
    }, 1500);
  });
};

console.time('P');
const fn1 = addTwoNumbersAsync(5, 6)
  //general syntax to follow up if you want to have both results of resolve and reject
  .then(
    //arg1 is fulfilled/resolved
    (result) => {
      console.info('fn 1 sample with .then( + , ?)');

      console.log('Result of 5 + 6 = ', result);
    },
    //arg2 if rejected/error out
    (errorMsg) => {
      console.error('E1 ', errorMsg);
    }
  );

const fn2 = addTwoNumbersAsync(8, 'uu')
  //if we expected only errors and there is nothing being returned, use catch
  .catch(
    //arg 1 is the reject from any of the failing Promise
    (errorMsg) => {
      console.info('\nfn 2 where we see catch()');
      console.error('E2 ', errorMsg);
    }
  );

const fn3 = addTwoNumbersAsync(5, '6')
  //general syntax to follow up if you want to have both results of resolve and reject
  .then(
    //arg1 is fulfilled/resolved
    (result) => {
      console.log('Result of 5 + 6 = ', result);
      return addTwoNumbersAsync(result, 33);
    },
    //arg2 if rejected/error out
    (errorMsg) => {
      console.info(
        '\nfn 3 where we see chained Promises with problem when first then() is havin reject()'
      );
      console.error('E3 ', errorMsg);
    }
  )
  //now again since we have another call to Promise we will chain it using one more then(()=>{},()=>{})
  .then(
    (result) => {
      console.log('Result should be 44 => ', result);
      //this will get executed even if first then was rejected()
      //but since we Provided the (err) handling to the first then, this this everything is good now
    },
    (errorMsg) => {
      console.error('E3.2 ', errorMsg);
    }
  );

const fn4 = addTwoNumbersAsync(5, '6')
  //general syntax to follow up if you want to have both results of resolve and reject
  .then(
    //arg1 is fulfilled/resolved
    (result) => {
      console.log('Result of 5 + 6 = ', result);
      return addTwoNumbersAsync(result, 33);
    }
  )
  //now again since we have another call to Promise we will chain it using one more then(()=>{},()=>{})
  .then((result) => {
    console.log('Result should be 44 => ', result);
    //this will get executed even if first then was rejected()
    //but since we Provided the (err) handling to the first then, this this everything is good now
  })
  .catch((errorMsg) => {
    console.info('\nfn 4 where we see chained Promises with common catch()');
    console.error('E4 ', errorMsg);

    //since we hav a non-blocking framework
    //all functions execte just after 1.5 secs, and not after 1.5+ 1.5+ ...
    console.timeEnd('P'); //prints P: 1510.770ms
  });
