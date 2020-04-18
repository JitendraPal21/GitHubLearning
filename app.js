   function reverse()
            {
                var x=document.getElementById('number1').value;
                var x1=document.getElementById('number1').innerHTML;
                alert(x1);
                var y='';

                for(var i=x.length-1;i>=0;i--)
                {
                    y+=x[i];
                   // alert(y);

                }

                document.getElementById('number2').value=y;
            }