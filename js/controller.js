var pacientes = [];


var botaoCalcular = document.getElementById("calcular");
botaoCalcular.addEventListener('click', function() {
                                  var paciente = lePaciente();
                                  pacientes.push(paciente);
                                  mostraPaciente(paciente);   
                                });

var botaoRelatorio = document.getElementById("relatorio");
botaoRelatorio.addEventListener('click', function() {
                                    geraRelatorio(pacientes);
                                });