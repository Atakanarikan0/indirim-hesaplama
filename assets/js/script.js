let productPrice = Number(prompt('Ürünün Fiyatı Nedir ?'))
let discount = Number(prompt('İnidirim yüzde kaçtır ?'))

let total = productPrice * ((100 - discount) / 100);
alert("Alıcağınız ürünün indirimli fiyatı = " + total)