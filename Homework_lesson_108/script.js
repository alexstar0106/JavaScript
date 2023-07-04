let finished = () => console.log('Finished my homework')

function doHomework(subject,callback) {
    console.log('Starting my '+ subject + ' homework.')
    callback()
}

doHomework('programming', finished)
