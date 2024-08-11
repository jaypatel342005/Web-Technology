
const child_process = require('child_process')

// Execute the 'dir/s' command in a child process
child_process.exec('dir/s', (err, stdout, stdin) => {
    console.log(stdout)
})





