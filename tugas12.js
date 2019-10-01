function fruits(){
		var fruitsName=['Pisang','Jeruk','Apel','Mangga'];
		console.log(fruitsName); //menampilkan isi
		fruitsName.pop();
		console.log(fruitsName); // mengambil mangga
		fruitsName.shift();
		console.log(fruitsName); //mengambil pisang
}

fruits();