// function getTempCallBack (location, callback) {
//     callback(undefined, 78);
//     callback('City not found');
// }

// getTempCallBack('Viet Nam', function(err, temp) {
//     if(err) {
//         console.log('error', err) 
//     } else {
//         console.log('success', temp);
//     }
// });


// function getTempPromise(location) {
//     return new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             resolve(79);
//             reject('City not found');
//         }, 1000);
       
//     });
// };

// getTempPromise('Viet Name').then(function(temp) {
//     console.log('promise success', temp);
// }, function(err) {
//     console.log('prosmise error', err);
// });


//Challenge Area
// if(typeof someNumber === 'number')

function addPromise(a, b) {
    return new Promise(function(resolve, reject) {

        setTimeout(function() {
            if ( typeof a === 'number' && typeof b === 'number') {
                resolve( a + b);
            }
            reject('a or b must be a number.');
        },2000);
    });
}

addPromise(3, "string").then(function(result) {
    console.log('result:', result);
}, function(err) {
    console.log('error:', err);
})
