const brands = ['asus', 'msi', 'gigabyte', 'hp', 'dell', 'lenovo'];
console.log(brands.includes('msi'));
console.log(brands.includes('hippo'));

// condition using includes method
if(brands.includes('msi')){
    console.log('buy the laptop');
} else{
    console.log('see another brand');
}