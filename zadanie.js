process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
  var input = process.stdin.read();

  if(input !== null) {
    var instruction = input.toString().trim();
    switch (instruction) {
      case '/version':
        process.stdout.write('Node version is: ' + process.version + '\n');
        break;
      case '/os':
        process.stdout.write('User operating system is: ' + process.env.os + '\n');
        break;
      case '/exit':
        process.stdout.write('Quitting app!\n');
        process.exit();
        break;
      default:
        process.stderr.write('Wrong instruction!\n');
    }
  }
});
