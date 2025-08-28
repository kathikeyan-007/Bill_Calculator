function script()
{
    var price=parseFloat(document.getElementById('price').value);
    var quantity=parseFloat(document.getElementById('quantity').value);
    var res=price*quantity;
    document.getElementById('result').innerHTML=res+" Rs only";
    return false;
}