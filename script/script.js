$(document).ready(() => {
  $("td").click(function (event) {
    alert("Sekarang kamu berada di " + $(this).html() + "!"); });
  $("th").click(function (event) {
    alert("Sekarang kamu berada di " + $(this).html() + "!");});
 });

$(document).ready(function(){ $('.text').click(function(){ 
  let text = $(this).text();
  alert(`Anda mengklik text yang berisi text "${text}"`);
   if(text!='Delete'){ 
    let text2 = prompt('Mau diubah?:', text);
    if(!text2) return; $(this).text(text2); }
    else{ let yakin = confirm('Yakin?'); if(!yakin) return; } 
 }) 
});

$(document).ready(function(){
    $('.data').click(function(){
        let isi = $(this).text();
        let tid = $(this).prop('id');
        let rid = tid.split('__');
        let id_baris = rid[1];
        let nama_mhs = $('#nama_mhs__'+id_baris).text();

        if(isi=='Hapus'){
            let konfirmasi = confirm(`Anda yakin ingin menghapus data atas nama ${nama_mhs} ??`);
            if(!konfirmasi) return;

            $('#baris__'+id_baris).fadeOut();
        }else{
            alert("Anda mengklik kolom yang berisi : " + $(this).html() + "!");
        }
    })
}) ;

$(document).ready(function(){
    $(".tombol").click(function(){
        $(".isi").slideToggle("slow");
    });
});