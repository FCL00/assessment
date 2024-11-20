 // Function to check if the number is prime
const checkPrime = (num) => {

    // number less than 2 are not prime
    if (num <= 1){
        return false; 
    }
    
    // check the divisibility from 2 to the square root of num
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0){

            return false; // if num is divisible by i, then is not prime, return false
        }
    }
    return true; // return true if the number is prime
};

export default checkPrime; // export checkPrime function