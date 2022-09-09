
$('.plus-cart').click(function() {
    var id = $(this).attr("pid").toString();
    var eml = this.parentNode.children[2]
    $.ajax({
        type:'GET',
        url: '/pluscart',
        data: {
            prod_id: id
        },
        success: function(data){
            eml.innerText = data.quantity
            document.getElementById('amount').innerText = data.amount
            document.getElementById('total_amount').innerText = data.total_amount
        
        }
    })
})

// $('.plus-cart').click(function() {
//     var id = $(this).attr("pid").toString();
//     console.log(id)
// })

$('.minus-cart').click(function() {
    var id = $(this).attr("pid").toString();
    var eml = this.parentNode.children[2]
    $.ajax({
        type:'GET',
        url: '/minuscart',
        data: {
            prod_id: id
        },
        success: function(data){
            eml.innerText = data.quantity
            document.getElementById('amount').innerText = data.amount
            document.getElementById('total_amount').innerText = data.total_amount
        
        }
    })
})

$('.remove-cart').click(function() {
    var id = $(this).attr("pid").toString();
    var eml = this
    $.ajax({
        type:'GET',
        url: '/removecart',
        data: {
            prod_id: id
        },
        success: function(data){
            
            document.getElementById('amount').innerText = data.amount
            document.getElementById('total_amount').innerText = data.total_amount

            eml.parentNode.parentNode.parentNode.parentNode.remove()
            window.location.reload();
        }
    })
})


