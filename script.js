const add = document.getElementById('add');

const addition = () => 
{
      const num1 = parseInt(document.getElementById('num1').value);
      const num2 = parseInt(document.getElementById('num2').value);

      result = num1+num2;
      document.getElementById('res').innerHTML = `${result}`;

}
add.addEventListener('click',addition);