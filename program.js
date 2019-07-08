// Zacznijmy od napisania aplikacji, która kończy swoje działanie, jeśli użytkownik wpisze polecenie "/exit". W przypadku podania innego polecenia - wypisze informację "błędne polecenie".
process.stdin.setEncoding('utf-8');
// Zacznijmy od ustawienia odpowiedniego enkodowania przyjmowanych danych. Bez tego informacje, które przekazujemy do aplikacji będą odczytywane jako dane szesnastkowe (potraktuje wejście jako buffer). Poprawne enkodowanie zapewnia, że program "zrozumie" co do niego mówimy (odczyta wartość jako string z kodowaniem UTF-8).

//Następnym krokiem będzie ustawienie nasłuchiwania na zdarzenia odczytu.

process.stdin.on('readable', function() {
// tutaj treść tego co ma się wykonać w momencie odczytania wejścia.
// Powyższy kod można odczytać w następujący sposób: na zdarzenie (.on) odczytu (readable), masz wykonać funkcję (function...).
// metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
  var input = process.stdin.read();
  if(input !== null) {
    var instruction = input.toString().trim();
    process.stdout.write('Node version is: ' + process.version + '\n');
    process.stdout.write('User operating system is: ' + process.env.os + '\n');
    if(instruction === '/exit') {
      process.stdout.write('Quitting app!\n');
      process.exit();
    } else {
      process.stderr.write('Wrong instruction!\n');
    }
  }
});
