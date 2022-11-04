const data= [
    'HOw t become JS expert',
    'JS is Javascript',
    'Programmer of Website',
    'What iS CSS',
    'How to make a Website'
];

//selector

const btnSeach = document.getElementById("btnSearch");
const btnClear = document.getElementById("btnClear");
const search = document.getElementsByName("keyword")[0];
const data_section = document.getElementsByClassName('data')[0];

//events

btnSeach.addEventListener('click', event => {
    searchData();
});

search.addEventListener('keyup', event => {
    if (event.keyCode === 13){
        searchData();
    }
});

btnClear.addEventListener('click', event =>{
    search.value = " ";
});

function searchData(){
    const search_value = search.value.toLowerCase();
    const data_filtered = data.slice(0);

    data_section.innerHTML = "";
	for (var i = 0; i < data_filtered.length; i++) {
		if ( data_filtered[i].toLowerCase().includes(search_value) ) {			
			// Jika ada, Masukkan data ke list data pencarian yang didapat
			data_section.innerHTML += "<a href='#'>"+data_filtered[i]+"</a>";
		}
	}	
}