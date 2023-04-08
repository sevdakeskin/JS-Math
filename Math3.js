
//1) Dizideki sayıların ortalamasını console'a yazdırınız.

let numbers = [11, 8, 43, 27, 3, 36, 14];

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

let average = sum / numbers.length;
console.log(average);



// 2) Dizideki sayılardan minimum olanı console'a yazdırınız.

let numbers1 = [11, 8, 43, 27, 3, 36, 14];
numbers1.sort((a, b) => a - b);
console.log("En küçük sayi:" + numbers1[0]);



//3) Dizideki sayılardan maximum olanı console'a yazdırınız.

let numbers2 = [11, 8, 43, 27, 3, 36, 14];
numbers2.sort((a, b) => a - b);
console.log("En büyük sayi:" + numbers2[numbers2.length - 1]);


//4) Dizideki tek sayıları console'a yazdırınız.

let numbers3 = [11, 8, 43, 27, 3, 36, 14];

for (let i = 0; i < numbers3.length; i++) {
  if (numbers3[i] % 2 === 1) {
    console.log(numbers3[i]);
  }
}


//5) Dizideki sayıları küçükten büyüğe doğru sıralayıp console'a yazdırınız.

let numbers4 = [11, 8, 43, 27, 3, 36, 14];
numbers4.sort((a, b) => a - b);
console.log(numbers4);

//büyükten küçüğe doğru 
let numbers5 = [11, 8, 43, 27, 3, 36, 14];
numbers5.sort((a, b) => a - b).reverse();
console.log(numbers5);


//6) Dizinin sıralandıktan sonra ortasında olan elemanı console'a yazdırınız.

let numbers6 = [11, 8, 43, 27, 3, 36, 14];
numbers6.sort((a, b) => a - b);
let middleEleman = (numbers6.length - 1) / 2;
console.log(numbers6[middleEleman]);
