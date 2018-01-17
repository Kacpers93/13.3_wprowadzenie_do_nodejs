process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        if (instruction === '/exit') {
            process.stdout.write('Quitting app!\n');
            process.exit();
        }
        switch (instruction) {
            case 'Version':
                console.log(process.versions);
                break;
            case 'System':
                console.log(process.env);
                break;
            default:
                console.log('Wrong instruction!\n');
        }
    }
});