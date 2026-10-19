const entrada = document.querySelector("#numero");
const boton = document.querySelector("#calcular");
const resultado = document.querySelector("#resultado");

boton.addEventListener("click", () => {
  const numero = Number(entrada.value);

  if (entrada.value === "" || !Number.isInteger(numero) || numero < 0) {
    resultado.textContent = "Ingresa un número entero igual o mayor que cero.";
    return;
  }

  let factorial = 1;

  for (let i = 1; i <= numero; i++) {
    factorial *= i;
  }

  resultado.textContent = `El factorial de ${numero} es ${factorial}.`;
});