import Form from "../../components/Form";

const Question = () => {
  return `
    <section class="question question-img">
      <div class="container">
        <h2 class="title-h2 question-title txt--white">У вас остались вопросы?</h2>
        <p class="question-txt txt--white">Оставьте контакты. Наш менеджер свяжется с вами и бесплатно проконсультирует</p>
        ${Form()}
      </div>
    </section>
  
  `;
};

export default Question;
