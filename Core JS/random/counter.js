function setup() {
    console.log(this);
    noCanvas();
    const counter1 = new Counter(100, 200);
    counter1.start();

    const counter2 = new Counter(200, 600);
    counter2.start();

    const counter3 = new Counter(500, 400);
    counter3.start();
}

// function draw() {
//     counter1.countIt();
// }

class Counter {
    constructor(start, wait) {
        console.log(this); // counter object scope this

        this.count = start;
        this.wait = wait;

        this.p = createP('');

        //setInterval(countIt, wait);

        // function countIt() {
        //     console.log(this); // window object scope this
        //     this.count++;
        //     this.p.html(this.count);
        // }

        // setInterval(() => {
        //     console.log(this); // counter object scope this
        //     this.countIt();
        // }, this.wait);
    }

    start() {
        setInterval(() => {
            //console.log(this); // counter object scope this
            this.countIt();
        }, this.wait);
    }


    //can't write function countIn() syntax here
    countIt() {
        //console.log(this);    // counter object scope this
        this.count++;
        this.p.html(this.count);
    }
}