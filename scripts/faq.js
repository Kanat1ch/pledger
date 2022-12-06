const questions = document.querySelectorAll('.faq-question__title')

questions.forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.parentElement.querySelector('.faq-question__answer')
    console.log(answer)
    if (answer) {
      answer.classList.toggle('active')
    }
  })
})