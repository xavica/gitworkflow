function answer() {
    var currentUrl = this.getCurrentUrl(),
        startIdPos = currentUrl.indexOf('=') + 1,
        questionId = currentUrl.slice(startIdPos),
        content = $(this.getHTML()),
        answers = [],
        question,
        startCorrectAnswerPos = content.find('script:nth-child(2)').html().indexOf('var bc='),
        correctAnswer = content.find('script:nth-child(2)').html().slice(startCorrectAnswerPos + 8, startCorrectAnswerPos + 9);

    question = content.find('table.quizz p.qw').html();

    console.log(">>>>>>" + this.getCurrentUrl());

    if (question) {
        this.then(function(){
            this.fill('form', {
                'answer': correctAnswer
            }, true);
        });
        this.then(answer);
    }
};

casper.then(answer);