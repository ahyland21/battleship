console.log("hello")

var ct = 1
function greetPeople(people, cb) {
    people.forEach(function(item, i) {
        if (ct++ % 2 == 0)
            setTimeout(cb, 0, "person " + item + i)
        else
            cb("person " + item + i)
    })

}

greetPeople("anna nate ellie charlie amber lance kali freda".split(" "), console.log)