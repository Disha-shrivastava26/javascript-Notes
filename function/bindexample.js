const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),

  // get answer
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n ${this.options.join('\n')}\n (write option number)`,
      ),
    );

    console.log(answer);

    // register

    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    //console.log(this.answers);
    this.displayResult();
    this.displayResult('string');
  },

  displayResult(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`poll result are ${this.answers.join(', ')}`);
    }
  },
};
//poll.registerNewAnswer();

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

const testdata = {
  testdata1: [5, 2, 3],
  testdata2: [1, 5, 3, 9, 6, 1],
};

poll.displayResult.call({ answers: testdata.testdata1 });
poll.displayResult.call({ answers: testdata.testdata2 });

// for string
poll.displayResult.call({ answers: testdata.testdata1 }, 'string');
poll.displayResult.call({ answers: testdata.testdata2 }, 'string');
