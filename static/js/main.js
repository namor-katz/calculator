$(document).ready(function(){

  let a = 0;

  let b = 0;

  let c = 0;
  
  let d = 0;

  let result = 0;
  
  $('#calculation').click(function() {

    a = $('#number').val();

    b = $('#time').val();

    c = $('#select').val();

    result = a * b * c || '<p color="black">Увы, это не цифра. Введите число</p>';
    
    

if ( a <= 10 ) {
	d = 2;
	f = 2;
} 
else if ( (a => 11) && (a <= 50) ) {
	d = 4;
	f = 4;
} 
else if ( (a => 51) && (a <= 100) ) {
	d = 8;
	f = 6;
	g = 'желателен вынос бд на отдельный диск.';
} 
else if ( (a => 101) && (a <= 200) ) {
	d = 16;
	f = 8;
	g = 'нужен вынос бд на отдельный ssd диск';
} 
else if ( (a => 201) && (a <= 350) ) {
	d = 32;
	f = 12;
	g = 'нужен вынос бд на отдельный ssd диск, оптимизация настроек СУБД';
}
else {
	result = 'лучше уточнять ';
	d = 'отправьте запрос для более точного ответа';
	}
   
	console.log(a);

    $('#result').html('Вам потребуется около ');
    $('#result').append(result);
    $('#result').append(' GB свободного места на жёстком диске.');
    $('#result').append('<p> </p>');
    $('#result').append('От ');
    $('#result').append(d);
    $('#result').append(' GB оперативной памяти.');
    $('#cpu').html('и от ')
    $('#cpu').append(f);
    $('#cpu').append(' процессорных ядер');
    $('#etc').html('также учитывайте: ');
    $('#etc').append(g);
  });

});
