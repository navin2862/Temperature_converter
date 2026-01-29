
const output=document.getElementById("output");
const c_f = document.getElementById("c_f");
const f_c = document.getElementById("f_c");
function c_fahrenheit(a)
{
    return a*1.8+32;
}

function f_celsius(a)
{
    return (a-32)/1.8;
}

function Submit_button()
{
    const Input=Number(document.getElementById("enter_input").value);
    if(c_f.checked)
    {
        
        output.textContent=c_fahrenheit(Input);

    }
    else if(f_c.checked){
         
         output.textContent=f_celsius(Input);
    }
    else{
        output.textContent="please select unit";
    }
}


